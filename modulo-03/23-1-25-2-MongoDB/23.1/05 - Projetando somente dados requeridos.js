// SELECT _id, item, status FROM inventory WHERE status = "A";

db.inventory.find({ status: "A" }, { item: 1, status: 1 });
db.inventory.find({ status: "A" }, { item: true, status: true });

// SELECT item, status from inventory WHERE status = "A";

db.inventory.find({ status: "A" }, { item: 1, status: 1, _id: 0 });
db.inventory.find({ status: "A" }, { item: true, status: true, _id: false });

// Suprimindo campos

db.inventory.find({ status: "A" }, { status: 0 });
db.inventory.find({ status: "A" }, { status: false });

