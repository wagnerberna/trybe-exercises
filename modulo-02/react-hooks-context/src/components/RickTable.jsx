import React from 'react';

function RickTable({ RickArray }) {
  // console.log(props.RickArray);
  // console.log(RickArray);
  const columnsHead = ['Nome', 'Espécie','Status', 'Gênero',
  'Planeta de Origem', 'Data da Criação']
  
  return(
    <>
      <h1>Tabela</h1>
      <table border="1" className="tabela">
        <thead>
          {columnsHead.map((el, index) => (
              // <tr key={index}>
                <th>{ el }</th>
              // </tr>
            ))}
        </thead>
        <tbody>
          {RickArray.map((el, index) => (
              <tr key={ el.id }>
                <td>{ el.name }</td>
                <td>{ el.species }</td>
                <td>{ el.status }</td>
                <td>{ el.gender }</td>
                <td>{ el.origin.name }</td>
                <td>{ el.created }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}
export default RickTable;