import { Link } from "react-router-dom";
import CodeBlock from "./CodeBlock";

interface IProps {
  step: string;
  language: string;
  description: string;
  link: string;
  linktext: string;
  code: string;
  file: string;
}

function SetupStep({
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
          <h1>{step}</h1>
          <p>{description}</p>
          <Link to={link}>{linktext}</Link>
        </div>
      ) : (
        <div className="container mx-auto my-10">
          <h1>{step}</h1>
          <p>{description}</p>
          <Link to={link}>{linktext}</Link>
          <CodeBlock file={file} language={language} code={code} />
        </div>
      )}
    </>
  );
}

export default SetupStep;
