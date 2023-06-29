import data from "../../data/tailwindSetup.json";
import SetupStep from "../../components/SetupStep";

function Tailwind() {
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
export default Tailwind;
