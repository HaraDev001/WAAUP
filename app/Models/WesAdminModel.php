<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class WesAdminModel extends BaseModel
{
    protected $table = 'wes_add_user';
    protected $fillable = [];
    protected $hidden = [];

    public function insertUserDataAdd(array $data)
    {
        $email = openssl_encrypt($data['email'], $this->ciphering,
            $this->cryption_key, $this->options, $this->cryption_iv);

        $id = $this->insertGetId(
            [
                'name'      => $data['name'],
                'username'  => $data['username'],
                'email'     => $email,
                'sex'       => $data['sex'],
                'birthday'  => $data['birthday'],
                'phone'     => $data['phone'],
                'address'   => $data['address'],
                'city'      => $data['city'],
                'remark'    => $data['remark'],
                'status'    => $data['status']
            ]
        );
        return $id;
    }
}

