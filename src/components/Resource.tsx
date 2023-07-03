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
        <Link to={link} target="_blank" rel="noopener noreferrer">
          {linktext}
        </Link>
      </div>
    </>
  );
}

export default Resource;
