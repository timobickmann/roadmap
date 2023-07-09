import howTosData from "../data/howTos.json";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import style from "./markdownStyles.module.css";
import { FaCaretDown } from "react-icons/fa6";
import { FaCaretUp } from "react-icons/fa6";
import { useState } from "react";

interface IProps {
  category: string;
}

function HowTos({ category }: IProps) {
  const [isOpened, setIsOpened] = useState(false);

  function handleClick() {
    setIsOpened(!isOpened);
  }

  const howTosMarkdown = howTosData.filter(
    (item) => item.category === category
  );
  return (
    <>
      {howTosMarkdown.map((element) => {
        return (
          <>
            <div className="mb-6 border-2 border-base-content p-2 sm:p-4 sm:pr-10">
              <button
                className="mb-5 flex items-center gap-2"
                onClick={handleClick}
              >
                {isOpened ? (
                  <>
                    Close <FaCaretUp />
                  </>
                ) : (
                  <>
                    {element.subcategory} <FaCaretDown />
                  </>
                )}
              </button>
              {isOpened && (
                <>
                  <ReactMarkdown
                    linkTarget={"_blank"}
                    className={style.reactMarkdown}
                    children={element.md}
                  />
                  <button
                    className=" flex items-center gap-2"
                    onClick={handleClick}
                  >
                    Close <FaCaretUp />
                  </button>
                </>
              )}
            </div>
          </>
        );
      })}
    </>
  );
}

export default HowTos;
