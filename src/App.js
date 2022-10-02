import React, { useState } from "react";

import Axios from "axios";

function App() {
  const [quote, setquote] = useState("Click for Quote");

  async function newQuote() {
    const res = await Axios.get("https://api.quotable.io/random");
    console.log(res.data.content);
    setquote(res.data.content);
  }
  return (
    <div className="box">
      <div className="text">
        <div>
          <h3>Thought Of The Day</h3>
          <p>{quote}</p>
          <button onClick={newQuote}>Next</button>
        </div>
      </div>
    </div>
  );
}
export default App;
