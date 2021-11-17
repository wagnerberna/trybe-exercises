import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'

function calcFatorial(n) {
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n -1) * n;
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [tituloFat, setTituloFat] = useState("");

    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number]);

    useEffect(function() {
        if(fatorial > 10000) {
            setTituloFat ("Números de alto Valor")
        }
    }, [fatorial]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <div className="center">
                <div>
                <span className="text">Fatorial: </span>
                <span className="red">{ fatorial === -1 ? 'Não Existe' : fatorial }</span>
                </div>
                <input
                type="number" 
                className="input" 
                value={ number }
                onChange={e => setNumber(e.target.value)}
                />
                <h3>{tituloFat}</h3>
            
            </div>
        </div>
    )
}

export default UseEffect
