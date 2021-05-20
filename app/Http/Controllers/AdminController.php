<?php /** @noinspection ALL */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserModel;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use JoggApp\GoogleTranslate\GoogleTranslate;
use JoggApp\GoogleTranslate\GoogleTranslateClient;
use function AlibabaCloud\Client\json;

class AdminController extends BaseController
{
    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    public function index()
    {
        /*
        if (session()->has('admin-email') && session()->has('admin-password')) {
            return view('admin.index');
        }
        else
        */
        return redirect("/");
    }

    public function  adminlogin(Request $request)
    {
        return redirect("/");
    }

    public function userValidCheck(Request $request)//admincheck
    {
        $userinfo = $request->header("userinfo");
        $pwd = $request->header("pwd");
        $userMD = new UserModel;
        $row = $userMD->getLoginDashboardData($userinfo,$pwd);
        if($row == null || $row == "")
        {
            return \Response::json([
                'msg' => 'err'
            ]);
        }
        else
        {
            $adarea = $row->permit;
            // $demail = $buser->email;
            // session()->put('admin-email', $demail);
            if($adarea < 1)
                $approve="no";
            else
                $approve="ys";

            return \Response::json([
                'msg' => 'ok',
                'approve' =>$approve,
                'permit'=>$row->permit,
                'manager'=>$row->manager
            ]);
        }
        exit();
    }

    public function userinfopage(Request $request)
    {
        $userMD = new UserModel;
        $email = $request->email;
        $pwd = $request->pwd;
        $buser = $userMD->getLoginDashboardData($email, $pwd);
        session()->flush();
        $demail = $buser->email;
        $dpwd = $buser->password;
        session()->put('admin-email', $demail);
        session()->put('admin-password', $dpwd);
        //session()->put('name', $buser->name);
        //session()->put('permit', $buser->permit);
        //session()->put('olpermit', $buser->olpermit);
        //session()->put('area', $buser->area);
        session()->put('admin-manager', $buser->manager);
        $userlists = $userMD->getWaitWESAllMembes($email);
        //$IMGURL = $this->g_path !== 'local' ? 'http://waaup.org' : '';
        return view('admin.userinfopage',compact('userlists'));
    }

    public function adminapprove(Request $request)
    {
        // $postdata = $_POST;
        $email = $request->header("email");
        $id = $request->header("id");

        $userMD = new UserModel;
        $sucess = $userMD->userApprove($email);
        if ($sucess)
        {
            $buser = $userMD->getSchoolUserByEmail($email);

            $shoolname = $buser->name;
            $nowtime= date("Y.m.d", time());

            $phonecont="Dear ".$shoolname." .";
            $phonecont.="Welcome to  WES school management system, thanks for trusting us.";
            $phonecont.="The register information that you have submited on ".$nowtime." has been approved.";

            $mailcont="<p>Dear ".$shoolname." .</p>";
            $mailcont.="<p>Welcome to  WES school management system, thanks for trusting us.</p>";
            $mailcont.="<p>The register information that you have submited on ".$nowtime." has been approved.</p>";
            $mailcont.="<p>Please click <a href='http://35.161.28.246/'>35.161.28.246</a> to log in.</p>";
            $mailcont.="<p>If you haven't submited any register information or this email doesn't belong to you,</p>";
            $mailcont.="<p>please inform us or ignore it.</p>";
            $mailcont.="<p>We would delete invaild register information within 24 hours. Thanks</p>";

            $commonctrl = new CommonController;

            $sendcnt="";
            $pbool=false;
            /* send sms */

            if($buser->contactmethod !=null && $buser->contactmethod !="")
                $pbool = $commonctrl->sendSMSByAdmin($buser->contactmethod, 1, "");

            if($pbool)
                $sendcnt="p_";

            /* send mail */
            $bool = $commonctrl->sendMailByAdmin($email, 1, $mailcont);
            if($bool)
                $sendcnt.="e";

            if($sendcnt!="")
            {
                return \Response::json([
                    'type' => 'success',
                    'id'=>$id,
                    'scnt'=>$sendcnt
                ]);
            }
            else
            {
                return \Response::json([
                    'type' => 'error',
                    'id'=>$id,
                    'scnt'=>$sendcnt
                ]);
            }
        }
        else
        {
            return \Response::json([
                'type' => 'error',
                'id'=>$id,
                'scnt'=>""
            ]);
        }

        exit();
    }

