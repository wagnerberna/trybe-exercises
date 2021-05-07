db.voos.updateOne(
    { vooId: 757522 },
    {
        $rename: {
            "ultimaAlteracao": "ultimaModificacao"
        }
    }
);
  
db.voos.findOne(
    { vooId: 757522 },
    {
        ultimaModificacao: 1
    }
);

db.voos.updateOne(
    { vooId: 757522 },
    {
        $rename: {
            "ultimaModificacao.razao": "ultimaModificacao.motivo"
        }
    }
);
  
db.voos.findOne(
    { vooId: 757522 },
    {
        ultimaModificacao: 1
    }
);