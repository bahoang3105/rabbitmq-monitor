import { useEffect, useState } from "react";
import axios from 'axios';
import MessageRates from "./components/messageRates";
import './app.css';
import { API_URL } from "./URL";
import { PASSWORD, USERNAME } from "./Auth";
import MessageQueued from "./components/messageQueued";
import GlobalCount from './components/globalCount';

const App = () => {

  const [data, setData] = useState();
  const height = window.innerHeight;
  const width = window.innerWidth;

  const formatTime = (i) => {
    if(i < 10) {
      return "0" + i;
    }
    return i;
  }

  const getData = async () => {
    const { data } = await axios.get(API_URL + '/overview', {
      auth: {
        username: USERNAME,
        password: PASSWORD
      }
    });
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 3000);
    return () => {
      clearInterval(interval)
    };
  });


  return (
    <div className="App">
      <div className='main-content-row'>
        <MessageRates
          data={data} 
          height={height} 
          width={width} 
          formatTime={formatTime}
        />
        <MessageQueued
          data={data}
          height={height}
          width={width}
          formatTime={formatTime}
        />
      </div>
        <GlobalCount
          data={data} 
          height={height} 
          width={width}
        />
    </div>
  );
}

export default App;
