import data from "../data/howTos.json";
import HowToItem from "./HowToItem";

interface IProps {
  category: string;
}

function HowTos({ category }: IProps) {
  const findData = data.filter((item) => item.category === category);
  return (
    <>
      <HowToItem subcategory="addCustomStyleToTailwind" findData={findData} />
      <HowToItem subcategory="test" findData={findData} />
    </>
  );
}

export default HowTos;