    public function admincancel(Request $request)
    {
        // $postdata = $_POST;
        $email = $request->header("email");
        $id = $request->header("id");
        $cont = $request->header("cont");
        $cont = urldecode($cont);

        $userMD = new UserModel;
        $sucess = $userMD->userCancel($email);
        if ($sucess)
        {
            $buser = $userMD->getSchoolUserByEmail($email);
            $shoolname = $buser->name;

            $mailcont="<p>Dear ".$shoolname." .</p>";
            $mailcont.="<p>".$cont."</p>";

            $commonctrl = new CommonController;

            $sendcnt="";
            $pbool=false;
            /* send sms */
            if($buser->contactmethod !=null && $buser->contactmethod !="")
                $pbool = $commonctrl->sendSMSByAdmin($buser->contactmethod, 0, "");

            if($pbool)
                $sendcnt="p_";

            /* send mail */
            $bool = $commonctrl->sendMailByAdmin($email, 0, $mailcont);
            if($bool)
                $sendcnt.="e";

            if($sendcnt!="")
            {
                return \Response::json([
                    'type' => 'success',
                    'id'=>$id,
                    'scnt'=>$sendcnt
                ]);
            }
            else
            {
                return \Response::json([
                    'type' => 'error',
                    'id'=>$id,
                    'scnt'=>$sendcnt
                ]);
            }
        }
        else
        {
            return \Response::json([
                'type' => 'error',
                'id'=>$id,
                'scnt'=>""
            ]);
        }
    }

    public function admindelete(Request $request)
    {
        $email = $request->header("email");

        $userMD = new UserModel;
        $sucess = $userMD->userDelete($email);
        if ($sucess)
        {
            return \Response::json([
                'type' => 'success'
            ]);
        }
        else
        {
            return \Response::json([
                'type' => 'error'
            ]);
        }
    }




    public function adminsignout()
    {
        session()->flush();
        return redirect("/");
    }

    public function getDashUserData(Request $request)
    {
        $userMD = new UserModel;
        $email = session()->get('admin-email');
        if($email==null || $email=='')
        {
            return \Response::json([
                'type' => 'error'
            ]);
        }
        else
        {
            $buser = $userMD->getDashUserData($email);
            //0이면 일반사용자, 1이면 웹WES관리자. 2이면 개인관리자, 3이면 학교성원관리자, 4이면 개인 및 학교성원관리자.
            if($buser->manager == 0)
                $role='default_User';
            else if($buser->manager == 1)
                $role='WES_Site_Manager';
            else if($buser->manager == 2)
                $role='Individual_Manager';
            else if($buser->manager == 3)
                $role='School_Manager';
            else
                $role='Administrater';

            return \Response::json([
                'type' =>'ok',
                'name' => $buser->name,
                'email' => $buser->email,
                'role'=>$role,
                'pwd'=>$buser->password,
                'photo'=> empty($buser->photo) ? 'someone.png':$buser->photo
            ]);
        }

    }

    public function savefasttoken(Request $request){
        $userMD = new UserModel;
        $email = $request->email;
        $address = $request->address;
        $address = trim($address);
        $id =  $userMD->savefasttoken($email, $address);

        if($id > 0)
            $type='ok';
        else
            $type='err';

        return \Response::json([
            'type' => $type
        ]);

    }

    public function getfasttoken(Request $request){
        $email = $request->email;
        $userMD = new UserModel;
        $row =  $userMD->getfasttoken($email);
        if($row!=null && $row!="")
        {
            return \Response::json([
                'type' => 'ok',
                'address' =>$row->address
            ]);
        }
        else
        {
            return \Response::json([
                'type' => 'err',
                'address' =>''
            ]);
        }


    }

