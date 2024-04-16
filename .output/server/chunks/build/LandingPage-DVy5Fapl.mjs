import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../routes/api/auth/sign-in.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _imports_0 = publicAssetsURL("/logo.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LandingPage",
  __ssrInlineRender: true,
  props: {
    headline: {},
    title: {},
    description: {},
    alt: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex px-2 py-4 justify-between" }, _attrs))}><section class="flex justify-center items-center"><div class="w-4/5 mx-auto flex justify-center items-center relative lg:w-full"><img${ssrRenderAttr("src", _imports_0)} class="w-full -rotate-45 opacity-60 blur-xl dark:blur-2xl border"${ssrRenderAttr("alt", _ctx.alt)}><div class="w-full flex justify-center items-center absolute"><img${ssrRenderAttr("src", _imports_0)} class="drop-shadow-3xl w-4/5 rotate-45"${ssrRenderAttr("alt", _ctx.alt)}></div></div></section><section class="w-3/4"><div class="border"><h3 class="text-lg font-bold text-green-800 dark:text-green-200 mt-4">${ssrInterpolate(_ctx.headline)}</h3><h2 class="text-5xl font-bold text-gray-900 dark:text-green-200 bord lg:text-7xl xl:mb-8 text-pretty">${ssrInterpolate(_ctx.title)}</h2><div><p class="text-lg text-gray-800 dark:text-gray-300 mt-4 lg:text-xl xl:mb-12">${ssrInterpolate(_ctx.description)}</p></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OgImage/LandingPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=LandingPage-DVy5Fapl.mjs.map
