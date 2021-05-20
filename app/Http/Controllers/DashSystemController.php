<?php

namespace App\Http\Controllers;

use App\Models\UserModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class DashSystemController extends BaseController
{
    /**
     * @var array|string|null
     */

    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    public function addSystemSecurityMobileItem(Request $request) {
        $org_name = $request->post('org_name');
        $name = $request->post('name');
        $characters = $request->post('characters');
        $countrycode = $request->post('countrycode');
        $dialcode = $request->post('dialcode');
        $check = $request->post('check');

        $rows = DB::connection($this->waaupdb)->table('systemsusersecurity')->orderByDesc('id')->get()->first();

        $arr_data = array(
            $name => array(
                "name" => $name,
                "characters" => $characters,
                "countrycode" => $countrycode,
                "dialcode" => $dialcode,
                "check" => $check
            )
        );

        if ($rows ==null || $rows->mobile == null || $rows->mobile == "") {
            $arr_data = json_encode($arr_data);
            $rt = DB::connection($this->waaupdb)->table('systemsusersecurity')->where('id', $rows->id)
                ->update(['mobile'=>$arr_data, 'g_path'=>$this->g_path]);

            return \Response::json([
                'msg' => 'ok'
            ]);
        } else {
            $lists = json_decode($rows->mobile);

            $arr_res = array();
            foreach ($lists as $k => $v) {
                if ($org_name != '' && $org_name === $k) {
                    $arr_res[$name] = array(
                        "name" => $name,
                        "characters" => $characters,
                        "countrycode" => $countrycode,
                        "dialcode" => $dialcode,
                        "check" => $check
                    );
                } else {
                    $arr_res[$k] = array(
                        'name' => isset($v->name) ? $v->name : "",
                        'characters' => isset($v->characters) ? $v->characters : "",
                        'countrycode' => isset($v->countrycode) ? $v->countrycode : "",
                        'dialcode' => isset($v->dialcode) ? $v->dialcode : "",
                        'check' => isset($v->check) ? $v->check : "",
                    );
                }
            }

            if ($org_name != '' || $org_name != null) {
                $arr_res[$name] = array(
                    "name" => $name,
                    "characters" => $characters,
                    "countrycode" => $countrycode,
                    "dialcode" => $dialcode,
                    "check" => $check
                );
            }

            $arr_res = json_encode($arr_res);

            $rt = DB::connection($this->waaupdb)->table('systemsusersecurity')->where('id', $rows->id)
                ->update(['mobile'=>$arr_res]);

            return \Response::json([
                'msg' => 'ok'
            ]);
        }
    }
    public function getSystemSettingMobileItem(Request $request) {
        $rows = DB::connection($this->waaupdb)->table("sitefieldmobile")->orderByDesc("id")->get();
        if ($rows===null) {
            return \Response::json([
                'msg' => 'err',
                'list' => '',
            ]);
        } else {
            $lists = array();
            foreach ($rows as $row) {
                $lists[] = array(
                    'name' => isset($row->name) ? $row->name : "",
                    'characters' => isset($row->characters) ? $row->characters : "",
                    'countrycode' => isset($row->countryiso) ? $row->countryiso : "",
                    'dialcode' => isset($row->dialcode) ? $row->dialcode : "",
                );
            }

            return \Response::json([
                'msg' => 'ok',
                'list' => $lists
            ]);
        }
    }
    public function getSystemSecurityMobileItem(Request $request) {
        $rows = DB::connection($this->waaupdb)->table('systemsusersecurity')->orderByDesc('id')->get()->first();
        if ($rows===null || $rows->mobile === null || $rows->mobile === '') {
            return \Response::json([
                'msg' => 'err',
                'list' => '',
            ]);
        } else {
            $lists = json_decode($rows->mobile);

            $arr_res = array();
            foreach ($lists as $k => $v) {
                $arr_res[] = array(
                    'name' => isset($v->name) ? $v->name : "",
                    'characters' => isset($v->characters) ? $v->characters : "",
                    'countrycode' => isset($v->countrycode) ? $v->countrycode : "",
                    'dialcode' => isset($v->dialcode) ? $v->dialcode : "",
                    'check' => isset($v->check) ? $v->check : "",
                );
            }

            return \Response::json([
                'msg' => 'ok',
                'list' => $arr_res
            ]);
        }
    }

    public function delSystemSecurityMobileItem(Request $request) {
        $name = $request->post('name');

        $rows = DB::connection($this->waaupdb)->table('systemsusersecurity')->orderByDesc('id')->get()->first();

        if ($rows===null || $rows->mobile === null || $rows->mobile === '') {
            return \Response::json([
                'msg' => 'error',
                'message' => 'no mobile data'
            ]);
        } else {
            $lists = json_decode($rows->mobile);

            $arr_res = array();
            foreach ($lists as $k => $v) {
                if ($k != $name) {
                    $arr_res[$k] = array(
                        'name' => isset($v->name) ? $v->name : "",
                        'characters' => isset($v->characters) ? $v->characters : "",
                        'countrycode' => isset($v->countrycode) ? $v->countrycode : "",
                        'dialcode' => isset($v->dialcode) ? $v->dialcode : "",
                        'check' => isset($v->check) ? $v->check : "",
                    );
                }
            }

            $arr_res = json_encode($arr_res);

            $rt = DB::connection($this->waaupdb)->table('systemsusersecurity')->where('id', $rows->id)->update(['mobile'=>$arr_res]);

            return \Response::json([
                'msg' => 'ok',
            ]);
        }
    }

    public function updateSystemSecurityMobileItem(Request $request) {
        $data = $request->post('data');

        $rows = DB::connection($this->waaupdb)->table('systemsusersecurity')->orderByDesc('id')->get()->first();

        if ($rows===null || $rows->mobile === null || $rows->mobile === '') {
            return \Response::json([
                'msg' => 'error',
                'message' => 'no mobile data'
            ]);
        } else if ($data != null) {
            $lists = json_decode($rows->mobile);

            $arr_res = array();
            foreach ($lists as $k => $v) {
                $arr_res[$k] = array(
                    'name' => isset($v->name) ? $v->name : "",
                    'characters' => isset($v->characters) ? $v->characters : "",
                    'countrycode' => isset($v->countrycode) ? $v->countrycode : "",
                    'dialcode' => isset($v->dialcode) ? $v->dialcode : "",
                    'check' => "0",
                );
            }

            foreach ($data as $list) {
                $name = "";
                $characters = "";
                $check = "";
                foreach ($list as $k => $v) {
                    if ($k === "name")
                        $name = $v;
                    else if ($k === "check")
                        $check = $v;
                }

                foreach ($arr_res as $key => $value) {
                    if ($key == $name) {
                        $arr_res[$key]['check'] = $check;
                    }
                }
            }

            //dd($arr_res);
            $arr_res = json_encode($arr_res);

            $rt = DB::connection($this->waaupdb)->table('systemsusersecurity')->where('id', $rows->id)->update(['mobile'=>$arr_res]);

            return \Response::json([
                'msg' => 'ok',
            ]);
        } else if ($data == null) {
            $lists = json_decode($rows->mobile);

            $arr_res = array();
            foreach ($lists as $k => $v) {
                $arr_res[$k] = array(
                    'name' => isset($v->name) ? $v->name : "",
                    'characters' => isset($v->characters) ? $v->characters : "",
                    'countrycode' => isset($v->countrycode) ? $v->countrycode : "",
                    'dialcode' => isset($v->dialcode) ? $v->dialcode : "",
                    'check' => "0",
                );
            }

            $arr_res = json_encode($arr_res);

            $rt = DB::connection($this->waaupdb)->table('systemsusersecurity')->where('id', $rows->id)->update(['mobile'=>$arr_res]);

            return \Response::json([
                'msg' => 'ok',
            ]);
        }
    }

    public function setSystemThemeColor(Request $request)
    {
        $userid = $request->post('userid');
        $color = $request->post('color');
        $cid = $request->post('cid');

        $rows = DB::connection($this->waaupapps)->table('tb_themecolor')->select(['b_id'])->where('user_id', $userid)->get()->first();
        $path = $_SERVER['DOCUMENT_ROOT']."/css/temp/templelet_".$userid."_".$rows->b_id.".css";
        @unlink($path);

        DB::connection($this->waaupapps)->table('tb_themecolor')->where('user_id', $userid)->update(['sel_color'=>$color, 'b_id'=>$cid]);
        return $this->getColor($userid, $color, 'dash');
    }

    public function getSystemUserAccountAllData(Request $request)
    {
        $userid = $request->post('userid');
        $tabIndex = $request->post('tabIndex');
        $baseData = "";
        $addData = "";
        if($tabIndex == 1) {
            $rows = DB::connection($this->waaupdb)->table('systemuseraccount')
                ->select(DB::connection($this->waaupdb)->raw('general, general_add'))
                ->where('userid', $userid)
                ->get()->first();
            if($rows != null) {
                $baseData = $rows->general;
                $addData = $rows->general_add;
            }
        }
        if($tabIndex == 2) {
            $rows = DB::connection($this->waaupdb)->table('systemuseraccount')
                ->select(DB::connection($this->waaupdb)->raw('information, information_add'))
                ->where('userid', $userid)
                ->get()->first();
            if($rows != null) {
                $baseData = $rows->information;
                $addData = $rows->information_add;
            }
        }
        if($tabIndex == 3) {
            $rows = DB::connection($this->waaupdb)->table('systemuseraccount')
                ->select(DB::connection($this->waaupdb)->raw('senior, senior_add'))
                ->where('userid', $userid)
                ->get()->first();
            if($rows != null) {
                $baseData = $rows->senior;
                $addData = $rows->senior_add;
            }
        }

        return \Response::json([
            'msg' => 'ok',
            'baseData' => $baseData,
            'addData' => $addData,
        ]);

        exit();
    }

    public function getSystemSettingField(Request $request)
    {
        $settingfield = $request->post('settingfield');
        $rows = "";
        if ($settingfield == "img")
            $rows = DB::connection($this->waaupdb)->table('sitelogoimgstyle')->orderByDesc('id')->get();
        if ($settingfield == "txt")
            $rows = DB::connection($this->waaupdb)->table('sitefieldtext')->orderByDesc('id')->get();
        if ($settingfield == "number")
            $rows = DB::connection($this->waaupdb)->table('sitefieldnumber')->orderByDesc('id')->get();

        return \Response::json([
            "msg" => "ok",
            "fieldData" => $rows
        ]);

        exit();
    }

    public function setSystemUserAccountBaseData(Request $request) {
        $userid = $request->post('user_id');
        $tab_index = $request->post('tab_index');
        $base_item1_id = $request->post('base_item1_id');
        $base_item1_val = $request->post('base_item1_val');
        $base_item2_id = $request->post('base_item2_id');
        $base_item2_val = $request->post('base_item2_val');
        $base_item3_id = $request->post('base_item3_id');
        $base_item3_val = $request->post('base_item3_val');
        $base_item4_id = $request->post('base_item4_id');
        $base_item4_val = $request->post('base_item4_val');

        $lists = array();
        $info = [
            "id_1" => $base_item1_id,
            "val_1" => $base_item1_val,
            "id_2" => $base_item2_id,
            "val_2" => $base_item2_val,
            "id_3" => $base_item3_id,
            "val_3" => $base_item3_val,
            "id_4" => $base_item4_id,
            "val_4" => $base_item4_val
        ];
        array_push($lists, $info);
        $lists = json_encode($lists);

        $data = DB::connection($this->waaupdb)->table('systemuseraccount')->where('userid', $userid)->get()->first();

        if($data != null) {
            if($tab_index == 1)
                $res = DB::connection($this->waaupdb)->table('systemuseraccount')->where('userid', $userid)->update(['general'=>$lists]);
            if($tab_index == 2)
                $res = DB::connection($this->waaupdb)->table('systemuseraccount')->where('userid', $userid)->update(['information'=>$lists]);
            if($tab_index == 3)
                $res = DB::connection($this->waaupdb)->table('systemuseraccount')->where('userid', $userid)->update(['senior'=>$lists]);
        }else{
            if($tab_index == 1)
                $res = DB::connection($this->waaupdb)->table('systemuseraccount')->insertGetId(
                    ['userid' => $userid, 'general' => $lists]
                );
            if($tab_index == 2)
                $res = DB::connection($this->waaupdb)->table('systemuseraccount')->insertGetId(
                    ['userid' => $userid, 'information' => $lists]
                );
            if($tab_index == 3)
                $res = DB::connection($this->waaupdb)->table('systemuseraccount')->insertGetId(
                    ['userid' => $userid, 'senior' => $lists]
                );
        }
        if ($res) {
            return \Response::json([
                "msg" => "ok"
            ]);

        } else {
            return \Response::json([
                "msg" => "err",
                "message" => "db does not exist"
            ]);
        }

        exit();
    }

    public function setSystemUserAccountAddData(Request $request) {
        $userid = $request->post('userid');
        $tabIndex = $request->post('tabIndex');
        $index = $request->post('add_index');
        $id = $request->post('id');
        $name = $request->post('name');
        $itemdata = $request->post('itemdata');
        $settingfield = $request->post('settingfield');

        $rows = DB::connection($this->waaupdb)->table('systemuseraccount')->where('userid', $userid)->get()->first();
        $info = [
            "index" => $index,
            "settingfield" => $settingfield,
            "id" => $id,
            "name" => $name,
            "itemdata" => $itemdata
        ];
        $lists = array();
        $addData = "";
        if($rows != null) {
            $dbdata = array();
            if($tabIndex == 1) {
                $dbdata = json_decode($rows->general_add);
                if($dbdata != null && $dbdata != "")
                {
                    foreach($dbdata as $data){
                        $info1 = ["index"=>$data->index, "settingfield"=>$data->settingfield, "id"=>$data->id, "name"=>$data->name, "itemdata"=>$data->itemdata];
                        array_push($lists, $info1);
                    }
                }
                array_push($lists, $info);
                $lists = json_encode($lists);
                $res = DB::connection($this->waaupdb)->table('systemuseraccount')->where('userid', $userid)->update(['general_add' => $lists]);
                $rows = DB::connection($this->waaupdb)->table('systemuseraccount')
                    ->select(DB::connection($this->waaupdb)->raw('general_add'))
                    ->where('userid', $userid)
                    ->get()->first();
                $addData = $rows->general_add;
            }
            if($tabIndex == 2) {
                $dbdata = json_decode($rows->information_add);
                if($dbdata != null && $dbdata != "")
                {
                    foreach($dbdata as $data){
                        $info1 = ["index"=>$data->index, "settingfield"=>$data->settingfield, "id"=>$data->id, "name"=>$data->name, "itemdata"=>$data->itemdata];
                        array_push($lists, $info1);
                    }
                }
                array_push($lists, $info);
                $lists = json_encode($lists);
                $res = DB::connection($this->waaupdb)->table('systemuseraccount')->where('userid', $userid)->update(['information_add' => $lists]);
                $rows = DB::connection($this->waaupdb)->table('systemuseraccount')
                    ->select(DB::connection($this->waaupdb)->raw('information_add'))
                    ->where('userid', $userid)
                    ->get()->first();
                $addData = $rows->information_add;
            }
            if($tabIndex == 3) {
                $dbdata = json_decode($rows->senior_add);
                if($dbdata != null && $dbdata != "")
                {
                    foreach($dbdata as $data){
                        $info1 = ["index"=>$data->index, "settingfield"=>$data->settingfield, "id"=>$data->id, "name"=>$data->name, "itemdata"=>$data->itemdata];
                        array_push($lists, $info1);
                    }
                }
                array_push($lists, $info);
                $lists = json_encode($lists);
                $res = DB::connection($this->waaupdb)->table('systemuseraccount')->where('userid', $userid)->update(['senior_add' => $lists]);
                $rows = DB::connection($this->waaupdb)->table('systemuseraccount')
                    ->select(DB::connection($this->waaupdb)->raw('senior_add'))
                    ->where('userid', $userid)
                    ->get()->first();
                $addData = $rows->senior_add;
            }
        }else{
            array_push($lists, $info);
            $lists = json_encode($lists);
            if($tabIndex == 1) {
                $res = DB::connection($this->waaupdb)->table('systemuseraccount')->insertGetId(
                    ['userid' => $userid, 'general_add' => $lists]
                );
                $rows = DB::connection($this->waaupdb)->table('systemuseraccount')
                    ->select(DB::connection($this->waaupdb)->raw('general_add'))
                    ->where('userid', $userid)
                    ->get()->first();
                $addData = $rows->senior_add;
            }
            if($tabIndex == 2) {
                $res = DB::connection($this->waaupdb)->table('systemuseraccount')->insertGetId(
                    ['userid' => $userid, 'information_add' => $lists]
                );
                $rows = DB::connection($this->waaupdb)->table('systemuseraccount')
                    ->select(DB::connection($this->waaupdb)->raw('information_add'))
                    ->where('userid', $userid)
                    ->get()->first();
                $addData = $rows->senior_add;
            }
            if($tabIndex == 3) {
                $res = DB::connection($this->waaupdb)->table('systemuseraccount')->insertGetId(
                    ['userid' => $userid, 'senior_add' => $lists]
                );
                $rows = DB::connection($this->waaupdb)->table('systemuseraccount')
                    ->select(DB::connection($this->waaupdb)->raw('senior_add'))
                    ->where('userid', $userid)
                    ->get()->first();
                $addData = $rows->senior_add;
            }
        }

        return \Response::json([
            "msg" => "ok",
            "addData" => $addData
        ]);
        exit();
    }

    public function editSystemUserAccountAddData(Request $request) {
        $userid = $request->post('userid');
        $tabIndex = $request->post('tabIndex');
        $index = $request->post('editIndex');
        $id = $request->post('id');
        $name = $request->post('name');
        $itemdata = $request->post('itemdata');
        $settingfield = $request->post('settingfield');

        $rows = DB::connection($this->waaupdb)->table('systemuseraccount')->where('userid', $userid)->get()->first();
        $info = [
            "index" => $index,
            "settingfield" => $settingfield,
            "id" => $id,
            "name" => $name,
            "itemdata" => $itemdata
        ];
        $lists = array();
        $addData = "";
        if($tabIndex == 1) {
            $dbdata = json_decode($rows->general_add);
            if($dbdata != null && $dbdata != "")
            {
                foreach($dbdata as $data){
                    $info1 = ["index"=>$data->index, "settingfield"=>$data->settingfield, "id"=>$data->id, "name"=>$data->name, "itemdata"=>$data->itemdata];
                    if($data->index == $index)
                        array_push($lists, $info);
                    else
                        array_push($lists, $info1);
                }
            }
            $lists = json_encode($lists);
            $res = DB::connection($this->waaupdb)->table('systemuseraccount')->where('userid', $userid)->update(['general_add' => $lists]);
            $rows = DB::connection($this->waaupdb)->table('systemuseraccount')
                ->select(DB::connection($this->waaupdb)->raw('general_add'))
                ->where('userid', $userid)
                ->get()->first();
            $addData = $rows->general_add;
        }
        if($tabIndex == 2) {
            $dbdata = json_decode($rows->information_add);
            if($dbdata != null && $dbdata != "")
            {
                foreach($dbdata as $data){
                    $info1 = ["index"=>$data->index, "settingfield"=>$data->settingfield, "id"=>$data->id, "name"=>$data->name, "itemdata"=>$data->itemdata];
                    if($data->index == $index)
                        array_push($lists, $info);
                    else
                        array_push($lists, $info1);
                }
            }
            $lists = json_encode($lists);
            $res = DB::connection($this->waaupdb)->table('systemuseraccount')->where('userid', $userid)->update(['information_add' => $lists]);
            $rows = DB::connection($this->waaupdb)->table('systemuseraccount')
                ->select(DB::connection($this->waaupdb)->raw('information_add'))
                ->where('userid', $userid)
                ->get()->first();
            $addData = $rows->information_add;
        }
        if($tabIndex == 3) {
            $dbdata = json_decode($rows->senior_add);
            if($dbdata != null && $dbdata != "")
            {
                foreach($dbdata as $data){
                    $info1 = ["index"=>$data->index, "settingfield"=>$data->settingfield, "id"=>$data->id, "name"=>$data->name, "itemdata"=>$data->itemdata];
                    if($data->index == $index)
                        array_push($lists, $info);
                    else
                        array_push($lists, $info1);
                }
            }
            $lists = json_encode($lists);
            $res = DB::connection($this->waaupdb)->table('systemuseraccount')->where('userid', $userid)->update(['senior_add' => $lists]);
            $rows = DB::connection($this->waaupdb)->table('systemuseraccount')
                ->select(DB::connection($this->waaupdb)->raw('senior_add'))
                ->where('userid', $userid)
                ->get()->first();
            $addData = $rows->senior_add;
        }

        return \Response::json([
            "msg" => "ok",
            "addData" => $addData
        ]);
        exit();
    }
    public function deleteSystemUserAccountAddData(Request $request) {
        $userid = $request->post('userid');
        $tabIndex = $request->post('tabIndex');
        $index = $request->post('delIndex');

        $rows = DB::connection($this->waaupdb)->table('systemuseraccount')->where('userid', $userid)->get()->first();

        $lists = array();
        $addData = "";
        if($tabIndex == 1) {
            $dbdata = json_decode($rows->general_add);
            if($dbdata != null && $dbdata != "")
            {
                $i = 0;
                foreach($dbdata as $data){
                    $info1 = ["index"=>$i, "settingfield"=>$data->settingfield, "id"=>$data->id, "name"=>$data->name, "itemdata"=>$data->itemdata];
                    if($data->index != $index) {
                        array_push($lists, $info1);
                        $i++;
                    }
                }
            }
            if(count($lists) == 0)
                $lists = "";
            else
                $lists = json_encode($lists);
            $res = DB::connection($this->waaupdb)->table('systemuseraccount')->where('userid', $userid)->update(['general_add' => $lists]);
            $rows = DB::connection($this->waaupdb)->table('systemuseraccount')
                ->select(DB::connection($this->waaupdb)->raw('general_add'))
                ->where('userid', $userid)
                ->get()->first();
            $addData = $rows->general_add;
        }
        if($tabIndex == 2) {
            $dbdata = json_decode($rows->information_add);
            if($dbdata != null && $dbdata != "")
            {
                $i = 0;
                foreach($dbdata as $data){
                    $info1 = ["index"=>$i, "settingfield"=>$data->settingfield, "id"=>$data->id, "name"=>$data->name, "itemdata"=>$data->itemdata];
                    if($data->index != $index) {
                        array_push($lists, $info1);
                        $i++;
                    }
                }
            }
            if(count($lists) == 0)
                $lists = "";
            else
                $lists = json_encode($lists);
            $res = DB::connection($this->waaupdb)->table('systemuseraccount')->where('userid', $userid)->update(['information_add' => $lists]);
            $rows = DB::connection($this->waaupdb)->table('systemuseraccount')
                ->select(DB::connection($this->waaupdb)->raw('information_add'))
                ->where('userid', $userid)
                ->get()->first();
            $addData = $rows->information_add;
        }
        if($tabIndex == 3) {
            $dbdata = json_decode($rows->senior_add);
            if($dbdata != null && $dbdata != "")
            {
                $i = 0;
                foreach($dbdata as $data){
                    $info1 = ["index"=>$i, "settingfield"=>$data->settingfield, "id"=>$data->id, "name"=>$data->name, "itemdata"=>$data->itemdata];
                    if($data->index != $index) {
                        array_push($lists, $info1);
                        $i++;
                    }
                }
            }
            if(count($lists) == 0)
                $lists = "";
            else
                $lists = json_encode($lists);
            $res = DB::connection($this->waaupdb)->table('systemuseraccount')->where('userid', $userid)->update(['senior_add' => $lists]);
            $rows = DB::connection($this->waaupdb)->table('systemuseraccount')
                ->select(DB::connection($this->waaupdb)->raw('senior_add'))
                ->where('userid', $userid)
                ->get()->first();
            $addData = $rows->senior_add;
        }

        return \Response::json([
            "msg" => "ok",
            "addData" => $addData
        ]);
        exit();
    }

    public function getSUMRolesDepartment(Request $request){
        $userid = $request->post('userid');

        $rows = DB::connection($this->waaupdb)->table('systemusermanagedepartment')->where('userid', $userid)->orderBy('id')->get();

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows
        ]);
        exit();
    }

    private function getDepartmentPageList($userid, $pstart, $pcnt){
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $querystr = "SELECT id as fid, userid, name as fname, d_id as did,";
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
    public function getSUMRolesDepartmentList(Request $request){
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

    public function addSUMRolesDepartment(Request $request){
        $userid = $request->post('userid');
        $name = $request->post('name');
        $d_id = $request->post('d_id');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::connection($this->waaupdb)->table('systemusermanagedepartment')->insertGetId(
            ['userid' => $userid, 'name' => $name, 'd_id' => $d_id]
        );

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

    public function editSUMRolesDepartment(Request $request){
        $item_id = $request->post('item_id');
        $userid = $request->post('userid');
        $name = $request->post('name');
        $d_id = $request->post('d_id');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        DB::connection($this->waaupdb)->table('systemusermanagedepartment')->where([
            ['id', '=', $item_id],
            ['userid', '=', $userid]
        ])->update(['name'=>$name, 'd_id'=>$d_id]);

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

    public function deleteSUMRolesDepartment(Request $request){
        $userid = $request->post('userid');
        $id = $request->post('id');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        DB::connection($this->waaupdb)->table('systemusermanagedepartment')->whereRaw("id = ".$id." or d_id=".$id)->delete();

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

    private function getPositionPageList($userid, $pstart, $pcnt){
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $querystr = "SELECT id as fid, userid, name as fname, d_id as did,";
        $querystr .= "(SELECT name FROM systemusermanagedepartment WHERE id=did) AS d_name, ";
        $querystr .= "(SELECT count(id) FROM userinfo WHERE position=fid) AS number ";
        $querystr .= "FROM systemusermanageposition ";
        $querystr .= "where userid = ".$userid." ";
        $querystr .= "order by id asc ";
        $querystr .= "limit ".$pcnt." offset ".$pfrom;

        $rows = DB::connection($this->waaupdb)->select( DB::connection($this->waaupdb)->raw($querystr) );
        return $rows;
    }
    public function getSUMRolesPositionList(Request $request){
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
    public function addSUMRolesPosition(Request $request){
        $userid = $request->post('userid');
        $name = $request->post('name');
        $d_id = $request->post('d_id');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::connection($this->waaupdb)->table('systemusermanageposition')->insertGetId(
            ['userid' => $userid, 'name' => $name, 'd_id' => $d_id]
        );

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
    public function deleteSUMRolesPosition(Request $request){
        $userid = $request->post('userid');
        $id = $request->post('id');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        DB::connection($this->waaupdb)->table('systemusermanageposition')->whereRaw("id = ".$id)->delete();

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
    public function editSUMRolesPosition(Request $request){
        $item_id = $request->post('item_id');
        $userid = $request->post('userid');
        $name = $request->post('name');
        $d_id = $request->post('d_id');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        DB::connection($this->waaupdb)->table('systemusermanageposition')->where([
            ['id', '=', $item_id],
            ['userid', '=', $userid]
        ])->update(['name'=>$name, 'd_id'=>$d_id]);

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

    public function getSubRoleType(Request $request){
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

    public function getUserInfoList(Request $request){
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

    private function getGroupPageList($userid, $pstart, $pcnt){
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $sql = "SELECT id as fid, userid, name as fname, user_names, user_ids ";
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

    public function addSUMRolesGroup(Request $request){
        $userid = $request->post('userid');
        $group_name = $request->post('group_name');
        $group_user_ids = $request->post('group_user_ids');
        $group_user_names = $request->post('group_user_names');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $gu_ids = json_encode($group_user_ids);
        $gu_names = json_encode($group_user_names);

        $res = DB::connection($this->waaupdb)->table('systemusermanagegroup')->insertGetId(
            ['userid' => $userid, 'name' => $group_name, 'user_ids' => $gu_ids, 'user_names' => $gu_names]
        );

        foreach ($group_user_ids as $ids){
            $u_gids = array();
            $urows = DB::connection($this->waaupdb)->table("userinfo")->where("id", $ids)->get()->first();
            if($urows->rgroup != null && $urows->rgroup != "")
            {
                $rgroups = json_decode($urows->rgroup);
                foreach ($rgroups as $rg){
                    array_push($u_gids, $rg);
                }
            }

            array_push($u_gids, $res);
            $u_gids = json_encode($u_gids);
            DB::connection($this->waaupdb)->table('userinfo')->where('id', $ids)
                ->update(['rgroup'=>$u_gids]);
        }

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

    public function getSUMRolesGroup(Request $request){
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

    public function editSUMRolesGroup(Request $request){
        $gid = $request->post('gid');
        $userid = $request->post('userid');
        $group_name = $request->post('group_name');
        $group_user_ids = $request->post('group_user_ids');
        $group_user_names = $request->post('group_user_names');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $gu_ids = json_encode($group_user_ids);
        $gu_names = json_encode($group_user_names);

        DB::connection($this->waaupdb)->table('systemusermanagegroup')
            ->where('id', $gid)
            ->where('userid', $userid)
            ->update(['name' => $group_name, 'user_ids' => $gu_ids, 'user_names' => $gu_names]);

        $userinfos = DB::connection($this->waaupdb)->table("userinfo")->get();
        if($userinfos != null){
            foreach ($userinfos as $user){
                $groupid = array();
                if($user->rgroup != null && $user->rgroup != '') {
                    $gr = json_decode($user->rgroup);
                    foreach ($gr as $rg) {
                        if ($rg != $gid)
                            array_push($groupid, $rg);
                    }
                    $groupid = json_encode($groupid);
                    $sql = "UPDATE userinfo SET rgroup='".$groupid."' WHERE id=".$user->id;
                    DB::connection($this->waaupdb)->select(DB::connection($this->waaupdb)->raw($sql));
                }
            }
        }

        foreach ($group_user_ids as $ids){
            $u_gids = array();
            $urows = DB::connection($this->waaupdb)->table("userinfo")->where("id", $ids)->get()->first();
            if($urows->rgroup != null && $urows->rgroup != "")
            {
                $rgroups = json_decode($urows->rgroup);
                foreach ($rgroups as $rg){
                    if($rg != $gid)
                        array_push($u_gids, $rg);
                }
            }

            array_push($u_gids, $gid);
            $u_gids = json_encode($u_gids);
            DB::connection($this->waaupdb)->table('userinfo')->where('id', $ids)
                ->update(['rgroup'=>$u_gids]);
        }

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

    public function deleteSUMRolesGroup(Request $request){
        $gid = $request->post('gid');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');
        $group_user_ids = $request->post('group_user_ids');

        foreach ($group_user_ids as $ids){
            $u_gids = array();
            $urows = DB::connection($this->waaupdb)->table("userinfo")->where("id", $ids)->get()->first();
            if($urows != null) {
                if ($urows->rgroup != null && $urows->rgroup != "") {
                    $rgroups = json_decode($urows->rgroup);
                    foreach ($rgroups as $rg) {
                        if ($rg != $gid)
                            array_push($u_gids, $rg);
                    }
                    $u_gids = json_encode($u_gids);
                } else
                    $u_gids = '';

                DB::connection($this->waaupdb)->table('userinfo')->where('id', $ids)
                    ->update(['rgroup' => $u_gids]);
                DB::connection($this->waaupdb)->table('userinfo')->where('id', $ids)->where('rgroup', '[]')
                    ->update(['rgroup' => '']);
            }
        }

        DB::connection($this->waaupdb)->table('systemusermanagegroup')->where("id", $gid)->delete();

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

    public function showGroupUserInfo(Request $request){
        $g_uids = $request->post('g_uids');

        $lists = array();
        foreach ($g_uids as $uid){

            $sql = "SELECT id, name, department, position,";
            $sql .= "(SELECT name FROM systemusermanagedepartment WHERE id=department) AS d_name, ";
            $sql .= "(SELECT name FROM systemusermanageposition WHERE id=position) AS p_name ";
            $sql .= "FROM userinfo ";
            $sql .= "WHERE id = ".$uid." ";
            $sql .= "order by name asc ";
            $rows = DB::connection($this->waaupdb)->select( DB::connection($this->waaupdb)->raw($sql) );
            $info = ["name"=>$rows[0]->name, "d_name"=>$rows[0]->d_name, "p_name"=>$rows[0]->p_name];
            array_push($lists, $info);
        }

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists
        ]);
        exit();
    }

    public function allDeleteSUMRolesChecked(Request $request){
        $userid = $request->post('userid');
        $ids = $request->post('ids');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');
        $tabstatus = $request->post('tabstatus');

        if(count($ids) > 0) {
            foreach ($ids as $id) {
                if($tabstatus == 0) {
                    DB::connection($this->waaupdb)->table('systemusermanagedepartment')->whereRaw("id = ".$id." or d_id=".$id)->delete();
                }
                else if($tabstatus == 1) {
                    DB::connection($this->waaupdb)->table('systemusermanageposition')->whereRaw("id = ".$id)->delete();
                }
                else if($tabstatus == 2){
                    $u_gids = array();
                    $sql = "SELECT id, rgroup FROM userinfo WHERE rgroup IS NOT NULL AND rgroup != ''";
                    $urows = DB::connection($this->waaupdb)->select( DB::connection($this->waaupdb)->raw($sql) );
                    for($u = 0; $u < count($urows); $u++){
                        $u_gids = array();
                        $rgroups = json_decode($urows[$u]->rgroup);
                        foreach ($rgroups as $rg){
                            if($rg != $id)
                                array_push($u_gids, $rg);
                        }
                        if(count($u_gids) > 0)
                            $u_gids = json_encode($u_gids);
                        else
                            $u_gids = "";

                        DB::connection($this->waaupdb)->table('userinfo')->where('id', $urows[$u]->id)
                            ->update(['rgroup'=>$u_gids]);
                        DB::connection($this->waaupdb)->table('userinfo')->where('id', $urows[$u]->id)->where('rgroup', '[]')
                            ->update(['rgroup'=>'']);
                        DB::connection($this->waaupdb)->table('systemusermanagegroup')->where("id", $id)->delete();
                    }

                }
            }
        }
        $department_numbers = array();
        $position_numbers = array();
        $group_numbers = array();

        if($tabstatus == 0){
            $rows = $this->getDepartmentPageList($userid, $pstart, $pcnt);
            $total = $this->getAllListCount('systemusermanagedepartment', $userid);
        }
        else if($tabstatus == 1){
            $rows = $this->getPositionPageList($userid, $pstart, $pcnt);
            $total = $this->getAllListCount('systemusermanageposition', $userid);
        }
        else if($tabstatus == 2){
            $rows = $this->getGroupPageList($userid, $pstart, $pcnt);
            foreach ($rows as $row){
                array_push($department_numbers, $this->getDepartmentNumber($row->fid));
                array_push($position_numbers, $this->getPositionNumber($row->fid));
                array_push($group_numbers, $this->getGroupUserNumber($row->fid));
            }
            $total = $this->getAllListCount('systemusermanagegroup', $userid);
        }
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            "d_numbers" => $department_numbers,
            "p_numbers" => $position_numbers,
            "g_numbers" => $group_numbers
        ]);
        exit();
    }

}
