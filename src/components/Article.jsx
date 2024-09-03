const ArticleStatus = ({ isNew }) => {
  return isNew && <span> -- Baru</span>;
};
const NewArticle = () => {
  return <span> -- New</span>;
};
function Article(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date : {props.date}, Tags : {props.tags.join(", ")}
        Article
        <ArticleStatus isNew={props.isNew} />
        {props.isNew && <NewArticle />}
      </small>
      <br />
    </>
  );
}
export default Article;
