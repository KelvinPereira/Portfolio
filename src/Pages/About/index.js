import React from 'react'
import Layout from '../../Components/Layout'
import './index.css'
import personalImage from '../../image/Pereira.jpg'

export default function About() {
    return (
        <Layout>
            <div className='aboutContainer'>
                <div className="aboutText">
                  <h2 className="aboutH2">About Me</h2>
                  <br/>
                  <p>Kelvin Luisi Costa Pereira</p>
                  <p>Nascido em São Vicente, Cabo Verde, no dia 26 de Julho de 1994</p>
                  <p>Filho de Arlindo Lopes Pereira e de Silvia Delgado Costa</p>
                  <p>Eu sou estudante de Engenharia Informatica e Sistemas Computacionais</p>
                  <p>Como base em java, java scrip, C, android, react e node</p>
                  <p>Fora dos estudos, sou um apaixonado por futebol</p>
                  <br/>
                  <div className="infPersonal">
                    <p>Mindelo, Cabo Verde</p>
                    <p>9579387</p>
                    <p>tepereira71994@gmail.com</p>
                    <p>https://github.com/KelvinPereira</p>
                  </div>
                </div>
                <div className="aboutimage">
                    <img id="imgRound"
                    src={personalImage}
                    alt="profile"
                    height= "300px"
                    width= "370px"
                    />
                </div>
            </div>
        </Layout>
    )
}
