function Articles(props) {
  return (
    <article className="blog">
      <img src={props.article.ArtImage} alt="Tiger Images" />
      <h3>{props.article.title}</h3>
      <p>{props.article.para}</p>
      <a className="Button" href="#">
        Read more..
      </a>
    </article>
  );
}

export default Articles;
