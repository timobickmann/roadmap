import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext";

interface IProps {
  sidebarItem: string;
}

function SidebarResourcesItem({ sidebarItem }: IProps) {
  const { toggleSidebarIsOpened } = useContext(AppContext);

  return (
    <>
      <Link
        className="rounded px-5 py-1 hover:bg-neutral"
        onClick={toggleSidebarIsOpened}
        to={`/resources/${sidebarItem}/setup`}
      >
        Setup
      </Link>

      <Link
        className="rounded px-5 py-1 hover:bg-neutral"
        onClick={toggleSidebarIsOpened}
        to={`/resources/${sidebarItem}`}
      >
        Resources
      </Link>

      <Link
        className="rounded px-5 py-1 hover:bg-neutral"
        onClick={toggleSidebarIsOpened}
        to={`/resources/${sidebarItem}/howtos`}
      >
        How-Tos
      </Link>
    </>
  );
}
export default SidebarResourcesItem;
