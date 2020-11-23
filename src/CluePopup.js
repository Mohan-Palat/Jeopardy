const CluePopup = ({ handleClose, showClue, isDisabled, children }) => {
  const showHideClassName = showClue ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose} disabled={!isDisabled}>close</button>
      </section>
    </div>
  );
};

export default CluePopup;