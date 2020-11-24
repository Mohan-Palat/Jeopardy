const CluePopup = ({ handleClose, showClue, isDisabled, children }) => {
  const showHideClassName = showClue ? "modal display-block flip-container" : "modal display-none";
  
    return (
      <div className={showHideClassName}>

        <div className="flipper">
          <section className="front">
            <div>
              <p>The answer is...</p>
            </div>
          </section>
          <section className="back">
            <div>
              {children}
              <button onClick={handleClose} disabled={!isDisabled}>close</button>
            </div>
          </section>
        </div>
      </div>
    );
  };

  export default CluePopup;