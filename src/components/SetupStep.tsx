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
      <div>
        <h2 className="mb-3 text-xl">{step}</h2>
        <p className="whitespace-pre-wrap">{description}</p>
        <Link to={link} target="_blank" rel="noopener noreferrer">
          {linktext}
        </Link>
        {language !== "" && (
          <CodeBlock file={file} language={language} code={code} />
        )}
      </div>
    </>
  );
}

export default SetupStep;
