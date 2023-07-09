import style from "./markdownStyles.module.css";
import resourcesData from "../data/resources.json";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface IProps {
  category: string;
}

function Resource({ category }: IProps) {
  const setupMarkdown = resourcesData.filter(
    (item) => item.category === category
  );
  return (
    <>
      {setupMarkdown.map((element) => {
        return (
          <>
            {element.md && (
              <ReactMarkdown
                linkTarget={"_blank"}
                className={style.reactMarkdown}
                children={element.md}
              />
            )}
          </>
        );
      })}
    </>
  );
}

export default Resource;
