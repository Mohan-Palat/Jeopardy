import React from 'react';
import { useHistory } from 'react-router-dom';

const NewGame = (props) => {
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log ('User clicked new game')
    props.getCategoryIds();

    // route to correct path
    history.replace('/random');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">New Game</button>
      </form>
    </>
  );
};

export default NewGame;
