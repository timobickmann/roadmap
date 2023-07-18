import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import setupData from "../data/setup.json";
import resourcesData from "../data/resources.json";
import howTosData from "../data/howTos.json";

interface IProps {
  sidebarItem: string;
}

function SidebarResourcesItem({ sidebarItem }: IProps) {
  const { toggleSidebarIsOpened } = useContext(AppContext);
  const isSetup = setupData.find((item) => item.category === sidebarItem);
  const isResource = resourcesData.find(
    (item) => item.category === sidebarItem
  );
  const isHowTo = howTosData.find((item) => item.category === sidebarItem);

  return (
    <>
      {isSetup && (
        <NavLink
          className="rounded px-4 py-1 hover:bg-neutral hover:text-neutral-content"
          onClick={toggleSidebarIsOpened}
          to={`/resources/${sidebarItem}/setup`}
        >
          Setup
        </NavLink>
      )}

      {isResource && (
        <NavLink
          className="rounded px-4 py-1 hover:bg-neutral hover:text-neutral-content"
          onClick={toggleSidebarIsOpened}
          to={`/resources/${sidebarItem}`}
        >
          Resources
        </NavLink>
      )}

      {isHowTo && (
        <NavLink
          className="rounded px-4 py-1 hover:bg-neutral hover:text-neutral-content"
          onClick={toggleSidebarIsOpened}
          to={`/resources/${sidebarItem}/howtos`}
        >
          How-Tos
        </NavLink>
      )}
    </>
  );
}
export default SidebarResourcesItem;
