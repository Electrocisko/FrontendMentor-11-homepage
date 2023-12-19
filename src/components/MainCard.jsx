function MainCard() {
  return (
    <div>
      <img
        src="src/assets/images/image-web-3-desktop.jpg"
        alt="wood blocks game"
        width={"100%"}
      />
      <div className="card-main-text mt-4">
        <h1 className="card-main-title">The Bright Future of Web 3.0?</h1>
        <div className="card-main-paragraph">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button> READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
