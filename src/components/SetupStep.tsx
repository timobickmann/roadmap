import setupData from "../data/setup.json";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import style from "./markdownStyles.module.css";

interface IProps {
  category: string;
}

function SetupStep({ category }: IProps) {
  const setupMarkdown = setupData.filter((item) => item.category === category);
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

export default SetupStep;
