import { mount } from "@vue/test-utils";
import EssentialLink from "src/components/EssentialLink.vue";
import expect from "expect";

describe("EssentialLink.vue", () => {
  it("renders link with correct props", () => {
    const wrapper = mount(EssentialLink, {
      props: {
        title: "Docs",
        caption: "quasar.dev",
        icon: "school",
        link: "https://quasar.dev"
      }
    });

    expect(wrapper.find("a").attributes("href")).toBe("https://quasar.dev");
    expect(wrapper.find("q-icon").attributes("name")).toBe("school");
    expect(wrapper.find("q-item-label").text()).toBe("Docs");
    expect(wrapper.find("q-item-label.caption").text()).toBe("quasar.dev");
  });

  it("renders default link if link prop is not provided", () => {
    const wrapper = mount(EssentialLink, {
      props: {
        title: "Docs",
        caption: "quasar.dev",
        icon: "school"
      }
    });

    expect(wrapper.find("a").attributes("href")).toBe("#");
  });
});
