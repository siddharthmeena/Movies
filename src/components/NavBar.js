import { useState } from "react";

const NavBar = (props) => {
  const [movieName, setMovieName] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(movieName);
    setMovieName("");
  };
  return (
    <form onSubmit={(e) => onFormSubmit(e)} action="">
      <input
        type="text"
        value={movieName}
        placeholder="Search..."
        onChange={(e) => setMovieName(e.target.value)}
      />
    </form>
  );
};

export default NavBar;
