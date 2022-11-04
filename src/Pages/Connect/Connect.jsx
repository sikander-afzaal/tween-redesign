import {
  faDiscord,
  faTelegramPlane,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Connect.css";
const Connect = () => {
  return (
    <div className="connect connect-wrapper">
      <div className="social-div-connect">
        <a href="https://twitter.com/TweetNOfficial" target={"blank"}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://discord.com/invite/tweetn" target={"blank"}>
          <FontAwesomeIcon icon={faDiscord} />
        </a>
        <a href="https://t.me/TweetNOfficial" target={"blank"}>
          <FontAwesomeIcon icon={faTelegramPlane} />
        </a>
      </div>
      <div className="overlay-connect"></div>
      <img src="/assets/connect-bg.png" alt="" className="shape" />
      <div className="connect">
        <img src="/assets/logo.png" alt="" />
        <h1>TweetN</h1>
        <div className="p-wrap">
          <img src="/assets/list-style.svg" />
          <p>
            <span>TweetN</span> is a Defi protocol that is created to combine 2
            big industries: <strong>Advertisement and Blockchain.</strong>{" "}
            <br /> Users can earn money from making a tweet.{" "}
            <span>Earn $TweetN</span> with our <span>keyboard NFTs</span> on our
            Dapp.
          </p>
        </div>
        <Link to={"/dashboard"} className="connect-btn">
          Connect Wallet
        </Link>
      </div>
    </div>
  );
};

export default Connect;
