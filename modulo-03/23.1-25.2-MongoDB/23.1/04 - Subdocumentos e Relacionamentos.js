// Relacionamento 1:1

// documento do usuário
{
    _id: "joe",
    name: "Joe Bookreader"
}
  
// documento do endereço
{
    user_id: "joe", // referencia o documento do usuário
    street: "123 Fake Street",
    city: "Faketon",
    state: "MA",
    zip: "12345"
}

db.users.insertOne({
    _id: "joe",
    name: "Joe Bookreader",
    address: {
        street: "123 Fake Street",
        city: "Faketon",
        state: "MA",
        zip: "12345"
    }
});

/* SELECT *
FROM users INNER JOIN addresses ON users.id = addresses.user_id
WHERE users.id = "joe"; */

db.users.find({ _id: "joe" }).pretty();

// Relacionamento 1:N

// documento da usuária
{
    _id: "amanda",
    name: "Amanda Granger"
}
  
// documento do endereço
{
    user_id: "amanda", // referencia o documento da usuária
    street: "Sunset Boulevard",
    city: "Los Angeles",
    state: "CA",
    zip: "12345"
}
  
{
    user_id: "amanda",
    street: "1 Some Other Street",
    city: "New York",
    state: "NY",
    zip: "12345"
}

db.users.insertOne({
    _id: "amanda",
    name: "Amanda Granger",
    addresses: [
        {
            street: "Some Street",
            city: "Los Angeles",
            state: "CA",
            zip: "12345"
        },
        {
            street: "Some Other Street",
            city: "New York",
            state: "NY",
            zip: "12345"
        }
    ]
})

/* SELECT *
FROM users INNER JOIN addresses ON users.id = addresses.user_id
WHERE users.id = "amanda"; */

db.users.find({ _id: "amanda" }).pretty();

// Acessando dados em subdocumentos

db.users.find({ "addresses.state": "NY" }).pretty();