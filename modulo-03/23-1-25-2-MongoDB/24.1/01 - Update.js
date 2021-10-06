use class;

db.students.insertMany(
    [
      { name: "Estudante 1", school: "Escola do Futuro", bestScore: 9.8 },
      { name: "Estudante 2", school: "Escola do Futuro", bestScore: 7.2 }
    ]
  );
  
  db.students.find().pretty();



db.students.updateOne(
    { school: "Escola do Futuro" },
    {
        $set: {
            school: "Trybe"
        }
    }
);
  
db.students.find().pretty();



db.students.updateOne(
    { school: "Trybe" },
    {
        $set: {
            school: "Escola do Futuro"
        }
    }
);
  
db.students.find().pretty();



db.students.updateMany(
    { school: "Escola do Futuro" },
    {
        $set: {
            school: "Trybe"
        }
    }
);
  
db.students.find().pretty();