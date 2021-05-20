<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class admin extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if(DB::connection('waaupdb')->table('userinfo')->get()->count() == 0){
            DB::connection('waaupdb')->table('userinfo')->insert(
                [
                    ["name" => "Waaup",
                        "username" => "WaaupAdmin",
                        "email" => "o53bjmGE9itj6IzFOZRj",
                        "password" => "sZDCiGOr",
                        "phone" => "12345678900",
                        "countrycode" => "86",
                        "countryname" => "cn",
                        "permit" => 1,
                        "manager" => 4]
                ]
            );
        }
    }
}
