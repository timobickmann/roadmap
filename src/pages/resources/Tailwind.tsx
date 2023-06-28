import data from "../../data/tailwindSetup.json";
import SetupStep from "../../components/SetupStep";
import SetupStepCodeBlock from "../../components/SetupStepCodeBlock";

function Tailwind() {
  return (
    <>
      {data.map((element) => {
        return (
          <>
            {element.language === "" ? (
              <SetupStep
                step={element.step}
                description={element.description}
              />
            ) : (
              <SetupStepCodeBlock
                step={element.step}
                description={element.description}
                language={element.language}
                code={element.code}
              />
            )}
          </>
        );
      })}
    </>
  );
}
export default Tailwind;
