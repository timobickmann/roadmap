import { FaCopy } from "react-icons/fa6";

interface IProps {
  language: string;
  code: string;
  file: string;
}

function CodeBlock({ language, code, file }: IProps) {
  return (
    <>
      <pre>
        <div className="mt-4 w-min rounded-md bg-black pb-1 font-sans">
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
          <div className="px-2 my-5 w-[85vw] sm:w-72 md:w-[28rem] lg:w-auto lg:min-w-[28rem] overflow-y-auto text-sm">
            <code className="">{code}</code>
          </div>
        </div>
      </pre>
    </>
  );
}
export default CodeBlock;
