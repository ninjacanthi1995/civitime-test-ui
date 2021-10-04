import React from 'react'
import './App.css';
import manLogo from './assets/man.svg';
import womanLogo from './assets/woman.svg';

const App = () => {
    return <div id="temp-style"> 

            <h1>Profil</h1>

            <p>Lequel de ces deux avatars préférez-vous?</p>

            <div className="avatars-container">
                <img src={manLogo} />
                <img src={womanLogo} />
            </div>

            <div className="colors-container">

                <img src="./skin.svg" />
                <img src="./color-88C10F.svg" />
                <img src="./color-533724.svg" />
                <img src="./color-B2C7C7.svg" />
                <img src="./color-E0A39A.svg" />
                <img src="./t-shirt.svg" />
                <img src="./color-FCCC84.svg" />
                <img src="./color-FCD7B8.svg" />
                <img src="./color-FF1414.svg" />
                <img src="./color-striped.svg" />

            </div>

            <button>Valider</button>

        </div>
}

export default App;
