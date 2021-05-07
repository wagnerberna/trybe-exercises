use class;

db.horta.insertMany(
  [
    {
      _id: 1,
      frutas: ["macas", "peras", "laranjas", "uvas", "bananas"],
      vegetais: ["cenouras", "aipos", "aboboras", "cenouras"]
    },
    {
      _id: 2,
      frutas: ["ameixas", "kiwis", "laranjas", "bananas", "macas"],
      vegetais: ["brocolis", "abobrinhas", "cenouras", "cebolas"]
    }
  ]
);

db.horta.updateMany(
    {},
    {
        $pull: {
            frutas: { $in: ["macas", "laranjas"] },
            vegetais: "cenouras"
        }
    }
);

db.horta.find().pretty();

/* *************************************************** */

db.voos.updateOne(
    { vooId: 743218 },
    {
        $pull: {
            servicoDeBordo: { categoria: "comida",  item: "carne", quantidade: 180 }
        }
    }
);

db.voos.updateOne(
    { vooId: 743218 },
    {
        $pull: {
            servicoDeBordo: { item: "macarrão" }
        }
    }
);

db.voos.updateOne(
    { vooId: 743218 },
    {
        $pull: {
            servicoDeBordo: { item: { $in: ["vinho", "leite"] } }
        }
    }
);

db.voos.updateOne(
    { vooId: 743218 },
    {
        $pull: {
            servicoDeBordo: {
                categoria: "bebida",
                quantidade: { $lte: 60 }
            }
        }
    }
);

db.voos.findOne(
    { vooId: 743218 },
    { servicoDeBordo: 1 }
);