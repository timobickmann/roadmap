interface IProps {
  step: number;
  description: string;
}

function SetupStep({ step, description } : IProps) {
  return (
    <>
      <div>
        <h1>Step: {step}</h1>
        <p>Description: {description}</p>
      </div>
    </>
  );
}
export default SetupStep;
