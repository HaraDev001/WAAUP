<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BaseModel extends Model
{
    protected  $ciphering = "AES-128-CTR";
    protected  $options_key = 0;
    protected  $cryption_iv = '2020197109062020';
    protected  $cryption_key = "fonshinshinfon";
}
