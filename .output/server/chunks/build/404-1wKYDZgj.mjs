import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _imports_0 = "" + buildAssetsURL("not-found.C0mxArlo.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = resolveComponent("RouterLink");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen min-w-screen max-h-conten bg-green-100 dark:bg-gray-800 flex flex-col justify-center items-center p-14" }, _attrs))}><div class="w-1/3"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><h1 class="text-emerald-900 dark:text-gray-100 font-bold text-4xl mb-4"> Page not found </h1><p>`);
  _push(ssrRenderComponent(_component_RouterLink, {
    to: "/",
    class: "text-blue-500 text-lg underline mt-8"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Back to home`);
      } else {
        return [
          createTextVNode("Back to home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _404 as default };
//# sourceMappingURL=404-1wKYDZgj.mjs.map
