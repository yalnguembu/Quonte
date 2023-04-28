import { VueWrapper, mount, shallowMount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import MainWrapper from "../MainWrapper.vue";
import TheNavbar from "../TheNavbar.vue";
import TheFooter from "../TheFooter.vue";

describe("MainWrapperVue", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = shallowMount(MainWrapper, {
      global: {
        stubs: ["RouterView"],
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
});
