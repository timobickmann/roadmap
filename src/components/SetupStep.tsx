import { Link } from "react-router-dom";
import { FaCopy } from "react-icons/fa6";

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
          <h1>Step: {step}</h1>
          <p>{description}</p>
          <Link to={link}>{linktext}</Link>
        </div>
      ) : (
        <div className="container mx-auto my-10">
          <h1>Step: {step}</h1>
          <p>{description}</p>
          <Link to={link}>{linktext}</Link>
          <pre>
            <div className="w-min rounded-md bg-black pb-1 font-sans mt-4">
              <div className="flex items-center justify-between rounded-t-md bg-gray-800 px-4 py-2 text-xs">
                <span>{language}</span>
                <span className="px-10">{file}</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(code);
                  }}
                  className="flex items-center gap-2"
                >
                  <FaCopy />
                  copy code
                </button>
              </div>
              <div className="m-5 overflow-y-auto text-sm">
                <code className="">{code}</code>
              </div>
            </div>
          </pre>
        </div>
      )}
    </>
  );
}

export default SetupStep;
