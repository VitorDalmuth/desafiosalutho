import React, { useState } from 'react';
import './App.css'; 

function App() {
    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const [resultado, setResultado] = useState(null);
    const [erro, setErro] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErro('');
        if (x > 0 && y > 0 && parseInt(x) < parseInt(y)) {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/calcular/${x}/${y}/`);
                const data = await response.json();
                if (response.ok) {
                    setResultado(data.resultado);
                } else {
                    setErro(data.error);
                }
            } catch (error) {
                setErro('Erro ao se conectar com a API.');
            }
        } else {
            setErro('Valores inválidos. Certifique-se de que x e y são positivos e x < y.');
        }
    };

    return (
        <div className="app-container">
            <h1>Calculadora de menor número divisível</h1>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="input-container">
                    <input type="number" placeholder="Digite o primeiro numero" value={x} onChange={(e) => setX(e.target.value)} />
                    <input type="number" placeholder="Digite o segundo numero" value={y} onChange={(e) => setY(e.target.value)} />
                </div>
                <center><button type="submit">Calcular</button></center>
            </form>
            {erro && <p style={{ color: 'red' }}>{erro}</p>}
            <b>{resultado && <p>Resultado: {resultado}</p>}</b>
        </div>
    );
}

export default App;
