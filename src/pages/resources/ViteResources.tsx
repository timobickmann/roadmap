// @ts-nocheck

import data from "../../data/resources.json";
import Resource from "../../components/Resource";

function ViteResources() {
  const findData = data.find((item) => item.category === "vite");
  return (
    <>
      <div className="flex flex-col gap-10">
        {findData.resources.map((element) => {
          return (
            <>
              <Resource
                title={element.title}
                description={element.description}
                link={element.link}
                linktext={element.linktext}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
export default ViteResources;
