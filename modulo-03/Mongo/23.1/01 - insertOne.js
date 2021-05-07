show dbs
show collections

use class
db.inventory.insertOne({
    item: "journal",
    qty: 25,
    size: {
        h: 14,
        w: 21,
        uom: "cm"
    },
    status: "A"
})

db.inventory.insertOne({
    item: "notebook",
    qty: 50,
    size: {
        h: 8.5,
        w: 11,
        uom: "in"
    },
    status: "A"
})
