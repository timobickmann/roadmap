function SetupStep({ step, description }) {
  return (
    <>
      <div>
        <h1>Step: {step.trim()}</h1>
        <p>Description: {description}</p>
      </div>
    </>
  );
}
export default SetupStep;
