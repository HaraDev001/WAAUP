<template>
    <div class="content-body">
        <transition name="componentfade" mode="out-in">
            <component :is="BodyComponent"></component>
        </transition>
        <FooterCompo/>
    </div>
</template>
<style>
    .componentfade-enter-active, .componentfade-leave-active {
        transition: opacity .5s ease;
    }

    .componentfade-enter, .componentfade-leave-to
    {
        opacity: 0;
    }
</style>
<script>
    import FooterCompo from '../layout/FooterCompo.vue'

    export default {
        components: { // 여기서 동적으로 로딩한다
            'GlobalUserProfile': () => import('../pages/GlobalUserProfile'),
            'FastRegisterLink': () => import('../pages/FastRegisterLink'),
            'NotFoundPage': () => import('../pages/NotFoundPage'),

            'DashAnalytics': () => import('../pages/dashboard/DashAnalytics'),
            'DashStore': () => import('../pages/dashboard/DashStore'),
            'DashDuser': () => import('../pages/dashboard/DashDuser'),

            'AppsWebsiteFieldsImage': () => import('../pages/apps/AppsWebsiteFieldsImage'),
            'AppsWebsiteFieldsText': () => import('../pages/apps/AppsWebsiteFieldsText'),
            'AppsWebsiteFieldsNumber': () => import('../pages/apps/AppsWebsiteFieldsNumber'),
            'AppsWebsiteFieldsEmail': () => import('../pages/apps/AppsWebsiteFieldsEmail'),
            'AppsWebsiteFieldsDate': () => import('../pages/apps/AppsWebsiteFieldsDate'),
            'AppsWebsiteFieldsMobile': () => import('../pages/apps/AppsWebsiteFieldsMobile'),
	        'AppsWebsiteAppearanceTheme': () => import('../pages/apps/AppsWebsiteAppearanceTheme'),
	        'AppsWebsiteAppearanceHead': () => import('../pages/apps/AppsWebsiteAppearanceHead'),
            'AppsWebsiteModuleWeblanguage': () => import('../pages/apps/AppsWebsiteModuleWeblanguage'),
            'AppsWebsiteToolsSlider': () => import('../pages/apps/AppsWebsiteToolsSlider'),
            'AppsWebsiteToolsMenu': () => import('../pages/apps/AppsWebsiteToolsMenu'),
            'AppsWebsiteToolsView': () => import('../pages/apps/AppsWebsiteToolsView'),

            'SystemSetBasic': () => import('../pages/system/SystemSetBasic'),
            'SystemSuserManagementUsers': () => import('../pages/system/SystemSuserManagementUsers'),
            'SystemSuserManagementRoles': () => import('../pages/system/SystemSuserManagementRoles'),
            'SystemUserAccount': () => import('../pages/system/SystemUserAccount'),
            'SystemSuserPermissionsRoles': () => import('../pages/system/SystemSuserPermissionsRoles'),
            'SystemSuserPermissionsUsers': () => import('../pages/system/SystemSuserPermissionsUsers'),
            'SystemLanguage': () => import('../pages/system/SystemLanguage'),
            'SystemSetLanguage': () => import('../pages/system/SystemSetLanguage'),
            'SystemSetTranslation': () => import('../pages/system/SystemSetTranslation'),
            'SystemThemeColor': () => import('../pages/system/SystemThemeColor'),
            'SystemThemeFoot': () => import('../pages/system/SystemThemeFoot'),
            'SystemThemeLogo': () => import('../pages/system/SystemThemeLogo'),
            'SystemUserSecurity': () => import('../pages/system/SystemUserSecurity'),
            'SystemUserRegistered': () => import('../pages/system/SystemUserRegistered'),
            //'SystemBDW': () => import('../pages/system/SystemBDW'),

            'WebsChina': () => import('../pages/webs/WebsChina'),
	        'WebsWesGlobalAppearanceTheme': () => import('../pages/webs/WebsWesGlobalAppearanceTheme'),
            'WebsWesGlobalMedia': () => import('../pages/webs/WebsWesGlobalMedia'),
            'WebsWesGlobalMediaVideo': () => import('../pages/webs/WebsWesGlobalMediaVideo'),
            'WebsWesGlobalMediaImage': () => import('../pages/webs/WebsWesGlobalMediaImage'),
            'WebsWesGlobalMediaAudio': () => import('../pages/webs/WebsWesGlobalMediaAudio'),
            'WebsWesGlobalAppearanceHead': () => import('../pages/webs/WebsWesGlobalAppearanceHead'),
            'WebsWesGlobalAppearanceFoot': () => import('../pages/webs/WebsWesGlobalAppearanceFoot'),
            'WEBSWesGlobalMenusMain': () => import('../pages/webs/WebsWesGlobalMenusMain'),
            'WEBSWesGlobalMenusFoot': () => import('../pages/webs/WebsWesGlobalMenusFoot'),
            'WebsWesGlobalPagesIndex': () => import('../pages/webs/WebsWesGlobalPagesIndex'),
            'WebsWesGlobalPagesRegister': () => import('../pages/webs/WebsWesGlobalPagesRegister'),
            'WebsWesGlobalPagesLogin': () => import('../pages/webs/WebsWesGlobalPagesLogin'),
            'WebsWesGlobalPagesNoPage': () => import('../pages/webs/WebsWesGlobalPagesNoPage'),
            'WebsWesGlobalPagesContent': () => import('../pages/webs/WebsWesGlobalPagesContent'),
            'WebsWesGlobalPagesBasic': () => import('../pages/webs/WebsWesGlobalPagesBasic'),
            'WebsWesGlobalPagesManagement': () => import('../pages/webs/WebsWesGlobalPagesManagement'),
            'WebsWesGlobalSocialSetting': () => import('../pages/webs/WebsWesGlobalSocialSetting'),
            'WebsWesGlobalConfigurationLanguage': () => import('../pages/webs/WebsWesGlobalConfigurationLanguage'),
            'WebsWesGlobalConfigurationGeneral': () => import('../pages/webs/WebsWesGlobalConfigurationGeneral'),
            'WebsWesGlobalConfigurationFrontpages': () => import('../pages/webs/WebsWesGlobalConfigurationFrontpages'),
            'WebsWesGlobalConfigurationTranslation': () => import('../pages/webs/WebsWesGlobalConfigurationTranslation'),
            //'WebsWesGlobalConfigurationFileManager': () => import('../pages/webs/WebsWesGlobalConfigurationFileManager'),


            FooterCompo,
                },
                created() {
                },
                mounted() {
                },
                updated() {
                },
                computed: {
                    BodyComponent() {
                        switch (this.$store.state.subMenu) {

                            case 'dashboard-analytics':
                                return 'DashAnalytics'
                            case 'dashboard-store':
                                return 'DashStore'
                            case 'dashboard-duser':
                                return 'DashDuser'

                            case 'apps-website-fields-image':
                                return 'AppsWebsiteFieldsImage'
                            case 'apps-website-fields-text':
                                return 'AppsWebsiteFieldsText'
                            case 'apps-website-fields-number':
                                return 'AppsWebsiteFieldsNumber'
                            case 'apps-website-fields-email':
                                return 'AppsWebsiteFieldsEmail'
                            case 'apps-website-fields-date':
                                return 'AppsWebsiteFieldsDate'
                            case 'apps-website-fields-mobile':
                                return 'AppsWebsiteFieldsMobile'
                            case 'apps-website-appearance-theme':
                                return 'AppsWebsiteAppearanceTheme'
							case 'apps-website-appearance-head':
                                return 'AppsWebsiteAppearanceHead'
                            case 'apps-website-module-weblanguage':
                                return 'AppsWebsiteModuleWeblanguage'
                            case 'apps-website-tools-slider':
                                return 'AppsWebsiteToolsSlider'
                            case 'apps-website-tools-menu':
                                return 'AppsWebsiteToolsMenu'
                            case 'apps-website-tools-view':
                                return 'AppsWebsiteToolsView'

                            case 'webs-china':
                                return 'WebsChina'
                            case "webs-wesglobal-appearance-theme":
                                return 'WebsWesGlobalAppearanceTheme'
                            case "webs-wesglobal-media-video":
                                return 'WebsWesGlobalMediaVideo'
                            case "webs-wesglobal-media-image":
                                return 'WebsWesGlobalMediaImage'
                            case "webs-wesglobal-media-audio":
                                return 'WebsWesGlobalMediaAudio'
                            case "webs-wesglobal-appearance-head":
                                return 'WebsWesGlobalAppearanceHead'
                            case "webs-wesglobal-appearance-foot":
                                return 'WebsWesGlobalAppearanceFoot'
                            case 'webs-wesglobal-menus-main':
                                return  'WEBSWesGlobalMenusMain'
                            case 'webs-wesglobal-menus-foot':
                                return  'WEBSWesGlobalMenusFoot'
                            case 'webs-wesglobal-pages-index':
                                return 'WebsWesGlobalPagesIndex'
                            case 'webs-wesglobal-pages-management':
                                return 'WebsWesGlobalPagesManagement'

                            case 'webs-wesglobal-social-setting':
                                return 'WebsWesGlobalSocialSetting'
                            case 'webs-wesglobal-configuration-language':
                                return 'WebsWesGlobalConfigurationLanguage'
                            case 'webs-wesglobal-configuration-general':
                                return 'WebsWesGlobalConfigurationGeneral'
                            case 'webs-wesglobal-configuration-frontpages':
                                return 'WebsWesGlobalConfigurationFrontpages'
                            case 'webs-wesglobal-configuration-translation':
                                return 'WebsWesGlobalConfigurationTranslation'
                            case 'webs-wesglobal-configuration-filemanager':
                                return 'WebsWesGlobalConfigurationFileManager'

                            case 'system-setting-basic':
                                return 'SystemSetBasic'
                            case 'system-setting-language':
                                return 'SystemLanguage'
                            case 'system-setting-language-lang':
                                return 'SystemSetLanguage'
                            case 'system-setting-language-trans':
                                return 'SystemSetTranslation'
                            case 'system-theme-color':
                                return 'SystemThemeColor'
                            case 'system-theme-foot':
                                return 'SystemThemeFoot'
                            case 'system-theme-logo':
                                return 'SystemThemeLogo'
                            case 'system-suser-registered':
                                return 'SystemUserRegistered'
                            case 'system-suser-account':
                                return 'SystemUserAccount'
                            case "system-suser-management-users":
                                return 'SystemSuserManagementUsers'
                            case "system-suser-management-roles":
                                return 'SystemSuserManagementRoles'
                            case 'system-suser-security':
                                return 'SystemUserSecurity'
                            case "system-suser-permissions-users":
                                return 'SystemSuserPermissionsUsers'
                            case "system-suser-permissions-roles":
                                return 'SystemSuserPermissionsRoles'
                            case "system-bdw":
                                return 'SystemBDW'

                            case 'global-user-profile':
                                return 'GlobalUserProfile'
                    /* case 'fast-register-link':
                         return 'FastRegisterLink'*/


                    default:
                        return 'DashAnalytics'
                }
            }
        },
        methods:{
        }
    }
</script>

