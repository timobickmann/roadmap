import data from "../../data/viteSetup.json";
import SetupStep from "../../components/SetupStep";

function ViteSetup() {
  return (
    <>
      <div className="flex flex-col gap-10">
        {data.map((element) => {
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
