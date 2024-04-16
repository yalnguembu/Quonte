import { defineComponent, reactive, shallowRef, computed, resolveComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useSessionStore, _ as _sfc_main$1, a as _sfc_main$5, b as _sfc_main$2 } from './AlertBox-Dfo1LM_f.mjs';
import { useRouter } from 'vue-router';
import { _ as _sfc_main$3, B as ButtonType } from './BaseButton-h2Pn7ELN.mjs';
import { A as ALERT_BOX_TYPE } from './enum-D7_8xumL.mjs';
import { useVuelidate } from '@vuelidate/core';
import { helpers, email, required } from '@vuelidate/validators';
import './server.mjs';
import '../routes/api/auth/sign-in.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import '@vue/shared';
import '@unhead/addons';
import 'axios';
import 'form-data';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sign-in",
  __ssrInlineRender: true,
  setup(__props) {
    useSessionStore();
    useRouter();
    const user = reactive({
      email: "",
      password: ""
    });
    const isSigning = shallowRef(false);
    const requestError = shallowRef("");
    const rules = computed(() => ({
      email: {
        email: helpers.withMessage("This email does't repesct the format", email),
        required: helpers.withMessage(
          "You may forgot to field this input",
          required
        )
      },
      password: {
        required: helpers.withMessage(
          "You may forgot to field this input",
          required
        )
      }
    }));
    const v$ = useVuelidate(rules, user);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full min-h-[92vh] p-2 dark:bg-gray-900 flex items-start justify-center lg:items-center" }, _attrs))}><div class="card bg-white dark:bg-gray-900 p-8 rounded-lg w-full dark:border-gray-700 lg:shadow-xl lg:border lg:p-9 lg:p-9 lg:w-2/5 xl:w-1/3"><div class="lg:text-center"><h1 class="font-bold text-xl text-green-700 dark:text-gray-100"> Sign In </h1><p class="text-gray-500 dark:text-gray-400 py-6 lg:p-6"> Welcome back! We need some information to restore your session </p></div>`);
      if (requestError.value) {
        _push(`<div class="mb-4">`);
        _push(ssrRenderComponent(_sfc_main$1, {
          summary: requestError.value,
          "alert-type": unref(ALERT_BOX_TYPE).ERROR
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form><div class="mb-6">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        "data-test": "email-input",
        label: "Email",
        placeholder: "Enter your email adress",
        modelValue: user.email,
        "onUpdate:modelValue": ($event) => user.email = $event,
        errors: unref(v$).email.$errors
      }, null, _parent));
      _push(`</div><div class="mb-6">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        "data-test": "password-input",
        label: "Password",
        placeholder: "Enter your password",
        modelValue: user.password,
        "onUpdate:modelValue": ($event) => user.password = $event
      }, null, _parent));
      _push(`</div><div class="w-full text-right">`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "",
        class: "font-600 text-sm dark:text-gray-100 hover:text-yellow-500 dark:hover:text-yellow-500 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Have a trouble in Sin In? `);
          } else {
            return [
              createTextVNode(" Have a trouble in Sin In? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full mb-6 mt-6">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        "data-test": "submit-button",
        type: unref(ButtonType).submit,
        disable: unref(v$).$silentErrors.length,
        title: isSigning.value ? "Signing..." : "Sign In",
        class: "w-full",
        theme: `w-full px-8 py-1 ${unref(v$).$silentErrors.length || isSigning.value ? "bg-green-600/30 cursor-not-allowed dark:bg-green-300/20 dark:text-green-400" : "bg-green-900 hover:bg-green-800 dark:bg-green-100 dark:hover:bg-green-200"} text-white dark:text-green-900 rounded text-lg transition delay-200 hover:shadow-lg`
      }, null, _parent));
      _push(`</div></form><h2 class="text-gray-500 text-sm text-center"> Don&#39;t you have an account? `);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "sign-up",
        class: "text-black dark:text-gray-100 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Request Now! `);
          } else {
            return [
              createTextVNode(" Request Now! ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/sign-in.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sign-in-CH3ge9lf.mjs.map
