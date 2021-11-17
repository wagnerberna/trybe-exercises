use school;

db.students.insertOne(
    {
        name: "Jennifer",
        quizzes : [
            { wk: 1, score : 10 },
            { wk: 2, score : 8 },
            { wk: 3, score : 5 },
            { wk: 4, score : 6 }
        ]
    }
);

db.students.updateOne(
    { name: "Jennifer" },
    {
        $push: {
            quizzes: {
                $each: [
                    { wk: 5, score: 8 },
                    { wk: 6, score: 7 },
                    { wk: 7, score: 6 }
                ],
                $sort: { score: -1 },
                $slice: 3
            }
        }
    }
);
  
db.students.find({ name: "Jennifer" }).pretty();

/* *********************************************** */

use dataFlights;

db.voos.updateOne(
    { vooId: 743218 },
    {
        $push: {
            servicoDeBordo: {
                $each: [
                    { categoria: "comida", item: "carne", quantidade: 180 },
                    { categoria: "bebida", item: "sprite", quantidade: 5 }
                ],
                $sort: { categoria: 1, item: 1 }
            }
        }
    },
    { collation: { locale: "pt" } }
);

db.voos.findOne(
    { vooId: 743218 },
    {
        "servicoDeBordo.categoria": 1,
        "servicoDeBordo.item": 1
    }
);