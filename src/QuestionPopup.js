const QuestionPopup = ({ handleClose, showQuestion, isDisabled, children }) => {
    const showHideClassName = showQuestion ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose} disabled={!isDisabled}>close</button>
        </section>
      </div>
    );
  };

  export default QuestionPopup;