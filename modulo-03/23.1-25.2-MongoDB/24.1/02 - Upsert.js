db.students.updateOne(
    { name: "Estudante 3" },
    {
        $set: {
            school: "Trybe",
            bestScore: 8.8
        }
    },
    { upsert: true }
);
   
db.students.find().pretty();