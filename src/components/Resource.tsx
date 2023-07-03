import { Link } from "react-router-dom";

interface IProps {
  title: string;
  description: string;
  link: string;
  linktext: string;
}

function Resource({ title, description, link, linktext }: IProps) {
  return (
    <>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link}>{linktext}</a>
      </div>
    </>
  );
}

export default Resource;