    public function fastregister(Request $request, $token, $lang=null)
    {
        $userMD = new UserModel;
        /*
         * refer
         * $my_email = "name@company.com
         * (preg_match("/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/", $token))
         */
        $token = trim($token);

        if (preg_match("/^[fastreg=]+[a-zA-Z0-9]{12}/", $token))
        {
            //echo "$token is a valid email address";
            $address = explode("=", $token);
            $fastreg=trim($address[1]);

            if($lang == null)
                $lang = App::getLocale();
            $rows = DB::connection($this->waaupdb)->table('weslangs')->where('status','enable')->get();
            $langlist = $rows;

            $ciso = $this->compareSavedLang($lang);
            $contents = $this->FrontPageContent($ciso);

            $brow = DB::connection($this->waaupdb)->table("sitebasicsetting")
                ->select(DB::connection($this->waaupdb)->raw("register"))
                ->get()->first();

            if ($brow !== null && $brow->register !== '') {
                $pageinfo = json_decode($brow->register);
            } else {
                $pageinfo = '';
            }


            $eq =  $userMD->Comparefasttoken($fastreg);
            // echo "<span style='font-size:40px'>token = $token  <br> value = $fastreg <br> </span>";
            // $fastreg ="tza".$address[1]."f1x";
            if($eq)
            {
                //$re =  $userMD->Deletefasttoken($fastreg);
                $g_path = $this->g_path;
                return  view('admin.dashboardfastreg',compact('fastreg', 'g_path', 'ciso', 'langlist', 'token', 'contents', 'pageinfo'));

            }
            else
                echo "<span style='font-size:40px'>These $token  do not match fast register.</span>";
        }
        else
        {
            echo "<span style='font-size:40px'>$token is NOT a valid fast register address.</span>";
        }
    }

    public function deletefasttoken(Request $request)
    {
        $fastreg = $request->fastreg;
        $fastreg=trim($fastreg);

        $userMD = new UserModel;

        $re =  $userMD->Deletefasttoken($fastreg);
        if($re)
        {
            return \Response::json([
                'status'  =>  "ok"
            ]);
        }
        else
        {
            return \Response::json([
                'status'  =>  "dberr"
            ]);
        }

        exit();

    }

    public function fastregisterSave(Request $request){

        $token = $request->fast_token;
        $email = $request->email;
        $name = $request->name;
        $username = $request->username;
        $password = $request->password;
        $area = $request->partwho;//2:person or 2:business
        $remark = isset($request->remark) ? $request->remark : '';

        $contact = "";//name
        $qualify="";
        $phonenumEmail="";
        $contactmethod="";
        $contactaddr="";
        $photo="";
        $uploaddoc="";

        $createtime = date("Y-m-d h:i:s", time());

        $userMD = new UserModel;
        $data = array(
            'name'            => empty($name)  ? "" : $name,
            'username'        => empty($username)  ? "" : $username,
            'qualify'         => empty($qualify)   ? "" : $qualify,
            'email'           => empty($email)  ? "" : $email,
            'password'        => empty($password)  ? "" : $password,
            'countrycode'     => 1,
            'phonenumEmail'   => empty($phonenumEmail)  ? "" : $phonenumEmail,
            'contact'         => empty($contact)  ? "" : $contact,
            'contactmethod'   => empty($contactmethod)  ? "" : $contactmethod,
            'contactaddr'     => empty($contactaddr)  ? "" : $contactaddr,
            'photo'           => empty($photo)  ? "" : $photo,
            'uploaddoc'       => empty($uploaddoc)  ? "" : $uploaddoc,
            'code'            => "",
            'qrcode'          => "",
            'permit'          => 1,
            'olpermit'        => 0,
            'area'            => empty($area)  ? 2 : $area,//2:person or 2:business
            'manager'         => 0,
            'remark'          => $remark,
            'created_at'      => $createtime
        );

        $user = $userMD->findUser($data);
        if($user != null)
        {
            return \Response::json([
                'status'  =>  "dup"
            ]);
            exit();
        }

        $iid = $userMD->insertUser($data);

        if($iid > 0)
        {
            $userMD = new UserModel;
            if($token != null && $token != '')
                $re =  $userMD->Deletefasttoken(explode("=", $token)[1]);

            return \Response::json([
                'status'  =>  "ok"
            ]);
        }
        else
        {
            return \Response::json([
                'status'  =>  "dberr"
            ]);
        }

        exit();
    }

