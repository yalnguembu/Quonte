import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { x as useI18n, y as useSeoMeta, f as useHead, l as useRoute, m as normaliseOptions, o as useOgImageRuntimeConfig, i as defu, s as separateProps, q as createOgImageMeta, r as getOgImagePath, e as withoutTrailingSlash, k as withoutBase, v as useNuxtApp, b as useRuntimeConfig } from './server.mjs';
import { t as toRouteMatcher, b as createRouter } from '../routes/api/auth/sign-in.mjs';
import { useSSRContext, defineComponent, mergeProps, resolveComponent, resolveDirective, unref, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0$3, T as TwitterIcon } from './TwitterIcon-BH3yNlh-.mjs';
import { _ as _sfc_main$7 } from './BaseButton-h2Pn7ELN.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _sfc_main$8 } from './LinkWrapper-CYvxnOrx.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import '@vue/shared';
import '@unhead/addons';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

function withoutQuery(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter({
      routes: Object.fromEntries(
        Object.entries((nitro == null ? void 0 : nitro.routeRules) || {}).map(([path, rules]) => [withoutTrailingSlash(path), rules])
      )
    })
  );
  return (path) => {
    return defu({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(withoutTrailingSlash(withoutQuery(path)), app.baseURL)
    ).reverse());
  };
}
function defineOgImage(_options = {}) {
  var _a, _b, _c;
  const nuxtApp = useNuxtApp();
  const ogImageInstances = nuxtApp.ssrContext._ogImageInstances || [];
  const route = useRoute();
  const basePath = route.path || "/";
  const routeRuleMatcher = createNitroRouteRuleMatcher();
  const routeRules = routeRuleMatcher(basePath).ogImage;
  if (!_options || ((_c = (_b = (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event.context._nitro) == null ? void 0 : _b.routeRules) == null ? void 0 : _c.ogImage) === false || typeof routeRules !== "undefined" && routeRules === false) {
    ogImageInstances.forEach((e) => {
      e.dispose();
    });
    nuxtApp.ssrContext._ogImageInstances = void 0;
    return;
  }
  const options = normaliseOptions({
    ..._options
  });
  if (route.query)
    options._query = route.query;
  const { defaults } = useOgImageRuntimeConfig();
  const resolvedOptions = normaliseOptions(defu(separateProps(_options), separateProps(routeRules), defaults));
  if (_options.url) {
    createOgImageMeta(null, options, resolvedOptions, nuxtApp.ssrContext);
  } else {
    const path = getOgImagePath(basePath, resolvedOptions);
    createOgImageMeta(path, options, resolvedOptions, nuxtApp.ssrContext);
  }
}
function defineOgImageComponent(component, props = {}, options = {}) {
  return defineOgImage({
    ...options,
    component,
    props
  });
}
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HeaderSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({
      useScope: "local"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _directive_motion_slide_visible_bottom = resolveDirective("motion-slide-visible-bottom");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[95vh] w-full flex flex-col justify-around px-2 py-4 sm:px-4 md:min-h-fit lg:min-h-[95vh] lg:flex-row-reverse lg:w-4/5 lg:justify-between mx-auto" }, _attrs))}><section class="p-8 flex justify-center items-center md:py-12 lg:w-full lg:h-[85vh] lg:p-0"><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_bottom))}><div class="w-4/5 mx-auto flex justify-center items-center relative lg:w-full"><img${ssrRenderAttr("alt", unref(t)("logoAlt"))}${ssrRenderAttr("src", _imports_0$3)} class="w-full -rotate-45 opacity-60 blur-xl dark:blur-2xl border"><div class="w-full flex justify-center items-center absolute"><img${ssrRenderAttr("alt", unref(t)("logoAlt"))}${ssrRenderAttr("src", _imports_0$3)} class="drop-shadow-3xl w-4/5 rotate-45"></div></div></div></section><section class="h-1/2 px-2 py-6 flex flex-col justify-center sm:mt-12 sm:px-4 md:px-24 md:py-12 lg:p-12 lg:py-16 lg:w-full lg:h-[85vh] lg:pl-0 lg:mt-0"><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_bottom))}><h2 class="text-5xl font-bold text-green-800 dark:text-green-200 mt-4 lg:text-7xl xl:mb-8 text-pretty">${ssrInterpolate(unref(t)("title"))}</h2><p class="text-lg text-gray-800 dark:text-gray-300 mt-4 lg:text-xl xl:mb-12">${ssrInterpolate(unref(t)("subtitle"))}</p><div class="mt-6 grid md:block">`);
      _push(ssrRenderComponent(_component_RouterLink, {
        title: unref(t)("loginButtonTitle"),
        to: "/auth/sign-in",
        class: "w-full px-8 py-2 text-white dark:text-green-900 bg-green-900 hover:bg-green-800 dark:bg-green-100 dark:hover:bg-green-200 rounded text-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("loginButton"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("loginButton")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a${ssrRenderAttr("title", unref(t)("twitterButtonTitle"))} target="_blank" href="https://twitter.com/yalnguembu" class="w-full px-8 py-2 mt-4 rounded border dark:border-green-300 bg-transparent text-green-900 dark:text-green-200 text-center text-lg hover:text:green-800 hover:bg-gray-800 dark:hover:border-transparent md:ml-4 md:mt-0 md:w-fit">`);
      _push(ssrRenderComponent(TwitterIcon, { class: "align-middle mr-3 w-5 h-5 dark:fill-green-200" }, null, _parent));
      _push(` ${ssrInterpolate(unref(t)("twitterButton"))}</a></div></div></section></div>`);
    };
  }
});
function block0$2(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "logoAlt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Infinite notes - logo" } },
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Your limitless note taking solution" } },
        "subtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Never forget a thought again. Infinite Notes is your all-in-one note-taking app, letting you capture everything from ideas to grocery lists. Take notes on the go and access them from any device." } },
        "illustrationAlt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "stars illustration" } },
        "loginButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Get started" } },
        "loginButtonTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "go to login page" } },
        "twitterButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Follow us" } },
        "twitterButtonTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opening Twitter" } }
      },
      "fr": {
        "logoAlt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Logo- Infinite Notes" } },
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Essayons quelque chose d'extraordinaire" } },
        "subtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "N'oubliez plus jamais une id\xE9e. Infinite Notes est une application de prise de notes tout-en-un qui vous permet de tout noter, des id\xE9es aux listes de courses. Prenez des notes en d\xE9placement et acc\xE9dez-y depuis n'importe quel appareil." } },
        "illustrationAlt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "illustration d'\xE9toiles" } },
        "loginButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Commencer" } },
        "loginButtonTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "aller \xE0 la page de connexiongo to login page" } },
        "twitterButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Suivez nous" } },
        "twitterButtonTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ouvrir Twitter" } }
      }
    }
  });
}
if (typeof block0$2 === "function")
  block0$2(_sfc_main$6);
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/HeaderSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _imports_0$2 = "" + buildAssetsURL("not-board.C9FUaPS8.svg");
const _imports_1$2 = "data:image/svg+xml,%3csvg%20width='79'%20height='90'%20viewBox='0%200%2079%2090'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.5%202L20.3942%2010.6144C20.8322%2014.8332%2024.1668%2018.1678%2028.3856%2018.6058L37%2019.5L28.3856%2020.3942C24.1668%2020.8322%2020.8322%2024.1668%2020.3942%2028.3856L19.5%2037L18.6058%2028.3856C18.1678%2024.1668%2014.8332%2020.8322%2010.6144%2020.3942L2%2019.5L10.6144%2018.6058C14.8332%2018.1678%2018.1678%2014.8332%2018.6058%2010.6144L19.5%202Z'%20fill='%2377E6FF'%20stroke='%2377E6FF'%20stroke-width='2.35919'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M70.084%2029.5265C70.053%2029.2273%2069.8008%2029%2069.5%2029C69.1992%2029%2068.947%2029.2273%2068.916%2029.5265L68.4519%2033.9975C68.2626%2035.8211%2066.8211%2037.2626%2064.9975%2037.4519L60.5265%2037.916C60.2273%2037.947%2060%2038.1992%2060%2038.5C60%2038.8008%2060.2273%2039.053%2060.5265%2039.084L64.9975%2039.5481C66.8211%2039.7374%2068.2626%2041.1789%2068.4519%2043.0025L68.916%2047.4735C68.947%2047.7727%2069.1992%2048%2069.5%2048C69.8008%2048%2070.053%2047.7727%2070.084%2047.4735L70.5481%2043.0025C70.7374%2041.1789%2072.1789%2039.7374%2074.0025%2039.5481L78.4735%2039.084C78.7727%2039.053%2079%2038.8008%2079%2038.5C79%2038.1992%2078.7727%2037.947%2078.4735%2037.916L74.0025%2037.4519C72.1789%2037.2626%2070.7374%2035.8211%2070.5481%2033.9975L70.084%2029.5265Z'%20fill='%23FFC803'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M51.084%2071.5265C51.053%2071.2273%2050.8008%2071%2050.5%2071C50.1992%2071%2049.947%2071.2273%2049.916%2071.5265L49.4519%2075.9975C49.2626%2077.8211%2047.8211%2079.2626%2045.9975%2079.4519L41.5265%2079.916C41.2273%2079.947%2041%2080.1992%2041%2080.5C41%2080.8008%2041.2273%2081.053%2041.5265%2081.084L45.9975%2081.5481C47.8211%2081.7374%2049.2626%2083.1789%2049.4519%2085.0025L49.916%2089.4735C49.947%2089.7727%2050.1992%2090%2050.5%2090C50.8008%2090%2051.053%2089.7727%2051.084%2089.4735L51.5481%2085.0025C51.7374%2083.1789%2053.1789%2081.7374%2055.0025%2081.5481L59.4735%2081.084C59.7727%2081.053%2060%2080.8008%2060%2080.5C60%2080.1992%2059.7727%2079.947%2059.4735%2079.916L55.0025%2079.4519C53.1789%2079.2626%2051.7374%2077.8211%2051.5481%2075.9975L51.084%2071.5265Z'%20fill='%23F87388'/%3e%3c/svg%3e";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({
      useScope: "local"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion_slide_visible_once_left = resolveDirective("motion-slide-visible-once-left");
      const _directive_motion_roll_visible_bottom = resolveDirective("motion-roll-visible-bottom");
      const _directive_motion_slide_visible_bottom = resolveDirective("motion-slide-visible-bottom");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full grid gap-x-8 lg:grid-cols-2 lg:w-4/5 xl:py-8 mx-auto items-center" }, _attrs))} data-v-c0479ee2><section${ssrRenderAttrs(mergeProps({ class: "h-full flex items-center justify-center py-8 lg:py-4" }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_once_left)))} data-v-c0479ee2><img${ssrRenderAttr("src", _imports_0$2)} class="w-1/2 lg:w-full hover:scale-125 hover:drop-shadow-md hero-image"${ssrRenderAttr("alt", unref(t)("logoAlt"))} data-v-c0479ee2></section><section${ssrRenderAttrs(mergeProps({ class: "py-12 px-6 sm:px-12 lg:px-4" }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_bottom)))} data-v-c0479ee2><h3 class="font-bold text-green-800 text-4xl dark:text-gray-100 relative" data-v-c0479ee2><span data-v-c0479ee2>${ssrInterpolate(unref(t)("title"))}</span><img${ssrRenderAttrs(mergeProps({
        src: _imports_1$2,
        alt: unref(t)("createButtonTitle"),
        class: "absolute w-20 h-20 -top-20 -right-5 lg:-right-12 lg:-top-10"
      }, ssrGetDirectiveProps(_ctx, _directive_motion_roll_visible_bottom)))} data-v-c0479ee2></h3><p class="text-gray-500 dark:text-gray-300 text-lg my-8" data-v-c0479ee2>${ssrInterpolate(unref(t)("description"))}</p>`);
      _push(ssrRenderComponent(_sfc_main$7, {
        title: unref(t)("createButtonTitle")
      }, null, _parent));
      _push(`</section></div>`);
    };
  }
});
function block0$1(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "logoAlt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Infinite Notes - logo" } },
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Let'us try something amazing" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Infinite Notes is your digital notepad for everything under the sun. Capture fleeting ideas, brainstorm like a pro, and keep your thoughts organized \u2013 the possibilities are infinite." } },
        "createButtonTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "New Note" } },
        "illustrationAlt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "stars illustration" } }
      },
      "fr": {
        "logoAlt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Logo- Infinite Notes" } },
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Essayons quelque chose d'extraordinaire" } },
        "description": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Infinite Notes est votre bloc-notes num\xE9rique pour tout ce qui se passe sous le soleil. Capturez les id\xE9es fugaces, faites du brainstorming comme un pro et organisez vos pens\xE9es - les possibilit\xE9s sont infinies." } },
        "createButtonTitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouvelle note" } },
        "illustrationAlt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "illustration d'\xE9toiles" } }
      }
    }
  });
}
if (typeof block0$1 === "function")
  block0$1(_sfc_main$5);
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/HeroSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-c0479ee2"]]);
const _imports_0$1 = "data:image/svg+xml,%3csvg%20width='88'%20height='90'%20viewBox='0%200%2088%2090'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M44.1759%201.87338C44.1137%201.27498%2043.6094%200.820312%2043.0078%200.820312C42.4062%200.820312%2041.9019%201.27498%2041.8398%201.87338L40.9115%2010.8152C40.5329%2014.4626%2037.6501%2017.3454%2034.0027%2017.724L25.0609%2018.6523C24.4625%2018.7144%2024.0078%2019.2187%2024.0078%2019.8203C24.0078%2020.4219%2024.4625%2020.9262%2025.0609%2020.9884L34.0027%2021.9166C37.6501%2022.2952%2040.5329%2025.1781%2040.9115%2028.8254L41.8398%2037.7673C41.9019%2038.3657%2042.4062%2038.8203%2043.0078%2038.8203C43.6094%2038.8203%2044.1137%2038.3656%2044.1759%2037.7673L45.1041%2028.8254C45.4827%2025.1781%2048.3656%2022.2952%2052.0129%2021.9166L60.9548%2020.9884C61.5531%2020.9262%2062.0078%2020.4219%2062.0078%2019.8203C62.0078%2019.2187%2061.5532%2018.7144%2060.9548%2018.6523L52.0129%2017.724C48.3656%2017.3454%2045.4827%2014.4626%2045.1041%2010.8152L44.1759%201.87338Z'%20fill='%234BE1F4'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M79.084%2071.5265C79.053%2071.2273%2078.8008%2071%2078.5%2071C78.1992%2071%2077.947%2071.2273%2077.916%2071.5265L77.4519%2075.9975C77.2626%2077.8211%2075.8211%2079.2626%2073.9975%2079.4519L69.5265%2079.916C69.2273%2079.947%2069%2080.1992%2069%2080.5C69%2080.8008%2069.2273%2081.053%2069.5265%2081.084L73.9975%2081.5481C75.8211%2081.7374%2077.2626%2083.1789%2077.4519%2085.0025L77.916%2089.4735C77.947%2089.7727%2078.1992%2090%2078.5%2090C78.8008%2090%2079.053%2089.7727%2079.084%2089.4735L79.5481%2085.0025C79.7374%2083.1789%2081.1789%2081.7374%2083.0025%2081.5481L87.4735%2081.084C87.7727%2081.053%2088%2080.8008%2088%2080.5C88%2080.1992%2087.7727%2079.947%2087.4735%2079.916L83.0025%2079.4519C81.1789%2079.2626%2079.7374%2077.8211%2079.5481%2075.9975L79.084%2071.5265Z'%20fill='%23F87388'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10.084%2055.5265C10.053%2055.2273%209.80081%2055%209.5%2055C9.19919%2055%208.94704%2055.2273%208.91598%2055.5265L8.45186%2059.9975C8.26255%2061.8211%206.82112%2063.2626%204.99746%2063.4519L0.526532%2063.916C0.227334%2063.947%200%2064.1992%200%2064.5C0%2064.8008%200.227334%2065.053%200.526532%2065.084L4.99746%2065.5481C6.82112%2065.7374%208.26255%2067.1789%208.45186%2069.0025L8.91598%2073.4735C8.94704%2073.7727%209.19919%2074%209.5%2074C9.80081%2074%2010.053%2073.7727%2010.084%2073.4735L10.5481%2069.0025C10.7374%2067.1789%2012.1789%2065.7374%2014.0025%2065.5481L18.4735%2065.084C18.7727%2065.053%2019%2064.8008%2019%2064.5C19%2064.1992%2018.7727%2063.947%2018.4735%2063.916L14.0025%2063.4519C12.1789%2063.2626%2010.7374%2061.8211%2010.5481%2059.9975L10.084%2055.5265Z'%20fill='%23FFC803'/%3e%3c/svg%3e";
const _imports_1$1 = "" + buildAssetsURL("desktop-dark.CsR6KjEM.png");
const _imports_2$1 = "" + buildAssetsURL("mobile-dark.BLNhlHZx.png");
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _directive_motion_slide_visible_bottom = resolveDirective("motion-slide-visible-bottom");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "items-center flex flex-col py-16 pb-24" }, _attrs))}><div class="p-4"><img${ssrRenderAttr("src", _imports_0$1)} class="w-14 animate-ping-slow" alt=""></div><h3${ssrRenderAttrs(mergeProps({ class: "font-bold text-3xl text-green-800 dark:text-green-100 text-center p-8 pb-12" }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_bottom)))}> More thant a book note! </h3><div${ssrRenderAttrs(mergeProps({ class: "w-3/4" }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_bottom)))}><div class="flex"><img${ssrRenderAttr("src", _imports_1$1)} class="border-4 rounded-xl w-4/5 transition hover:scale-125 hover:shadow-lg hover:z-10" alt=""><img${ssrRenderAttr("src", _imports_2$1)} class="border-4 rounded-xl w-1/5 -rotate-12 transition hover:rotate-0 hover:scale-125 hover:shadow-lg" alt=""></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/AppPresentation.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const AppPresentation = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = "data:image/svg+xml,%3csvg%20width='55'%20height='43'%20viewBox='0%200%2055%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15.3914%200.803655C15.344%200.346983%2014.9591%200%2014.5%200C14.0409%200%2013.656%200.346983%2013.6086%200.803655L12.9002%207.6277C12.6113%2010.4112%2010.4112%2012.6113%207.62771%2012.9002L0.803655%2013.6086C0.346983%2013.656%200%2014.0409%200%2014.5C0%2014.9591%200.346983%2015.344%200.803655%2015.3914L7.6277%2016.0998C10.4112%2016.3887%2012.6113%2018.5888%2012.9002%2021.3723L13.6086%2028.1963C13.656%2028.653%2014.0409%2029%2014.5%2029C14.9591%2029%2015.344%2028.653%2015.3914%2028.1963L16.0998%2021.3723C16.3887%2018.5888%2018.5888%2016.3887%2021.3723%2016.0998L28.1963%2015.3914C28.653%2015.344%2029%2014.9591%2029%2014.5C29%2014.0409%2028.653%2013.656%2028.1963%2013.6086L21.3723%2012.9002C18.5888%2012.6113%2016.3887%2010.4112%2016.0998%207.62771L15.3914%200.803655Z'%20fill='%23FFC803'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M47.9611%2028.4157C47.9365%2028.1795%2047.7375%2028%2047.5%2028C47.2625%2028%2047.0635%2028.1795%2047.0389%2028.4157L46.6725%2031.9454C46.5231%2033.3851%2045.3851%2034.5231%2043.9454%2034.6725L40.4157%2035.0389C40.1795%2035.0635%2040%2035.2625%2040%2035.5C40%2035.7375%2040.1795%2035.9365%2040.4157%2035.9611L43.9454%2036.3275C45.3851%2036.4769%2046.5231%2037.6149%2046.6725%2039.0546L47.0389%2042.5843C47.0635%2042.8205%2047.2625%2043%2047.5%2043C47.7375%2043%2047.9365%2042.8205%2047.9611%2042.5843L48.3275%2039.0546C48.4769%2037.6149%2049.6149%2036.4769%2051.0546%2036.3275L54.5843%2035.9611C54.8205%2035.9365%2055%2035.7375%2055%2035.5C55%2035.2625%2054.8205%2035.0635%2054.5843%2035.0389L51.0546%2034.6725C49.6149%2034.5231%2048.4769%2033.3851%2048.3275%2031.9454L47.9611%2028.4157Z'%20fill='%234BE1F4'/%3e%3c/svg%3e";
const _imports_1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20version='1.1'%20viewBox='0%200%20261.76%20226.69'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='matrix(1.3333%200%200%20-1.3333%20-76.311%20313.34)'%3e%3cg%20transform='translate(178.06%20235.01)'%3e%3cpath%20d='m0%200-22.669-39.264-22.669%2039.264h-75.491l98.16-170.02%2098.16%20170.02z'%20fill='%2341b883'/%3e%3c/g%3e%3cg%20transform='translate(178.06%20235.01)'%3e%3cpath%20d='m0%200-22.669-39.264-22.669%2039.264h-36.227l58.896-102.01%2058.896%20102.01z'%20fill='%2334495e'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3csvg%20width='1000'%20height='1000'%20viewBox='0%200%201000%201000'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M489.5%20226.499C328%20231.632%20280%20346.999%20269%20409.499C283.333%20386.332%20328.5%20335.5%20395%20335.5C472.5%20335.5%20531.5%20422%20567.5%20449C611.237%20481.803%20699.123%20525.115%20814.5%20490C906.5%20462%20949.167%20364.332%20958.5%20317.999C914%20378.499%20846.5%20414.838%20763%20371.999C705.5%20342.499%20662.5%20221%20489.5%20226.499Z'%20fill='%2307B6D5'/%3e%3cpath%20d='M261%20500.999C99.5%20506.132%2051.5%20621.499%2040.5%20683.999C54.8333%20660.832%20100%20610%20166.5%20610C244%20610%20303%20696.5%20339%20723.5C382.737%20756.303%20470.623%20799.615%20586%20764.5C678%20736.5%20720.667%20638.832%20730%20592.499C685.5%20652.999%20618%20689.338%20534.5%20646.499C477%20616.999%20434%20495.5%20261%20500.999Z'%20fill='%2307B6D5'/%3e%3c/svg%3e";
const _imports_3 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20630%20630'%3e%3crect%20width='630'%20height='630'%20fill='%23f7df1e'/%3e%3cpath%20d='m423.2%20492.19c12.69%2020.72%2029.2%2035.95%2058.4%2035.95%2024.53%200%2040.2-12.26%2040.2-29.2%200-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2%200-44.4%2033.83-78.2%2086.7-78.2%2037.64%200%2064.7%2013.1%2084.2%2047.4l-46.1%2029.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34%200-28.33%2011-28.33%2025.37%200%2017.76%2011%2024.95%2036.4%2035.95l14.8%206.34c50.3%2021.57%2078.7%2043.56%2078.7%2093%200%2053.3-41.87%2082.5-98.1%2082.5-54.98%200-90.5-26.2-107.88-60.54zm-209.13%205.13c9.3%2016.5%2017.76%2030.45%2038.1%2030.45%2019.45%200%2031.72-7.61%2031.72-37.2v-201.3h59.2v202.1c0%2061.3-35.94%2089.2-88.4%2089.2-47.4%200-74.85-24.53-88.81-54.075z'/%3e%3c/svg%3e";
const _imports_4 = "data:image/svg+xml,%3csvg%20width='410'%20height='404'%20viewBox='0%200%20410%20404'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M399.641%2059.5246L215.643%20388.545C211.844%20395.338%20202.084%20395.378%20198.228%20388.618L10.5817%2059.5563C6.38087%2052.1896%2012.6802%2043.2665%2021.0281%2044.7586L205.223%2077.6824C206.398%2077.8924%20207.601%2077.8904%20208.776%2077.6763L389.119%2044.8058C397.439%2043.2894%20403.768%2052.1434%20399.641%2059.5246Z'%20fill='url(%23paint0_linear)'/%3e%3cpath%20d='M292.965%201.5744L156.801%2028.2552C154.563%2028.6937%20152.906%2030.5903%20152.771%2032.8664L144.395%20174.33C144.198%20177.662%20147.258%20180.248%20150.51%20179.498L188.42%20170.749C191.967%20169.931%20195.172%20173.055%20194.443%20176.622L183.18%20231.775C182.422%20235.487%20185.907%20238.661%20189.532%20237.56L212.947%20230.446C216.577%20229.344%20220.065%20232.527%20219.297%20236.242L201.398%20322.875C200.278%20328.294%20207.486%20331.249%20210.492%20326.603L212.5%20323.5L323.454%20102.072C325.312%2098.3645%20322.108%2094.137%20318.036%2094.9228L279.014%20102.454C275.347%20103.161%20272.227%2099.746%20273.262%2096.1583L298.731%207.86689C299.767%204.27314%20296.636%200.855181%20292.965%201.5744Z'%20fill='url(%23paint1_linear)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='6.00017'%20y1='32.9999'%20x2='235'%20y2='344'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2341D1FF'/%3e%3cstop%20offset='1'%20stop-color='%23BD34FE'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear'%20x1='194.651'%20y1='8.81818'%20x2='236.076'%20y2='292.989'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFEA83'/%3e%3cstop%20offset='0.0833333'%20stop-color='%23FFDD35'/%3e%3cstop%20offset='1'%20stop-color='%23FFA800'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _directive_motion_slide_visible_bottom = resolveDirective("motion-slide-visible-bottom");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8 px-4" }, _attrs))}><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_bottom))}><h3 class="font-bold text-3xl text-green-800 dark:text-green-100 text-center my-8 lg:my-24"><span class="relative"> Those who give us power <img${ssrRenderAttr("src", _imports_0)} alt="" class="absolute w-12 -top-14 -left-5 -rotate-90 lg:-left-12 lg:-rotate-90"></span></h3></div><div class="grid grid-cols-2 gap-4 mt-8 md:grid-cols-4"><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_bottom))}><div class="p-4 flex items-center justify-center"><img${ssrRenderAttr("src", _imports_1)} class="w-full grayscale hover:grayscale-0 hover:drop-shadow-lg lg:w-1/2" alt=""></div></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_bottom))}><div class="p-4 flex items-center justify-center"><img${ssrRenderAttr("src", _imports_2)} class="w-full grayscale hover:grayscale-0 hover:drop-shadow-lg lg:w-1/2" alt=""></div></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_bottom))}><div class="p-4 flex items-center justify-center"><img${ssrRenderAttr("src", _imports_3)} class="w-full grayscale hover:grayscale-0 hover:drop-shadow-lg lg:w-1/2" alt=""></div></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_bottom))}><div class="p-4 flex items-center justify-center"><img${ssrRenderAttr("src", _imports_4)} class="w-full grayscale hover:grayscale-0 hover:drop-shadow-lg lg:w-1/2" alt=""></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/ContributorsSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ContributorsSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "20",
    viewBox: "0 0 24 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M22.2363 0.336778L1.55131 8.31328C0.139645 8.88028 0.147812 9.66778 1.29231 10.0189L6.60298 11.6756L18.8903 3.92311C19.4713 3.56961 20.0021 3.75978 19.5658 4.14711L9.61065 13.1316H9.60831L9.61065 13.1328L9.24431 18.6068C9.78098 18.6068 10.0178 18.3606 10.3188 18.0701L12.8983 15.5618L18.2638 19.5249C19.2531 20.0698 19.9636 19.7898 20.2098 18.6091L23.732 2.00978C24.0925 0.564279 23.1801 -0.0902216 22.2363 0.336778Z" fill="#4D3705"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/TelegramIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TelegramIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ContactSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion_slide_visible_bottom = resolveDirective("motion-slide-visible-bottom");
      _push(`<div${ssrRenderAttrs(mergeProps(_attrs, ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_bottom)))}><div class="flex flex-col items-center w-full py-12 lg:py-20 lg:px-4" id="contact"><h3 class="font-bold text-3xl text-green-800 dark:text-green-100 text-center p-8 pb-4"><span class="relative block"> What&#39;s your Quonte idea? <img${ssrRenderAttr("src", _imports_0)} alt="" class="absolute w-12 -top-10 -right-3 lg:rotate-90 lg:-right-20"></span></h3><h4 class="text-gray-500 text-xl">Let&#39;s chat and see how we can help</h4><div class="w-full px-4 py-8 flex flex-col space-y-8 md:space-y-0 md:space-x-8 md:flex-row md:justify-center">`);
      _push(ssrRenderComponent(_sfc_main$8, {
        isExternal: "",
        path: "https://t.me/yalnguembu",
        class: "w-full px-6 py-1 hover:shadow-md hover:shadow-yellow-300 dark:hover:shadow-yellow-900 bg-yellow-500 hover:bg-yellow-400 dark:hover:bg-yellow-400 flex items-center rounded-xl md:justify-evenly md:w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(TelegramIcon, { class: "fill-gray-500 h-10 w-10" }, null, _parent2, _scopeId));
            _push2(`<span class="p-4 py-2 text-left"${_scopeId}><span class="font-bold text-lg"${_scopeId}> Telegram </span> <br${_scopeId}><span class="text-gray-600"${_scopeId}>@quonte_io </span></span>`);
          } else {
            return [
              createVNode(TelegramIcon, { class: "fill-gray-500 h-10 w-10" }),
              createVNode("span", { class: "p-4 py-2 text-left" }, [
                createVNode("span", { class: "font-bold text-lg" }, " Telegram "),
                createTextVNode(),
                createVNode("br"),
                createVNode("span", { class: "text-gray-600" }, "@quonte_io ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$8, {
        path: "mailto:yalnguembu@gmail.com",
        isExternal: "",
        class: "w-full px-6 py-1 hover:shadow-md hover:shadow-green-700 bg-green-800 dark:bg-green-100 hover:bg-green-700 dark:hover:bg-green-300 flex items-center rounded-xl md:justify-evenly md:w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-5xl text-white dark:text-green-800"${_scopeId}>@</span><span class="p-4 py-2 text-left"${_scopeId}><span class="font-bold text-lg text-white dark:text-green-800"${_scopeId}> Email </span><br${_scopeId}><span class="text-gray-400 dark:text-gray-600"${_scopeId}>@quonte_io </span></span>`);
          } else {
            return [
              createVNode("span", { class: "text-5xl text-white dark:text-green-800" }, "@"),
              createVNode("span", { class: "p-4 py-2 text-left" }, [
                createVNode("span", { class: "font-bold text-lg text-white dark:text-green-800" }, " Email "),
                createVNode("br"),
                createVNode("span", { class: "text-gray-400 dark:text-gray-600" }, "@quonte_io ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/ContactSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({
      useScope: "local"
    });
    useSeoMeta({
      title: t("title"),
      ogTitle: t("title"),
      description: t("subtitle"),
      ogDescription: t("subtitle"),
      ogImage: "~/public/logo.png",
      ogImageUrl: "~/public/logo.png",
      ogImageAlt: t("logoAlt"),
      robots: {
        notranslate: true
      },
      ogType: "website",
      twitterTitle: t("title"),
      twitterDescription: t("subtitle"),
      twitterImage: {
        alt: t("logoAlt"),
        url: "~/public/logo.svg"
      }
    });
    useHead({
      link: [
        { rel: "icon", type: "image/png", href: "~/static/logo.png" },
        { rel: "icon", type: "image/x-icon", href: "~/static/logo.png" }
      ]
    });
    defineOgImageComponent("LandingPage", {
      title: t("title"),
      description: t("subtitle"),
      headline: t("name"),
      alt: t("logoAlt")
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full bg-white dark:bg-gray-900 text-center lg:text-left mt-12 lg:mt-0" }, _attrs))}><header class="w-full h-fit">`);
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`</header><main class="min-h-screen block"><section class="w-full bg-gray-50 py-8 dark:bg-gray-800/50">`);
      _push(ssrRenderComponent(HeroSection, null, null, _parent));
      _push(`</section><section class="max-w-screen-lg mx-auto">`);
      _push(ssrRenderComponent(AppPresentation, null, null, _parent));
      _push(`</section><section class="max-w-screen-lg mx-auto">`);
      _push(ssrRenderComponent(ContributorsSection, null, null, _parent));
      _push(`</section><section class="max-w-screen-lg mx-auto">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</section></main></div>`);
    };
  }
});
function block0(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Infinite Notes" } },
        "logoAlt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Infinite notes - logo" } },
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Your limitless note taking solution" } },
        "subtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Never forget a thought again. Infinite Notes is your all-in-one note-taking app, letting you capture everything from ideas to grocery lists. Take notes on the go and access them from any device." } }
      },
      "fr": {
        "name": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Infinite Notes" } },
        "logoAlt": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Logo - Infinite Notes" } },
        "title": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Essayons quelque chose d'extraordinaire" } },
        "subtitle": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Your all-in-one note-taking app, letting you capture everything from ideas to grocery lists. Take notes on the go and access them from any device." } }
      }
    }
  });
}
if (typeof block0 === "function")
  block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D4MyeQW2.mjs.map
