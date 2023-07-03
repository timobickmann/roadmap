// @ts-nocheck

import data from "../../data/setup.json";
import SetupStep from "../../components/SetupStep";

function ViteSetup() {
  const findData = data.find((item) => item.category === "vite");
  return (
    <>
      <div className="flex flex-col gap-10">
        {findData.steps.map((element) => {
          return (
            <>
              <SetupStep
                step={element.step}
                description={element.description}
                link={element.link}
                linktext={element.linktext}
                file={element.file}
                language={element.language}
                code={element.code}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
export default ViteSetup;
