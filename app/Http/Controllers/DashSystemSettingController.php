<?php

namespace App\Http\Controllers;

use App\Models\UserModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class DashSystemSettingController extends BaseController
{
    /**
     * @var array|string|null
     */

    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    //---------------     system Setting Basic part    --------------------------
    public function getSystemSettingBasic(Request $request){
        $domain = '';
        $dashboard = '';
        $slogan = '';
        $row = DB::connection($this->waaupdb)->table('sitebasicsetting')->get()->first();

        $domain = $row->domain;
        $dashboard = $row->dashboard;
        $slogan = $row->slogan;

        return \Response::json([
            "msg" => "ok",
            "domain" => $domain,
            "dashboard" => $dashboard,
            "slogan" => $slogan
        ]);
        exit();
    }
    public function setSystemSettingBasic(Request $request){
        $userid = $request->post('userid');
        $domain = $request->post('domain');
        $dashboard = $request->post('dashboard');
        $slogan = $request->post('slogan');

        DB::connection($this->waaupdb)->table('sitebasicsetting')
            ->update(
                [
                    'domain' => $domain,
                    'dashboard' => $dashboard,
                    'slogan' => $slogan
                ]
            );

        include_once("ApacheDomainName.php");
        $ip_server = $_SERVER['SERVER_ADDR'];
        SetDomainNameCommand($domain, $ip_server);

        return \Response::json([
            "msg" => "ok"
        ]);
        exit();
    }

    //---------------     role permission part    --------------------------

    public function getSUPRolesDepartmentList(Request $request){
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $rows = $this->getDepartmentPageList($userid, $pstart, $pcnt);
        $total = $this->getAllListCount('systemusermanagedepartment', $userid);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);
        exit();
    }

    private function getDepartmentPageList($userid, $pstart, $pcnt){
        $pfrom = (intval($pstart) - 1) * $pcnt;
        $querystr = "SELECT id as fid, userid, name as fname, d_id as did, permissions as permissions, ";
        $querystr .= "(SELECT name FROM systemusermanagedepartment WHERE id=did) AS d_name, ";
        $querystr .= "(SELECT count(id) FROM systemusermanageposition WHERE d_id=fid) AS position, ";
        $querystr .= "(SELECT count(id) FROM userinfo WHERE department=fid) AS number ";
        $querystr .= "FROM systemusermanagedepartment ";
        $querystr .= "where userid = ".$userid." ";
        $querystr .= "order by id asc ";
        $querystr .= "limit ".$pcnt." offset ".$pfrom;
        $rows = DB::connection($this->waaupdb)->select( DB::connection($this->waaupdb)->raw($querystr) );
        return $rows;
    }

    private function getAllListCount($tablename, $userid){
        $rows = DB::connection($this->waaupdb)->table($tablename)
            ->where('userid', $userid)
            ->get();
        return count($rows);
    }

    public function getSUPRolesPositionList(Request $request){
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $rows = $this->getPositionPageList($userid, $pstart, $pcnt);

        $total = $this->getAllListCount('systemusermanageposition', $userid);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);
        exit();
    }

    private function getPositionPageList($userid, $pstart, $pcnt){
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $querystr = "SELECT id as fid, userid, name as fname, d_id as did, permissions as permissions, ";
        $querystr .= "(SELECT name FROM systemusermanagedepartment WHERE id=did) AS d_name, ";
        $querystr .= "(SELECT count(id) FROM userinfo WHERE position=fid) AS number ";
        $querystr .= "FROM systemusermanageposition ";
        $querystr .= "where userid = ".$userid." ";
        $querystr .= "order by id asc ";
        $querystr .= "limit ".$pcnt." offset ".$pfrom;

        $rows = DB::connection($this->waaupdb)->select( DB::connection($this->waaupdb)->raw($querystr) );
        return $rows;
    }

    public function getSUPRolesGroupList(Request $request){
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $rows = $this->getGroupPageList($userid, $pstart, $pcnt);
        $department_numbers = array();
        $position_numbers = array();
        $group_numbers = array();
        foreach ($rows as $row){
            array_push($department_numbers, $this->getDepartmentNumber($row->fid));
            array_push($position_numbers, $this->getPositionNumber($row->fid));
            array_push($group_numbers, $this->getGroupUserNumber($row->fid));
        }
        $total = $this->getAllListCount('systemusermanagegroup', $userid);
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            "d_numbers" => $department_numbers,
            "p_numbers" => $position_numbers,
            "g_numbers" => $group_numbers,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);
        exit();
    }


    private function getGroupPageList($userid, $pstart, $pcnt){
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $sql = "SELECT id as fid, userid, name as fname, user_names, user_ids, permissions ";
        $sql .= "FROM systemusermanagegroup ";
        $sql .= "where userid = ".$userid." ";
        $sql .= "order by id asc ";
        $sql .= "limit ".$pcnt." offset ".$pfrom;

        $rows = DB::connection($this->waaupdb)->select( DB::connection($this->waaupdb)->raw($sql) );
        return $rows;
    }

    private function getDepartmentNumber($gid){
        $sql = "SELECT count(department) as number ";
        $sql .= "FROM userinfo ";
        $sql .= "where rgroup = ".$gid." ";
        $sql .= "GROUP BY department";
        $rows = DB::connection($this->waaupdb)->select( DB::connection($this->waaupdb)->raw($sql) );
        $number = "";
        if($rows != null)
            $number = $rows[0]->number;
        return $number;
    }

    private function getPositionNumber($gid){
        $sql = "SELECT count(position) as number ";
        $sql .= "FROM userinfo ";
        $sql .= "where rgroup = ".$gid." ";
        $sql .= "GROUP BY position";
        $rows = DB::connection($this->waaupdb)->select( DB::connection($this->waaupdb)->raw($sql) );
        $number = "";
        if($rows != null)
            $number = $rows[0]->number;
        return $number;
    }

    private function getGroupUserNumber($gid){
        $sql = "SELECT id, rgroup FROM userinfo WHERE rgroup IS NOT NULL AND rgroup != ''";
        $number = array();
        $rows = DB::connection($this->waaupdb)->select( DB::connection($this->waaupdb)->raw($sql) );
        if($rows != null) {
            foreach ($rows as $row) {
                $g_uids = json_decode($row->rgroup);
                foreach ($g_uids as $g_uid) {
                    if ($g_uid == $gid) {
                        array_push($number, $row->id);
                        break;
                    }
                }
            }
        }
        return count($number);
    }

    public function getSUPRolePermissionData(Request $request){
        $id = $request->post('id');
        $roletype = $request->post('roletype');

        $tablename = '';
        if ($roletype == 0){
            $tablename = 'systemusermanagedepartment';
        }
        elseif ($roletype == 1) {
            $tablename = 'systemusermanageposition';
        }
        elseif ($roletype == 2) {
            $tablename = 'systemusermanagegroup';
        }
        if ($tablename == '') {
            return \Response::json([
                "msg" => "err"
            ]);
            exit();
        }
        $row = DB::connection($this->waaupdb)->table($tablename)->where('id', $id)->get()->first();
        $permissions = $row->permissions;
        $name = $row->name;

        return \Response::json([
            "msg" => "ok",
            "name" => $name,
            "lists" => $permissions
        ]);
        exit();
    }

    public function saveSUPRolePermissionData(Request $request){
        $id = $request->post('id');
        $roletype = $request->post('roletype');
        $permissions = $request->post('permissions');
        //$permissions = json_decode($permissions);

        $tablename = '';
        if ($roletype == 0){
            $tablename = 'systemusermanagedepartment';
        }
        elseif ($roletype == 1) {
            $tablename = 'systemusermanageposition';
        }
        elseif ($roletype == 2) {
            $tablename = 'systemusermanagegroup';
        }
        if ($tablename == '') {
            return \Response::json([
                "msg" => "err"
            ]);
            exit();
        }

        $cnt = DB::connection($this->waaupdb)->table($tablename)->where('id', $id)->doesntExist();
        if(!$cnt){
            $sucess =  DB::connection($this->waaupdb)->table($tablename)
                ->updateOrInsert(
                    ['id' => $id],
                    [
                        'permissions' => $permissions,
                    ]
                );
        }
        if ($sucess) {
            return \Response::json([
                "msg" => "ok",
            ]);
            exit();
        }
        else {
            return \Response::json([
                "msg" => "err",
            ]);
            exit();
        }
    }

    public function deleteSeveralSUPRolePermissionData(Request $request){
        $ids = $request->post('ids');
        $roletype = $request->post('roletype');
        $permissions = $request->post('permissions');
        $updated_at = date("Y-m-d h:i:s", time());

        $tablename = '';
        if ($roletype == 0){
            $tablename = 'systemusermanagedepartment';
        }
        elseif ($roletype == 1) {
            $tablename = 'systemusermanageposition';
        }
        elseif ($roletype == 2) {
            $tablename = 'systemusermanagegroup';
        }
        if ($tablename == '') {
            return \Response::json([
                "msg" => "err"
            ]);
            exit();
        }
        try {
            if(count($ids) > 0) {
                foreach ($ids as $id) {
                    $cnt = DB::connection($this->waaupdb)->table($tablename)->where('id', $id)->doesntExist();
                    if(!$cnt){
                        $sucess =  DB::connection($this->waaupdb)->table($tablename)
                            ->updateOrInsert(
                                ['id' => $id],
                                [
                                    'permissions' => $permissions,
                                ]
                            );
                    }
                }
            }
            if ($sucess) {
                return \Response::json([
                    'msg'  =>  "ok"
                ]);
            }
            else {
                return \Response::json([
                    'msg'  =>  "err"
                ]);
            }

        } catch (Exception $e) {
            return \Response::json([
                'msg'  =>  "err"
            ]);
        }

    }

    public function getSUPRAllMenuList(Request $request){
        $table_name = "website_dash_menu";
//        $rows = DB::connection($this->waaupdb)->table($table_name)->orderBy('c_id')->get();
        $rows = $this->menu_array;

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
        ]);
        exit();
    }

    public function getPermissionTransName(Request $request){
        $iso = $request->post('iso');
        $trans_array = $request->post('trans_array');
        $table_name = "sitetranslatecont";
        foreach ($trans_array as $key => $value) {
            $str_type = $value['str_type'];
            $str_key = $value['str_key'];
            $rows = DB::connection($this->waaupdb)->table($table_name)->where('iso', $iso)->
            where('str_type', $str_type)->where('str_key',$str_key)->get()->first();
            $trans_array[$key]['trans_name'] = $rows->str_cont;
        }
        $temp = $trans_array;
        return \Response::json([
            "msg" => "ok",
            "lists" => $trans_array,
        ]);
        exit();
    }

    //---------------     user permission part    --------------------------

    public function getSUPUUserListByEmail(Request $request)
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

    public function getSUPUSubRoleType(Request $request){
        $userid = $request->post('userid');
        $type = $request->post('type');
        $table = "systemusermanagedepartment";
        if($type == 2)
            $table = "systemusermanageposition";

        $rows = DB::connection($this->waaupdb)->table($table)->where("userid", $userid)->orderBy('id')->get();
        if($rows == null)
            $rows = "";

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows
        ]);
        exit();
    }

    public function getSUPUUserInfoList(Request $request){
        $type = $request->post('type');
        $subtype = $request->post('subtype');
        $search = $request->post('search');
        $start  = $request->post('start');
        $cnt    = $request->post('cnt');
        $start_from = ($start-1) * $cnt;
        $field = "department";
        if($type == 2)
            $field = "position";
        $rows = null;
        if($subtype == 0){
            $sql = "SELECT u.id, u.name, u.department, u.position, up.permissions, ";
            $sql .= "(SELECT name FROM systemusermanagedepartment WHERE id=department) AS d_name, ";
            $sql .= "(SELECT name FROM systemusermanageposition WHERE id=position) AS p_name ";
            $sql .= "FROM userinfo u ";
            $sql .= "LEFT JOIN user_permissions as up ";
            $sql .= "ON u.id = up.user_id ";
            $sql .= "where manager <> 4 ";
            if ($search != null && $search != "") {
                $sql .= "AND name like '%".$search."%' ";
            }
            $sql .= "order by name asc ";
            $totalrows = DB::connection($this->waaupdb)->select(DB::connection($this->waaupdb)->raw($sql));
            $limsql = $sql.'LIMIT '.$start_from.', '.$cnt.'';
            $rows = DB::connection($this->waaupdb)->select(DB::connection($this->waaupdb)->raw($limsql));
        }
        else {
            if ($search != null && $search != "") {
                $sql = "SELECT u.id, u.name, u.department, u.position, up.permissions, ";
                $sql .= "(SELECT name FROM systemusermanagedepartment WHERE id=department) AS d_name, ";
                $sql .= "(SELECT name FROM systemusermanageposition WHERE id=position) AS p_name ";
                $sql .= "FROM userinfo u ";
                $sql .= "LEFT JOIN user_permissions as up ";
                $sql .= "ON u.id = up.user_id ";
                $sql .= "where name like '%".$search."%' ";
                $sql .= "order by name asc ";
                $totalrows = DB::connection($this->waaupdb)->select(DB::connection($this->waaupdb)->raw($sql));
                $limsql = $sql.'LIMIT '.$start_from.', '.$cnt.'';
                $rows = DB::connection($this->waaupdb)->select(DB::connection($this->waaupdb)->raw($limsql));
            } else {
                $sql = "SELECT u.id, u.name, u.department, u.position, up.permissions, ";
                $sql .= "(SELECT name FROM systemusermanagedepartment WHERE id=department) AS d_name, ";
                $sql .= "(SELECT name FROM systemusermanageposition WHERE id=position) AS p_name ";
                $sql .= "FROM userinfo u ";
                $sql .= "LEFT JOIN user_permissions as up ";
                $sql .= "ON u.id = up.user_id ";
                if ($type != 0) {
                    $sql .= "where ".$field."=".$subtype." ";
                }
                $sql .= "order by name asc ";
                $totalrows = DB::connection($this->waaupdb)->select(DB::connection($this->waaupdb)->raw($sql));
                $limsql = $sql.'LIMIT '.$start_from.', '.$cnt.'';
                $rows = DB::connection($this->waaupdb)->select(DB::connection($this->waaupdb)->raw($limsql));
            }
        }
        $total = count($totalrows);
        $totalpage = ceil($total / $cnt);
        return \Response::json([
            'status'   =>  'ok',
            'total'    =>  $total,
            'start'    =>  $start,
            'totalpage'    =>  $totalpage,
            'userlist' =>  $rows
        ]);
        exit();
    }

    public function getSUPUserPermissionData(Request $request){
        $id = $request->post('id');
        $user_table = 'userinfo';
        $user_permission_table = 'user_permissions';

        $row = DB::connection($this->waaupdb)->table($user_table)->where('id', $id)->get()->first();
        $name = $row->username;

        $permission_row = DB::connection($this->waaupdb)->table($user_permission_table)->where('user_id', $id)->get()->first();
        $permissions = $permission_row->permissions;

        return \Response::json([
            "msg" => "ok",
            "lists" => $permissions,
            "name" => $name
        ]);
        exit();
    }

    public function saveSUPUserPermissionData(Request $request){
        $id = $request->post('id');
        $permissions = $request->post('permissions');
        //$permissions = json_decode($permissions);
        $tablename = 'user_permissions';

        $cnt = DB::connection($this->waaupdb)->table($tablename)->where('user_id', $id)->doesntExist();
        if(!$cnt){
            $sucess =  DB::connection($this->waaupdb)->table($tablename)
                ->updateOrInsert(
                    ['user_id' => $id],
                    [
                        'permissions' => $permissions,
                    ]
                );
        }
        if ($sucess) {
            return \Response::json([
                "msg" => "ok",
            ]);
            exit();
        }
        else {
            return \Response::json([
                "msg" => "err",
            ]);
            exit();
        }
    }

    public function deleteSeveralSUPUserPermissionData(Request $request){
        $ids = $request->post('ids');
        $permissions = $request->post('permissions');
        $updated_at = date("Y-m-d h:i:s", time());
        $tablename = 'userinfo';

        try {
            if(count($ids) > 0) {
                foreach ($ids as $id) {
                    $cnt = DB::connection($this->waaupdb)->table($tablename)->where('id', $id)->doesntExist();
                    if(!$cnt){
                        $sucess =  DB::connection($this->waaupdb)->table($tablename)
                            ->updateOrInsert(
                                ['id' => $id],
                                [
                                    'permissions' => $permissions,
                                ]
                            );
                    }
                }
            }
            if ($sucess) {
                return \Response::json([
                    'msg'  =>  "ok"
                ]);
            }
            else {
                return \Response::json([
                    'msg'  =>  "err"
                ]);
            }

        } catch (Exception $e) {
            return \Response::json([
                'msg'  =>  "err"
            ]);
        }

    }

    public function getSUPUDialogUserInfoList(Request $request){
        $type = $request->post('type');
        $subtype = $request->post('subtype');
        $search = $request->post('search');
        $field = "department";
        if($type == 2)
            $field = "position";
        $rows = null;
        if($subtype == 0){
            $sql = "SELECT id, name, department, position,";
            $sql .= "(SELECT name FROM systemusermanagedepartment WHERE id=department) AS d_name, ";
            $sql .= "(SELECT name FROM systemusermanageposition WHERE id=position) AS p_name ";
            $sql .= "FROM userinfo ";
            if ($search != null && $search != "") {
                $sql .= "where name like '%".$search."%' ";
            }
            $sql .= "order by name asc ";
            $rows = DB::connection($this->waaupdb)->select(DB::connection($this->waaupdb)->raw($sql));
        }
        else {
            if ($search != null && $search != "") {
                $sql = "SELECT id, name, department, position,";
                $sql .= "(SELECT name FROM systemusermanagedepartment WHERE id=department) AS d_name, ";
                $sql .= "(SELECT name FROM systemusermanageposition WHERE id=position) AS p_name ";
                $sql .= "FROM userinfo ";
                $sql .= "where name like '%".$search."%' ";
                $sql .= "order by name asc ";
                $rows = DB::connection($this->waaupdb)->select(DB::connection($this->waaupdb)->raw($sql));
            } else {
                $sql = "SELECT id, name, department, position,";
                $sql .= "(SELECT name FROM systemusermanagedepartment WHERE id=department) AS d_name, ";
                $sql .= "(SELECT name FROM systemusermanageposition WHERE id=position) AS p_name ";
                $sql .= "FROM userinfo ";
                if ($type != 0) {
                    $sql .= "where ".$field."=".$subtype." ";
                }
                $sql .= "order by name asc ";
                $rows = DB::connection($this->waaupdb)->select(DB::connection($this->waaupdb)->raw($sql));
            }
        }

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows
        ]);
        exit();
    }

    //---------------     configuration front page part    --------------------------
    private function getPagesValue($idx, $rows){
        $fields = [['f1'=>'index', 'f2'=>'i_date', 'f3'=>'i_user'],
            ['f1'=>'login', 'f2'=>'l_date', 'f3'=>'l_user'],
            ['f1'=>'register', 'f2'=>'r_date', 'f3'=>'r_user'],
            ['f1'=>'construction', 'f2'=>'c_date', 'f3'=>'c_user'],
            ['f1'=>'fourpage', 'f2'=>'f_date', 'f3'=>'f_user'],
            ['f1'=>'threepage', 'f2'=>'t_date', 'f3'=>'t_user'],
            ['f1'=>'comingback', 'f2'=>'b_date', 'f3'=>'b_user'],
            ];
        $info = ['index'=>'', 'date'=>'','name'=>''];
        foreach ($rows as $row){
            $field1 = $fields[$idx]['f1'];
            $field2 = $fields[$idx]['f2'];
            $field3 = $fields[$idx]['f3'];
            if ($row->$field1 != null && $row->$field1 != ''){
                $info = [
                    'index'=>$row->$field1,
                    'date'=>$row->$field2,
                    'name'=>$row->$field3
                ];
                break;
            }
        }
        return $info;
    }

    public function getWWCFrontPageList(Request $request){
        $userid = $request->post('userid');
        $infos = array();
        try{
            $rows = DB::connection($this->waaupglobal)->table('tb_pagepages_content')->where('userid', $userid)->get();
            for ($i = 0; $i < 7; $i++){
                $info = $this->getPagesValue($i, $rows);
                array_push($infos, $info);
            }
            return \Response::json([
                "msg" => "ok",
                "lists" => $infos
            ]);
        }catch (Exception $e) {
            return \Response::json([
                'msg'  =>  "err"
            ]);
        }

        exit();
    }

    public function saveWWCFrontPageList(Request $request){
        $user_name = $request->post('user_name');
        $content_list = $request->post('content_list');
        $pagecontent_table_name = 'tb_pagepages_content';
        $updated_at = date("Y-m-d h:i:s", time());
        $fields = [['f1'=>'index', 'f2'=>'i_date', 'f3'=>'i_user'],
            ['f1'=>'login', 'f2'=>'l_date', 'f3'=>'l_user'],
            ['f1'=>'register', 'f2'=>'r_date', 'f3'=>'r_user'],
            ['f1'=>'construction', 'f2'=>'c_date', 'f3'=>'c_user'],
            ['f1'=>'fourpage', 'f2'=>'f_date', 'f3'=>'f_user'],
            ['f1'=>'threepage', 'f2'=>'t_date', 'f3'=>'t_user'],
            ['f1'=>'comingback', 'f2'=>'b_date', 'f3'=>'b_user'],
        ];
        $success = false;
        try{
            if ($content_list != null) {
                foreach ($content_list as $content) {
                    $changed = $content['changed'];
                    if ($changed == '1') {
                        $id = $content['id'];
                        $field1 = $fields[$id]['f1'];
                        $field2 = $fields[$id]['f2'];
                        $field3 = $fields[$id]['f3'];
                        $page_title = $content['page_title'];
                        if ($page_title == '') {
                            $rows1 = DB::connection($this->waaupglobal)->table($pagecontent_table_name)->get();
                            foreach ($rows1 as $row1) {
                                $tid1 = $row1 ->id;
                                $success =  DB::connection($this->waaupglobal)->table($pagecontent_table_name)
                                    ->updateOrInsert(
                                        ['id' => $tid1],
                                        [
                                            $field1 => '',
                                            $field2 => $updated_at,
                                            $field3 => '',
                                        ]
                                    );
                            }
                        }
                        $exist = DB::connection($this->waaupglobal)->table($pagecontent_table_name)->where('title', $page_title)->doesntExist();
                        if (!$exist) {
                            $rows = DB::connection($this->waaupglobal)->table($pagecontent_table_name)->get();
                            foreach ($rows as $row) {
                                $tid = $row ->id;
                                $dsuccess =  DB::connection($this->waaupglobal)->table($pagecontent_table_name)
                                    ->updateOrInsert(
                                        ['id' => $tid],
                                        [
                                            $field1 => '',
                                            $field2 => $updated_at,
                                            $field3 => '',
                                        ]
                                    );
                            }
                            $success =  DB::connection($this->waaupglobal)->table($pagecontent_table_name)
                                ->updateOrInsert(
                                    ['title' => $page_title],
                                    [
                                        $field1 => $page_title,
                                        $field2 => $updated_at,
                                        $field3 => $user_name,
                                    ]
                                );
                        }
                    }
                }
            }
            if ($success) {
                return \Response::json([
                    "msg" => 'ok',
                ]);
            }
            else {
                return \Response::json([
                    "msg" => 'nochange',
                ]);
            }
        }catch (Exception $e) {
            return \Response::json([
                'msg'  =>  "err"
            ]);
        }

        exit();
    }

    public function getSystemSettingBasicLogin(Request $request){
        $row = DB::connection($this->waaupdb)->table('sitebasicsetting')->get()->first();
        if($row != null){
            $pageinfo = '';
            if($row->login != null && $row->login != "")
                $pageinfo = $row->login;
            return \Response::json([
                "pageinfo" => $pageinfo
            ]);
        }
        else{
            return \Response::json([
                "pageinfo" => ''
            ]);
        }
    }

    public function setSystemSettingBasicLogin(Request $request){
        $background_img= trim($request->post('ssb_frontpage_back_pre'));
        $logo_img= trim($request->post('ssb_frontpage_logo_pre'));
        $tip_txt= trim($request->post('ssb_frontpage_login_tip_val'));
        $font_color= trim($request->post('ssb_frontpage_login_font_color_val'));
        $theme_color= trim($request->post('ssb_frontpage_login_theme_color_val'));
        $back_color= trim($request->post('ssb_frontpage_login_back_color_val'));
        $dbstr= array(
            'backimg' => $background_img,
            'logoimg' => $logo_img,
            'tiptxt' => $tip_txt,
            'fontcolor' => $font_color,
            'themecolor' => $theme_color,
            'backcolor' => $back_color
        );
        $strjson =json_encode($dbstr);

        $sucess = -1;
        $sucess = DB::connection($this->waaupdb)->table('sitebasicsetting')
            ->update(['login' => $strjson]);
        if($sucess > -1)
        {
            return \Response::json([
                'msg'  =>  'ok'
            ]);
        }
        else{
            return \Response::json([
                'msg'  =>  'err'
            ]);
        }
        exit();
    }

    public function getSystemSettingBasicRegister(Request $request){
        $row = DB::connection($this->waaupdb)->table('sitebasicsetting')->get()->first();
        if($row != null){
            $pageinfo = '';
            if($row->register != null && $row->register != "")
                $pageinfo = $row->register;
            return \Response::json([
                "pageinfo" => $pageinfo
            ]);
        }
        else{
            return \Response::json([
                "pageinfo" => ''
            ]);
        }
    }

    public function setSystemSettingBasicRegister(Request $request){
        $background_img= trim($request->post('ssb_frontpage_regback_pre'));
        $logo_img= trim($request->post('ssb_frontpage_reglogo_pre'));
        $tip_txt= trim($request->post('ssb_frontpage_register_tip_val'));
        $font_color= trim($request->post('ssb_frontpage_register_font_color_val'));
        $theme_color= trim($request->post('ssb_frontpage_register_theme_color_val'));
        $back_color= trim($request->post('ssb_frontpage_register_back_color_val'));
        $dbstr= array(
            'backimg' => $background_img,
            'logoimg' => $logo_img,
            'tiptxt' => $tip_txt,
            'fontcolor' => $font_color,
            'themecolor' => $theme_color,
            'backcolor' => $back_color
        );
        $strjson =json_encode($dbstr);

        $sucess = -1;
        $sucess = DB::connection($this->waaupdb)->table('sitebasicsetting')
            ->update(['register' => $strjson]);
        if($sucess > -1)
        {
            return \Response::json([
                'msg'  =>  'ok'
            ]);
        }
        else{
            return \Response::json([
                'msg'  =>  'err'
            ]);
        }
        exit();
    }

}
