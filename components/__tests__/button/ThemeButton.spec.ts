import { VueWrapper, mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import ThemeButton from "../../button/ThemeButton.vue";
import SunIcon from "../../icons/SunIcon.vue";
import LunaIcon from "../../icons/LunaIcon.vue";

describe("ThemeButtonVue", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(ThemeButton, {
      props: {
        title: "Button title",
      },
    });
  });

  it("should render correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should been in the default theme", () => {
    expect(wrapper.find("button").attributes().class).toBe(
      "border rounded-full w-12 flex justify-start bg-gray-100 border-gray-200"
    );
  });

  it("should been in the default theme", async () => {
    expect(wrapper.find("button").attributes().class).toBe(
      "border rounded-full w-12 flex justify-start bg-gray-100 border-gray-200"
    );

    await wrapper.setProps({
      theme: "dark",
    });

    expect(wrapper.find("button").attributes().class).toBe(
      "border rounded-full w-12 flex justify-end bg-gray-800 border-gray-800"
    );
  });

  it("should have the default icon", () => {
    expect(wrapper.findComponent(SunIcon).exists()).toBe(true);
  });

  it("should have the awaitted icon", async () => {
    expect(wrapper.findComponent(SunIcon).exists()).toBe(true);

    await wrapper.setProps({ theme: "dark" });

    expect(wrapper.findComponent(LunaIcon).exists()).toBe(true);
  });

  it("should switch on click", async () => {
    expect(wrapper.find("button").attributes().class).toBe(
      "border rounded-full w-12 flex justify-start bg-gray-100 border-gray-200"
    );
    expect(wrapper.findComponent(SunIcon).exists()).toBe(true);

    await wrapper.setProps({
      theme: "dark",
    });

    expect(wrapper.findComponent(LunaIcon).exists()).toBe(true);
    expect(wrapper.find("button").attributes().class).toBe(
      "border rounded-full w-12 flex justify-end bg-gray-800 border-gray-800"
    );
  });

  it("should toggle on click", async () => {
    await wrapper.find("button").trigger("click");

    expect(wrapper.emitted()).toHaveProperty("toggle");
    expect(wrapper.emitted("toggle")?.length).toBe(1);
  });
});
