import { Link } from "react-router-dom";
import CodeBlock from "./CodeBlock";
import data from "../data/setup.json";

interface IProps {
  category: string;
}

function SetupStep({ category }: IProps) {
  const findData = data.filter((item) => item.category === category);
  return (
    <>
      {findData.map((element) => {
        return (
          <>
            <div className="mb-5 flex flex-col gap-1">
              <h2 className="mb-3 text-2xl">{element.step}</h2>
              {element.description !== "" && (
                <p className="whitespace-pre-wrap">{element.description}</p>
              )}
              {element.link !== "" && (
                <Link
                  to={element.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {element.linktext}
                </Link>
              )}
              {element.code !== "" && (
                <CodeBlock
                  file={element.file}
                  language={element.language}
                  code={element.code}
                />
              )}
            </div>
          </>
        );
      })}
    </>
  );
}

export default SetupStep;
