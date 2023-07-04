import CodeBlock from "./CodeBlock";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { FaCaretUp } from "react-icons/fa6";

interface IProps {
  subcategory: string;
  findData: any[];
}

function HowToItem({ subcategory, findData }: IProps) {
  const [isOpened, setIsOpened] = useState(false);

  function handleClick() {
    setIsOpened(!isOpened);
  }

  const findSubData = findData.filter(
    (item) => item.subcategory === subcategory
  );
  return (
    <>
      <div className="mb-6 border-2 p-4 pr-10">
        <button className="mb-5 flex items-center gap-2" onClick={handleClick}>
          {isOpened ? (
            <>
              Close <FaCaretUp />
            </>
          ) : (
            <>
              {findSubData[0].title} <FaCaretDown />
            </>
          )}
        </button>

        {isOpened &&
          findSubData.map((element) => {
            return (
              <>
                {element.title !== "" && (
                  <h2 className="mb-3 mt-8 text-2xl">{element.title}</h2>
                )}
                {element.description !== "" && (
                  <p className="mb-3 whitespace-pre-wrap ml-5">
                    {element.description}
                  </p>
                )}
                {element.code !== "" && (
                  <div className="ml-5">
                    <CodeBlock
                      file={element.file}
                      language={element.language}
                      code={element.code}
                    />
                  </div>
                )}
              </>
            );
          })}
      </div>
    </>
  );
}

export default HowToItem;
