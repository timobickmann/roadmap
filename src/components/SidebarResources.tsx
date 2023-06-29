import SidebarResourcesItem from "./SidebarResourcesItem";

function SidebarResources() {
  return (
    <>
      <aside className="fixed bottom-0 left-0 top-0 z-20 min-h-screen overflow-y-scroll bg-gray-800 px-6 scrollbar-hide">
        <nav className="">
          <ul className="flex flex-col gap-5 py-10">
            <SidebarResourcesItem item="Tailwind" />
            <SidebarResourcesItem item="CSS" />
            <SidebarResourcesItem item="tbd" />
            <SidebarResourcesItem item="tbd" />
            <SidebarResourcesItem item="tbd" />
            <SidebarResourcesItem item="tbd" />
            <SidebarResourcesItem item="tbd" />
            <SidebarResourcesItem item="tbd" />
            <SidebarResourcesItem item="tbd" />
            <SidebarResourcesItem item="tbd" />
            <SidebarResourcesItem item="tbd" />
            <SidebarResourcesItem item="tbd" />
            <SidebarResourcesItem item="tbd" />
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default SidebarResources;
