<template>
  <div class="layout-wrapper">
    <SearchCompo />
    <div class="content-wrapper">
        <component :is="NavComponent"></component>
        <component :is="ContComponent"></component>
    </div>
  </div>
</template>

<script>
    import nav_module from "../assets/jsfunc/nav_module";
    import lang_module from "../assets/jsfunc/lang_module.js";
    import SearchCompo from "../layout/SearchCompo.vue";
    import NavigationCompo from "../layout/NavigationCompo.vue";
    import NavigationDefaultCompo from "../layout/NavigationDefaultCompo.vue";
    import ContentCompo from "./ContentCompo.vue";
    import ContentDefaultCompo from "./ContentDefaultCompo.vue";
    import axios from "axios";
    import myjs from "../assets/jsfunc/mjs_module";

    var vueOBJ = null;
    var adminManage = nav_module.data.jsonparse(window.Laravel.userinfo);

    export default {
        beforeCreate() {
        },
        created() {
            vueOBJ =this;
            var locale =lang_module.data.getLang();//cckd
            locale = lang_module.data.getShurtLang(locale);
            this.$store.dispatch('DefaultLang',locale);
            myjs.data.getSiteContentsBylocalekey(this, locale);
        },
        beforeMount() {},
        mounted() {},
        components: {
            SearchCompo,
            'NavigationCompo': () => import('../layout/NavigationCompo.vue'),
            'NavigationDefaultCompo': () => import('../layout/NavigationDefaultCompo.vue'),
            'ContentCompo': () => import('./ContentCompo.vue'),
            'ContentDefaultCompo': () => import('./ContentDefaultCompo.vue'),
            //NavigationCompo,
            //ContentCompo,
        },
        computed: {
            NavComponent() {
                switch (adminManage.manager) {
                    case 'Administrater':
                        return 'NavigationCompo'
                    case 'default_User':
                        return 'NavigationDefaultCompo'

                }
            },
            ContComponent() {
                switch (adminManage.manager) {
                    case 'Administrater':
                        return 'ContentCompo'
                    case 'default_User':
                        return 'ContentDefaultCompo'

                }
            }
        },
    };
</script>
