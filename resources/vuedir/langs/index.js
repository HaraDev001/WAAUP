import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

function loadLocaleMessages(){
    const locales=require.context('./translations', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages={}
    locales.keys().forEach(key=>{
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if(matched && matched.length > 1){
            const locale = matched[1]
            messages[locale] = locales(key)
        }
    })
    return messages;
}
const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages:loadLocaleMessages(),
    langmsg:{}
})

export default i18n

/*
let messages = {
    'en': {
        das: 'Welcome',
        guide: 'For a guide and recipes on how to configure / customize this project,',
        checkout: 'check out the',
        plugins: 'Installed CLI Plugins',
        links: 'Essential Links',
        ecosystem: 'Ecosystem'
    },
    'kr': {
        das: '환영',
        guide: 'Para una guía y recetas sobre cómo configurar / personalizar este proyecto,',
        checkout: 'revisar la',
        plugins: 'Plugins de CLI instalados',
        links: 'Enlaces esenciales',
        ecosystem: 'Ecosistema'
    }
};

function changeLang(){
    let sss = {
        'en': {
            das: 'Welcome',
            guide: 'For a guide and recipes on how to configure / customize this project,',
            checkout: 'check out the',
            plugins: 'Installed CLI Plugins',
            links: 'Essential Links',
            ecosystem: 'Ecosystem'
        },
        'kr': {
            das: '환영함',
            guide: 'Para una guía y recetas sobre cómo configurar / personalizar este proyecto,',
            checkout: 'revisar la',
            plugins: 'Plugins de CLI instalados',
            links: 'Enlaces esenciales',
            ecosystem: 'Ecosistema'
        }
    };
    messages=sss;
}

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
    changeLang
});

export default i18n;

*/
