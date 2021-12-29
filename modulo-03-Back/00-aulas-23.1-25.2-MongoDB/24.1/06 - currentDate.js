db.voos.updateOne(
    { vooId: 757522 },
    {
        $currentDate: {
            "ultimaAlteracao.data": true,
        },
        $set: {
            "ultimaAlteracao.razao": "Modificação do número de assentos"
        }
    }
  );
  
db.voos.findOne(
    { vooId: 757522 },
    {
        ultimaAlteracao: 1,
        assentos: 1
    }
);