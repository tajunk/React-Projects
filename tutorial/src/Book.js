const Book = ({ img, title, author }) => {
  // const { img, title, author } = props.book;
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt=''></img>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        reference
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        complex one
      </button>
    </article>
  );
};

export default Book;
