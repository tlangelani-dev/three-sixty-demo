import React from 'react';
import './App.css';
import ReactPannellum, { getConfig } from 'react-pannellum';
import img1 from '../assets/FD-GF - 011.JPG';
import Navbar from './Navbar';

const App = () => {

    const config = {
        autoRotate: 0,
    };

    const styleOpt = {
        width: '750px',
        height: '500px',
        background: '#000000'
    }
    
    return (
        <div className='app'>
            <Navbar />
            <h5 class='text-center mt-4'>This is to demonstrate a panorama image in 360 view</h5>
            <div className='container wrapper'>
                <div className='row'>
                    <div className='col-md-12'>
                        <ReactPannellum
                            id='1'
                            sceneId='firstScene'
                            imageSource={img1}
                            config={config}
                            style={styleOpt}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
