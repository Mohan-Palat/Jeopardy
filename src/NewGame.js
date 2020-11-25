import React from 'react';
import { useHistory } from 'react-router-dom'



const NewGame = (props) =>  {
    console.log(props)
    const history = useHistory();
    const handleSubmit = (event) => {
      event.preventDefault();

      // get random category IDs to populate the random game with
      props.getCategoryIds()
      
      // route to correct path, since we could not route and render data at the same time, we had to use 
      // this react hook useHistory here
      history.push('/random')
    }
    return (
      <>
        <form onSubmit={handleSubmit} >
          <button type="submit">New Game</button>
        </form>
      </>
    );
}

export default NewGame;