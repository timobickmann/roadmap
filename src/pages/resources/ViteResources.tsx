import data from "../../data/viteResources.json";

function ViteResources() {
  return (
    <>
      <div className="flex flex-col gap-10">
        {data.map((element) => {
          return (
            <>
              <div>
                <h2>{element.title}</h2>
                <p>{element.description}</p>
                <a href={element.link}>{element.linktext}</a>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default ViteResources;
