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
        <div className="container mx-auto my-10 mb-4 rounded-md">
          <h1>Step: {step}</h1>
          <p>Description: {description}</p>
          <Link to={link}>{linktext}</Link>
          <p>File: {file}</p>
          <pre>
            <div className="pb-2 w-96 rounded-md bg-black">
              <div className="relative flex items-center justify-between rounded-t-md bg-gray-800 px-4 py-2 font-sans text-xs text-gray-200">
                <span>{language}</span>
                <span>copy code</span>
              </div>
              <div className="overflow-y-auto m-4">
                <code className="">{code}</code>
              </div>
            </div>
          </pre>
        </div>
      )}
    </>
  );
}
export default SetupStepCodeBlock;
