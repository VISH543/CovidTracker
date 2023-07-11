import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const getCovidData = async () => {

    try {
      const res = await fetch('https://data.covid19india.org/data.json');
      const actualData = await res.json();
      setData(actualData.statewise[0]);

    } catch (err) {
      console.log(err);
    }


  }


  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <section>
        <h1 style={{marginLeft :"46%"}}> 🔴 Live  </h1>
        <h3 style={{textAlign : "center"}}>COVID 19 CORONAVIRUS TRACKER</h3>
        <ul className="card-list">
          <li className="card">
            <div>
              <p className="card_name"><span>OUR</span> COUNTRY</p>
              <p className="card_total">INDIA</p>
            </div>
          </li>

          <li className="card">
            <div>
              <p className="card_name"><span>TOTAL</span> RECOVERED</p>
              <p className="card_total">{data.recovered}</p>
            </div>
          </li>
          <li className="card">
            <div>
              <p className="card_name"><span>TOTAL</span> CONFIRMED</p>
              <p className="card_total">{data.confirmed}</p>
            </div>
          </li>
          <li className="card">
            <div>
              <p className="card_name"><span>TOTAL</span> RECOVERED</p>
              <p className="card_total">{data.recovered}</p>
            </div>
          </li>
          <li className="card">
            <div>
              <p className="card_name"><span>TOTAL</span> DEATHS</p>
              <p className="card_total">{data.deaths}</p>
            </div>
          </li><li className="card">
            <div>
              <p className="card_name"><span>TOTAL</span> ACTIVE</p>
              <p className="card_total">{data.active}</p>
            </div>
          </li>
          <li className="card">
            <div>
              <p className="card_name"><span>TOTAL</span> CONFIRMED</p>
              <p className="card_total">{data.lastupdatedtime}</p>
            </div>
          </li>
        </ul>
      </section>

    </>
  );
}

export default App;
