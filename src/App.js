import React, { useState } from 'react';
import { Routes, Route , Link } from "react-router-dom";
import Home from "./pages/Home";
import Album from './pages/Album';
import './App.css';
import { Layout } from 'antd';
import logo from "./images/music-logo-png-2342.png";
import {SearchOutlined,DownCircleOutlined} from "@ant-design/icons";
import AudioPlayer from './components/AudioPlayer';


const { Footer, Sider, Content } = Layout;
const App = () => {
  const [nftAlbum,setNftAlbum] = useState();
  return (
  <Layout>  
    <Layout>
      <Sider width={300} className="sideBar">
        <img src={logo} alt="logo" height={50} width={80}></img>
        <div className="searchBar">
          <span>Search</span>
          <SearchOutlined style={{fontSize:"30px"}}/>
        </div>
        <Link to="/">
          <p style={{color:"#adb954"}}>Home</p>
        </Link>
        <p>Your Music</p>
        <div className="recentPlayed">
              <p className="recentTitle">RECENTLY PLAYED</p>
              <div className="install">
                <span> Install App </span>
                <DownCircleOutlined style={{ fontSize: "30px" }} />
              </div>
            </div>    
      </Sider>
      <Content className='contentWindow'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album setNftAlbum={setNftAlbum} />} />
        </Routes>
      </Content>
    </Layout>
<Footer className='footer'>
  {nftAlbum&&<AudioPlayer nftAlbum={nftAlbum}/>}
</Footer>
    </Layout>
  )
};

export default App;
