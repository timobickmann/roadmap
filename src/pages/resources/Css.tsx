import data from "../../data/cssSetup.json";

function Css() {
  const steps = data.map((element) => {

    if (element.language === "") {
      return (
        <>
          <h1>{element.step}</h1>
          <p>{element.description}</p>
        </>
      );
    }

    else {
      return (
        <>
          <h1>{element.step}</h1>
          <p>{element.description}</p>
          <p>{element.language}</p>
          <p>{element.code}</p>
        </>
      );
    }

  });
  return <>{steps}</>;
}
export default Css;
