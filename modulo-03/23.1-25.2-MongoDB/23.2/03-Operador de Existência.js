db.teste.insertMany(
    [
        { primeiro: 5, segundo: 5, terceiro: null },
        { primeiro: 3, segundo: null, terceiro: 8 },
        { primeiro: null, segundo: 3, terceiro: 9 },
        { primeiro: 1, segundo: 2, terceiro: 3 },
        { primeiro: 2, terceiro: 5 },
        { primeiro: 3, segundo: 2 },
        { primeiro: 4 },
        { segundo: 2, terceiro: 4 },
        { segundo: 2 },
        { terceiro: 6 }
    ]
);

db.teste.find({
    primeiro: {
        $exists: true
    }
});

db.teste.find({
    segundo: {
        $exists: false
    }
});