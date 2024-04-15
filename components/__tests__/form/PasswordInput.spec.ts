import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import PasswordInput from "../../form/PasswordInput.vue";

describe("PasswordInput", () => {
  const wrapper = mount(PasswordInput, {
    props: {
      label: "Password",
      placeholder: "Enter your password",
      modelValue: "",
    },
  });

  it("should render correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have the awaited label", () => {
    expect(wrapper.find("label").text()).toBe("Password");
  });

  it("should have awaited the placeholder", () => {
    expect(wrapper.find("input").attributes("placeholder")).toBe(
      "Enter your password"
    );
  });

  it("should have the awaited error message and the awaited design", async () => {
    expect(wrapper.find("p").exists()).toBe(false);
    expect(
      wrapper.find('div [data-test="input"]').classes("outline-red-500")
    ).toBe(false);

    await wrapper.setProps({
      errors,
    });

    expect(
      wrapper
        .find('[data-test="error-5f35ce06-37c2-497c-9b3a-5669cb24035b"]')
        .exists()
    ).toBe(true);

    expect(
      wrapper
        .find('[data-test="error-5f35ce06-37c2-497c-9b3a-5669cb24035b"]')
        .text()
    ).toBe("This field is required");
    expect(
      wrapper
        .find('[data-test="error-1d14dfb7-7d30-41e6-8230-3010ca90f43c"]')
        .exists()
    ).toBe(true);
    expect(
      wrapper
        .find('[data-test="error-1d14dfb7-7d30-41e6-8230-3010ca90f43c"]')
        .text()
    ).toBe("This is not a valid password");
    expect(
      wrapper.find('div [data-test="input"]').classes("outline-red-500")
    ).toBe(true);
  });

  it("should have the awaited outline when the password is valid", async () => {
    expect(
      wrapper
        .find('div [data-test="input"]')
        .classes("outline-green-500 dark:outline-green-600")
    ).toBe(false);

    await wrapper.setProps({
      isValid: true,
    });

    expect(
      wrapper.find('div [data-test="input"]').attributes("class")
    ).toContain("outline-green-500 dark:outline-green-600");
  });

  it("should emit the awaited value after input", async () => {
    await wrapper.find("input").setValue("Hello");

    expect(wrapper.emitted()).toHaveProperty("update:modelValue");
    expect(wrapper.emitted("update:modelValue")?.length).toBe(1);
    expect(wrapper.emitted("update:modelValue")[0][0]).toBe("Hello");
  });
});

const errors = [
  {
    $message: "This field is required",
    $uid: "5f35ce06-37c2-497c-9b3a-5669cb24035b",
  },
  {
    $message: "This is not a valid password",
    $uid: "1d14dfb7-7d30-41e6-8230-3010ca90f43c",
  },
];
