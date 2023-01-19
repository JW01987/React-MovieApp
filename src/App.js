import { useEffect, useState } from "react";

function App() {
  let [coins, setCoins] = useState([]);
  let [loading, setLoading] = useState(true);
  let [checkCoin, setCheckCoin] = useState(0);
  let [inputValue, setInputValue] = useState(0);
  let [btn, setBtn] = useState(true);
  const onChange = (e) => {
    setCheckCoin(parseFloat(e.target.value));
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const inputChange = (e) => {
    setInputValue(parseFloat(e.target.value) || "");
  };
  return (
    <div className="App">
      <h1>The Coins{loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          <option>Select your coin</option>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name}({coin.symbol}):{coin.quotes.USD.price}USD
            </option>
          ))}
        </select>
      )}
      <hr />

      <label htmlFor="usd">USD</label>
      <input
        id="usd"
        type="number"
        onChange={inputChange}
        disabled={btn}
        value={
          btn ? parseFloat(inputValue * checkCoin) : parseFloat(inputValue)
        }
      />

      <label htmlFor="toCoin">Coin</label>
      <input
        id="toCoin"
        type="number"
        onChange={inputChange}
        disabled={!btn}
        value={
          !btn ? parseFloat(inputValue * checkCoin) : parseFloat(inputValue)
        }
      />
      <button
        onClick={() => {
          setBtn((c) => !c);
        }}
      >
        Change
      </button>
    </div>
  );
}

export default App;
