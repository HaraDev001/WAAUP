<?php

namespace App\Http\Controllers;

use App\Models\UserModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class DashAppsController extends BaseController
{
    /**
     * @var array|string|null
     */
    protected $tb_headcategory = "tb_headcategory";
    protected $tb_headtopheadercontent = "tb_headtopheadercontent";
    protected $tb_headheadcontent = "tb_headheadcontent";
    protected $tb_subheadcontent = "tb_subheadcontent";
    protected $tb_themecolor = "tb_themecolor";
    protected $tb_boxed = "tb_boxed";
    protected $tb_imageslider = "tb_imageslider";

    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    public function getAWAThemeColor(Request $request)
    {
        $userid = $request->post('userid');
        return $this->getColor($userid, "", 'dash');
    }
    public function addAWAThemeColor(Request $request)
    {
        $userid = $request->post('userid');
        $color = $request->post('color');
        $contentdata = $request->post('contentdata');
        $data = DB::connection($this->waaupapps)->table($this->tb_themecolor)->where('user_id', $userid)->get()->first();
        if($data != null) {
            $lists = json_decode($data->color_info);
            if(count($lists) == 0)
                $index = 1;
            else
                $index = (int)$lists[count($lists)-1]->colorid + 1;
            $info = ["colorid"=>$index, "colorinfo"=>$color, "contentdata"=>$contentdata];
            array_push($lists, $info);
            $lists = json_encode($lists);
            DB::connection($this->waaupapps)->table($this->tb_themecolor)->where('user_id', $userid)->update(['color_info'=>$lists]);
        }else{
            $arr_res = array();
            $arr_res[0] = array(
                'colorid' => 1,
                'colorinfo' => $color,
                'contentdata' =>$contentdata
            );
            $arr_res = json_encode($arr_res);
            DB::connection($this->waaupapps)->table($this->tb_themecolor)->insertGetId(
                ['user_id' => $userid, 'color_info' => $arr_res]
            );
        }

        return $this->getColor($userid, "", 'dash');
    }
    public function delAWAThemeColor(Request $request)
    {
        $userid = $request->post('userid');
        $colorid = $request->post('colorid');

        $data = DB::connection($this->waaupapps)->table($this->tb_themecolor)->where('user_id', $userid)->get()->first();

        $lists = json_decode($data->color_info);
        $newinfo = array();
        $sel_color = $data->sel_color;
        $reset = "";
        foreach($lists as $cinfo){
            if($cinfo->colorid != $colorid)
                array_push($newinfo, $cinfo);
            if($cinfo->colorinfo == $sel_color) {
                $sel_color = "#d8be8f";
                //$sel_color = "#d8ac0e";
                $reset = $sel_color;
            }
        }
        $lists = json_encode($newinfo);
        DB::connection($this->waaupapps)->table($this->tb_themecolor)->where('user_id', $userid)->update(['color_info'=>$lists, 'sel_color'=>$sel_color]);

        return $this->getColor($userid, $reset, 'dash');
    }

    public function addAWAHeadCategory(Request $request)
    {
        $userid = $request->post('userid');
        $sc_id = (int)$request->post('sc_id') + 1;
        $category_name = $request->post('category_name');
        $tabstatus = $request->post('tabstatus');
        $field1 = "";
        $field2 = "";

        if($tabstatus == 0){
            $field1 = "topheadercategory";
            $field2 = "topheadercategory_id";
        }
        else if($tabstatus == 1){
            $field1 = "headheadercategory";
            $field2 = "headheadercategory_id";
        }
        else if($tabstatus == 2){
            $field1 = "subheadercategory";
            $field2 = "subheadercategory_id";
        }


        $rows = DB::connection($this->waaupapps)->table($this->tb_headcategory)->where("userid", $userid)->get()->first();

        $lists = array();
        $info = ["scid"=>$sc_id, "scname"=>$category_name];

        if($rows == null){
            array_push($lists, $info);
            $lists = json_encode($lists);
            $res = DB::connection($this->waaupapps)->table($this->tb_headcategory)->insertGetId(
                ['userid' => $userid, $field1 => $lists, $field2=>$sc_id]
            );
        }
        else{
            if($tabstatus == 0){
                $lists = json_decode($rows->topheadercategory);
            }
            else if($tabstatus == 1){
                $lists = json_decode($rows->headheadercategory);
            }
            else if($tabstatus == 2){
                $lists = json_decode($rows->subheadercategory);
            }

            if($lists == null || $lists == '')
                $lists = array();

            array_push($lists, $info);
            $lists = json_encode($lists);
            $res = DB::connection($this->waaupapps)->table($this->tb_headcategory)
                ->where('userid', $userid)
                ->update([$field1 => $lists, $field2=>$sc_id]);
        }

        $rows = DB::connection($this->waaupapps)->table($this->tb_headcategory)->where("userid", $userid)->get()->first();
        if($tabstatus == 0){
            $lists = json_decode($rows->topheadercategory);
            $sc_id = $rows->topheadercategory_id;
        }
        else if($tabstatus == 1){
            $lists = json_decode($rows->headheadercategory);
            $sc_id = $rows->headheadercategory_id;
        }
        else if($tabstatus == 2){
            $lists = json_decode($rows->subheadercategory);
            $sc_id = $rows->subheadercategory_id;
        }

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "scid" => $sc_id
        ]);

        exit();
    }
    public function getAWACategoryList(Request $request)
    {
        $userid = $request->post('userid');
        $sc_id = $request->post('sc_id');
        $tabstatus = $request->post('tabstatus');

        $rows = DB::connection($this->waaupapps)->table($this->tb_headcategory)->where("userid", $userid)->get()->first();
        $lists = array();
        $selimg = 0;
        if($rows != null) {
            if($tabstatus == 0){
                $lists = json_decode($rows->topheadercategory);
                $sc_id = $rows->topheadercategory_id;
                $selimg = $rows->topheaderbackground;
            }
            else if($tabstatus == 1){
                $lists = json_decode($rows->headheadercategory);
                $sc_id = $rows->headheadercategory_id;
                $selimg = $rows->headheaderbackground;
            }
            else if($tabstatus == 2){
                $lists = json_decode($rows->subheadercategory);
                $sc_id = $rows->subheadercategory_id;
                $selimg = $rows->subheaderbackground;
            }
        }

        $texts = DB::connection($this->waaupdb)->table("sitefieldtext")->orderBy("id")->get();

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "scid" => $sc_id,
            "selimg" => $selimg,
            "texts" => $texts
        ]);

        exit();
    }
    public function setAWAHeadBackground(Request $request)
    {
        $userid = $request->post('userid');
        $imgstyle_id = $request->post('imgstyle_id');
        $tabstatus = $request->post('tabstatus');
        $field = "";

        if($tabstatus == 0){
            $field = "topheaderbackground";
        }
        else if($tabstatus == 1){
            $field = "headheaderbackground";
        }
        else if($tabstatus == 2){
            $field = "subheaderbackground";
        }

        $rows = DB::connection($this->waaupapps)->table($this->tb_headcategory)->where("userid", $userid)->get()->first();

        if($rows == null){
            $res = DB::connection($this->waaupapps)->table($this->tb_headcategory)->insertGetId(
                ['userid' => $userid, $field=>$imgstyle_id]
            );
        }
        else{
            $res = DB::connection($this->waaupapps)->table($this->tb_headcategory)
                ->where('userid', $userid)
                ->update([$field => $imgstyle_id]);
        }

        $rows = DB::connection($this->waaupdb)->table("sitelogoimgstyle")->where("id", $imgstyle_id)->get()->first();
        if($rows) {
            return \Response::json([
                "msg" => "ok",
                "lists" => $rows
            ]);
        }
        exit();
    }
    public function saveAWAHeadCategory(Request $request)
    {
        $sc_id = $request->post('sc_id');
        $userid = $request->post('userid');
        $sc_name = $request->post('sc_name');
        $tabstatus = $request->post('tabstatus');
        $field = "";

        if($tabstatus == 0){
            $field = "topheadercategory";
        }
        else if($tabstatus == 1){
            $field = "headheadercategory";
        }
        else if($tabstatus == 2){
            $field = "subheadercategory";
        }

        $data = array();
        $rows = DB::connection($this->waaupapps)->table($this->tb_headcategory)->where("userid", $userid)->get()->first();
        $lists = array();
        if($tabstatus == 0){
            $lists = json_decode($rows->topheadercategory);
        }
        else if($tabstatus == 1){
            $lists = json_decode($rows->headheadercategory);
        }
        else if($tabstatus == 2){
            $lists = json_decode($rows->subheadercategory);
        }
        foreach ($lists as $list){
            $info = ["scid"=>$list->scid, "scname"=>$list->scname];
            if($list->scid == $sc_id){
                $info = ["scid"=>$sc_id, "scname"=>$sc_name];
            }
            array_push($data, $info);
        }

        $lists = json_encode($data);
        $res = DB::connection($this->waaupapps)->table($this->tb_headcategory)
            ->where('userid', $userid)
            ->update([$field => $lists]);

        $rows = DB::connection($this->waaupapps)->table($this->tb_headcategory)->where("userid", $userid)->get()->first();
        if($tabstatus == 0){
            $lists = json_decode($rows->topheadercategory);
            $sc_id = $rows->topheadercategory_id;
        }
        else if($tabstatus == 1){
            $lists = json_decode($rows->headheadercategory);
            $sc_id = $rows->headheadercategory_id;
        }
        else if($tabstatus == 2){
            $lists = json_decode($rows->subheadercategory);
            $sc_id = $rows->subheadercategory_id;
        }

        if($res) {
            return \Response::json([
                "msg" => "ok",
                "lists" => $lists,
                "scid" => $sc_id
            ]);
        }
        exit();
    }
    public function deleteAWAHeadCategory(Request $request)
    {
        $sc_id = $request->post('sc_id');
        $userid = $request->post('userid');
        $tabstatus = $request->post('tabstatus');
        $field = "";

        if($tabstatus == 0){
            $field = "topheadercategory";
        }
        else if($tabstatus == 1){
            $field = "headheadercategory";
        }
        else if($tabstatus == 2){
            $field = "subheadercategory";
        }
        $data = array();
        $rows = DB::connection($this->waaupapps)->table($this->tb_headcategory)->where("userid", $userid)->get()->first();
        $lists = array();
        if($tabstatus == 0){
            $lists = json_decode($rows->topheadercategory);
        }
        else if($tabstatus == 1){
            $lists = json_decode($rows->headheadercategory);
        }
        else if($tabstatus == 2){
            $lists = json_decode($rows->subheadercategory);
        }

        foreach ($lists as $list){
            if($list->scid != $sc_id){
                $info = ["scid"=>$list->scid, "scname"=>$list->scname];
                array_push($data, $info);
            }
        }

        $lists = json_encode($data);
        $res = DB::connection($this->waaupapps)->table($this->tb_headcategory)
            ->where('userid', $userid)
            ->update([$field => $lists]);

        $rows = DB::connection($this->waaupapps)->table($this->tb_headcategory)->where("userid", $userid)->get()->first();
        if($tabstatus == 0){
            $lists = json_decode($rows->topheadercategory);
            $sc_id = $rows->topheadercategory_id;
        }
        else if($tabstatus == 1){
            $lists = json_decode($rows->headheadercategory);
            $sc_id = $rows->headheadercategory_id;
        }
        else if($tabstatus == 2){
            $lists = json_decode($rows->subheadercategory);
            $sc_id = $rows->subheadercategory_id;
        }

        if($res) {
            return \Response::json([
                "msg" => "ok",
                "lists" => $lists,
                "scid" => $sc_id
            ]);
        }
        exit();
    }
    public function showAWAHeadBlocksList(Request $request)
    {
        $rows = DB::connection($this->waaupapps)->table('tb_blocks')->get();
        if($rows == null)
            $rows = "";

        return \Response::json([
            "msg" => "ok",
            "lists" => json_encode($rows)
        ]);

        exit();
    }
    private function getTopheaderCategoryList($userid, $rows){
        $crows = DB::connection($this->waaupapps)->table($this->tb_headcategory)
            //->where("userid", $userid)
            ->get()->first();
        $clists = array();
        if($crows != null && $crows != "")
            $clists = json_decode($crows->topheadercategory);
        $category_list = array();
        foreach ($rows as $row){
            foreach ($clists as $clist){
                if($row->scid == $clist->scid){
                    array_push($category_list, $clist->scname);
                    continue;
                }
            }
        }
        return $category_list;
    }
    private function getTopheaderContentList($device, $search_id, $search_txt, $pstart, $pcnt, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $sql = "SELECT * FROM ".$this->tb_headtopheadercontent." ";
        $sql .= "WHERE device = '".$device."' ";
        if($search_id > 0 && $search_txt != null && $search_txt != ""){
            $sql .= "AND scid=".$search_id." AND name like '%".$search_txt."%' ";
        }
        if($search_id == 0 && $search_txt != null && $search_txt != ""){
            $sql .= "AND name like '%".$search_txt."%' ";
        }
        if($search_id > 0 && ($search_txt == null || $search_txt == "")){
            $sql .= "AND scid =".$search_id." ";
        }
        $sql .= "ORDER BY id ASC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::connection($this->waaupapps)->select( DB::connection($this->waaupapps)->raw($sql) );
        return $rows;
    }
    public function getAWAHeadTopheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $device = $request->post('device');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $rows = $this->getTopheaderContentList($device, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getTopheaderContentList($device, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getTopheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }
    public function setAWAHeadTopheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $device = $request->post('device');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $modal_content_name = $request->post('modal_content_name');
        $modal_category_id = $request->post('modal_category_id');
        $modal_maxwidth = $request->post('modal_maxwidth');
        $modal_padding = $request->post('modal_padding');
        $modal_background_image = $request->post('modal_background_image');
        $modal_background_color = $request->post('modal_background_color');
        $modal_fixed_check = $request->post('modal_fixed_check');
        $modal_top_height = $request->post('modal_top_height');
        $modal_left_padding = $request->post('modal_left_padding');
        $modal_left_align = $request->post('modal_left_align');
        $modal_left_blocks = $request->post('modal_left_blocks');
        $modal_right_padding = $request->post('modal_right_padding');
        $modal_right_align = $request->post('modal_right_align');
        $modal_right_blocks = $request->post('modal_right_blocks');
        $modal_bottom_height = $request->post('modal_bottom_height');
        $modal_bottom_padding = $request->post('modal_bottom_padding');
        $modal_bottom_align = $request->post('modal_bottom_align');
        $modal_bottom_blocks = $request->post('modal_bottom_blocks');

        $res = DB::connection($this->waaupapps)->table($this->tb_headtopheadercontent)
            ->insertGetId([
                    'device' => $device,
                    'name'=>$modal_content_name,
                    'scid'=>$modal_category_id,
                    'maxwidth'=>$modal_maxwidth,
                    'padding'=>$modal_padding,
                    'bg_img'=>$modal_background_image,
                    'bg_color'=>$modal_background_color,
                    'fixed'=>$modal_fixed_check,
                    'top_height'=>$modal_top_height,
                    'left_padding'=>$modal_left_padding,
                    'right_padding'=>$modal_right_padding,
                    'left_align'=>$modal_left_align,
                    'right_align'=>$modal_right_align,
                    'left_blocks'=>$modal_left_blocks,
                    'right_blocks'=>$modal_right_blocks,
                    'bottom_height'=>$modal_bottom_height,
                    'bottom_padding'=>$modal_bottom_padding,
                    'bottom_align'=>$modal_bottom_align,
                    'bottom_blocks'=>$modal_bottom_blocks
                ]
            );

        $rows = $this->getTopheaderContentList($device, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getTopheaderContentList($device, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getTopheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }
    public function editAWAHeadTopheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $device = $request->post('device');
        $editid = $request->post('editid');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');
        $modal_content_name = $request->post('modal_content_name');
        $modal_category_id = $request->post('modal_category_id');
        $modal_left_bar = json_encode($request->post('modal_left_bar'));
        $modal_left_bar_num = json_encode($request->post('modal_left_bar_num'));
        $modal_right_bar = json_encode($request->post('modal_right_bar'));
        $modal_right_bar_num = json_encode($request->post('modal_right_bar_num'));
        $modal_fixed_check = $request->post('modal_fixed_check');
        $modal_bgcolor_check = $request->post('modal_bgcolor_check');
        $modal_padding = $request->post('modal_padding');
        $modal_text_id = $request->post('modal_text_id');
        $modal_text_size = $request->post('modal_text_size');
        $modal_text_color = $request->post('modal_text_color');
        $modal_background_image = $request->post('modal_background_image');
        $modal_background_color = $request->post('modal_background_color');

        $res = DB::connection($this->waaupapps)->table($this->tb_headtopheadercontent)
            ->where('device', $device)
            ->where('id', $editid)
            ->update([
                    'name'=>$modal_content_name,
                    'scid'=>$modal_category_id,
                    'leftbar'=>$modal_left_bar,
                    'leftbar_num'=>$modal_left_bar_num,
                    'rightbar'=>$modal_right_bar,
                    'rightbar_num'=>$modal_right_bar_num,
                    'fixed'=>$modal_fixed_check,
                    'padding'=>$modal_padding,
                    'text'=>$modal_text_id,
                    'text_size'=>$modal_text_size,
                    'text_color'=>$modal_text_color,
                    'bg_img'=>$modal_background_image,
                    'bg_color'=>$modal_background_color,
                    'bg_color_check'=>$modal_bgcolor_check
                ]
            );

        $rows = $this->getTopheaderContentList($device, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getTopheaderContentList($device, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getTopheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }
    public function showAWAHeadTopheaderContentItem(Request $request)
    {
        $userid = $request->post('userid');
        $id = $request->post('id');

        $rows = DB::connection($this->waaupapps)->table($this->tb_headtopheadercontent)
            //->where("userid", $userid)
            ->where("id", $id)
            ->get()->first();
        if($rows == null)
            $rows = "";

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows
        ]);

        exit();
    }
    public function deleteAWAHeadTopheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $device = $request->post('device');
        $id = $request->post('id');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        DB::connection($this->waaupapps)->table($this->tb_topheadcontent)->whereRaw("id = ".$id)->delete();

        $rows = $this->getTopheaderContentList($device, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getTopheaderContentList($device, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getTopheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }
    public function allDeleteAWATopheaderChecked(Request $request)
    {
        $userid = $request->post('userid');
        $device = $request->post('device');
        $ids = $request->post('ids');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        if(count($ids) > 0) {
            foreach ($ids as $id) {
                DB::connection($this->waaupapps)->table($this->tb_topheadcontent)->whereRaw("id = ".$id)->delete();
            }
        }

        $rows = $this->getTopheaderContentList($device, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getTopheaderContentList($device, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getTopheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }

    private function getHeadheaderCategoryList($userid, $rows){
        $crows = DB::connection($this->waaupapps)->table($this->tb_headcategory)->where("userid", $userid)->get()->first();
        $clists = array();
        if($crows != null && $crows != "")
            $clists = json_decode($crows->headheadercategory);
        $category_list = array();
        foreach ($rows as $row){
            foreach ($clists as $clist){
                if($row->scid == $clist->scid){
                    array_push($category_list, $clist->scname);
                    continue;
                }
            }
        }
        return $category_list;
    }
    private function getHeadheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $sql = "SELECT * FROM ".$this->tb_headheadcontent." ";
        $sql .= "WHERE userid=".$userid." ";
        if($search_id > 0 && $search_txt != null && $search_txt != ""){
            $sql .= "AND scid=".$search_id." AND name like '%".$search_txt."%' ";
        }
        if($search_id == 0 && $search_txt != null && $search_txt != ""){
            $sql .= "AND name like '%".$search_txt."%' ";
        }
        if($search_id > 0 && ($search_txt == null || $search_txt == "")){
            $sql .= "AND scid =".$search_id." ";
        }
        $sql .= "ORDER BY id ASC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::connection($this->waaupapps)->select( DB::connection($this->waaupapps)->raw($sql) );
        return $rows;
    }
    public function getAWAHeadHeadheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $rows = $this->getHeadheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getHeadheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getHeadheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }
    public function setAWAHeadHeadheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');
        $modal_content_name = $request->post('modal_content_name');
        $modal_category_id = $request->post('modal_category_id');
        $modal_left_bar = json_encode($request->post('modal_left_bar'));
        $modal_left_bar_num = json_encode($request->post('modal_left_bar_num'));
        $modal_middle_bar = json_encode($request->post('modal_middle_bar'));
        $modal_middle_bar_num = json_encode($request->post('modal_middle_bar_num'));
        $modal_right_bar = json_encode($request->post('modal_right_bar'));
        $modal_right_bar_num = json_encode($request->post('modal_right_bar_num'));
        $modal_fixed_check = $request->post('modal_fixed_check');
        $modal_bgcolor_check = $request->post('modal_bgcolor_check');
        $modal_padding = $request->post('modal_padding');
        $modal_text_id = $request->post('modal_text_id');
        $modal_text_size = $request->post('modal_text_size');
        $modal_text_color = $request->post('modal_text_color');
        $modal_background_image = $request->post('modal_background_image');
        $modal_background_color = $request->post('modal_background_color');
        $modal_left_bg = $request->post('modal_left_bg');
        $modal_left_color = $request->post('modal_left_color');
        $modal_left_check = $request->post('modal_left_check');
        $modal_middle_bg = $request->post('modal_middle_bg');
        $modal_middle_color = $request->post('modal_middle_color');
        $modal_middle_check = $request->post('modal_middle_check');
        $modal_right_bg = $request->post('modal_right_bg');
        $modal_right_color = $request->post('modal_right_color');
        $modal_right_check = $request->post('modal_right_check');

        $res = DB::connection($this->waaupapps)->table($this->tb_headheadcontent)
            ->insertGetId([
                    'userid' => $userid,
                    'name'=>$modal_content_name,
                    'scid'=>$modal_category_id,
                    'leftbar'=>$modal_left_bar,
                    'leftbar_num'=>$modal_left_bar_num,
                    'middlebar'=>$modal_middle_bar,
                    'middlebar_num'=>$modal_middle_bar_num,
                    'rightbar'=>$modal_right_bar,
                    'rightbar_num'=>$modal_right_bar_num,
                    'fixed'=>$modal_fixed_check,
                    'padding'=>$modal_padding,
                    'text'=>$modal_text_id,
                    'text_size'=>$modal_text_size,
                    'text_color'=>$modal_text_color,
                    'bg_img'=>$modal_background_image,
                    'bg_color'=>$modal_background_color,
                    'bg_color_check'=>$modal_bgcolor_check,
                    'left_bg'=>$modal_left_bg,
                    'left_color'=>$modal_left_color,
                    'left_check'=>$modal_left_check,
                    'middle_bg'=>$modal_middle_bg,
                    'middle_color'=>$modal_middle_color,
                    'middle_check'=>$modal_middle_check,
                    'right_bg'=>$modal_right_bg,
                    'right_color'=>$modal_right_color,
                    'right_check'=>$modal_right_check]
            );

        $rows = $this->getHeadheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getHeadheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getHeadheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }
    public function editAWAHeadHeadheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $editid = $request->post('editid');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');
        $modal_content_name = $request->post('modal_content_name');
        $modal_category_id = $request->post('modal_category_id');
        $modal_left_bar = json_encode($request->post('modal_left_bar'));
        $modal_left_bar_num = json_encode($request->post('modal_left_bar_num'));
        $modal_middle_bar = json_encode($request->post('modal_middle_bar'));
        $modal_middle_bar_num = json_encode($request->post('modal_middle_bar_num'));
        $modal_right_bar = json_encode($request->post('modal_right_bar'));
        $modal_right_bar_num = json_encode($request->post('modal_right_bar_num'));
        $modal_fixed_check = $request->post('modal_fixed_check');
        $modal_bgcolor_check = $request->post('modal_bgcolor_check');
        $modal_padding = $request->post('modal_padding');
        $modal_text_id = $request->post('modal_text_id');
        $modal_text_size = $request->post('modal_text_size');
        $modal_text_color = $request->post('modal_text_color');
        $modal_background_image = $request->post('modal_background_image');
        $modal_background_color = $request->post('modal_background_color');
        $modal_left_bg = $request->post('modal_left_bg');
        $modal_left_color = $request->post('modal_left_color');
        $modal_left_check = $request->post('modal_left_check');
        $modal_middle_bg = $request->post('modal_middle_bg');
        $modal_middle_color = $request->post('modal_middle_color');
        $modal_middle_check = $request->post('modal_middle_check');
        $modal_right_bg = $request->post('modal_right_bg');
        $modal_right_color = $request->post('modal_right_color');
        $modal_right_check = $request->post('modal_right_check');

        $res = DB::connection($this->waaupapps)->table($this->tb_headheadcontent)
            ->where('userid', $userid)
            ->where('id', $editid)
            ->update([
                    'name'=>$modal_content_name,
                    'scid'=>$modal_category_id,
                    'leftbar'=>$modal_left_bar,
                    'leftbar_num'=>$modal_left_bar_num,
                    'middlebar'=>$modal_middle_bar,
                    'middlebar_num'=>$modal_middle_bar_num,
                    'rightbar'=>$modal_right_bar,
                    'rightbar_num'=>$modal_right_bar_num,
                    'fixed'=>$modal_fixed_check,
                    'padding'=>$modal_padding,
                    'text'=>$modal_text_id,
                    'text_size'=>$modal_text_size,
                    'text_color'=>$modal_text_color,
                    'bg_img'=>$modal_background_image,
                    'bg_color'=>$modal_background_color,
                    'bg_color_check'=>$modal_bgcolor_check,
                    'left_bg'=>$modal_left_bg,
                    'left_color'=>$modal_left_color,
                    'left_check'=>$modal_left_check,
                    'middle_bg'=>$modal_middle_bg,
                    'middle_color'=>$modal_middle_color,
                    'middle_check'=>$modal_middle_check,
                    'right_bg'=>$modal_right_bg,
                    'right_color'=>$modal_right_color,
                    'right_check'=>$modal_right_check]
            );

        $rows = $this->getHeadheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getHeadheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getHeadheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }
    public function showAWAHeadHeadheaderContentItem(Request $request)
    {
        $userid = $request->post('userid');
        $id = $request->post('id');

        $rows = DB::connection($this->waaupapps)->table($this->tb_headheadcontent)
            ->where("userid", $userid)
            ->where("id", $id)
            ->get()->first();
        if($rows == null)
            $rows = "";

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows
        ]);

        exit();
    }
    public function deleteAWAHeadHeadheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $id = $request->post('id');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        DB::connection($this->waaupapps)->table($this->tb_headheadcontent)->whereRaw("id = ".$id)->delete();

        $rows = $this->getHeadheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getHeadheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getHeadheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }
    public function allDeleteAWAHeadheaderChecked(Request $request)
    {
        $userid = $request->post('userid');
        $ids = $request->post('ids');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        if(count($ids) > 0) {
            foreach ($ids as $id) {
                DB::connection($this->waaupapps)->table($this->tb_headheadcontent)->whereRaw("id = ".$id)->delete();
            }
        }

        $rows = $this->getHeadheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getHeadheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getHeadheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }

    private function getSubheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $sql = "SELECT * FROM ".$this->tb_subheadcontent." ";
        $sql .= "WHERE userid=".$userid." ";
        if($search_id > 0 && $search_txt != null && $search_txt != ""){
            $sql .= "AND scid=".$search_id." AND name like '%".$search_txt."%' ";
        }
        if($search_id == 0 && $search_txt != null && $search_txt != ""){
            $sql .= "AND name like '%".$search_txt."%' ";
        }
        if($search_id > 0 && ($search_txt == null || $search_txt == "")){
            $sql .= "AND scid =".$search_id." ";
        }
        $sql .= "ORDER BY id ASC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::connection($this->waaupapps)->select( DB::connection($this->waaupapps)->raw($sql) );
        return $rows;
    }
    private function getSubheaderCategoryList($userid, $rows){
        $crows = DB::connection($this->waaupapps)->table($this->tb_headcategory)->where("userid", $userid)->get()->first();
        $clists = array();
        if($crows != null && $crows != "")
            $clists = json_decode($crows->subheadercategory);
        $category_list = array();
        foreach ($rows as $row){
            foreach ($clists as $clist){
                if($row->scid == $clist->scid){
                    array_push($category_list, $clist->scname);
                    continue;
                }
            }
        }
        return $category_list;
    }
    public function getAWAHeadSubheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $rows = $this->getSubheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getSubheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getSubheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }
    public function setAWAHeadSubheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');
        $modal_content_name = $request->post('modal_content_name');
        $modal_category_id = $request->post('modal_category_id');
        $modal_style = $request->post('modal_style');
        $modal_breadcrumbs_hide_check = $request->post('modal_breadcrumbs_hide_check');
        $modal_title_hide_check = $request->post('modal_title_hide_check');
        $hide_check = $modal_breadcrumbs_hide_check.":".$modal_title_hide_check;
        $modal_fixed_check = $request->post('modal_fixed_check');
        $modal_bgcolor_check = $request->post('modal_bgcolor_check');
        $modal_padding = $request->post('modal_padding');
        $modal_pagetitle_id = $request->post('modal_pagetitle_id');
        $modal_pagetitle_size = $request->post('modal_pagetitle_size');
        $modal_pagetitle_color = $request->post('modal_pagetitle_color');
        $modal_breadcrumbs_id = $request->post('modal_breadcrumbs_id');
        $modal_breadcrumbs_size = $request->post('modal_breadcrumbs_size');
        $modal_breadcrumbs_color = $request->post('modal_breadcrumbs_color');
        $modal_background_image = $request->post('modal_background_image');
        $modal_background_color = $request->post('modal_background_color');

        $res = DB::connection($this->waaupapps)->table($this->tb_subheadcontent)
            ->insertGetId([
                    'userid' => $userid,
                    'name'=>$modal_content_name,
                    'scid'=>$modal_category_id,
                    'style'=>$modal_style,
                    'hide'=>$hide_check,
                    'fixed'=>$modal_fixed_check,
                    'padding'=>$modal_padding,
                    'pagetitle'=>$modal_pagetitle_id,
                    'pagetitle_size'=>$modal_pagetitle_size,
                    'pagetitle_color'=>$modal_pagetitle_color,
                    'breadcrumbs'=>$modal_breadcrumbs_id,
                    'breadcrumbs_size'=>$modal_breadcrumbs_size,
                    'breadcrumbs_color'=>$modal_breadcrumbs_color,
                    'bg_img'=>$modal_background_image,
                    'bg_color'=>$modal_background_color,
                    'bg_color_check'=>$modal_bgcolor_check
                ]
        );


        $rows = $this->getSubheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getSubheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getSubheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }
    public function editAWAHeadSubheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $editid = $request->post('editid');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');
        $modal_content_name = $request->post('modal_content_name');
        $modal_category_id = $request->post('modal_category_id');
        $modal_style = $request->post('modal_style');
        $modal_breadcrumbs_hide_check = $request->post('modal_breadcrumbs_hide_check');
        $modal_title_hide_check = $request->post('modal_title_hide_check');
        $hide_check = $modal_breadcrumbs_hide_check.":".$modal_title_hide_check;
        $modal_fixed_check = $request->post('modal_fixed_check');
        $modal_bgcolor_check = $request->post('modal_bgcolor_check');
        $modal_padding = $request->post('modal_padding');
        $modal_pagetitle_id = $request->post('modal_pagetitle_id');
        $modal_pagetitle_size = $request->post('modal_pagetitle_size');
        $modal_pagetitle_color = $request->post('modal_pagetitle_color');
        $modal_breadcrumbs_id = $request->post('modal_breadcrumbs_id');
        $modal_breadcrumbs_size = $request->post('modal_breadcrumbs_size');
        $modal_breadcrumbs_color = $request->post('modal_breadcrumbs_color');
        $modal_background_image = $request->post('modal_background_image');
        $modal_background_color = $request->post('modal_background_color');

        $res = DB::connection($this->waaupapps)->table($this->tb_subheadcontent)
            ->where('userid', $userid)
            ->where('id', $editid)
            ->update([
                    'name'=>$modal_content_name,
                    'scid'=>$modal_category_id,
                    'style'=>$modal_style,
                    'hide'=>$hide_check,
                    'fixed'=>$modal_fixed_check,
                    'padding'=>$modal_padding,
                    'pagetitle'=>$modal_pagetitle_id,
                    'pagetitle_size'=>$modal_pagetitle_size,
                    'pagetitle_color'=>$modal_pagetitle_color,
                    'breadcrumbs'=>$modal_breadcrumbs_id,
                    'breadcrumbs_size'=>$modal_breadcrumbs_size,
                    'breadcrumbs_color'=>$modal_breadcrumbs_color,
                    'bg_img'=>$modal_background_image,
                    'bg_color'=>$modal_background_color,
                    'bg_color_check'=>$modal_bgcolor_check]
            );


        $rows = $this->getSubheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getSubheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getSubheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }
    public function showAWAHeadSubheaderContentItem(Request $request)
    {
        $userid = $request->post('userid');
        $id = $request->post('id');

        $rows = DB::connection($this->waaupapps)->table($this->tb_subheadcontent)
            ->where("userid", $userid)
            ->where("id", $id)
            ->get()->first();
        if($rows == null)
            $rows = "";

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows
        ]);

        exit();
    }
    public function deleteAWAHeadSubheaderContentList(Request $request)
    {
        $userid = $request->post('userid');
        $id = $request->post('id');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        DB::connection($this->waaupapps)->table($this->tb_subheadcontent)->whereRaw("id = ".$id)->delete();

        $rows = $this->getSubheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getSubheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getSubheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }
    public function allDeleteAWASubheaderChecked(Request $request)
    {
        $userid = $request->post('userid');
        $ids = $request->post('ids');
        $search_id = $request->post('search_id');
        $search_txt = $request->post('search_txt');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        if(count($ids) > 0) {
            foreach ($ids as $id) {
                DB::connection($this->waaupapps)->table($this->tb_subheadcontent)->whereRaw("id = ".$id)->delete();
            }
        }

        $rows = $this->getSubheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 0);
        $total = count($this->getSubheaderContentList($userid, $search_id, $search_txt, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $category_list = $this->getSubheaderCategoryList($userid, $rows);

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'category_list' => $category_list
        ]);

        exit();
    }

    private function getBoxedList($userid, $pstart, $pcnt, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $sql = "SELECT * FROM ".$this->tb_boxed." ";
        $sql .= "WHERE userid=".$userid." ";
        $sql .= "ORDER BY id ASC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::connection($this->waaupapps)->select( DB::connection($this->waaupapps)->raw($sql) );
        return $rows;
    }
    public function addAWAThemeBoxedList(Request $request)
    {
        $userid = $request->post('userid');
        $name = $request->post('name');
        $padding = $request->post('padding');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::connection($this->waaupapps)->table($this->tb_boxed)
            ->insertGetId([
                    'userid' => $userid,
                    'name'=>$name,
                    'padding'=>$padding]
            );

        $lists = $this->getBoxedList($userid, $pstart, $pcnt, 0);
        $total = count($this->getBoxedList($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function getAWAThemeBoxedList(Request $request)
    {
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $lists = $this->getBoxedList($userid, $pstart, $pcnt, 0);
        $total = count($this->getBoxedList($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function editAWAThemeBoxedList(Request $request)
    {
        $userid = $request->post('userid');
        $editid = $request->post('editid');
        $name = $request->post('name');
        $padding = $request->post('padding');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::connection($this->waaupapps)->table($this->tb_boxed)
            ->where('userid', $userid)
            ->where('id', $editid)
            ->update([
                    'name'=>$name,
                    'padding'=>$padding]
            );

        $lists = $this->getBoxedList($userid, $pstart, $pcnt, 0);
        $total = count($this->getBoxedList($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function deleteAWAThemeBoxedList(Request $request)
    {
        $userid = $request->post('userid');
        $deleteid = $request->post('deleteid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::connection($this->waaupapps)->table($this->tb_boxed)
            ->where('userid', $userid)
            ->where('id', $deleteid)
            ->delete();

        $lists = $this->getBoxedList($userid, $pstart, $pcnt, 0);
        $total = count($this->getBoxedList($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function allDeleteAWAThemeBoxed(Request $request)
    {
        $userid = $request->post('userid');
        $ids = $request->post('ids');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        foreach ($ids as $id) {
            $res = DB::connection($this->waaupapps)->table($this->tb_boxed)
                ->where('userid', $userid)
                ->where('id', $id)
                ->delete();
        }
        $lists = $this->getBoxedList($userid, $pstart, $pcnt, 0);
        $total = count($this->getBoxedList($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }

    private function getImageSliderList($userid, $pstart, $pcnt, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $sql = "SELECT * FROM ".$this->tb_imageslider." ";
        $sql .= "WHERE userid=".$userid." ";
        $sql .= "ORDER BY id ASC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::connection($this->waaupapps)->select( DB::connection($this->waaupapps)->raw($sql) );
        return $rows;
    }
    public function getAWTSliderImageList(Request $request)
    {
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $lists = $this->getImageSliderList($userid, $pstart, $pcnt, 0);
        $total = count($this->getImageSliderList($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        $images = DB::connection($this->waaupdb)->table("sitelogoimgstyle")->orderBy("id")->get();

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage,
            'images' => $images
        ]);

        exit();
    }
    public function addAWTSliderImageList(Request $request)
    {
        $userid = $request->post('userid');
        $name = $request->post('name');
        $size = $request->post('size');
        $imgid = $request->post('imgid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::connection($this->waaupapps)->table($this->tb_imageslider)
            ->insertGetId([
                    'userid' => $userid,
                    'name'=>$name,
                    'size'=>$size,
                    'imgid'=>$imgid]
            );

        $lists = $this->getImageSliderList($userid, $pstart, $pcnt, 0);
        $total = count($this->getImageSliderList($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function editAWTSliderImageList(Request $request)
    {
        $userid = $request->post('userid');
        $editid = $request->post('editid');
        $name = $request->post('name');
        $size = $request->post('size');
        $imgid = $request->post('imgid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::connection($this->waaupapps)->table($this->tb_imageslider)
            ->where('userid', $userid)
            ->where('id', $editid)
            ->update([
                    'name'=>$name,
                    'size'=>$size,
                    'imgid'=>$imgid]
            );

        $lists = $this->getImageSliderList($userid, $pstart, $pcnt, 0);
        $total = count($this->getImageSliderList($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function deleteAWTSliderImageList(Request $request)
    {
        $userid = $request->post('userid');
        $editid = $request->post('editid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::connection($this->waaupapps)->table($this->tb_imageslider)
            ->where('userid', $userid)
            ->where('id', $editid)
            ->delete();

        $lists = $this->getImageSliderList($userid, $pstart, $pcnt, 0);
        $total = count($this->getImageSliderList($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function allDeleteAWAToolsSliderImage(Request $request)
    {
        $userid = $request->post('userid');
        $ids = $request->post('ids');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        foreach ($ids as $id){
            $res = DB::connection($this->waaupapps)->table($this->tb_imageslider)
                ->where('userid', $userid)
                ->where('id', $id)
                ->delete();
        }

        $lists = $this->getImageSliderList($userid, $pstart, $pcnt, 0);
        $total = count($this->getImageSliderList($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }

    public function saveAWMLanguage(Request $request)
    {
        $tb_modulelanguage = "tb_modulelanguage";
        $langlist=$request->langlist;

        $created_at = date("Y-m-d h:i:s", time());
        $updated_at = date("Y-m-d h:i:s", time());

        if(is_array($langlist))
        {
            $rows = DB::connection($this->waaupapps)->table($tb_modulelanguage)
                ->get();
            $addlist=array();
            if($rows!==null)
            {
                for($i=0;$i<count($langlist);$i++)
                {
                    $one = $langlist[$i];
                    $objarry=explode("-",$one);
                    $iso=$objarry[0];
                    $dialcode=$objarry[1];
                    $name=$objarry[2];
                    $equobj=false;
                    foreach ($rows as $item)
                    {
                        $piso = $item->iso;
                        $pdialcode = $item->dialcode;
                        $pname = $item->name;
                        $pstatus = $item->status;
                        if($iso == $piso && $dialcode == $pdialcode)
                        {
                            $equobj=true;
                            break;
                        }
                    }
                    if(!$equobj)
                    {
                        $item = array(
                            "iso" => $iso,
                            "dialcode" => $dialcode,
                            "name" => $name,
                            "created_at" => $created_at,
                            "updated_at" => $updated_at,
                            "status" => 'disable'
                        );
                        array_push($addlist, $item);
                    }
                }

                DB::connection($this->waaupapps)->table($tb_modulelanguage)
                    ->insert($addlist);
            }
            else
            {
                for($i=0;$i<count($langlist);$i++)
                {
                    $one = $langlist[$i];
                    $objarry=explode("-",$one);
                    $iso=$objarry[0];
                    $dialcode=$objarry[1];
                    $name=$objarry[2];
                    $item =array(
                        "iso" =>$iso,
                        "dialcode" =>$dialcode,
                        "name" =>$name,
                        "created_at" => $created_at,
                        "updated_at" => $updated_at,
                        "status"=>'disable'
                    );
                    array_push($addlist, $item);
                }

                DB::connection($this->waaupapps)->table($tb_modulelanguage)
                    ->insert($addlist);
            }

            $rows = DB::connection($this->waaupapps)->table($tb_modulelanguage)
                ->get();
            $cnt = count($rows);
            $addlist = json_encode($rows);

            return \Response::json([
                'msg'  =>  "ok",
                'cnt' =>$cnt,
                'addlist' =>$addlist
            ]);
        }
        else{
            return \Response::json([
                'msg'  =>  "err",
                'cnt' =>  0,
                'addlist' =>''
            ]);
        }

        exit();
    }

    public function getAWMLanguage(Request $request){
        $start  = $request->start;
        $cnt    = $request->cnt;
        $tb_modulelanguage = "tb_modulelanguage";
        $start_from = ($start-1) * $cnt;
        $rows = DB::connection($this->waaupapps)->table($tb_modulelanguage)
            ->select(DB::connection($this->waaupapps)->raw('id, iso, dialcode, name, status'))
            ->offset($start_from)->limit($cnt)
            ->get();
        $totalrows = DB::connection($this->waaupapps)->table($tb_modulelanguage)
            ->select(DB::connection($this->waaupapps)->raw('id, iso, dialcode, name, status'))
            ->get();
        $total = count($totalrows);
        $totalpage = ceil($total / $cnt);
        if($rows!==null){
            return \Response::json([
                'msg' => 'ok',
                'lists' => $rows,
                'prelists' => $totalrows,
                'pstart' => $start,
                'total' => $total,
                'totalpage' => $totalpage,
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  "err",
                'langlist' => ''
            ]);
        }
        exit();
    }

    public function saveAWMLanguageChanges(Request $request){
        $id=$request->id;
        $status=$request->status;
        $tb_modulelanguage = "tb_modulelanguage";
        $tb_modulelanguagelist = "tb_modulelanguagelist";
        $updated_at = date("Y-m-d h:i:s", time());
        if($status==="delete")
        {
            $row = DB::connection($this->waaupapps)->table($tb_modulelanguage)->where('id', $id)->get()->first();
            $countryname = $row ->name;
            $listrows = DB::connection($this->waaupapps)->table($tb_modulelanguagelist)->get();
            if (count($listrows) > 0) {
                foreach($listrows as $list)
                {
                    $to_update = false;
                    $languagenames = $list->languagenames;
                    $searchname = $countryname.',';
                    $searchname1 =','.$countryname;
                    $tid = $list->id;
                    if (str_contains($languagenames, $searchname)) {
                        $languagenames = str_replace($searchname, '', $languagenames) ;
                        $to_update = true;
                    }
                    if (str_contains($languagenames, $searchname1)) {
                        $languagenames = str_replace($searchname1, '', $languagenames) ;
                        $to_update = true;
                    }
                    if (str_contains($languagenames, $countryname)) {
                        $languagenames = str_replace($countryname, '', $languagenames) ;
                        $to_update = true;
                    }
                    if ($to_update) {
                        $success = DB::connection($this->waaupapps)->table($tb_modulelanguagelist)
                            ->where('id',$tid)
                            ->update(['languagenames' => $languagenames,
                                'updated_at' => $updated_at
                            ]);
                    }
                }
            }
            $success = DB::connection($this->waaupapps)->table($tb_modulelanguage)->where(
                'id', $id
            )->delete();
        }
        else
        {
            $success = DB::connection($this->waaupapps)->table($tb_modulelanguage)
                ->where('id',$id)
                ->update(['status' => $status,
                    'updated_at' => $updated_at
                ]);
        }

        if ($success) {
            return \Response::json([
                'msg'  =>  "ok"
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  "err"
            ]);

        }
    }

    public function deleteSeveralAWMLanguages(Request $request){
        $ids = $request->post('ids');
        $tb_modulelanguage = "tb_modulelanguage";
        $tb_modulelanguagelist = "tb_modulelanguagelist";
        $updated_at = date("Y-m-d h:i:s", time());
        try {
            if(count($ids) > 0) {
                foreach ($ids as $id) {
                    $row = DB::connection($this->waaupapps)->table($tb_modulelanguage)->where('id', $id)->get()->first();
                    $countryname = $row ->name;
                    $listrows = DB::connection($this->waaupapps)->table($tb_modulelanguagelist)->get();
                    if (count($listrows) > 0) {
                        foreach($listrows as $list)
                        {
                            $to_update = false;
                            $languagenames = $list->languagenames;
                            $searchname = $countryname.',';
                            $searchname1 =','.$countryname;
                            $tid = $list->id;
                            if (str_contains($languagenames, $searchname)) {
                                $languagenames = str_replace($searchname, '', $languagenames) ;
                                $to_update = true;
                            }
                            if (str_contains($languagenames, $searchname1)) {
                                $languagenames = str_replace($searchname1, '', $languagenames) ;
                                $to_update = true;
                            }
                            if (str_contains($languagenames, $countryname)) {
                                $languagenames = str_replace($countryname, '', $languagenames) ;
                                $to_update = true;
                            }
                            if ($to_update) {
                                $success = DB::connection($this->waaupapps)->table($tb_modulelanguagelist)
                                    ->where('id',$tid)
                                    ->update(['languagenames' => $languagenames,
                                        'updated_at' => $updated_at
                                    ]);
                            }
                        }
                    }
                    DB::connection($this->waaupapps)->table($tb_modulelanguage)->whereRaw("id = ".$id)->delete();
                }
            }
            return \Response::json([
                'msg'  =>  "ok"
            ]);

        } catch (Exception $e) {
            return \Response::json([
                'msg'  =>  "err"
            ]);
        }

    }
    public function getAWMListData(Request $request){
        $start  = $request->start;
        $cnt    = $request->cnt;
        $tb_modulelanguagelist = "tb_modulelanguagelist";
        $start_from = ($start-1) * $cnt;

        $rows = DB::connection($this->waaupapps)->table($tb_modulelanguagelist)
            ->select(DB::connection($this->waaupapps)->raw('id, name, languagenames, style'))
            ->offset($start_from)->limit($cnt)
            ->get();

        $totalrows = DB::connection($this->waaupapps)->table($tb_modulelanguagelist)
            ->select(DB::connection($this->waaupapps)->raw('id, name, languagenames, style '))
            ->get();
        $total = count($totalrows);
        $totalpage = ceil($total / $cnt);
        if($rows!==null){
            return \Response::json([
                "msg" => "ok",
                "lists" => $rows,
                'pstart' => $start,
                'total' => $total,
                'totalpage' => $totalpage,
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  "err",
                'langlist' => ''
            ]);
        }
        exit();
    }

    public function getAWMListDataFromId(Request $request){
        $id=$request->id;
        $tb_modulelanguagelist = "tb_modulelanguagelist";

        $rows = DB::connection($this->waaupapps)->table($tb_modulelanguagelist)->where('id', $id)->get()->first();
        if($rows!==null){
            return \Response::json([
                "msg" => "ok",
                "list" => $rows,
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  "err",
                'lists' => ''
            ]);
        }
        exit();
    }

    public function saveAWMListData(Request $request)
    {
        $tb_modulelanguagelist = "tb_modulelanguagelist";
        $name = $request->name;
        $id = $request->id;
        $style = $request->style;
        $languagenames = $request->languagenames;
        $icon_name = $request->icon_name;
        $icon_style = $request->icon_style;
        $icon_size = $request->icon_size;
        $icon_capacity = $request->icon_capacity;
        $text_color = $request->text_color;
        $text_fontsize = $request->text_fontsize;
        $created_at = date("Y-m-d h:i:s", time());
        $updated_at = date("Y-m-d h:i:s", time());

        if ($id == '0') {
            $cnt = DB::connection($this->waaupapps)->table($tb_modulelanguagelist)
                ->where('name', $name)->doesntExist();
            if($cnt){
                if ($style == '0') {
                    $sucess =  DB::connection($this->waaupapps)->table($tb_modulelanguagelist)
                        ->insert(
                            [
                                'name' => $name,
                                'style' => $style,
                                'languagenames' => $languagenames,
                                'icon_name' => $icon_name,
                                'icon_size' => $icon_size,
                                'icon_style' => $icon_style,
                                'icon_capacity' => $icon_capacity,
                                'created_at' => $created_at,
                                'updated_at' => $updated_at
                            ]);
                }
                if ($style == '1') {
                    $sucess =  DB::connection($this->waaupapps)->table($tb_modulelanguagelist)
                        ->insert(
                            [
                                'name' => $name,
                                'style' => $style,
                                'languagenames' => $languagenames,
                                'text_fontsize' => $text_fontsize,
                                'text_color' => $text_color,
                                'created_at' => $created_at,
                                'updated_at' => $updated_at
                            ]);
                }
                if ($style == '2') {
                    $sucess =  DB::connection($this->waaupapps)->table($tb_modulelanguagelist)
                        ->insert(
                            [
                                'name' => $name,
                                'style' => $style,
                                'languagenames' => $languagenames,
                                'icon_name' => $icon_name,
                                'icon_size' => $icon_size,
                                'icon_style' => $icon_style,
                                'icon_capacity' => $icon_capacity,
                                'text_color' => $text_color,
                                'text_fontsize' => $text_fontsize,
                                'created_at' => $created_at,
                                'updated_at' => $updated_at
                            ]);
                }
                if ($sucess) {
                    return \Response::json([
                        'msg'  =>  'ok',
                    ]);
                }
                else {
                    return \Response::json([
                        'msg'  =>  'err',
                    ]);
                }
            }
            else{
                return \Response::json([
                    'msg'  =>  'du',
                ]);
            }
        }
        else {
            if ($style == '0') {
                $sucess1 =  DB::connection($this->waaupapps)->table($tb_modulelanguagelist)->where('id', $id)
                    ->update(
                        [
                            'name' => $name,
                            'style' => $style,
                            'languagenames' => $languagenames,
                            'icon_name' => $icon_name,
                            'icon_size' => $icon_size,
                            'icon_style' => $icon_style,
                            'icon_capacity' => $icon_capacity,
                            'updated_at' => $updated_at
                        ]);
            }
            if ($style == '1') {
                $sucess1 =  DB::connection($this->waaupapps)->table($tb_modulelanguagelist)->where('id',$id)
                    ->update(
                        [
                            'name' => $name,
                            'style' => $style,
                            'languagenames' => $languagenames,
                            'text_fontsize' => $text_fontsize,
                            'text_color' => $text_color,
                            'updated_at' => $updated_at
                        ]);
            }
            if ($style == '2') {
                $sucess1 =  DB::connection($this->waaupapps)->table($tb_modulelanguagelist)->where('id', $id)
                    ->update(
                        [
                            'name' => $name,
                            'style' => $style,
                            'languagenames' => $languagenames,
                            'icon_name' => $icon_name,
                            'icon_size' => $icon_size,
                            'icon_style' => $icon_style,
                            'icon_capacity' => $icon_capacity,
                            'text_color' => $text_color,
                            'text_fontsize' => $text_fontsize,
                            'updated_at' => $updated_at
                        ]);
            }
            if ($sucess1) {
                return \Response::json([
                    'msg'  =>  'ok',
                ]);
            }
            else {
                return \Response::json([
                    'msg'  =>  'err',
                ]);
            }
        }

        exit();
    }

    public function deleteAWMListData(Request $request)
    {
        $id=$request->id;
        $tb_modulelanguagelist = "tb_modulelanguagelist";

        $sucess = DB::connection($this->waaupapps)->table($tb_modulelanguagelist)
            ->where('id', $id)->delete();

        if ($sucess) {
            return \Response::json([
                'msg'  =>  'ok',
            ]);
            exit();
        }
        else{
            return \Response::json([
                'msg'  =>  'err',
            ]);
            exit();
        }
    }

    public function deleteSeveralAWMListLanguages(Request $request){
        $ids = $request->post('ids');
        $tb_modulelanguagelist = "tb_modulelanguagelist";
        try {
            if(count($ids) > 0) {
                foreach ($ids as $id) {
                    DB::connection($this->waaupapps)->table($tb_modulelanguagelist)->whereRaw("id = ".$id)->delete();
                }
            }
            return \Response::json([
                'msg'  =>  "ok"
            ]);

        } catch (Exception $e) {
            return \Response::json([
                'msg'  =>  "err"
            ]);
        }
    }

    public function getSystemTextStyleList(Request $request)
    {
        $lists = DB::connection($this->waaupdb)->table('sitefieldtext')
            ->orderByDesc('id')->get();

        if (count($lists) > 0) {
            return \Response::json([
                'msg' => 'ok',
                'list' => $lists
            ]);
        } else {
            return \Response::json([
                'msg' => 'err',
                'message' => 'empty data in database'
            ]);
        }

        exit();
    }

    public function getSystemLogoStyleList(Request $request)
    {
        $lists = DB::connection($this->waaupdb)->table('sitelogoimgstyle')
            ->where('g_path', $this->g_path)->orderByDesc('id')->get();

        if (count($lists) > 0) {
            return \Response::json([
                'msg' => 'ok',
                'list' => $lists
            ]);
        } else {
            return \Response::json([
                'msg' => 'err',
                'message' => 'empty data in database'
            ]);
        }
        exit();
    }
}
