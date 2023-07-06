import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext";

interface IProps {
  item: string;
}

function SidebarResourcesItem({ item }: IProps) {
  const { toggleSidebarIsOpened } = useContext(AppContext);

 

  return (
    <>
      <li>
        <p>{item}</p>
      
          <ul>
            <li>
              <Link
                onClick={toggleSidebarIsOpened}
                to={`/resources/${item.toLowerCase()}/setup`}
              >
                Setup
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleSidebarIsOpened}
                to={`/resources/${item.toLowerCase()}`}
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleSidebarIsOpened}
                to={`/resources/${item.toLowerCase()}/howtos`}
              >
                How-Tos
              </Link>
            </li>
          </ul>
      </li>
    </>
  );
}
export default SidebarResourcesItem;
