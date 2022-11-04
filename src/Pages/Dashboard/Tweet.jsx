import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./styles/Tweet.css";

const Tweet = () => {
  const hours = 10;
  const minutes = 40;
  return (
    <div className="token tweet">
      <h1 className="title">
        <img src="/assets/list-style.svg" alt="" />
        Tweet2Earn{" "}
      </h1>
      <p className="promote-desc">
        A protocol that combine Daas and Defi Advertising Agency that allow
        users to earn{" "}
        <strong>
          $TweetN tweeting. <br /> You can see how much you earned here
        </strong>
      </p>
      <div className="tweet-box">
        <div className="tweet-row">
          <h2>Total Unclaimed Reward</h2>
          <div className="reward">
            <h3>
              0.00 <span>$TweetN</span>
            </h3>
            <div className="line"></div>
            <h4>0.00 $TweetN after tax</h4>
          </div>
        </div>
        <div className="tweet-row">
          <h2>Until Claim Reset</h2>
          <div className="circles">
            <CountdownCircleTimer
              isPlaying
              initialRemainingTime={hours * 3600}
              duration={hours * 3600}
              colors={["#247bff"]}
              size={132}
              strokeWidth={6}
              trailColor={"white"}
              rotation={"counterclockwise"}
            >
              {({ remainingTime }) => (
                <div className="time">
                  <h4>{Math.ceil(remainingTime / 3600)}</h4>
                  <p>Hours</p>
                </div>
              )}
            </CountdownCircleTimer>
            <CountdownCircleTimer
              isPlaying
              initialRemainingTime={minutes * 60}
              duration={minutes * 60}
              colors={["#247bff"]}
              size={132}
              strokeWidth={6}
              trailColor={"white"}
              rotation={"counterclockwise"}
            >
              {({ remainingTime }) => (
                <div className="time">
                  <h4>{Math.ceil(remainingTime / 60)}</h4>
                  <p>Minutes</p>
                </div>
              )}
            </CountdownCircleTimer>
          </div>
          <div className="btn-div">
            <button className="blue-btn">
              <img src="/assets/logo-white.png" alt="" />
              Tweet
            </button>
          </div>
        </div>
      </div>
      <div className="id-row">
        <h3>Search by NFT ID</h3>
        <input type="text" placeholder="0" />
      </div>
    </div>
  );
};

export default Tweet;
