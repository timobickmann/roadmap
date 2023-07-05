//@ts-nocheck

import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { FaCaretUp } from "react-icons/fa6";
import { AppContext } from "../AppContext";

interface IProps {
  item: string;
}

function SidebarResourcesItem({ item }: IProps) {
  const { sidebarIsOpened, toggleSidebarIsOpened } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <li>
        <button className="flex items-center gap-2" onClick={handleClick}>
          {item} {isOpen ? <FaCaretUp /> : <FaCaretDown />}
        </button>

        {isOpen && (
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
        )}
      </li>
    </>
  );
}
export default SidebarResourcesItem;
