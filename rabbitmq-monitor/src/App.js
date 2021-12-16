import { useEffect, useState } from "react";
import { getAPI } from './api';
import MessageRates from "./components/messageRates";
import './app.css';
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
    const data = await getAPI('/overview');
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
