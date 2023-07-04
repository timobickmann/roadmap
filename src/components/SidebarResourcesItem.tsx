import { Link } from "react-router-dom";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { FaCaretUp } from "react-icons/fa6";

interface IProps {
  item: string;
}

function SidebarResourcesItem({ item }: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <li>
        <button className="flex items-center gap-2" onClick={handleClick}>{item} {isOpen ? <FaCaretUp/> : <FaCaretDown/>}</button>

        {isOpen && (
          <ul>
            <li>
              <Link to={`/resources/${item.toLowerCase()}/setup`}>Setup</Link>
            </li>
            <li>
              <Link to={`/resources/${item.toLowerCase()}`}>Resources</Link>
            </li>
            <li>
              <Link to={`/resources/${item.toLowerCase()}/howtos`}>
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
