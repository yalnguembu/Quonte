import { g as defineStore } from './server.mjs';
import axios from 'axios';
import FormData from 'form-data';
import { ref, computed, defineComponent, mergeProps, useSSRContext, shallowRef, unref } from 'vue';
import { A as ALERT_BOX_TYPE, a as API_ERROR_MESSAGE } from './enum-D7_8xumL.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _isResolved, _isRejected, _isCancelled, _cancelHandlers, _promise, _resolve, _reject;
let ApiError$1 = class ApiError extends Error {
  constructor(request2, response, message) {
    super(message);
    __publicField(this, "url");
    __publicField(this, "status");
    __publicField(this, "statusText");
    __publicField(this, "body");
    __publicField(this, "request");
    this.name = "ApiError";
    this.url = response.url;
    this.status = response.status;
    this.statusText = response.statusText;
    this.body = response.body;
    this.request = request2;
  }
};
class CancelError extends Error {
  constructor(message) {
    super(message);
    this.name = "CancelError";
  }
  get isCancelled() {
    return true;
  }
}
class CancelablePromise {
  constructor(executor) {
    __privateAdd(this, _isResolved, void 0);
    __privateAdd(this, _isRejected, void 0);
    __privateAdd(this, _isCancelled, void 0);
    __privateAdd(this, _cancelHandlers, void 0);
    __privateAdd(this, _promise, void 0);
    __privateAdd(this, _resolve, void 0);
    __privateAdd(this, _reject, void 0);
    __privateSet(this, _isResolved, false);
    __privateSet(this, _isRejected, false);
    __privateSet(this, _isCancelled, false);
    __privateSet(this, _cancelHandlers, []);
    __privateSet(this, _promise, new Promise((resolve2, reject) => {
      __privateSet(this, _resolve, resolve2);
      __privateSet(this, _reject, reject);
      const onResolve = (value) => {
        if (__privateGet(this, _isResolved) || __privateGet(this, _isRejected) || __privateGet(this, _isCancelled)) {
          return;
        }
        __privateSet(this, _isResolved, true);
        if (__privateGet(this, _resolve))
          __privateGet(this, _resolve).call(this, value);
      };
      const onReject = (reason) => {
        if (__privateGet(this, _isResolved) || __privateGet(this, _isRejected) || __privateGet(this, _isCancelled)) {
          return;
        }
        __privateSet(this, _isRejected, true);
        if (__privateGet(this, _reject))
          __privateGet(this, _reject).call(this, reason);
      };
      const onCancel = (cancelHandler) => {
        if (__privateGet(this, _isResolved) || __privateGet(this, _isRejected) || __privateGet(this, _isCancelled)) {
          return;
        }
        __privateGet(this, _cancelHandlers).push(cancelHandler);
      };
      Object.defineProperty(onCancel, "isResolved", {
        get: () => __privateGet(this, _isResolved)
      });
      Object.defineProperty(onCancel, "isRejected", {
        get: () => __privateGet(this, _isRejected)
      });
      Object.defineProperty(onCancel, "isCancelled", {
        get: () => __privateGet(this, _isCancelled)
      });
      return executor(onResolve, onReject, onCancel);
    }));
  }
  get [Symbol.toStringTag]() {
    return "Cancellable Promise";
  }
  then(onFulfilled, onRejected) {
    return __privateGet(this, _promise).then(onFulfilled, onRejected);
  }
  catch(onRejected) {
    return __privateGet(this, _promise).catch(onRejected);
  }
  finally(onFinally) {
    return __privateGet(this, _promise).finally(onFinally);
  }
  cancel() {
    if (__privateGet(this, _isResolved) || __privateGet(this, _isRejected) || __privateGet(this, _isCancelled)) {
      return;
    }
    __privateSet(this, _isCancelled, true);
    if (__privateGet(this, _cancelHandlers).length) {
      try {
        for (const cancelHandler of __privateGet(this, _cancelHandlers)) {
          cancelHandler();
        }
      } catch (error) {
        console.warn("Cancellation threw an error", error);
        return;
      }
    }
    __privateGet(this, _cancelHandlers).length = 0;
    if (__privateGet(this, _reject))
      __privateGet(this, _reject).call(this, new CancelError("Request aborted"));
  }
  get isCancelled() {
    return __privateGet(this, _isCancelled);
  }
}
_isResolved = /* @__PURE__ */ new WeakMap();
_isRejected = /* @__PURE__ */ new WeakMap();
_isCancelled = /* @__PURE__ */ new WeakMap();
_cancelHandlers = /* @__PURE__ */ new WeakMap();
_promise = /* @__PURE__ */ new WeakMap();
_resolve = /* @__PURE__ */ new WeakMap();
_reject = /* @__PURE__ */ new WeakMap();
const OpenAPI = {
  BASE: "http",
  VERSION: "0.1bespace.x",
  WITH_CREDENTIALS: false,
  CREDENTIALS: "include",
  TOKEN: void 0,
  USERNAME: void 0,
  PASSWORD: void 0,
  HEADERS: void 0,
  ENCODE_PATH: void 0
};
const isDefined = (value) => {
  return value !== void 0 && value !== null;
};
const isString = (value) => {
  return typeof value === "string";
};
const isStringWithValue = (value) => {
  return isString(value) && value !== "";
};
const isBlob = (value) => {
  return typeof value === "object" && typeof value.type === "string" && typeof value.stream === "function" && typeof value.arrayBuffer === "function" && typeof value.constructor === "function" && typeof value.constructor.name === "string" && /^(Blob|File)$/.test(value.constructor.name) && /^(Blob|File)$/.test(value[Symbol.toStringTag]);
};
const isFormData = (value) => {
  return value instanceof FormData;
};
const isSuccess = (status) => {
  return status >= 200 && status < 300;
};
const base64 = (str) => {
  try {
    return btoa(str);
  } catch (err) {
    return Buffer.from(str).toString("base64");
  }
};
const getQueryString = (params) => {
  const qs = [];
  const append = (key, value) => {
    qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
  };
  const process = (key, value) => {
    if (isDefined(value)) {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          process(key, v);
        });
      } else if (typeof value === "object") {
        Object.entries(value).forEach(([k, v]) => {
          process(`${key}[${k}]`, v);
        });
      } else {
        append(key, value);
      }
    }
  };
  Object.entries(params).forEach(([key, value]) => {
    process(key, value);
  });
  if (qs.length > 0) {
    return `?${qs.join("&")}`;
  }
  return "";
};
const getUrl = (config, options) => {
  const encoder = config.ENCODE_PATH || encodeURI;
  const path = options.url.replace("{api-version}", config.VERSION).replace(/{(.*?)}/g, (substring, group) => {
    var _a;
    if ((_a = options.path) == null ? void 0 : _a.hasOwnProperty(group)) {
      return encoder(String(options.path[group]));
    }
    return substring;
  });
  const url = `${config.BASE}${path}`;
  if (options.query) {
    return `${url}${getQueryString(options.query)}`;
  }
  return url;
};
const getFormData = (options) => {
  if (options.formData) {
    const formData = new FormData();
    const process = (key, value) => {
      if (isString(value) || isBlob(value)) {
        formData.append(key, value);
      } else {
        formData.append(key, JSON.stringify(value));
      }
    };
    Object.entries(options.formData).filter(([_, value]) => isDefined(value)).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => process(key, v));
      } else {
        process(key, value);
      }
    });
    return formData;
  }
  return void 0;
};
const resolve = async (options, resolver) => {
  if (typeof resolver === "function") {
    return resolver(options);
  }
  return resolver;
};
const getHeaders = async (config, options, formData) => {
  const [token, username, password, additionalHeaders] = await Promise.all([
    resolve(options, config.TOKEN),
    resolve(options, config.USERNAME),
    resolve(options, config.PASSWORD),
    resolve(options, config.HEADERS)
  ]);
  const formHeaders = typeof (formData == null ? void 0 : formData.getHeaders) === "function" && (formData == null ? void 0 : formData.getHeaders()) || {};
  const headers = Object.entries({
    Accept: "application/json",
    ...additionalHeaders,
    ...options.headers,
    ...formHeaders
  }).filter(([_, value]) => isDefined(value)).reduce((headers2, [key, value]) => ({
    ...headers2,
    [key]: String(value)
  }), {});
  if (isStringWithValue(token)) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  if (isStringWithValue(username) && isStringWithValue(password)) {
    const credentials = base64(`${username}:${password}`);
    headers["Authorization"] = `Basic ${credentials}`;
  }
  if (options.body !== void 0) {
    if (options.mediaType) {
      headers["Content-Type"] = options.mediaType;
    } else if (isBlob(options.body)) {
      headers["Content-Type"] = options.body.type || "application/octet-stream";
    } else if (isString(options.body)) {
      headers["Content-Type"] = "text/plain";
    } else if (!isFormData(options.body)) {
      headers["Content-Type"] = "application/json";
    }
  }
  return headers;
};
const getRequestBody = (options) => {
  if (options.body) {
    return options.body;
  }
  return void 0;
};
const sendRequest = async (config, options, url, body, formData, headers, onCancel, axiosClient) => {
  const source = axios.CancelToken.source();
  const requestConfig = {
    url,
    headers,
    data: body != null ? body : formData,
    method: options.method,
    withCredentials: config.WITH_CREDENTIALS,
    withXSRFToken: config.CREDENTIALS === "include" ? config.WITH_CREDENTIALS : false,
    cancelToken: source.token
  };
  onCancel(() => source.cancel("The user aborted a request."));
  try {
    return await axiosClient.request(requestConfig);
  } catch (error) {
    const axiosError = error;
    if (axiosError.response) {
      return axiosError.response;
    }
    throw error;
  }
};
const getResponseHeader = (response, responseHeader) => {
  if (responseHeader) {
    const content = response.headers[responseHeader];
    if (isString(content)) {
      return content;
    }
  }
  return void 0;
};
const getResponseBody = (response) => {
  if (response.status !== 204) {
    return response.data;
  }
  return void 0;
};
const catchErrorCodes = (options, result) => {
  var _a, _b;
  const errors = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error",
    502: "Bad Gateway",
    503: "Service Unavailable",
    ...options.errors
  };
  const error = errors[result.status];
  if (error) {
    throw new ApiError$1(options, result, error);
  }
  if (!result.ok) {
    const errorStatus = (_a = result.status) != null ? _a : "unknown";
    const errorStatusText = (_b = result.statusText) != null ? _b : "unknown";
    const errorBody = (() => {
      try {
        return JSON.stringify(result.body, null, 2);
      } catch (e) {
        return void 0;
      }
    })();
    throw new ApiError$1(
      options,
      result,
      `Generic Error: status: ${errorStatus}; status text: ${errorStatusText}; body: ${errorBody}`
    );
  }
};
const request = (config, options, axiosClient = axios) => {
  return new CancelablePromise(async (resolve2, reject, onCancel) => {
    try {
      const url = getUrl(config, options);
      const formData = getFormData(options);
      const body = getRequestBody(options);
      const headers = await getHeaders(config, options, formData);
      if (!onCancel.isCancelled) {
        const response = await sendRequest(config, options, url, body, formData, headers, onCancel, axiosClient);
        const responseBody = getResponseBody(response);
        const responseHeader = getResponseHeader(response, options.responseHeader);
        const result = {
          url,
          ok: isSuccess(response.status),
          status: response.status,
          statusText: response.statusText,
          body: responseHeader != null ? responseHeader : responseBody
        };
        catchErrorCodes(options, result);
        resolve2(result.body);
      }
    } catch (error) {
      reject(error);
    }
  });
};
class AuthService {
  /**
   * Singin the user
   * Signin the user
   * @returns AuthResponseDTO successfull sigin
   * @throws ApiError
   */
  static signin({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/auth/signin",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `wrong crudentials`
      }
    });
  }
  /**
   * Signup the user
   * Signup the user
   * @returns AuthResponseDTO successfull sigin
   * @throws ApiError
   */
  static signup({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/auth/signup",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `wrong crudentials`
      }
    });
  }
  /**
   * refresh the user token
   * refresh the user token
   * @returns RefreshTokenResponseDTO token refreshed successfully
   * @throws ApiError
   */
  static refreshToken({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/auth/refresh-token",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `invalid refresh token`
      }
    });
  }
  /**
   * verify the user token
   * verify the user token
   * @returns any token verifyhed successfully
   * @throws ApiError
   */
  static verifyToken({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/auth/verify-access-token",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `invalid refresh token`
      }
    });
  }
}
let refresh = false;
axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    var _a;
    if (((_a = error.response) == null ? void 0 : _a.status) === 401 && !refresh) {
      refresh = true;
      const { status, data } = await axios.post(
        "refresh",
        {},
        {
          withCredentials: true
        }
      );
      if (status === 200) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
        return axios(error.config);
      }
    }
    refresh = false;
    throw error;
  }
);
const setRequestHeaderToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
const getAccessToken = async () => {
  var _a;
  return (_a = localStorage.getItem("apiAccessToken")) != null ? _a : "";
};
const saveAccessToken = async (accessToken) => localStorage.setItem("apiAccessToken", accessToken);
const saveRefreshToken = async (accessToken) => localStorage.setItem("apiAccessToken", accessToken);
class Session {
  constructor(data) {
    __publicField(this, "auth");
    __publicField(this, "isNull", true);
    this.auth = data;
    this.isNull = false;
  }
  get id() {
    return this.auth.id;
  }
  get email() {
    var _a;
    return (_a = this.auth.email) != null ? _a : "";
  }
  get username() {
    var _a;
    return (_a = this.auth.username) != null ? _a : "";
  }
  get picture() {
    var _a;
    return (_a = this.auth.picture) != null ? _a : "";
  }
  get accessToken() {
    return this.auth.accessToken;
  }
  get refreshToken() {
    return this.auth.refresh_token;
  }
  set accessToken(token) {
    this.accessToken = token;
  }
  set refreshToken(token) {
    this.refreshToken = token;
  }
}
const newNullSession = () => {
  const session = new Session({});
  session.isNull = true;
  return session;
};
class ApiError2 {
  constructor(data) {
    __publicField(this, "error");
    __publicField(this, "_name");
    __publicField(this, "_message");
    this.error = data;
    this._name = data.name;
    this._message = data.message;
  }
  get message() {
    var _a;
    return (_a = this._message) != null ? _a : "";
  }
  get name() {
    var _a;
    return (_a = this._name) != null ? _a : "";
  }
  get status() {
    var _a;
    switch ((_a = this.error.response) == null ? void 0 : _a.status) {
      case 402:
        return API_ERROR_MESSAGE.ALREADY_EXIST;
      case 400:
        return API_ERROR_MESSAGE.BAD_REQUEST;
      case 403:
        return API_ERROR_MESSAGE.FORBIDDEN;
      default:
        return API_ERROR_MESSAGE.NOT_FOUND;
    }
  }
}
class AuthenticationError extends ApiError2 {
  constructor(data) {
    super(data);
  }
  get message() {
    switch (this.status) {
      case API_ERROR_MESSAGE.ALREADY_EXIST:
        return "Email already taken";
      case API_ERROR_MESSAGE.NOT_FOUND:
        return "Network error please check your internet connection";
      case API_ERROR_MESSAGE.FORBIDDEN:
        return "Sorry your email or password is wrong";
      default:
        return "Sommething went wrong please retry later";
    }
  }
}
const useSessionStore = defineStore("session", () => {
  const session = ref(newNullSession());
  const isSigned = computed(() => {
    return !session.value.isNull;
  });
  const signIn = async (user) => {
    try {
      const infos = await AuthService.signin({
        requestBody: user
      });
      session.value = new Session(infos);
      saveAccessToken(session.value.accessToken);
      saveRefreshToken(session.value.accessToken);
      setRequestHeaderToken(session.value.accessToken);
      return { success: true, message: "connected successfully" };
    } catch (error) {
      throw new AuthenticationError(error);
    }
  };
  const signUp = async (user) => {
    try {
      const infos = await AuthService.signup({
        requestBody: user
      });
      session.value = new Session(infos);
      saveAccessToken(session.value.accessToken);
      saveRefreshToken(session.value.accessToken);
      setRequestHeaderToken(session.value.accessToken);
      return { succes: true };
    } catch (error) {
      throw new AuthenticationError(error);
    }
  };
  const refreshToken = async (token) => {
    try {
      const response = await AuthService.refreshToken({
        requestBody: { refresh_token: token }
      });
      session.value = new Session({ ...response, refresh_token: token });
      saveAccessToken(session.value.accessToken);
    } catch (error) {
      throw new AuthenticationError(error);
    }
  };
  const verifyAccessToken = async (accessToken) => {
    try {
      const user = await AuthService.verifyToken({
        requestBody: {
          accessToken
        }
      });
      session.value = new Session(user);
    } catch (error) {
      throw new AuthenticationError(error);
    }
  };
  const signOut = () => {
    session.value = newNullSession();
    localStorage.clear();
  };
  return {
    session,
    isSigned,
    signIn,
    signUp,
    signOut,
    getAccessToken,
    refreshToken,
    verifyAccessToken
  };
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "EmailInput",
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><label class="font-500 dark:text-gray-100" data-test="email-input-label">${ssrInterpolate(_ctx.label)}</label><input class="${ssrRenderClass([
        "rounded border px-3 py-1 w-full mt-2 bg-transparent outline-none dark:text-gray-100 dark:border-gray-700",
        _ctx.isValid ? "outline-green-500 dark:outline-green-600" : _ctx.errors.length ? "outline-red-500" : "focus:outline-blue-500 dark:focus:outline-blue-600"
      ])}" type="email"${ssrRenderAttr("placeholder", _ctx.placeholder)}${ssrRenderAttr("value", _ctx.modelValue)}><!--[-->`);
      ssrRenderList(_ctx.errors, (error) => {
        _push(`<p${ssrRenderAttr("data-test", `email-input-error-${error.$uid}`)} class="pt-1 text-red-500 transition delay-500 text-sm">${ssrInterpolate(error.$message)}</p>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/EmailInput.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-6 h-6 inline"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/EyeIcon.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const EyeIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-6 h-6 inline"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/EyeSlashIcon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const EyeSlashIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PasswordInput",
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
    const isTextVisible = shallowRef(false);
    const isFocus = shallowRef(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><label class="font-500 dark:text-gray-100">${ssrInterpolate(_ctx.label)}</label><div class="${ssrRenderClass([
        "rounded border px-3 py-1 w-full flex mt-2 bg-transparent outline-none dark:text-gray-100 dark:border-gray-700",
        _ctx.isValid ? "outline-green-500 dark:outline-green-600" : _ctx.errors.length ? "outline-red-500" : isFocus.value ? "focus:outline-blue-500 dark:focus:outline-blue-600" : ""
      ])}"><input class="bg-transparent px-3 outline-none dark:text-gray-100 w-full"${ssrRenderAttr("type", isTextVisible.value ? "text" : "password")}${ssrRenderAttr("placeholder", props.placeholder)}${ssrRenderAttr("value", props.modelValue)}><button class="outline-none" type="button">`);
      _push(ssrRenderComponent(EyeIcon, {
        class: "w-[1.2rem]",
        style: isTextVisible.value ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(EyeSlashIcon, {
        class: "w-[1.2rem]",
        style: !isTextVisible.value ? null : { display: "none" }
      }, null, _parent));
      _push(`</button></div><!--[-->`);
      ssrRenderList(props.errors, (error) => {
        _push(`<p${ssrRenderAttr("data-test", `error-${error.$uid}`)} class="pt-1 text-red-500 transition delay-500 text-sm">${ssrInterpolate(error.$message)}</p>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/PasswordInput.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-6 h-6 inline"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/InformationIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const InformationIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AlertBox",
  __ssrInlineRender: true,
  props: {
    summary: {
      type: String,
      required: true
    },
    alertType: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const theme = props.alertType === ALERT_BOX_TYPE.ERROR ? {
      box: "bg-red-100 dark:bg-red-800/20 p-2 rounded-lg",
      icon: "dark:stroke-red-400 stroke-red-500 mr-2 align-middle",
      title: "underline font-bold text-lg text-red-500 dark:text-red-400"
    } : props.alertType === ALERT_BOX_TYPE.WARNING ? {
      box: "bg-orange-100 dark:bg-orange-900/50 p-2 rounded-lg",
      icon: "dark:stroke-orange-400 stroke-orange-500 mr-2 align-middle",
      title: "underline font-bold text-lg text-orange-500 dark:text-orange-400"
    } : props.alertType === ALERT_BOX_TYPE.INFO ? {
      box: "bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg",
      icon: "dark:stroke-blue-400 stroke-blue-500 mr-2 align-middle",
      title: "underline font-bold text-lg text-blue-500 dark:text-blue-400"
    } : props.alertType === ALERT_BOX_TYPE.SUCCESS ? {
      box: "bg-green-100 dark:bg-green-900/50 p-2 rounded-lg",
      icon: "dark:stroke-green-400 stroke-green-500 mr-2 align{theme}-middle",
      title: "underline font-bold text-lg text-green-500 dark:text-green-400"
    } : {
      box: "bg-gray-100 dark:bg-gray-900/50 p-2 rounded-lg",
      icon: "dark:stroke-$gray-400 stroke-gray-500 mr-2 align-middle",
      title: "underline font-bold text-lg text-gray-500 dark:text-gray-400"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(theme).box
      }, _attrs))}><div class="flex items-center">`);
      _push(ssrRenderComponent(InformationIcon, {
        class: unref(theme).icon
      }, null, _parent));
      _push(`<h3 class="${ssrRenderClass(unref(theme).title)}">${ssrInterpolate(__props.alertType === unref(ALERT_BOX_TYPE).ERROR ? "Error" : props.alertType === unref(ALERT_BOX_TYPE).WARNING ? "Warning" : props.alertType === unref(ALERT_BOX_TYPE).INFO ? "Information" : "Note")}: </h3></div><p class="text-gray-500 dark:text-gray-400 p-2">${ssrInterpolate(__props.summary)}</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AlertBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _sfc_main$5 as a, _sfc_main$2 as b, useSessionStore as u };
//# sourceMappingURL=AlertBox-Dfo1LM_f.mjs.map
