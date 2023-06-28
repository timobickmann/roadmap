import data from "../../data/cssSetup.json";
import SetupStep from "../../components/SetupStep";
import SetupStepCodeBlock from "../../components/SetupStepCodeBlock";

function Css() {
  const steps = data.map((element) => {
    if (element.language === "") {
      // <SetupStep step={element.step} description={element.description} />;
      return (
        <>
          <div>
            <h1>Step: {element.step}</h1>
            <p>Description: {element.description}</p>
          </div>
        </>
      );
    } else {
      // <SetupStepCodeBlock
      //   step={element.step}
      //   description={element.description}
      //   language={element.language}
      //   code={element.code}
      // />;
      return (
        <>
          <div>
            <h1>Step: {element.step}</h1>
            <p>Description: {element.description}</p>
            <p>Language: {element.language}</p>
            <p>Code Block: {element.code}</p>
          </div>
        </>
      );
    }
  });
  return <>{steps}</>;
}
export default Css;
