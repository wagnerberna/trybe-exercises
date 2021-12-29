db.inventory.insertMany([
    {
        item: "paper",
        qty: 100,
        size: {
            h: 8.5,
            w: 11,
            uom: "in"
        },
        status: "D"
    },
    {
        item: "planner",
        qty: 75,
        size: {
            h: 22.85,
            w: 30,
            uom: "cm"
        },
        status: "D"
    },
    {
        item: "postcard",
        qty: 45,
        size: {
            h: 10,
            w: 15.25,
            uom: "cm"
        },
        status: "A"
    }
]);