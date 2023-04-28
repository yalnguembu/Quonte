import { VueWrapper, mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import BaseButton from "../BaseButton.vue";
import ListIcon from "../icons/ListIcon.vue";

describe("BaseButtonVue", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(BaseButton, {
      props: {
        title: "Button title",
      },
    });
  });

  it("should render correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have the awaited title", () => {
    expect(wrapper.find("span").text()).toBe("Button title");
  });

  it("should have the default type", () => {
    expect(wrapper.find("button").attributes().type).toBe("button");
  });

  it("should have the default theme", () => {
    expect(wrapper.find("button").attributes().class).toBe(
      "px-6 py-2 text-white dark:text-green-900 bg-green-900 hover:bg-green-800 dark:bg-green-100 dark:hover:bg-green-200 rounded text-lg"
    );
  });

  it("should have the awaitted theme", async () => {
    expect(wrapper.find("button").attributes().class).toBe(
      "px-6 py-2 text-white dark:text-green-900 bg-green-900 hover:bg-green-800 dark:bg-green-100 dark:hover:bg-green-200 rounded text-lg"
    );

    await wrapper.setProps({ theme: "test theme" });

    expect(wrapper.find("button").attributes().class).toBe("test theme");
  });

  it("should have the awaitted type", async () => {
    expect(wrapper.find("button").attributes().type).toBe("button");

    await wrapper.setProps({ type: "submit" });
    
    expect(wrapper.find("button").attributes().type).toBe("submit");
  });

  it("should have the awaitted left icon", () => {
    wrapper = mount(BaseButton, {
      props: {
        title: "Button test title",
      },
      slots: {
        "icon-left": ListIcon,
      },
    });

    expect(wrapper.findComponent(ListIcon).exists()).toBe(true);
  });

  it("should have the awaitted rigth icon", () => {
    wrapper = mount(BaseButton, {
      props: {
        title: "Button test title",
      },
      slots: {
        "icon-rigth": ListIcon,
      },
    });

    expect(wrapper.findComponent(ListIcon).exists()).toBe(true);
  });
});
