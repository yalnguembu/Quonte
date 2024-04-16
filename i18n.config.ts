export default defineI18nConfig(() => ({
    legacy: false,
    locales: [
        {
            code: 'en',
            iso: 'en-US'
        },
        {
            code: 'fr',
            iso: 'fr-FR'
        }
    ],
    strategy: 'no_prefix',
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        redirectOn: 'root',
    },
}))
