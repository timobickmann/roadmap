function SetupStepCodeBlock({ step, description, language, code }) {
  return (
    <>
      <div>
        <h1>Step: {step}</h1>
        <p>Description: {description}</p>
        <p>Language: {language}</p>
        <p>Code Block: {code}</p>
      </div>
    </>
  );
}
export default SetupStepCodeBlock;