    public function getSSMUSmsMailcont(Request $request){
        $cont = $request->cont;
        $row = DB::connection($this->waaupdb)->table('smsandmailcont')
            ->where('id',1)->get()->first();
        if($row != null)
        {
            $sms_c = $row->sms_cont;
            $mail_c = $row->mail_cont;

            return \Response::json([
                'status'  =>  "ok",
                'sms_cont' => $sms_c,
                'mail_cont' => $mail_c
            ]);

        }
        else
        {
            return \Response::json([
                'status'  =>  "empty",
                'sms_cont' => '',
                'mail_cont' => ''
            ]);
        }

        exit();

    }

    public function setSSMUSmsMailCont(Request $request){
        $sms_cont = $request->sms_cont;
        $mail_cont = $request->mail_cont;
        $createtime = date("Y-m-d h:i:s", time());

        $cnt = DB::connection($this->waaupdb)->table('smsandmailcont')->where('id', 1)->doesntExist();
        if(!$cnt){
            $sucess =  DB::connection($this->waaupdb)->table('smsandmailcont')
                ->updateOrInsert(
                    ['id' => 1],
                    [
                        'sms_cont' => $sms_cont,
                        'mail_cont' => $mail_cont,
                        'updated_at' => $createtime,
                    ]
                );
        }
        else
        {
            $sucess =  DB::connection($this->waaupdb)->table('smsandmailcont')->insertGetId(
                ['sms_cont' => $sms_cont, 'mail_cont' => $mail_cont, 'updated_at' =>$createtime, 'g_path'=>$this->g_path]
            );
        }

        if($sucess)
        {
            return \Response::json([
                'status'  =>  'ok'
            ]);
        }
        else
        {
            return \Response::json([
                'status'  =>  'err'
            ]);
        }

        exit();
    }


    public function getDashUserListByEmail(Request $request)
    {
        $userMD = new UserModel;

        $email  = $request->email;
        $s_nameORemail  = $request->s_nameORemail;
        $s_status  = $request->s_status;

        $start  = $request->start;
        $cnt    = $request->cnt;
        $userlists = $userMD->getDashUserListByEmail($email, $s_nameORemail,  intval($s_status), $start, $cnt);
        $rt_userlists = $userlists->toJson();

        $total = $userMD->getAllUserCount($email, $s_nameORemail,  intval($s_status));
        $totalpage = ceil($total / $cnt);
        return \Response::json([
            'status'   =>  'ok',
            'total'    =>  $total,
            'start'    =>  $start,
            'totalpage'    =>  $totalpage,
            'userlist' =>  $rt_userlists
        ]);
        exit();
    }

    public function setSSMUUserStatusChange(Request $request){
        $userMD = new UserModel;
        $id  = $request->id;
        $status  = $request->value;

        $affected = $userMD->setSSMUUserStatusChange($id, $status);
        if($affected){
            return \Response::json([
                'status'   =>  'ok'
            ]);
        }
        else
            return \Response::json([
                'status'   =>  'err'
            ]);

        exit();
    }

    public function setSSMUUserStatusAllChange(Request $request){
        $userMD = new UserModel;
        $idlists  = $request->idlists;
        $status  = $request->value;

        $affectedusers = $userMD->setSSMUUserStatusAllChange($idlists, $status);
        if($affectedusers > 0)
        {
            return \Response::json([
                'status'   =>  'ok',
                'addids' =>$affectedusers
            ]);
        }
        else{
            return \Response::json([
                'status'   =>  'err'
            ]);
        }

        exit();

    }

    public function getServerBrowserLanguage(Request $request){
        $lang = $request->lang;
        $lang = $this->getLangChangedData($lang);
        return \Response::json([
            'msg'   =>  'ok',
            'dashLang' =>$lang
        ]);
    }

