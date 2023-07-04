import CodeBlock from "./CodeBlock";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { FaCaretUp } from "react-icons/fa6";

interface IProps {
  data: any[];
}

function HowToItem({ data }: IProps) {
  const [isOpened, setIsOpened] = useState(false);

  function handleClick() {
    setIsOpened(!isOpened);
  }

  return (
    <>
      <div className="mb-6 border-2 p-2 sm:p-4 sm:pr-10">
        <button className="mb-5 flex items-center gap-2" onClick={handleClick}>
          {isOpened ? (
            <>
              Close <FaCaretUp />
            </>
          ) : (
            <>
              {data[0].title} <FaCaretDown />
            </>
          )}
        </button>

        {isOpened &&
          data.map((element) => {
            return (
              <>
                {element.title !== "" && (
                  <h2 className="mb-3 mt-8 text-2xl">{element.title}</h2>
                )}
                {element.description !== "" && (
                  <p className="mb-3 whitespace-pre-wrap mx-2 sm:mx-5">
                    {element.description}
                  </p>
                )}
                {element.code !== "" && (
                  <div className="mx-2 sm:ml-5">
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
