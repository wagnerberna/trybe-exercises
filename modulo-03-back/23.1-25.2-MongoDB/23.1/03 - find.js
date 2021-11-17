// SELECT * FROM inventory;

db.inventory.find({}); // ou
db.inventory.find();

// SELECT * FROM inventory LIMIT 1;

db.inventory.findOne({}); // ou
db.inventory.findOne();

// SELECT * FROM inventory WHERE status = "D";

db.inventory.find({ status: "D" });

// SELECT * FROM inventory WHERE status = "D" AND item = "paper";

db.inventory.find({ status: "D", item: "paper" });