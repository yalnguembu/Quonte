const i18n_config = () => ({
  legacy: false,
  locale: "en",
  locales: [
    {
      code: "en",
      iso: "en-US"
    },
    {
      code: "fr",
      iso: "fr-FR"
    }
  ],
  strategy: "no_prefix",
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "i18n_redirected",
    redirectOn: "root"
  }
});

export { i18n_config as default };
//# sourceMappingURL=i18n.config-C0ABcCvj.mjs.map
