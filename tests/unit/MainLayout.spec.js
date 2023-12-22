import { mount } from "@vue/test-utils";
import MainLayout from "src/layouts/MainLayout.vue";
import expect from "expect";

describe("MainLayout.vue", () => {
  it("renders essential links in the sidebar", () => {
    const wrapper = mount(MainLayout);

    const sidebarLinks = wrapper.findAllComponents({ name: "EssentialLink" });

    expect(sidebarLinks).toHaveLength(7); // Adjust as needed
  });

  it("toggles left drawer when menu button is clicked", async () => {
    const wrapper = mount(MainLayout);

    const menuButton = wrapper.find('q-btn[aria-label="Menu"]');

    expect(wrapper.vm.leftDrawerOpen).toBe(false);

    await menuButton.trigger("click");

    expect(wrapper.vm.leftDrawerOpen).toBe(true);

    await menuButton.trigger("click");

    expect(wrapper.vm.leftDrawerOpen).toBe(false);
  });
});
