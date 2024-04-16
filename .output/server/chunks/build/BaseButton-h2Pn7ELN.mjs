import { defineComponent, useSlots, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderAttr, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';

var ButtonType = /* @__PURE__ */ ((ButtonType2) => {
  ButtonType2["button"] = "button";
  ButtonType2["submit"] = "submit";
  ButtonType2["reset"] = "reset";
  return ButtonType2;
})(ButtonType || {});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseButton",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      require: true
    },
    theme: {
      type: String,
      default: "px-6 py-2 text-white dark:text-green-900 bg-green-800 hover:bg-green-800 dark:bg-green-100 dark:hover:bg-green-200 rounded text-lg transition delay-200"
    },
    type: {
      type: String,
      default: ButtonType.button
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const slots = useSlots();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inline-block" }, _attrs))}><button${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""} class="${ssrRenderClass(__props.theme)}"${ssrRenderAttr("type", __props.type)}>`);
      ssrRenderSlot(_ctx.$slots, "icon-left", { dataTest: "base-button-icon-left" }, null, _push, _parent);
      _push(`<span data-test="base-button-title" class="${ssrRenderClass([
        {
          "mr-4": unref(slots)["icon-left"] && __props.title,
          "ml-4": unref(slots)["icon-rigth"] && __props.title
        }
      ])}">${ssrInterpolate(__props.title)}</span>`);
      ssrRenderSlot(_ctx.$slots, "icon-rigth", { dataTest: "base-button-icon-rigth" }, null, _push, _parent);
      _push(`</button></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/button/BaseButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { ButtonType as B, _sfc_main as _ };
//# sourceMappingURL=BaseButton-h2Pn7ELN.mjs.map
