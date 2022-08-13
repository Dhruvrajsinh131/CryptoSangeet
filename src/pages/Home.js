import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import { Tabs } from "antd";
import { library } from "../helpers/albumList";




const { TabPane } = Tabs;

const Home = () => {

return(
  <>
  <Tabs defaultActiveKey='1' centered>
    <TabPane tab="Featured" key = "1">
    <h1 className="featuredTitle">Today Is The Day</h1>
    <div className="albums">
      {library.map((e)=>(
        <Link to="/album" state={e} className="albumSelection">
          <img src={e.image} alt="bull" style={{width:"150px",marginBottom:"10px"}} />
        <p>{e.title}</p>
        </Link>
      ))}
    </div>
    </TabPane>
    <TabPane tab="Geners & Moods" key = "2">
    <h1 className="featuredTitle">Top Hits</h1>
    <div className="albums">
      {library.slice(5,11).map((e)=>(
        <Link to="/album" state={e} className="albumSelection">
          <img src={e.image} alt="bull" style={{width:"150px",marginBottom:"10px"}} />
        <p>{e.title}</p>
        </Link>
      ))}
    </div>
    <h1 className="featuredTitle">Hip-Hop Hits</h1>
    <div className="albums">
      {library.slice(2,8).map((e)=>(
        <Link to="/album" state={e} className="albumSelection">
          <img src={e.image} alt="bull" style={{width:"150px",marginBottom:"10px"}} />
        <p>{e.title}</p>
        </Link>
      ))}
    </div>
    </TabPane>
    <TabPane tab="New Releases" key = "3">
    <h1 className="featuredTitle">Fresh Hits</h1>
    <div className="albums">
      {library.slice(0,6).map((e)=>(
        <Link to="/album" state={e} className="albumSelection">
          <img src={e.image} alt="bull" style={{width:"150px",marginBottom:"10px"}} />
        <p>{e.title}</p>
        </Link>
      ))}
    </div>
    </TabPane>

  </Tabs>
  </>
)
}

export default Home;
