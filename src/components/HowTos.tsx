import data from "../data/howTos.json";
import HowToItem from "./HowToItem";

interface IProps {
  category: string;
}

function HowTos({ category }: IProps) {
  let findData = data.filter((item) => item.category === category);
  let filteredData = [];

  while (findData.length > 0) {
    const dataToPush = findData.filter(
      (item) => item.subcategory === findData[0].subcategory
    );
    filteredData.push(dataToPush);
    findData = findData.filter(
      (item) => item.subcategory !== findData[0].subcategory
    );
  }
  return filteredData.map((element) => {
    return <HowToItem data={element} />;
  });
}

export default HowTos;
