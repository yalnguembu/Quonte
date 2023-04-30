import { mount, RouterLinkStub, type VueWrapper } from "@vue/test-utils";
import { describe, expect, it, beforeEach, vi } from "vitest";
import TheNavbar from "../TheNavbar.vue";
import { navBarItems } from "@/utils/data";
import MenuItem from "../menu/MenuItem.vue";
import type { MenuItem as MenuItemType } from "@/utils/type";
import type { VueElement } from "vue";
import ThemeButton from "../ThemeButton.vue";

describe("TheNavbar", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    global.window.matchMedia = vi.fn(() => ({ matches: false }));

    wrapper = mount(TheNavbar, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
      props: { navBarItems },
      shallow: true,
    });
  });

  const assertNavbarHasItem = (menuItem, props: MenuItemType) => {
    expect(menuItem.props().path).toBe(props.path);
    expect(menuItem.props().title).toBe(props.title);
    expect(menuItem.props().label).toBe(props.label);
    expect(menuItem.props().icon).toEqual(props.icon);
  };

  it("should render correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should should display the logo link", () => {
    expect(wrapper.find('[data-test="app-logo-link"]').exists()).toBe(true);
    expect(
      wrapper
        .find('[data-test="app-logo-link"]')
        .findComponent(RouterLinkStub)
        .props().to
    ).toBe("/");
  });

  it("should haved the awaitted items", () => {
    navBarItems.left.map((item, index) =>
      assertNavbarHasItem(
        wrapper
          .find('[data-test="navbar-left-content"]')
          .findAllComponents(MenuItem)
          .at(index),
        {
          path: item.path,
          title: item.title,
          label: item.label,
        }
      )
    );

    navBarItems.center.map((item, index) =>
      assertNavbarHasItem(
        wrapper
          .find('[data-test="navbar-center-content"]')
          .findAllComponents(MenuItem)
          .at(index),
        {
          path: item.path,
          title: item.title,
          label: item.label,
        }
      )
    );

    navBarItems.right.map((item, index) =>
      assertNavbarHasItem(
        wrapper
          .find('[data-test="navbar-right-content"]')
          .findAllComponents(MenuItem)
          .at(index),
        {
          path: item.path,
          title: item.title,
          icon: item.icon as unknown as VueElement,
        }
      )
    );
  });

  it("should have the theme button", () => {
    expect(wrapper.findComponent(ThemeButton).exists()).toBe(true);
  });

  it("should have the system theme by default", () => {
    expect(wrapper.findComponent(ThemeButton).props().theme).toBe("light");
    expect(document.body.classList.contains("dark")).toBe(false);
  });

  it("should toggle the theme when we click on theme button", async () => {
    wrapper = mount(TheNavbar, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
      //   shallow: true,
      props: { navBarItems },
    });

    const themeButton = wrapper.findComponent(ThemeButton);
    document.body.classList.add("test");
    expect(themeButton.props().theme).toBe("light");
    expect(document.body.classList.contains("dark")).toBe(false);

    await themeButton.trigger("click");
    console.log("-------", document.body.classList.toString());

    expect(themeButton.props().theme).toBe("dark");
    expect(document.body.classList.contains("dark")).toBe(true);
  });
});
