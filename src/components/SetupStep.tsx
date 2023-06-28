import { Link } from "react-router-dom";

interface IProps {
  step: string;
  language: string;
  description: string;
  link: string;
  linktext: string;
  code: string;
  file: string;
}

function SetupStepCodeBlock({
  step,
  description,
  link,
  linktext,
  language,
  code,
  file,
}: IProps) {
  return (
    <>
      {language === "" ? (
        <div className="container mx-auto my-10">
          <h1>Step: {step}</h1>
          <p>Description: {description}</p>
          <Link to={link}>{linktext}</Link>
        </div>
      ) : (
        <div className="container mx-auto my-10">
          <h1>Step: {step}</h1>
          <p>Description: {description}</p>
          <Link to={link}>{linktext}</Link>
          <p>File: {file}</p>
          <p>Language: {language}</p>
          <p>Code Block: {code}</p>
        </div>
      )}
    </>
  );
}
export default SetupStepCodeBlock;
