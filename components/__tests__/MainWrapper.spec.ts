import { VueWrapper, shallowMount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import MainWrapper from "../MainWrapper.vue";
import TheNavbar from "../TheNavbar.vue";
import TheFooter from "../TheFooter.vue";
import { navBarItems } from "@/utils/data";
import { useSessionStore } from "@/stores/session";

describe("MainWrapperVue", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = shallowMount(MainWrapper, {
      global: {
        stubs: ["RouterView"],
        plugins: [
          createTestingPinia({
            initialState: {
              session: null,
            },
          }),
        ],
      },
    });
  });

  it("should render correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should content the navbar", () => {
    expect(wrapper.findComponent(TheNavbar).exists()).toBe(true);
  });

  it("should content the footer", () => {
    expect(wrapper.findComponent(TheFooter).exists()).toBe(true);
  });

  it("should RouterView", () => {
    expect(wrapper.find("router-view-stub").exists()).toBe(true);
  });

  it.fails(
    "should have the navbar with the awaited props when user is connected",
    () => {
      const store = useSessionStore();
      store.session = {
        name: "name-test",
        picture: "picture-test",
      };
      const navbar = wrapper.findComponent(TheNavbar);

      expect(navbar.exists()).toBe(true);
      expect(navbar.props()).toEqual({
        navBarItems,
        name: "name-test",
        picture: "picture-test",
      });
    }
  );

  it("should have the navbar with the awaited props when user is not connected", () => {
    const navbar = wrapper.findComponent(TheNavbar);
    expect(navbar.exists()).toBe(true);
    expect(navbar.props()).toEqual({
      navBarItems,
    });
  });

  it.fails(
    "should have the footer with the awaited props when user is connected",
    () => {
      const store = useSessionStore();
      store.isSigned.mockImplementation(() => true);

      const footer = wrapper.findComponent(TheFooter);

      expect(footer.exists()).toBe(true);
      expect(footer.props()).toEqual({
        isUserSign: true,
      });
    }
  );

  it("should have the footer with the awaited props when user is not connected", () => {
    const footer = wrapper.findComponent(TheFooter);

    expect(footer.exists()).toBe(true);
    expect(footer.props()).toEqual({
      isUserSign: false,
    });
  });
});
