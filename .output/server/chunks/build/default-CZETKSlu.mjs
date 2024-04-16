import { _ as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, defineComponent, resolveComponent, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, createCommentVNode, toDisplayString, createTextVNode, Fragment, renderList, resolveDirective } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderVNode, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrGetDirectiveProps, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0, T as TwitterIcon } from './TwitterIcon-BH3yNlh-.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _sfc_main$5 } from './LinkWrapper-CYvxnOrx.mjs';
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

const replaceSpaceBySlashToLowercase = (text) => text == null ? void 0 : text.toLowerCase().replace(" ", "-");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MenuItem",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String
    },
    label: {
      type: String
    },
    path: {
      type: String,
      required: true
    },
    icon: {
      type: Object
    },
    actived: {
      type: Boolean
    },
    theme: {
      type: Object,
      default: () => ({
        icon: "align-middle h-3 w-3",
        label: "px-4",
        item: "block text-md text-green-900 dark:text-gray-300 dark:hover:border-gray-700 px-4 py-2 rounded-md border border-transparent hover:border-gray-200 text-center"
      })
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<li${ssrRenderAttrs(mergeProps({
        "data-test": `menu-item-${unref(replaceSpaceBySlashToLowercase)((_a = __props.title) != null ? _a : "")}`,
        class: "relative"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: __props.path,
        title: __props.title,
        class: __props.theme.item
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.actived) {
              _push2(`<div class="absolute transition duration-300 w-12 left-2.5 rounded-full h-4 -bottom-2 bg-green-700 dark:bg-green-200 lg:top-4 lg:-left-2.5 lg:w-4 lg:bottom-0 lg:h-1/2"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.icon) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.icon), {
                "data-test": "menu-item-icon",
                class: [__props.theme.icon]
              }, null), _parent2, _scopeId);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="${ssrRenderClass([__props.theme.label, { "font-bold": __props.actived }])}"${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
          } else {
            return [
              __props.actived ? (openBlock(), createBlock("div", {
                key: 0,
                class: "absolute transition duration-300 w-12 left-2.5 rounded-full h-4 -bottom-2 bg-green-700 dark:bg-green-200 lg:top-4 lg:-left-2.5 lg:w-4 lg:bottom-0 lg:h-1/2"
              })) : createCommentVNode("", true),
              __props.icon ? (openBlock(), createBlock(resolveDynamicComponent(__props.icon), {
                key: 1,
                "data-test": "menu-item-icon",
                class: [__props.theme.icon]
              }, null, 8, ["class"])) : createCommentVNode("", true),
              createVNode("span", {
                class: [__props.theme.label, { "font-bold": __props.actived }]
              }, toDisplayString(__props.label), 3)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu/MenuItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    class: "icon: 'w-6 h-6 fill-gray-800 inline"
  }, _attrs))}><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/GithubIcon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const GithubIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const footerItems = [
  [
    {
      title: "Product",
      label: "Product",
      path: ""
    },
    {
      title: "Solution",
      label: "Solution",
      path: ""
    },
    {
      title: "Sign In",
      label: "Sign In",
      path: "/auth/sign-in"
    }
  ],
  [
    {
      title: "Support us",
      label: "Support us",
      path: ""
    },
    {
      title: "Contact us",
      label: "Contact us",
      path: "contact-us"
    }
  ],
  [
    {
      label: "",
      title: "Github",
      path: "https://github.com/yalnguembu/quonte",
      icon: GithubIcon
    },
    {
      label: "",
      title: "Twitter",
      path: "https://twitter.com/yalnguembu",
      icon: TwitterIcon
    }
  ]
];
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _directive_motion_slide_visible_once_bottom = resolveDirective("motion-slide-visible-once-bottom");
  _push(`<div${ssrRenderAttrs(mergeProps({ ref: "block" }, _attrs))}><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_once_bottom))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnimeOnScroll.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AnimeOnScroll = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const thisYear = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "block min-h-4 w-full bg-gray-100 dark:bg-gray-800 dark:text-gray-100" }, _attrs))}><div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:p-12">`);
      _push(ssrRenderComponent(AnimeOnScroll, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-screen-xl items-center flex flex-col justify-between p-4 lg:items-start"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_RouterLink, {
              to: "/",
              class: "text-xl font-bold text-transparent flex flex-col items-center px-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="w-16 rotate-45"${_scopeId2}><span class="bg-clip-text text-4xl bg-gradient-to-r from-green-500 dark:from-green-300 to-yellow-500 dark:to-yellow-500"${_scopeId2}>Quonte</span>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0,
                      alt: "",
                      class: "w-16 rotate-45"
                    }),
                    createVNode("span", { class: "bg-clip-text text-4xl bg-gradient-to-r from-green-500 dark:from-green-300 to-yellow-500 dark:to-yellow-500" }, "Quonte")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="px-4 py-4 text-gray-500 text-xl lg:text-base"${_scopeId}> \xA9 ${ssrInterpolate(unref(thisYear))} Quonte inc<br${_scopeId}> By `);
            _push2(ssrRenderComponent(_sfc_main$5, {
              path: "https://yalnguembu.netlify.app/",
              title: "visit Young-Tech website",
              "is-external": "",
              class: "hover:text-blue-400 hover:underline italic font-sans font-bold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Young-Tech `);
                } else {
                  return [
                    createTextVNode(" Young-Tech ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-screen-xl items-center flex flex-col justify-between p-4 lg:items-start" }, [
                createVNode(_component_RouterLink, {
                  to: "/",
                  class: "text-xl font-bold text-transparent flex flex-col items-center px-4"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_0,
                      alt: "",
                      class: "w-16 rotate-45"
                    }),
                    createVNode("span", { class: "bg-clip-text text-4xl bg-gradient-to-r from-green-500 dark:from-green-300 to-yellow-500 dark:to-yellow-500" }, "Quonte")
                  ]),
                  _: 1
                }),
                createVNode("p", { class: "px-4 py-4 text-gray-500 text-xl lg:text-base" }, [
                  createTextVNode(" \xA9 " + toDisplayString(unref(thisYear)) + " Quonte inc", 1),
                  createVNode("br"),
                  createTextVNode(" By "),
                  createVNode(_sfc_main$5, {
                    path: "https://yalnguembu.netlify.app/",
                    title: "visit Young-Tech website",
                    "is-external": "",
                    class: "hover:text-blue-400 hover:underline italic font-sans font-bold"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Young-Tech ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(AnimeOnScroll, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 text-center lg:text-left"${_scopeId}><h5 class="dark:text-gray-100 text-3xl lg:text-xl px-2 mb-2"${_scopeId}> Products </h5><ul${_scopeId}><!--[-->`);
            ssrRenderList(unref(footerItems)[0], (item, index) => {
              _push2(ssrRenderComponent(_sfc_main$4, {
                key: index,
                path: item.path,
                label: item.label,
                theme: {
                  label: "text-xl lg:text-base",
                  item: "block py-3 rounded px-2 text-gray-500 hover:text-green-800 hover:font-bold dark:hover:text-gray-100"
                }
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></ul></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 text-center lg:text-left" }, [
                createVNode("h5", { class: "dark:text-gray-100 text-3xl lg:text-xl px-2 mb-2" }, " Products "),
                createVNode("ul", null, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(footerItems)[0], (item, index) => {
                    return openBlock(), createBlock(_sfc_main$4, {
                      key: index,
                      path: item.path,
                      label: item.label,
                      theme: {
                        label: "text-xl lg:text-base",
                        item: "block py-3 rounded px-2 text-gray-500 hover:text-green-800 hover:font-bold dark:hover:text-gray-100"
                      }
                    }, null, 8, ["path", "label"]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(AnimeOnScroll, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 text-center lg:text-left"${_scopeId}><h5 class="dark:text-gray-100 text-3xl lg:text-xl px-2 mb-2"${_scopeId}> About us </h5><ul${_scopeId}><!--[-->`);
            ssrRenderList(unref(footerItems)[1], (item, index) => {
              _push2(ssrRenderComponent(_sfc_main$4, {
                key: index,
                path: item.path,
                label: item.label,
                theme: {
                  label: "text-xl lg:text-base",
                  item: "block py-3 rounded px-2 text-gray-500 hover:text-green-800 hover:font-bold  dark:hover:text-gray-100"
                }
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></ul></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 text-center lg:text-left" }, [
                createVNode("h5", { class: "dark:text-gray-100 text-3xl lg:text-xl px-2 mb-2" }, " About us "),
                createVNode("ul", null, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(footerItems)[1], (item, index) => {
                    return openBlock(), createBlock(_sfc_main$4, {
                      key: index,
                      path: item.path,
                      label: item.label,
                      theme: {
                        label: "text-xl lg:text-base",
                        item: "block py-3 rounded px-2 text-gray-500 hover:text-green-800 hover:font-bold  dark:hover:text-gray-100"
                      }
                    }, null, 8, ["path", "label"]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(AnimeOnScroll, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 flex flex-col items-center justify-between lg:items-start"${_scopeId}><h5 class="dark:text-gray-100 text-3xl lg:text-xl px-2 mb-2"${_scopeId}> Get in touch </h5><p class="px-2 py-4 text-gray-500 text-xl lg:text-base"${_scopeId}> Question or feedback? <br${_scopeId}> We&#39;d love to hear from you </p><ul class="flex"${_scopeId}><!--[-->`);
            ssrRenderList(unref(footerItems)[2], (item, index) => {
              _push2(ssrRenderComponent(_sfc_main$5, {
                key: index,
                path: item.path,
                isExternal: "",
                class: "block p-2 px-3 mr-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(item.icon), { class: "w-5 h-5 dark:fill-gray-100" }, null), _parent3, _scopeId2);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(item.icon), { class: "w-5 h-5 dark:fill-gray-100" }))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></ul></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 flex flex-col items-center justify-between lg:items-start" }, [
                createVNode("h5", { class: "dark:text-gray-100 text-3xl lg:text-xl px-2 mb-2" }, " Get in touch "),
                createVNode("p", { class: "px-2 py-4 text-gray-500 text-xl lg:text-base" }, [
                  createTextVNode(" Question or feedback? "),
                  createVNode("br"),
                  createTextVNode(" We'd love to hear from you ")
                ]),
                createVNode("ul", { class: "flex" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(footerItems)[2], (item, index) => {
                    return openBlock(), createBlock(_sfc_main$5, {
                      key: index,
                      path: item.path,
                      isExternal: "",
                      class: "block p-2 px-3 mr-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), { class: "w-5 h-5 dark:fill-gray-100" }))
                      ]),
                      _: 2
                    }, 1032, ["path"]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_RouterView = resolveComponent("RouterView");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="${ssrRenderClass([
        "w-full bg-white dark:bg-gray-900 min-h-screen block",
        { "lg:flex": false }
      ])}">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(_component_RouterView, { class: {
        "h-full overflow-hidden border lg:w-5/6 xl:w-4/5": false
      } }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-CZETKSlu.mjs.map
