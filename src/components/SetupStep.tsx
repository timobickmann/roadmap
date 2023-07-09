//@ts-nocheck
import setupData from "../data/setup.json";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import style from "./markdownStyles.module.css";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import {dark} from "react-syntax-highlighter/dist/esm/styles/prism"


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
            {element.md && (<>
              <ReactMarkdown
                linkTarget={"_blank"}
                className={style.reactMarkdown}
                children={element.md}
                components={{
                  code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <SyntaxHighlighter
                        {...props}
                        children={String(children).replace(/\n$/, '')}
                        style={dark}
                        language={match[1]}
                      />
                    ) : (
                      <code {...props} className={className}>
                        {children}
                      </code>
                    )
                  }
                }}
              /></>
            )}
          </>
        );
      })}
    </>
  );
}

export default SetupStep;
