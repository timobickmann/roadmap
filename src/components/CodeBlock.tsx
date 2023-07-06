import { FaCopy } from "react-icons/fa6";

interface IProps {
  language: string;
  code: string;
  file: string;
}

function CodeBlock({ code, file }: IProps) {
  return (
    <>
      <pre>
        <div className="mt-4 w-min rounded-md bg-neutral pb-1 text-neutral-content ">
          <div className="flex items-center justify-between rounded-t-md px-4 py-2 text-xs border-b-2 border-b-base-100">
            <div>{file}</div>
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
          <div className="my-5 w-[85vw] overflow-y-auto px-2 text-left text-sm sm:w-72 md:w-[28rem] lg:w-auto lg:min-w-[28rem]">
            <code className="">{code}</code>
          </div>
        </div>
      </pre>
    </>
  );
}
export default CodeBlock;
