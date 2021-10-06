import React from 'react';

function RickCard({ RickArray }) {
  return(
    <>
      <h1>Cards</h1>
      {RickArray.map(({ id, name, image }) => (
        <div key={ id }>
          <span>{`Nome Personagem: ${ name }`}</span>
          <img src={ image } alt="Imagem Personagem" />
        </div>
      ))}
    </>
  )
}
export default RickCard;