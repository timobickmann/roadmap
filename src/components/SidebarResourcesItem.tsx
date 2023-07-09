import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext";
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
        <Link
          className="rounded px-4 py-1 hover:bg-neutral hover:text-neutral-content"
          onClick={toggleSidebarIsOpened}
          to={`/resources/${sidebarItem}/setup`}
        >
          Setup
        </Link>
      )}

      {isResource && (
        <Link
          className="rounded px-4 py-1 hover:bg-neutral hover:text-neutral-content"
          onClick={toggleSidebarIsOpened}
          to={`/resources/${sidebarItem}`}
        >
          Resources
        </Link>
      )}

      {isHowTo && (
        <Link
          className="rounded px-4 py-1 hover:bg-neutral hover:text-neutral-content"
          onClick={toggleSidebarIsOpened}
          to={`/resources/${sidebarItem}/howtos`}
        >
          How-Tos
        </Link>
      )}
    </>
  );
}
export default SidebarResourcesItem;
