import "./styles/Promotion.css";

const Promotion = () => {
  return (
    <div className="token promotion">
      <h1 className="title">
        <img src="/assets/list-style.svg" alt="" /> Promotional Package
      </h1>
      <p className="promote-desc">
        You can add your own hashtags as mandatory ones. Each tag has its
        lifetime. <br />
        To add your own hash tags, you should charge some $TweetN as the
        following. <br /> <strong>You can see how much you earned here</strong>
      </p>
      <div className="promote-box">
        <div className="promote-col">
          <div className="row">
            <h2>Request A New Hashtag</h2>
            <input type="text" />
          </div>
          <div className="btn-div">
            <button className="blue-btn">Request</button>
          </div>
        </div>
        <div className="promote-col">
          <div className="row">
            <h2>Unapproved Hashtags</h2>
            <input type="text" />
          </div>
          <div className="btn-div">
            <button className="blue-btn">Approve</button>
            <button className="cancel-btn">Remove</button>
          </div>
        </div>
        <div className="promote-col">
          <div className="row">
            <h2>Current Hashtags</h2>
            <input type="text" />
          </div>
          <div className="btn-div">
            <button className="cancel-btn">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
