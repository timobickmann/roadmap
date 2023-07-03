import CodeBlock from "./CodeBlock";
import data from "../data/howTos.json";

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
            <div className="mb-6 flex flex-col gap-1">
              <h2 className="mb-3 text-xl">{element.title}</h2>
              {element.description !== "" && <p>{element.description}</p>}
              {element.language !== "" && (
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

export default Resource;
