// Programa para Leer un archivo separado por tabulaciones en la ruta fija
// Código Artículo | Descripción | Precio
var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');
var path = process.cwd();
var buffer = fs.readFileSync("C:\\Users\\power\\Desktop\\js\\jsTests\\files\\listaJuguetes.txt");
var linea;
var codigoArticulo;
var descriArticulo;
var precioArticulo;
var dbStream = new Array();

buffer = buffer.toString();

// Para recorrer linea por linea, split en el -enter-
for (let i = 0; linea != ""; i++) {

    linea = buffer.split('\r\n')[i];
    // Dividir la linea por campo, separado por Tab

    codigoArticulo = linea.split('\t')[0];
    descriArticulo = linea.split('\t')[1];
    precioArticulo = linea.split('\t')[2];

    // Sacarle al precio el . de la unidad de mil, y cambiar la , por punto en el decimal
    if (linea != "") {
        precioArticulo = precioArticulo.replace(".", "");
        precioArticulo = precioArticulo.replace(",", ".");
        // Convertir a número
        precioArticulo = Number(parseFloat(precioArticulo).toFixed(3));

        console.log(precioArticulo);
        dbStream.push({ codigo: codigoArticulo, descripcion: descriArticulo, precio: precioArticulo });
    }
};

// Conecta a db e inserta el bulk de datos 
MongoClient.connect("mongodb://localhost:27017", function (err, client) {

    if (err) throw err;

    const db = client.db("CloudERP");

    articulosCollection = db.collection("articulos");

    articulosCollection.insertMany(
        dbStream
    );

    client.close();
});