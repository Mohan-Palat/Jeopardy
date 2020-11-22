const QuestionPopup = ({ handleClose, showQuestion, children }) => {
    const showHideClassName = showQuestion ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
        </section>
      </div>
    );
  };

  export default QuestionPopup;