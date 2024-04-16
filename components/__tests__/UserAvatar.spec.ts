import { VueWrapper, mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import UserAvatar from "../UserAvatar.vue";
import ChevronDownIcon from "../icons/ChevronDownIcon.vue";

describe("UserAvater", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(UserAvatar, {
      props: {
        name: "user name test",
      },
    });
  });

  it("should render correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have the chevronDownIcon", () => {
    expect(wrapper.findComponent(ChevronDownIcon).exists()).toBe(true);
  });

  it("should have the awaited user name", () => {
    expect(wrapper.find('[data-test="user-avatar-name"]').text()).toBe(
      "user name test"
    );
  });

  it("should have the awaited user letter whe the user picture is not provided", () => {
    expect(wrapper.find('[data-test="user-avatar-letter"]').text()).toBe("U");
  });

  it("should have the awaited picture when the picture source is provided", async () => {
    expect(wrapper.find("img").exists()).toBe(false);

    await wrapper.setProps({
      picture: "hello.png",
    });

    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find("img").attributes().src).toBe("hello.png");
  });
});
