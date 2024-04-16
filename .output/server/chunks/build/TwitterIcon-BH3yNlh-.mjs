import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _imports_0 = "data:image/svg+xml,%3csvg%20width='311'%20height='269'%20viewBox='0%200%20311%20269'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M267.135%2054.7759C267.135%2054.7759%20263.236%2058.6746%20270.477%2088.1936C277.717%20117.713%20294.148%20140.269%20294.148%20140.269C294.148%20140.269%20315.312%20122.447%20308.907%2091.8138C302.781%2061.1809%20267.135%2054.7759%20267.135%2054.7759Z'%20fill='%2322272E'/%3e%3cpath%20d='M271.314%20141.662C271.314%20141.662%20265.744%20143.333%20252.655%20156.978C239.567%20170.624%20220.352%20177.586%20197.516%20187.89C174.681%20198.193%20163.542%20150.295%20169.39%20126.067C174.959%20101.839%20200.023%2085.1302%20200.023%2085.1302L248.757%2091.8137C248.757%2091.8137%20264.909%2072.5985%20271.314%2085.1302C277.44%2097.6618%20276.883%20125.788%20271.314%20141.662Z'%20fill='%23F4C2C9'/%3e%3cpath%20d='M229.541%20230.497L63.566%20268.649C56.3255%20270.32%2049.085%20265.864%2047.4141%20258.624L0.350761%2054.7759C-1.32013%2047.5354%203.1355%2040.2949%2010.376%2038.624L176.351%200.472094C183.591%20-1.19879%20190.832%203.25692%20192.503%2010.4974L239.287%20214.345C241.237%20221.586%20236.781%20228.826%20229.541%20230.497Z'%20fill='%2322272E'/%3e%3cpath%20d='M159.642%2058.9531L51.5916%2083.7378C47.9714%2084.5733%2044.6295%2082.3454%2043.794%2078.7251C42.9586%2075.1049%2045.1866%2071.7631%2048.8068%2070.9277L156.857%2046.1429C160.478%2045.3075%20163.819%2047.5353%20164.655%2051.1555C165.212%2054.4973%20162.984%2058.1176%20159.642%2058.9531Z'%20fill='%23FFE779'/%3e%3cpath%20d='M51.313%20112.421L172.174%2084.5734'%20stroke='%2363737A'%20stroke-width='1.8'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M56.0469%20132.75L176.908%20104.902'%20stroke='%2363737A'%20stroke-width='1.8'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M128.175%20212.953L83.6177%20223.257C79.9975%20224.092%2076.6555%20221.864%2075.8201%20218.244L65.5164%20173.687C64.681%20170.067%2066.9088%20166.725%2070.5291%20165.89L115.086%20155.586C118.706%20154.75%20122.048%20156.978%20122.883%20160.599L133.187%20205.156C133.744%20208.497%20131.516%20212.118%20128.175%20212.953Z'%20fill='%23FFE779'/%3e%3cpath%20d='M139.312%20149.738L184.705%20139.155'%20stroke='%2363737A'%20stroke-width='1.8'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M144.325%20171.738L189.996%20161.434'%20stroke='%2363737A'%20stroke-width='1.8'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M149.338%20194.017L176.908%20187.611'%20stroke='%2363737A'%20stroke-width='1.8'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M124.552%2018.8518L65.5146%2032.4974C61.3374%2033.3329%2057.7171%2029.7126%2058.5526%2025.5354L59.1094%2022.7506C59.6663%2020.5228%2061.3373%2018.8519%2063.5652%2018.2949L120.097%205.20626C122.325%204.64929%20124.552%205.48477%20125.945%207.15566L127.616%209.38347C130.401%2013.0037%20128.73%2018.0164%20124.552%2018.8518Z'%20fill='%236DAFA7'/%3e%3cpath%20d='M252.654%2074.8267C252.654%2074.8267%20245.692%2078.447%20232.325%2074.8267C218.958%2071.2065%20216.73%2067.8647%20202.806%2064.2445C188.882%2060.6242%20169.667%2064.5229%20166.325%2070.371C162.983%2076.2191%20171.895%2079.8394%20183.869%2081.2318C195.844%2082.6242%20201.414%20105.46%20220.629%20114.093C252.654%20128.295%20281.059%2084.852%20252.654%2074.8267Z'%20fill='%23F4C2C9'/%3e%3cpath%20d='M166.325%2070.371C162.983%2076.2191%20171.895%2079.8394%20183.869%2081.2318C195.844%2082.6242%20201.414%20105.46%20220.629%20114.093C227.312%20117.156%20233.718%20117.434%20239.566%20116.32'%20stroke='%23E26E85'%20stroke-width='1.8'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M273.819%2062.0162C273.819%2062.0162%20259.06%2071.4846%20252.655%2074.8264C252.655%2074.8264%20265.187%2087.0796%20270.199%20109.08C275.212%20131.08%20271.313%20141.662%20271.313%20141.662C271.313%20141.662%20287.743%20139.991%20295.819%20134.143C295.819%20134.143%20303.617%20121.333%20297.212%2096.2694C290.807%2071.2062%20273.819%2062.0162%20273.819%2062.0162Z'%20fill='white'/%3e%3cpath%20d='M288.579%20120.219C288.579%20118.27%20287.187%20116.877%20285.237%20116.877C283.288%20116.877%20281.896%20118.27%20281.896%20120.219C281.896%20122.168%20283.288%20123.561%20285.237%20123.561C287.187%20123.561%20288.579%20122.168%20288.579%20120.219Z'%20fill='%2322272E'/%3e%3c/svg%3e";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    class: "icon: 'w-6 h-6 fill-gray-800 inline"
  }, _attrs))}><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/TwitterIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TwitterIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { TwitterIcon as T, _imports_0 as _ };
//# sourceMappingURL=TwitterIcon-BH3yNlh-.mjs.map
