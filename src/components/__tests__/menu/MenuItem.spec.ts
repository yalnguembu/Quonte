import { RouterLinkStub, VueWrapper, mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import MenuItem from "../../menu/MenuItem.vue";
import ListIcon from "../../icons/ListIcon.vue";

describe("BaseButtonVue", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(MenuItem, {
      props: {
        title: "Menu item test title",
        label: "Menu item test label",
        path: "/test-item-test-path",
        icon: ListIcon,
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
  });

  it("should render correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have the awaited title", () => {
    expect(wrapper.findComponent(RouterLinkStub).attributes().title).toBe(
      "Menu item test title"
    );
  });

  it("should have the awaited path", () => {
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe(
      "/test-item-test-path"
    );
  });

  it("should have the awaited label", () => {
    expect(wrapper.find("span").text()).toBe("Menu item test label");
  });

  it("should have the default menu item theme", async () => {
    expect(wrapper.findComponent(RouterLinkStub).attributes().class).toBe(
      "block text-md font-bold text-green-900 dark:text-gray-300 dark:hover:border-gray-700 px-4 py-2 rounded-md border border-transparent hover:border-gray-200"
    );
    expect(wrapper.find("span").attributes().class).toBe("");
    expect(
      wrapper.find('[data-test="menu-item-icon"]').attributes().class
    ).toBe("w-6 h-6 inline align-middle");

    await wrapper.setProps({
      theme: {
        item: "rounded border bg-gray-100",
        icon: "stroke-2 stroke-gray-100",
        label: "font-bold",
      },
    });

    expect(wrapper.findComponent(RouterLinkStub).attributes().class).toBe(
      "rounded border bg-gray-100"
    );
    expect(wrapper.find("span").attributes().class).toBe("font-bold");
    expect(
      wrapper.find('[data-test="menu-item-icon"]').attributes().class
    ).toBe("w-6 h-6 inline stroke-2 stroke-gray-100");
  });

  it("should have the awaitted theme", async () => {
    expect(wrapper.findComponent(RouterLinkStub).attributes().class).toBe(
      "block text-md font-bold text-green-900 dark:text-gray-300 dark:hover:border-gray-700 px-4 py-2 rounded-md border border-transparent hover:border-gray-200"
    );

    await wrapper.setProps({ theme: { item: "test theme" } });

    expect(wrapper.findComponent(RouterLinkStub).attributes().class).toBe(
      "test theme"
    );
  });

  it("should have the awaitted icon", async () => {
    expect(wrapper.findComponent(ListIcon).exists()).toBe(true);
  });
});
