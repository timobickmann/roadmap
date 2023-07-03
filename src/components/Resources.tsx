import { Link } from "react-router-dom";
import data from "../data/resources.json";

interface IProps {
  category: string;
}

function Resource({ category }: IProps) {
  const findData = data.filter((item) => item.category === category);
  return (
    <>
      {findData.map((element) => {
        return (
          <>
            <div className="mb-5 flex flex-col gap-1">
              <h2>{element.title}</h2>
              {element.description !== "" && <p>{element.description}</p>}
              <Link to={element.link} target="_blank" rel="noopener noreferrer">
                {element.linktext}
              </Link>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Resource;
