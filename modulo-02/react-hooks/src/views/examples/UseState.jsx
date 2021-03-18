import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [teste, setTeste] = useState("Teste Estado....");

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                <button
                className="btn"
                onClick={() => setCount(count - 1)}
                >-1</button>
                <button
                className="btn"
                onClick={() => setCount(count +1 )}
                >+1</button>
                <button
                className="btn"
                onClick={() => setCount(current => current + 100)}
                >+100</button>
                <button
                className="btn"
                onClick={() => setCount(0)}
                >Zerar</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02" />
            <input type="text" className="input"
            value={ name }
            onChange={e => setName(e.target.value)}
            // onChange={e => console.log(e.target.value)}
            />
            <span className="text">{ name }</span>

            <input type="text" className="input"
            value={ teste }
            onChange={e => setTeste(e.target.value)}
            />
        </div>
    )
}

export default UseState
