import "./styles/Token.css";

const Token = () => {
  return (
    <div className="token">
      <h1 className="title">
        <img src="/assets/list-style.svg" alt="" /> Token Statistics
      </h1>
      <div className="token-grid">
        <div className="grid-box">
          <h2>Market Capital</h2>
          <p>$1000</p>
        </div>
        <div className="grid-box">
          <h2>Price</h2>
          <p>$1000</p>
        </div>
        <div className="grid-box">
          <h3>My Balance</h3>
          <div className="input-row">
            <div className="input-div">
              <img src="/assets/money.png" alt="" />
              <input type="text" />
            </div>
            <div className="input-div">
              <img src="/assets/small-logo.png" alt="" />
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="grid-box">
          <div className="input-col">
            <h4>All earned so far</h4>
            <div className="input-row">
              <div className="input-div">
                <img src="/assets/money.png" alt="" />
                <input type="text" />
              </div>
              <div className="input-div">
                <img src="/assets/small-logo.png" alt="" />
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="input-col">
            <h4>All earned so far</h4>
            <div className="input-row">
              <div className="input-div">
                <img src="/assets/money.png" alt="" />
                <input type="text" />
              </div>
              <div className="input-div">
                <img src="/assets/small-logo.png" alt="" />
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="input-col">
            <h4>All earned so far</h4>
            <div className="input-row">
              <div className="input-div">
                <img src="/assets/money.png" alt="" />
                <input type="text" />
              </div>
              <div className="input-div">
                <img src="/assets/small-logo.png" alt="" />
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="input-col">
            <h4>All earned so far</h4>
            <div className="input-row">
              <div className="input-div">
                <img src="/assets/money.png" alt="" />
                <input type="text" />
              </div>
              <div className="input-div">
                <img src="/assets/small-logo.png" alt="" />
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
