import React from "react";
import { useParams } from "react-router-dom";
const MovieForm = ({ history }) => {
  const params = useParams();
  return (
    <div>
      <h1>MovieForm{params.id} </h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
