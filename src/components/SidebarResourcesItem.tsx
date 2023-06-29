import { Link } from "react-router-dom";

interface IProps {
  item: string;
}

function SidebarResourcesItem({ item }: IProps) {
  return (
    <>
      <li>
        {item}
        <ul>
          <li>
            <Link to={`/resources/${item.toLowerCase()}/setup`}>Setup</Link>
          </li>
          <li>
            <Link to={`/resources/${item.toLowerCase()}`}>Resources</Link>
          </li>
        </ul>
      </li>
    </>
  );
}
export default SidebarResourcesItem;