    public function adminDashboard(Request $request)
    {
        $email = $request->email;
        $pwd = $request->pwd;

        $userMD = new UserModel;
        $g_path = $this->g_path;
        $userinfo = $userMD->getLoginDashboardData($email, $pwd);

        session()->flush();
        $demail = $userinfo->email;
        $dpwd = $userinfo->password;
        session()->put('admin-email', $demail);
        session()->put('admin-password', $dpwd);
        session()->put('admin-manager', $userinfo->manager);

        ///관리자 분류/////////////////////////////////////////////
        if($userinfo->manager == 0)
            $userinfo->manager='default_User';
        else if($userinfo->manager == 1)
            $userinfo->manager='WES_Site_Manager';
        else if($userinfo->manager == 2)
            $userinfo->manager='Individual_Manager';
        else if($userinfo->manager == 3)
            $userinfo->manager='School_Manager';
        else
            $userinfo->manager='Administrater';
        ////////////////////////////////////////////////////////////
        if(empty($userinfo->photo))
            $userinfo->photo = 'someone.png';

        /*if($userinfo->manager != 'Administrater') {
            if ($userinfo['status'] != 2)
                return redirect('/login');
        }*/

        //$userinfo = json_encode($userinfo);
        $userlists = $userMD->getWaitWESAllMembes($email);

        /* user lang */
        $serverlocale = App::getLocale();
        $rows = DB::connection($this->waaupdb)->table('weslangs')->where('status','enable')->get();
        $langlist = $rows;

        /*logfile info*/
        $rowflw=null;//ckd
        $rowflw = DB::connection($this->waaupdb)->table('sitelogoinfo')
            ->where('site_logtype','flw')
            ->where('g_path', $g_path)->get()->first();

        $logflw_name = "logo_flw.png";
        $logflw_size = "74*22";
        $logflw_style = "flower";

        if($rowflw!= null)
        {
            $logflw_name = $rowflw->site_logname;
            $logflw_size = $rowflw->site_logsize;
            $logflw_style = $rowflw->site_logstyle;
        }

        $rowstar=null;//ckd
        $rowstar = DB::connection($this->waaupdb)->table('sitelogoinfo')
            ->where('site_logtype','star')
            ->where('g_path',$g_path)->get()->first();

        $logstar_name = "logo_star.png";
        $logstar_size = "36*32";
        $logstar_style = "style(star)";

        if($rowstar!= null)
        {
            $logstar_name = $rowstar->site_logname;
            $logstar_size = $rowstar->site_logsize;
            $logstar_style = $rowstar->site_logstyle;
        }

        $logoinfo['logflw_name']=$logflw_name;
        $logoinfo['logflw_size']=$logflw_size;
        $logoinfo['logflw_style']=$logflw_style;
        $logoinfo['logstar_name']=$logstar_name;
        $logoinfo['logstar_size']=$logstar_size;
        $logoinfo['logstar_style']=$logstar_style;

        $logoinfo = json_encode($logoinfo);
        /*========================================*/

        /*favorite*/
        $dashcontroller = new DashboardController($request);
        $favorites = $dashcontroller->getSiteFaveritelists($userinfo->id);
        $favicon = $dashcontroller->getDashboardFavicon();
        $cnt = count($favorites);
        if($cnt < 1)
            $favorites=null;
        /*favorite*/

        /*Theme Color */
        $bid = 0;
        $rows = DB::connection($this->waaupapps)->table('tb_themecolor')->where('user_id', $userinfo->id)->get()->first();
        if($rows != null && $rows != '') {
            if ($rows->b_id != null && $rows->b_id != "")
                $bid = $rows->b_id;
        }
        $path = $_SERVER['DOCUMENT_ROOT']."/css/temp/templelet_".$userinfo->id."_".$bid.".css";
        if (!is_dir($_SERVER['DOCUMENT_ROOT']."/css/temp")) {
            mkdir($_SERVER['DOCUMENT_ROOT']."/css/temp", 0777, true);
            shell_exec('sudo chmod -R 777 '.$_SERVER["DOCUMENT_ROOT"].'/css/temp');
        }
        if (!file_exists($path)) {
            if($userinfo->manager == "Administrater") {
                $temp = $_SERVER['DOCUMENT_ROOT'] . "/css/waaup.scss";
                $fp = fopen($temp, "r");
                $fr = fread($fp, filesize($temp));
                fclose($fp);
                $wfile = fopen($path, "w") or die("Unable to open file!");
                fwrite($wfile, $fr);
                fclose($wfile);
            }
            else{
                $users = DB::connection($this->waaupdb)->table('userinfo')->where('manager', '4')->get()->first();
                $colorrows = DB::connection($this->waaupapps)->table('tb_themecolor')->where('user_id', $users->id)->get()->first();
                $color_infos = json_decode($colorrows->color_info);
                $sel_color = "#d8be8f";
                foreach ($color_infos as $cinfo){
                    if($cinfo->colorid == $colorrows->b_id){
                        $sel_color = $cinfo->colorinfo;
                        break;
                    }
                }
                $this->getColor($userinfo->id, $sel_color, "dash", false);
            }
        }
        $style_path = "css/temp/templelet_".$userinfo->id."_".$bid.".css";
        /*Theme Color */
        // $IMGURL = $this->g_path !== 'local' ? 'http://waaup.org' : '';
        $theme='';
        if (isset($request->theme)){
            $theme='theme';
        }
        $basic_info = $dashcontroller->getSystemSettingBasicInfo();
        $domain = $basic_info->domain;
        $dashboard = $basic_info->dashboard;
        $slogan = $basic_info->slogan;
        $title = $dashboard."-".$slogan;

        $userpermissions = "";
        if($userinfo->manager != "Administrater") {
            $permissions = $dashcontroller->getUserPermissionsInfo($userinfo->id);
            $userpermissions = $permissions->permissions;

            $grouppermissions = '';
            $group_rows = DB::connection($this->waaupdb)->table('systemusermanagegroup')->select(['user_ids', 'permissions'])->get();
            foreach ($group_rows as $group){
                if($group->user_ids != null && $group->user_ids != ''){
                    $uids = json_decode($group->user_ids);
                    foreach ($uids as $uid){
                        if($uid == $userinfo->id){
                            if($group->permissions != null && $group->permissions != '')
                                $grouppermissions = $group->permissions;
                        }
                    }
                }
            }

            $permissions = array();
            if($userpermissions == '' || $userpermissions == null)
                $userpermissions = $grouppermissions;
            if($grouppermissions != null && $grouppermissions != ''){
                $u_permissions = json_decode($userpermissions);
                $g_permissions = json_decode($grouppermissions);
                for($i = 0; $i < count($g_permissions); $i++){
                    $permission = collect([]);
                    $permission->put('menu_id', $g_permissions[$i]->menu_id);//css
                    if($u_permissions[$i]->read == 0 && $g_permissions[$i]->read == 0)
                        $permission->put('read', 0);
                    else
                        $permission->put('read', 1);
                    if($u_permissions[$i]->write == 0 && $g_permissions[$i]->write == 0)
                        $permission->put('write', 0);
                    else
                        $permission->put('write', 1);
                    if($u_permissions[$i]->create == 0 && $g_permissions[$i]->create == 0)
                        $permission->put('create', 0);
                    else
                        $permission->put('create', 1);
                    if($u_permissions[$i]->delete == 0 && $g_permissions[$i]->delete == 0)
                        $permission->put('delete', 0);
                    else
                        $permission->put('delete', 1);
                    $permission->put('p_id', $g_permissions[$i]->p_id);
                    $permission->put('have_page', $g_permissions[$i]->have_page);
                    $permission->put('f_id', $g_permissions[$i]->f_id);
                    $permission->put('level', $g_permissions[$i]->level);
                    $permission->put('name', $g_permissions[$i]->name);
                    $permission->put('tran_key', $g_permissions[$i]->tran_key);
                    $permission->put('trans_name', $g_permissions[$i]->trans_name);
                    array_push($permissions, $permission);
                }

                $userpermissions = json_encode($permissions);
            }
        }
        $userinfo->rgroup = '';
        $userinfo = json_encode($userinfo);

        $this->setUserPermissionData();

        return view('admin.dashboard',compact('userlists','userinfo', 'langlist', 'serverlocale', 'logoinfo', 'favorites','g_path', 'style_path', 'theme', 'favicon', 'domain', 'title', 'userpermissions'));
    }


}//class


