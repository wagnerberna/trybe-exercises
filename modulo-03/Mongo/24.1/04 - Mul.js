use dataFlights;

db.voos.findOne(
    {
        "empresa.nome": "GOL",
        "aeroportoOrigem.sigla": "SBRJ",
        "aeroportoDestino.sigla": "SBSP",
        "grupoVoo": "Regular"
    }
);

db.voos.updateOne(
    { vooId: 757522 },
    {
        $mul: {
            decolagens: 2
        }
    }
);
  
db.voos.findOne(
    { vooId: 757522 },
    { decolagens: 1}
);