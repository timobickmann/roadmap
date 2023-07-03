import data from "../../data/viteResources.json";
import Resource from "../../components/Resource";

function ViteResources() {
  return (
    <>
      <div className="flex flex-col gap-10">
        {data.map((element) => {
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
