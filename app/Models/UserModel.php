<?php /** @noinspection ALL */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserModel extends BaseModel
{
    ///protected $table = 'userinfo';
    private $db = 'waaupdb';
    protected $fillable = [];
    protected $hidden = [];

    public function findUser(array $data)
    {
        $email = openssl_encrypt($data['email'], $this->ciphering,
            $this->cryption_key, $this->options, $this->cryption_iv);

        return DB::connection($this->db)->table('userinfo')->where('email', $email)->first();
    }

    public function findUserByPhone($phone)
    {
        return DB::connection($this->db)->table('userinfo')->where('phone', $phone)->first();
    }
    public function findUserByMail($mail)
    {
        $email = openssl_encrypt($mail, $this->ciphering,
            $this->cryption_key, $this->options, $this->cryption_iv);
        return DB::connection($this->db)->table('userinfo')->where('email', $email)->first();
    }

    public function ResisterUserByPhone(array $data)
    {
        $password = openssl_encrypt($data['password'], $this->ciphering,
            $this->cryption_key, $this->options, $this->cryption_iv);

        $id = DB::connection($this->db)->table('userinfo')->insertGetId(
            [
                'password'        => $password
                ,'phone'           => $data['phone']
                ,'area'          => $data['area']
                ,'created_at'      => $data['created_at']
            ]
        );
        /*
         *  above equal
        $id = DB::connection($this->waaupdb)->table('parents')->insertGetId(
            [
                'userid' => $data['userid']
                , 'name' => $data['name']
            ]
        );
        */
        $result['id']=$id;
        $result['password']=$password;
        return $result;
    }

    public function ResisterUserByMail(array $data)
    {
        $email = openssl_encrypt($data['email'], $this->ciphering,
            $this->cryption_key, $this->options, $this->cryption_iv);

        $password = openssl_encrypt($data['password'], $this->ciphering,
            $this->cryption_key, $this->options, $this->cryption_iv);

        $id = DB::connection($this->db)->table('userinfo')->insertGetId(
            [
                'email'             => $email
                ,'password'        => $password
                ,'area'           => $data['area']
                ,'created_at'      => $data['created_at']
            ]
        );
       $result['id']=$id;
       $result['email']=$email;
       $result['password']=$password;
        return $result;
    }

    public function insertUser(array $data)
    {
        $email = openssl_encrypt($data['email'], $this->ciphering,
            $this->cryption_key, $this->options, $this->cryption_iv);

        $password = openssl_encrypt($data['password'], $this->ciphering,
            $this->cryption_key, $this->options, $this->cryption_iv);

        $phonenumEmail = openssl_encrypt($data['phonenumEmail'], $this->ciphering,
            $this->cryption_key, $this->options, $this->cryption_iv);

        $id = DB::connection($this->db)->table('userinfo')->insertGetId(
            [
                'name'              => $data['name']
                ,'username'         => $data['username']
                ,'qualify'          => $data['qualify']
                ,'email'            => $email
                ,'password'         => $password
                ,'countrycode'       => $data['countrycode']
                ,'phonenumEmail'    => $phonenumEmail
                ,'contact'          => $data['contact']
                ,'contactmethod'    => $data['contactmethod']
                ,'contactaddr'      => $data['contactaddr']
                ,'photo'            => $data['photo']
                ,'uploaddoc'        => $data['uploaddoc']
                ,'code'             => $data['code']
                ,'qrcode'           => $data['qrcode']
                ,'permit'           => $data['permit']
                ,'olpermit'         => $data['olpermit']
                ,'area'             => $data['area']
                ,'manager'          => $data['manager']
                ,'remark'           => $data['remark']
                ,'created_at'        => $data['created_at']
            ]
        );
        /*
         *  above equal
        $id = DB::connection($this->waaupdb)->table('parents')->insertGetId(
            [
                'userid' => $data['userid']
                , 'name' => $data['name']
            ]
        );
        */
        return $id;
    }

   public function getUserData($userinfo, $pwd)
    {

        $mail="";
        $econtains = Str::contains($userinfo,"@");
        if($econtains){
            $mail = openssl_encrypt($userinfo, $this->ciphering,
                $this->cryption_key, $this->options, $this->cryption_iv);
        }

       // $phone="86-".$email;//ckd
        $contactmethod=$userinfo;//ckd
        $name=$userinfo;

        $pwd = openssl_encrypt($pwd, $this->ciphering,
            $this->cryption_key, $this->options, $this->cryption_iv);

        $row = DB::connection($this->db)->table('userinfo')->where(function ($query) use ($mail,$contactmethod,$name) {
            $query->where('email', $mail)
                ->orWhere('contactmethod', $contactmethod)
                ->orWhere('name', $name);
        })->Where('password', $pwd)->first();

        if($row != null){
            $row->email = openssl_decrypt ($row->email, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
            $row->password = openssl_decrypt ($row->password, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
        }

        return $row;
    }

	public function getLoginDashboardData($userinfo, $pwd)
    {
        $email="";
        $econtains = Str::contains($userinfo,"@");
        if($econtains){
            $email = openssl_encrypt($userinfo, $this->ciphering,
                $this->cryption_key, $this->options, $this->cryption_iv);
        }
        // $phone="86-".$email;//ckd
        $contactmethod=$userinfo;//ckd
        $name=$userinfo;
       // $pwd='sitolo';//change pwd test
        $pwd = openssl_encrypt($pwd, $this->ciphering,
            $this->cryption_key, $this->options, $this->cryption_iv);



        $row = DB::connection($this->db)->table('userinfo')->where(function ($query) use ($email,$contactmethod,$name) {
            $query->where('email', $email)
                ->orWhere('contactmethod', $contactmethod)
                ->orWhere('name', $name)
                ->orWhere('username', $name);
        })->Where('password', $pwd)->first();

        if($row != null){
            $row->email = openssl_decrypt ($row->email, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
            $row->password = openssl_decrypt ($row->password, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
        }

        return $row;
    }

    public function getWaitWESAllMembes($email=null)
    {
        if($email!=null)
        {
            $email = openssl_encrypt($email, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
			$collection = collect();
            $dblists =  DB::connection($this->db)->table('userinfo')->where('email','!=',$email)->get();
			foreach ($dblists as $row)
			{
				$row->email = openssl_decrypt ($row->email, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
				$collection[] =$row;
			}

			return $collection;
        }
        else
		{
			$dblists = DB::connection($this->db)->table('userinfo')->all();
			$collection = collect();
			foreach ($dblists as $row)
			{
				$row->email = openssl_decrypt ($row->email, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
				$collection[] =$row;
			}

			return $collection;

		}
    }

	public function getSchoolUserByEmail($email)
    {
        if($email!=null)
        {
			$email = openssl_encrypt($email, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
             $row = $this->Where('email', $email)->Where('area', 2)->first();

			if($row != null){
				$row->email = openssl_decrypt ($row->email, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
				$row->password = openssl_decrypt ($row->password, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
			}
			return $row;
        }

		return null;

    }

	public function userApprove($email)
	{
		$ret=1;
		 $email = openssl_encrypt($email, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
		  try {
              DB::connection($this->db)->table('userinfo')->where('email', $email)->update(['permit' => 1]);
		   }
		   catch (\Exception $e)
		   {
			   $ret=0;
		   }

		   return $ret;
	}

	public function userCancel($email)
	{
		$ret=1;
		 $email = openssl_encrypt($email, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
		  try {
              DB::connection($this->db)->table('userinfo')->where('email', $email)->update(['permit' => 0]);
		   }
		   catch (\Exception $e)
		   {
			   $ret=0;
		   }

		   return $ret;
	}

	public function userDelete($email)
	{
		$ret=1;
		 $email = openssl_encrypt($email, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
		 try{
             DB::connection($this->db)->table('userinfo')->where('email', $email)->delete();
		    }
		   catch (\Exception $e)
		   {
			   $ret=0;
		   }

		   return $ret;
	}

	/**** dashboard part ****/

    public function getDashUserData($email)
    {
        $email = openssl_encrypt($email, $this->ciphering,
            $this->cryption_key, $this->options, $this->cryption_iv);

        $row = DB::connection($this->db)->table('userinfo')->Where('email', $email)->first();

        if($row != null){
            $row->email = openssl_decrypt ($row->email, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
            $row->password = openssl_decrypt ($row->password, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
        }

        return $row;
    }
/* global */
    public function savefasttoken($email, $address)
    {
        $insertGetId=0;

        $email = openssl_encrypt($email, $this->ciphering,
            $this->cryption_key, $this->options, $this->cryption_iv);

        $createtime = date("Y-m-d h:i:s", time());

      $insertGetId = DB::connection($this->db)->table('wes_fast_url_temp')->insertGetId(
            [
                'email' => $email
                , 'address' => $address
                , 'status' => 0
                , 'created_at' => $createtime
            ]
        );




      /*  $insertGetId = DB::connection($this->waaupdb)->table('wes_fast_url_temp')->insertOrIgnore(
            ['email' => $email, 'address' => $address, 'status' => 0, 'created_at' => $createtime]
        );*/

     /*   $sucess =  DB::connection($this->waaupdb)->table('wes_fast_url_temp')
            ->updateOrInsert(
                ['email' => $email],
                ['address' => $address, 'status' => 0, 'created_at' => $createtime]
            );
       if($sucess)
           $insertGetId=1;
        */

       return $insertGetId;
    }

    public function getfasttoken($email)
    {
        $email = openssl_encrypt($email, $this->ciphering,
            $this->cryption_key, $this->options, $this->cryption_iv);

        $row = DB::connection($this->db)->table('wes_fast_url_temp')->where('email', $email)->get()->first();
        if($row)
        {
            return $row;
        }
        return "";
    }

    public function Comparefasttoken($address)
    {
        $ex = DB::connection($this->db)->table('wes_fast_url_temp')->where('address', $address)->exists();
        if($ex){
            //delete
            // DB::connection($this->waaupdb)->table('wes_fast_url_temp')->where('address', $address)->delete();
            return true;
        }
        return false;
    }


    public function Deletefasttoken($address)
    {
        $ex = DB::connection($this->db)->table('wes_fast_url_temp')->where('address', $address)->delete();
        if($ex){
            return true;
        }
        return false;
    }


    public function getAllUserCount_($email=null, $snameORemail=null, $sstatus=null){
        if($email!=null)
        {
            $email = openssl_encrypt($email, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
            $rows =  DB::connection($this->db)->table('userinfo')->where('email','!=',$email)->get();
        }
        else
            $rows =  DB::connection($this->db)->table('userinfo')->all();

        return count($rows);
    }

    public function getDashUserListByEmail_($email=null, $snameORemail=null, $sstatus=null, $start=0, $cnt=10)
    {
        $start_from = ($start-1) * $cnt;

        if($email!=null)
        {
            $email = openssl_encrypt($email, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
            $collection = collect();

            $rows =  DB::connection($this->db)->table('userinfo')
                ->where('email','<>', $email)
                ->where('manager','<> ', 4)
                ->orderByDesc('id')
                ->offset($start_from)
                ->limit($cnt)->get();
            foreach ($rows as $row)
            {
                $row['email'] = openssl_decrypt ($row['email'], $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
                $collection[] =$row;
            }

            return $collection;
        }
        else
        {
            $rows = DB::connection($this->db)->table('userinfo')
                ->where('manager','<> ', 4)
                ->orderByDesc('id')
                ->offset($start_from)
                ->limit($cnt)->get();
            $collection = collect();
            foreach ($rows as $row)
            {
                $row['email'] = openssl_decrypt ($row['email'], $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
                $collection[] =$row;
            }

            return $collection;

        }
    }


    public function getAllUserCount($email=null, $snameORemail=null, $sstatus=-1){
        if($email!=null)
        {
            $email = openssl_encrypt($email, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
            $where='email != "'.$email.'"';
            if($sstatus > -1){
                $where .=' and status ='.$sstatus;
            }
            if($snameORemail!=null && $snameORemail!=""){
                $s_email_name = openssl_encrypt($snameORemail, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
                $where .=' and (email like "%'.$s_email_name.'%" or name like "%'.$snameORemail.'%")';
            }

            $rows =  DB::connection($this->db)->table('userinfo')->whereRaw($where)->get();
        }
        else
        {
            $where=" 1 ";

            if($sstatus > -1){
                $where .=' and status ='.$sstatus;
            }
            if($snameORemail!=null && $snameORemail!=""){
                $s_email_name = openssl_encrypt($snameORemail, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
                $where .=' and (email like "%'.$s_email_name.'%" or name like "%'.$snameORemail.'%")';
            }

            $rows =  DB::connection($this->db)->table('userinfo')->whereRaw($where)->get();
           // $rows =  $this->all();
        }


        return count($rows);
    }

    public function getDashUserListByEmail($email=null, $snameORemail=null, $sstatus=-1, $start=0, $cnt=10)
    {
        $start_from = ($start-1) * $cnt;

        if($email!=null)
        {
            $email = openssl_encrypt($email, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);

            $collection = collect();

            $where='email != "'.$email.'"';

            if($sstatus > -1){
                $where .=' and status ='.$sstatus;
            }
            $where .=' and manager <> 4 ';

            if($snameORemail!=null && $snameORemail!=""){
                $s_email_name = openssl_encrypt($snameORemail, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
                $where .=' and (email like "%'.$s_email_name.'%" or name like "%'.$snameORemail.'%")';
            }

            $rows =  DB::connection($this->db)->table('userinfo')->whereRaw($where)->orderByDesc('id')->offset($start_from)->limit($cnt)->get();
            foreach ($rows as $row)
            {
                $row->email = openssl_decrypt ($row->email, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
                $collection[] =$row;
            }

            return $collection;
        }
        else
        {

            $where=" manager <> 4 ";

            if($sstatus > -1){
                $where .=' and status ='.$sstatus;
            }
            if($snameORemail!=null && $snameORemail!=""){
                $s_email_name = openssl_encrypt($snameORemail, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
                $where .=' and (email like "%'.$s_email_name.'%" or name like "%'.$snameORemail.'%")';
            }

            $rows =  DB::connection($this->db)->table('userinfo')->whereRaw($where)->orderByDesc('id')->offset($start_from)->limit($cnt)->get();
           // $rows = $this->orderByDesc('id')->offset($start_from)->limit($cnt)->get();
            $collection = collect();
            foreach ($rows as $row)
            {
                $row->email = openssl_decrypt ($row->email, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
                $collection[] =$row;
            }

            return $collection;

        }
    }

    public function setSSMUUserStatusChange($id, $status){
        if($status != 3){
            $affected = DB::connection($this->db)->table('userinfo')->Where('id', $id)->update(['status' => $status]);
        }
        else{
            $affected = DB::connection($this->db)->table('userinfo')->Where('id', $id)->delete();
        }

        return $affected;
    }

    public function setSSMUUserStatusAllChange($idlists, $status){
        if($status != 3){
            $users = DB::connection($this->db)->table('userinfo')->whereIn('id', $idlists)->update(['status' => $status]);
        }
        else{
            $users = DB::connection($this->db)->table('userinfo')->whereIn('id', $idlists)->delete();
        }
       /* DB::transaction(function () {
                $users = $this->whereIn('id', $idlists)->update(['status' => $status]);
        });*/

        return $users;
    }

    public function changeEmailSecurity($email, $encode)
    {
        $s_email_name="";

        if($email!=null && $email!=""){
            if($encode)
                 $s_email_name = openssl_encrypt($email, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
            else
                $s_email_name = openssl_decrypt ($email, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);
        }
        return $s_email_name;
    }
// han 2020-10-21 start
    /*han 2020-10-12 start*/
    public function updateUserinfo($id, $newusername, $newname, $newemail, $newmobile, $newcountrycode, $newcountryname, $img, $backgroundimg)
    {
//        $data = array(
//            'email' => empty($email) ? '' : $email
//        );
//
//        $user = $this->findUser($data);
//        if ($user == null) {
//            return false;
//        }
//
        $d_email = $newemail;
        $d_email = openssl_encrypt ($d_email, $this->ciphering, $this->cryption_key, $this->options, $this->cryption_iv);

//        $this->Where('id', $user->id)->update([
//            'username' => $newusername,
//            'name' => $newname,
//            'email' => $d_email,
//        ]);

        $row = DB::connection($this->db)->table('userinfo')->where('id', $id)->get()->first();

        if ($row == null) {
            return false;
        } else {
            if ($img != "" && $backgroundimg != "") {
                DB::connection($this->db)->table('userinfo')->where('id', $id)->update([
                    'username' => $newusername,
                    'name' => $newname,
                    'email' => $d_email,
                    'phone' => $newmobile,
                    'countrycode' => $newcountrycode,
                    'countryname' => $newcountryname,
                    'photo' => $img,
                    'background' => $backgroundimg
                ]);
            } else if ($img != "") {
                DB::connection($this->db)->table('userinfo')->where('id', $id)->update([
                    'username' => $newusername,
                    'name' => $newname,
                    'email' => $d_email,
                    'phone' => $newmobile,
                    'countrycode' => $newcountrycode,
                    'countryname' => $newcountryname,
                    'photo' => $img
                ]);
            } else if ($backgroundimg != "") {
                DB::connection($this->db)->table('userinfo')->where('id', $id)->update([
                    'username' => $newusername,
                    'name' => $newname,
                    'email' => $d_email,
                    'phone' => $newmobile,
                    'countrycode' => $newcountrycode,
                    'countryname' => $newcountryname,
                    'background' => $backgroundimg
                ]);
            } else {
                DB::connection($this->db)->table('userinfo')->where('id', $id)->update([
                    'username' => $newusername,
                    'name' => $newname,
                    'email' => $d_email,
                    'phone' => $newmobile,
                    'countrycode' => $newcountrycode,
                    'countryname' => $newcountryname
                ]);
            }
        }

        return true;
    }
    /*han 2020-10-12 end*/
// han 2020-10-21 end

// han 2020-11-03 start
    public function updateUserPassword($id, $oldpwd, $newpwd) {
        $row = DB::connection($this->db)->table('userinfo')->where('id', $id)->get()->first();

        if ($row == null) {
            return false;
        }

        $old_password = openssl_encrypt($oldpwd, $this->ciphering,
            $this->cryption_key, $this->options, $this->cryption_iv);

        if ($old_password != $row->password) {
            return false;
        }

        $new_password = openssl_encrypt($newpwd, $this->ciphering,
            $this->cryption_key, $this->options, $this->cryption_iv);

        DB::connection($this->db)->table('userinfo')->where('id', $id)->update([
            'password' => $new_password
        ]);
        return true;
    }
// han 2020-11-03 end
}
