import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const CHANGEMENU = 'CHANGE_MENU';
const CHANGESUBMENU = 'CHANGE_SUB_MENU';
const CHANGENAVIGATION = 'CHANGENAVIGATION';
const CHANGPAGESTATUS = 'CHANGPAGESTATUS';
const SAVEUSERINFO = 'Save_user_info';
const LANGCHANGE='lang_change';
const DEFAULTLANG='default_lang';
const SITECONTENTS='sitecontents';//cckd
const CONTENTCHANG='contentchange';//cckd
const SETPERMISSION = 'setpermissioin';

const state = {
    curMenu:'Analytics',
    subMenu:'dashboards_analytics',
    navaigationStatus:'',
    pageStatue:'normal',
    userinfo:{name:'',email:'',role:'',photo:''},
    defaultlang:'en',
    langstatus:'no',
    contentchange:'n',//cckd
    sitecontents:[],//cckd
    permission:'',//cckd
}

const mutations = {
    [CHANGEMENU](state, curMenu) {
        state.curMenu= curMenu;
    },
    [CHANGESUBMENU](state,  psubMenu) {
        if(psubMenu.split('|').length > 1){
            state.curMenu = psubMenu.split('|')[0];
            state.subMenu = psubMenu.split('|')[1];
        }
        else
            state.curMenu = psubMenu;

    },
    [CHANGENAVIGATION](state, pcurMenu) {
            state.navaigationStatus=pcurMenu;
    },
    [CHANGPAGESTATUS](state, pg) {
        state.pageStatue=pg;
    },
    [SAVEUSERINFO](state, obj){
        var uinfo={name:obj.name, email:obj.email, role:obj.role, photo:obj.photo};
        state.userinfo = uinfo;
    },
    [DEFAULTLANG](state, txt){
        state.defaultlang = txt;
    },
    [LANGCHANGE](state,txt){
        state.langstatus = txt;
    },
    [SITECONTENTS](state,txt){//cckd
        state.sitecontents = txt;
    },
    [CONTENTCHANG](state,txt){//cckd
        state.contentchange = txt;
    },
    [SETPERMISSION](state,txt){//cckd
        state.permission = txt;
    },

}
const actions = {
    SetMenuChange: function (context, pcurMenu) {
        context.commit(CHANGEMENU, pcurMenu);
    },
    SetSubMenuChange:function (context, psubMenu) {
        context.commit(CHANGESUBMENU, psubMenu);
    },
    ChangeNavigation:function (context,paramclz) {
        context.commit(CHANGENAVIGATION,paramclz);
    },
    ChangePageStatus:function (context,pg) {
        context.commit(CHANGPAGESTATUS,pg);
    },
    SaveUserinfo:function(context, obj){
        //alert(obj.role);
        context.commit(SAVEUSERINFO, obj);//파라메터는 오직 하나만 넘어간다.
    },
    DefaultLang:function(context, txt){
        context.commit(DEFAULTLANG, txt);//파라메터는 오직 하나만 넘어간다.
    },
    LangChange:function(context, txt){
        context.commit(LANGCHANGE, txt);//파라메터는 오직 하나만 넘어간다.
    },
    SiteContents:function(context, list){ //cckd
        context.commit(SITECONTENTS, list);
    },
    ContentChange:function(context, txt){ //cckd
        context.commit(CONTENTCHANG, txt);
    },
    SetPermission:function(context, per){ //cckd
        context.commit(SETPERMISSION, per);
    },

}

const getters = {
    docurMenu:function (state){
        return  state.curMenu;
    },
    dosubMenu:function (state){
        return  state.subMenu;
    },
    doChangeNavigation:function (state){
        return  state.navaigationStatus;
    },
    doChangePageStatus:function (state){
        return  state.pageStatue;
    },
    getUserInfo:function (state){
        return  state.userinfo;
    },
    doChangeLang:function (state){
        return  state.langstatus;
    },
    doDefaultLang:function (state){
        return  state.defaultlang;
    },
    getSiteContents:function(state){//cckd
        return  state.sitecontents;
    },
    getContentChange:function(state){//cckd
        return  state.contentchange;
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})
