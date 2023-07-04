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
            <div className="mb-5 flex flex-col gap-1 text-center sm:text-left">
              <h2 className="mb-3 text-center text-2xl sm:text-left">
                {element.step}
              </h2>
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
                <div className="mx-auto sm:mx-0">
                  <CodeBlock
                    file={element.file}
                    language={element.language}
                    code={element.code}
                  />
                </div>
              )}
            </div>
          </>
        );
      })}
    </>
  );
}

export default SetupStep;
