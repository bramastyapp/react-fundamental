import { useContext } from "react";
import { GlobalContext } from "../context";

const ArticleStatus = ({ isNew }) => {
  return isNew && <span> -- Baru</span>;
};

const NewArticle = () => {
  return <span> -- New</span>;
};

function Article(props) {
  const user = useContext(GlobalContext);

  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date : {props.date}, Tags : {props.tags.join(", ")}
        Article
        <ArticleStatus isNew={props.isNew} />
        {props.isNew && <NewArticle />}
      </small>
      <div>
        <small>ditulis oleh {user.username}</small>
      </div>
      <br />
    </>
  );
}
export default Article;
