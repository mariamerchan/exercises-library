export const List = ({ stringsArr }) => {
  return (
    <>
      <h1>List</h1>
      <br />
      <ul>
        {stringsArr.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </>
  );
};
