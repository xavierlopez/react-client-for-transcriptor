import React, {Fragment, useState, useEffect} from 'react';
import './App.css';

const App = () => {

    const [texto, setTexto] = useState(" ")

    const handleInputChange = (event) => {
        let textor = event.target.value
        let url = new URL('https://xavierlopez.dev/helloworld')
        url.search = new URLSearchParams({
            texto:textor
        });

        fetch(url).then(response => response.text()).then((dataStr) => setTexto(dataStr));
    }

    useEffect(() => {
       document.getElementById("input").focus();
      });

    return (
        <Fragment>
            <h3>Escribe:</h3>
            <form className="row">
                <div className="col-md-3">
                    <textarea id="input" placeholder="Escribe un texto correctamente acentuado..." className="form-control" onChange={handleInputChange} name="texto"></textarea>
                </div>
            </form>
            <div id="resultado">
                <p>{texto}</p>
            </div>
        </Fragment>
    );
}

export default App;
