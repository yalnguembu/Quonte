import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import EmailInput from "../../form/EmailInput.vue";

describe("EmailInput", () => {
  const wrapper = mount(EmailInput, {
    props: {
      label: "Email adress",
      placeholder: "Enter your email adress",
      modelValue: "",
    },
  });

  it("should render correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have the awaited label", () => {
    expect(wrapper.find("label").text()).toBe("Email adress");
  });

  it("should have awaited the placeholder", () => {
    expect(wrapper.find("input").attributes("placeholder")).toBe(
      "Enter your email adress"
    );
  });

  it("should have the awaited error message and the awaited design", async () => {
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("div input").classes("outline-red-500")).toBe(false);

    await wrapper.setProps({
      errors,
    });

    expect(
      wrapper
        .find(
          '[data-test="email-input-error-5f35ce06-37c2-497c-9b3a-5669cb24035b"]'
        )
        .exists()
    ).toBe(true);

    expect(
      wrapper
        .find(
          '[data-test="email-input-error-5f35ce06-37c2-497c-9b3a-5669cb24035b"]'
        )
        .text()
    ).toBe("This field is required");
    expect(
      wrapper
        .find(
          '[data-test="email-input-error-1d14dfb7-7d30-41e6-8230-3010ca90f43c"]'
        )
        .exists()
    ).toBe(true);
    expect(
      wrapper
        .find(
          '[data-test="email-input-error-1d14dfb7-7d30-41e6-8230-3010ca90f43c"]'
        )
        .text()
    ).toBe("This is not a valid email");
    expect(wrapper.find("div input").classes("outline-red-500")).toBe(true);
  });

  it("should have the awaited outline when the email is valid", async () => {
    expect(
      wrapper
        .find("div input")
        .classes("outline-green-500 dark:outline-green-600")
    ).toBe(false);

    await wrapper.setProps({
      isValid: true,
    });
    expect(wrapper.find("div input").attributes("class")).toContain(
      "outline-green-500 dark:outline-green-600"
    );
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
    $message: "This is not a valid email",
    $uid: "1d14dfb7-7d30-41e6-8230-3010ca90f43c",
  },
];
