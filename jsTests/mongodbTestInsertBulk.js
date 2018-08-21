var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017", function (err, client) {

    if (err) throw err;

    const db = client.db("CloudERP");

    companyCollection = db.collection("company");
    companyCollection.insertOne({ company: 'Apple2', moneda: 'USD', direccion: 'Palo Alto' });


    companyCollection.count(function (err, count) {
        if (err) throw err;
        console.log('Total Rows: ' + count);
    });
    
    client.close();
});