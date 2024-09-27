const CV = ({ setIsFormOpen }) => {
  return (
    <>
      <div className="cv"></div>
      <button onClick={() => setIsFormOpen(true)} className="main-btn">
        Edit
      </button>
    </>
  );
};

export default CV;
