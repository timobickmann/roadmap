import style from "./markdownStyles.module.css";
import resourcesData from "../data/resources.json";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import {oneDark} from "react-syntax-highlighter/dist/esm/styles/prism"

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
                components={{
                  code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <SyntaxHighlighter
                        {...props}
                        children={String(children).replace(/\n$/, '')}
                        style={oneDark}
                        language={match[1]}
                      />
                    ) : (
                      <code {...props} className={className}>
                        {children}
                      </code>
                    )
                  }
                }}
              />
            )}
          </>
        );
      })}
    </>
  );
}

export default Resource;
