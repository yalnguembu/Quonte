import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { T as THEME } from './enum-D7_8xumL.mjs';
import { _ as _sfc_main$2 } from './LinkWrapper-CYvxnOrx.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ContactItem",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const getColor = () => {
      switch (props.theme) {
        case THEME.GREEN:
          return "bg-green-200 dark:bg-green-800/50 text-green-800 dark:text-green-100";
        case THEME.BLUE:
          return "bg-blue-200 dark:bg-blue-500/25 text-blue-800 dark:text-blue-100";
        case THEME.YELLOW:
          return "bg-yellow-200 dark:bg-yellow-400/25 text-yellow-800 dark:text-yellow-100";
        default:
          return "";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="rounded-lg p-4 border dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/50"><div class="${ssrRenderClass([
        "h-28 w-full rounded-md flex items-center justify-center",
        getColor()
      ])}"><span class="text-4xl">@</span></div><h5 class="text-bold text-xl text-green-800 dark:text-green-100 border-b-2 border-b-gray-200 dark:border-b-gray-800 py-4">${ssrInterpolate(__props.title)}</h5><p class="text-gray-500 py-3">${ssrInterpolate(__props.description)}</p>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        path: __props.link,
        title: `Write us on ${__props.title}`,
        "is-external": "",
        class: "px-3 py-2 block text-sm text-center rounded-lg border w-full mt-2 border-gray-800 dark:border-gray-100 text-green-800 dark:text-green-100 hover:border-transparent hover:bg-green-800 hover:text-white dark:hover:bg-green-200 dark:hover:text-black hover:shadow-md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Send message `);
          } else {
            return [
              createTextVNode(" Send message ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact-us",
  __ssrInlineRender: true,
  setup(__props) {
    const contactItems = [
      {
        title: "Whatsapp",
        description: "(+237) 696 851 231",
        link: "https://wa.me/237696851231",
        theme: THEME.GREEN
      },
      {
        title: "Telegram",
        description: "@yalnguembu",
        link: "https://t.me/yalnguembu",
        theme: THEME.BLUE
      },
      {
        title: "Mail adress",
        description: "yalnguembu@gmail.com",
        link: "mailto:yalnguembu@gmail.com",
        theme: THEME.YELLOW
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><section class="text-center text-green-800 dark:text-green-100 py-12"><h2 class="my-4 font-bold text-3xl mx-auto lg:w-1/2"> Get In touch with us for more information </h2><h6 class="text-gray-500 dark:text-white"> If you need help or have a question, we&#39;re there for you </h6></section><section class="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-12 pb-12 lg:w-4/5"><!--[-->`);
      ssrRenderList(contactItems, (contactItem, index) => {
        _push(ssrRenderComponent(_sfc_main$1, mergeProps({ key: index }, contactItem), null, _parent));
      });
      _push(`<!--]--></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-us-BvkETyez.mjs.map
