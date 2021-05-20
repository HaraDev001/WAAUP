<?php

namespace App\Http\Controllers;

use App\Models\UserModel;
use Illuminate\Http\Request;

class UserRegController extends Controller
{
    public function store(Request $request)
    {
        //$postdata = $_POST;
        $postdata = $request;
        $name = $postdata['name'];
        $qualify = $postdata['qualify'];
        $contact = $postdata['contact'];
        $contactmethod = $postdata['contactmethod'];
        $contactaddr = $postdata['contactaddr'];
        $email = $postdata['email'];
        $password = $postdata['password'];
        $phonenumEmail = $postdata['phonenumEmail'];
        $uploaddoc = $postdata['uploaddoc'];
        $photo = $postdata['photo'];
        $area = $postdata['partwho'];//2:person or 2:business
        $createtime = date("Y-m-d h:i:s", time());

        $userMD = new UserModel;
        $data = array(
            'name'            => empty($name)  ? "" : $name,
            'qualify'         => empty($qualify)   ? "" : $qualify,
            'email'           => empty($email)  ? "" : $email,
            'password'        => empty($password)  ? "" : $password,
            'phonenumEmail'   => empty($phonenumEmail)  ? "" : $phonenumEmail,
            'contact'         => empty($contact)  ? "" : $contact,
            'contactmethod'   => empty($contactmethod)  ? "" : $contactmethod,
            'contactaddr'     => empty($contactaddr)  ? "" : $contactaddr,
            'photo'           => empty($photo)  ? "" : $photo,
            'uploaddoc'       => empty($uploaddoc)  ? "" : $uploaddoc,
            'code'            => "",
            'qrcode'          => "",
            'permit'          => 0,
            'olpermit'        => 0,
            'area'            => empty($area)  ? 2 : $area,
            'manager'         => 0,
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
        /* waiting code */
        $condition='next';
        $commonctrl = new CommonController;
        $rand_num = $commonctrl->generateRamdomCode();
        //$data['code']=Crypt::encryptString($rand_num);
        $iid = $userMD->insertUser($data);

        if($iid > 0)
        {
            $dname = $name;
            $demail = $email;
            $edata = array('name'=>$dname,  'detail'=>"The registration was successful.Wait until it is approved.", 'code'=>$rand_num);

            // after change ckd
            // $commonctrl ->sendMailfun($edata, $demail);

            session()->remove("verifiCode");
            session()->put('data', $data);
            session()->put('condition', $condition);

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


	public function userlogin(Request $request)
    {
        $userMD = new UserModel;

        $puserinfo = $request->userinfo;
        $ppwd = $request->password;
        // delete all session
        session()->flush();

        $buser = $userMD->getUserData($puserinfo,$ppwd);
        if($buser==null || $buser == "")
            return redirect("schoolMemberReg");
        else
        {
            $demail = $buser->email;
            $dpwd = $buser->password;
            session()->put('email', $demail);
            session()->put('password', $dpwd);
            session()->put('name', $buser->name);
            session()->put('permit', $buser->permit);
            session()->put('olpermit', $buser->olpermit);
            session()->put('area', $buser->area);
            session()->put('manager', $buser->manager);

            $permit = $buser->permit;
            if($permit < 1)
            {
                session()->flush();
                return redirect()->route('schoolMemberLogin');
            }
            else
                return redirect("/home");
        }

        return redirect()->route('schoolMemberLogin');

    }



}
