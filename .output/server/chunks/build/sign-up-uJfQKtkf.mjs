import { u as useSessionStore, _ as _sfc_main$2, a as _sfc_main$5, b as _sfc_main$2$1 } from './AlertBox-Dfo1LM_f.mjs';
import { useSSRContext, defineComponent, reactive, shallowRef, computed, resolveComponent, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$3, B as ButtonType } from './BaseButton-h2Pn7ELN.mjs';
import { R as REGEX, A as ALERT_BOX_TYPE } from './enum-D7_8xumL.mjs';
import { useVuelidate } from '@vuelidate/core';
import { helpers, required, email } from '@vuelidate/validators';
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
import 'vue-router';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import '@vue/shared';
import '@unhead/addons';
import 'axios';
import 'form-data';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TextInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    label: {},
    placeholder: {},
    errors: { default: () => [] },
    isValid: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><label class="font-500 dark:text-gray-100">${ssrInterpolate(props.label)}</label><input class="${ssrRenderClass([
        "rounded border px-3 py-1 w-full mt-2 bg-transparent outline-none dark:text-gray-100 dark:border-gray-700",
        _ctx.errors.length ? "outline-red-500" : _ctx.isValid ? "outline-green-500 dark:outline-green-600" : "focus:outline-blue-500 dark:focus:outline-blue-600"
      ])}" type="text"${ssrRenderAttr("placeholder", props.placeholder)}${ssrRenderAttr("value", props.modelValue)}><!--[-->`);
      ssrRenderList(props.errors, (error) => {
        var _a;
        _push(`<p${ssrRenderAttr("data-test", error.$property)} style="${ssrRenderStyle(((_a = props.errors) == null ? void 0 : _a.length) ? null : { display: "none" })}" class="pt-1 text-red-500 transition delay-500 text-sm">${ssrInterpolate(error.$message)}</p>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/TextInput.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sign-up",
  __ssrInlineRender: true,
  setup(__props) {
    useSessionStore();
    const user = reactive({
      username: "",
      email: "",
      password: ""
    });
    const signing = shallowRef(false);
    const requestError = shallowRef("");
    const rules = computed(() => ({
      username: {
        required: helpers.withMessage(
          "You may forgot to field this input",
          required
        )
      },
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
        ),
        mustBeValidPassword: helpers.withMessage(
          "This filed does't repect the awaited format",
          helpers.regex(REGEX.PASSWORD)
        )
      }
    }));
    const v$ = useVuelidate(rules, user);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-[92vh] dark:bg-gray-900 flex items-start justify-center lg:items-center" }, _attrs))}><div class="card bg-white dark:bg-gray-900 p-8 rounded-lg w-full dark:border-gray-700 lg:shadow-xl lg:border lg:p-9 lg:p-9 lg:w-1/2"><div class="lg:text-center"><h1 class="font-bold text-xl text-green-700 dark:text-gray-100"> Sign Up </h1><p class="text-gray-500 dark:text-gray-400 py-6 lg:p-6"> Welcome back! We need some informations for configure your personal space </p></div>`);
      if (requestError.value) {
        _push(`<div class="mb-4">`);
        _push(ssrRenderComponent(_sfc_main$2, {
          summary: requestError.value,
          "alert-type": unref(ALERT_BOX_TYPE).ERROR
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form><div class="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        "data-test": "username-input",
        label: "username",
        placeholder: "Enter your username",
        modelValue: user.username,
        "onUpdate:modelValue": ($event) => user.username = $event,
        errors: unref(v$).username.$errors,
        isValid: !unref(v$).username.$silentErrors.length
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        "data-test": "email-input",
        label: "Email",
        placeholder: "Enter your email adress",
        modelValue: user.email,
        "onUpdate:modelValue": ($event) => user.email = $event,
        errors: unref(v$).email.$errors,
        isValid: !unref(v$).email.$silentErrors.length
      }, null, _parent));
      _push(`</div><div class="mb-4">`);
      _push(ssrRenderComponent(_sfc_main$2$1, {
        "data-test": "password-input",
        label: "Password",
        placeholder: "Enter your password",
        modelValue: user.password,
        "onUpdate:modelValue": ($event) => user.password = $event,
        errors: unref(v$).password.$errors,
        isValid: !unref(v$).password.$silentErrors.length
      }, null, _parent));
      _push(`</div><div class="w-full mb-6 mt-6">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        "data-test": "submit-button",
        type: unref(ButtonType).submit,
        disable: unref(v$).$silentErrors.length,
        title: signing.value ? "Signing..." : "Sign Up",
        class: "w-full",
        theme: `w-full px-8 py-1 ${unref(v$).$silentErrors.length || signing.value ? "bg-green-600/30 cursor-not-allowed dark:bg-green-300/20 dark:text-green-400" : "bg-green-900 hover:bg-green-800 dark:bg-green-100 dark:hover:bg-green-200"} text-white dark:text-green-900 rounded text-lg transition delay-200`
      }, null, _parent));
      _push(`</div></form><h2 class="text-gray-500 text-sm text-center"> Already member of us? `);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "sign-in",
        class: "text-black dark:text-gray-100 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Go within! `);
          } else {
            return [
              createTextVNode(" Go within! ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/sign-up.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sign-up-uJfQKtkf.mjs.map
