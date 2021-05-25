import React from 'react'
import Layout from '../../Components/Layout'
import './index.css'
import myImage from '../../image/Kelvin.jpg'
import inf from '../../image/informatica.jpg'


export default function Home() {
    return (
        <Layout>
            <div className='homeContainer'>
                <div className="image">
                    <img
                    src={myImage}
                    alt="profile"
                    height= "100%"
                    width= "429px"
                    />
                </div>
                <div className="text">
                    <h2>Kelvin Luisi Costa Pereira</h2>
                    <p className="p1">Estamos em uma era em que</p>
                    <p> quem não tem conhecimento o suficiente da informática </p>
                    <p>é considerado analfabeto.</p>
                    <img className="img"
                    src={inf}
                    alt="profile"
                    height= "50%"
                    width= "429px"
                    />
                </div>
            </div>
        </Layout>
    )
}
