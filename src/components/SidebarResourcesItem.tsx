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
      <li className="flex flex-col mt-3">
        <p className="pl-5 font-bold">Icon - {item}</p>
      
          
            
              <Link className="py-1 px-5 rounded hover:bg-neutral"
                onClick={toggleSidebarIsOpened}
                to={`/resources/${item.toLowerCase()}/setup`}
              >
                Setup
              </Link>
            
              <Link className="py-1 px-5 rounded hover:bg-neutral"
                onClick={toggleSidebarIsOpened}
                to={`/resources/${item.toLowerCase()}`}
              >
                Resources
              </Link>
            
              <Link className="py-1 px-5 rounded hover:bg-neutral"
                onClick={toggleSidebarIsOpened}
                to={`/resources/${item.toLowerCase()}/howtos`}
              >
                How-Tos
              </Link>
            
          
      </li>
    </>
  );
}
export default SidebarResourcesItem;
