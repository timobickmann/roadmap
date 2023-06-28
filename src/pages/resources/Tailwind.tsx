import data from "../../data/tailwindSetup.json";
import SetupStep from "../../components/SetupStep";
import HeaderResources from "../../components/HeaderResources";

function Tailwind() {
  return (
    <>
      <HeaderResources />
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
    </>
  );
}
export default Tailwind;
