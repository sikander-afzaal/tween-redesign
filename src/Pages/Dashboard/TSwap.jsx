import "./styles/TSwap.css";

const TSwap = () => {
  return (
    <div className="token">
      <h1 className="title">
        <img src="/assets/list-style.svg" alt="" /> TSwap
      </h1>
      <div className="swap-box">
        <input type="text" />
        <img src="/assets/swap.png" alt="" />
        <input type="text" />
        <div className="btn-div">
          <button className="blue-btn">Swap</button>
        </div>
      </div>
    </div>
  );
};

export default TSwap;
