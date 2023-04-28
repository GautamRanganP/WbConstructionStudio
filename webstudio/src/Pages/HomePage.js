
import React from 'react';
import CardBootstrap from '../components/cards/CardBootstrap';
import CardHome from '../components/cards/CardHome';
import NavbarCarosuel from "../components/carosuel/NavbarCarosuel";


const HomePage = () => {
    return (
        <div className="content">
            <NavbarCarosuel></NavbarCarosuel>
            <div className='card-content-grid-system'>
                <CardBootstrap></CardBootstrap>
                <CardBootstrap></CardBootstrap>
                <div className='wrap-card' style={{display:"flex",flexDirection:"column"}}>
                    <CardHome></CardHome>
                    <CardHome></CardHome>
                    <CardHome></CardHome>
                    <CardHome></CardHome>
                </div>
            </div>
        </div>
    )
}
export default HomePage;