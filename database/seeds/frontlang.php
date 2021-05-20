<?php

use Illuminate\Database\Seeder;

class frontlang extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    protected $table = 'wesfront_lang';
    public function run()
    {
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "search", "str_cont" => "Search", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "terms", "str_cont" => "Terms", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "more", "str_cont" => "More", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "for", "str_cont" => "For", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "courses", "str_cont" => "Courses", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "login", "str_cont" => "Login", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "account", "str_cont" => "Account", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "password", "str_cont" => "Password", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "registered", "str_cont" => "Registered", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "retrieve", "str_cont" => "Retrieve", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "organization", "str_cont" => "Organization", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "individual", "str_cont" => "Individual", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "mobile", "str_cont" => "Mobile", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "verification", "str_cont" => "Verification", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "code", "str_cont" => "Code", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "send", "str_cont" => "Send", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "confirm", "str_cont" => "Confirm", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "pwd", "str_cont" => "password", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "enter", "str_cont" => "Enter", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "student", "str_cont" => "Student", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "registration", "str_cont" => "Registration", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "registered", "str_cont" => "Registered", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "reg", "str_cont" => "registered", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "email", "str_cont" => "Email", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "nophonenum", "str_cont" => "Mobile number is not correct", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "noemailtype", "str_cont" => "It is not correct type of email", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "phoneregd", "str_cont" => "phone number was registered", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "vercodeno", "str_cont" => "verification code is not correct!", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "pwdsame", "str_cont" => "password have to same", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "epvercode", "str_cont" => "Empty verification code!", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "verify", "str_cont" => "verification", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "empty", "str_cont" => "Empty", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "please", "str_cont" => "Please fill out this field", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "valid", "str_cont" => "Valid", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "onlystudent", "str_cont" => "Only Student are allowed to register.", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "sendvercode", "str_cont" => "Send verify Code, show your phone!", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "success", "str_cont" => "Success", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "errors", "str_cont" => "ERRORS", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "mailregd", "str_cont" => "mail was registered", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "username", "str_cont" => "Username", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "type", "str_cont" => "Type", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "author", "str_cont" => "Author", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "forget", "str_cont" => "Forget", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "onlysupport", "str_cont" => "Only support Chinese mobile phones", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "name", "str_cont" => "Name", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "confirmpassword", "str_cont" => "Confirm password", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "fastreg", "str_cont" => "Fast register", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "register", "str_cont" => "Register", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "locationdescript", "str_cont" => "Based on your ID address", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
        DB::connection('waaupdb')->table($this->table)->updateOrInsert(["str_type" => "frtxt", "str_key" => "loginincorrect", "str_cont" => "User name or password is incorrect.", "str_link" => "", "iso" => "en", "g_path" => "remote"]);
    }
}
