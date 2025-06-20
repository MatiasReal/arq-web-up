const mongoose = require('mongoose');

const uri = "mongodb+srv://rockycrack11:nAbbg1nyp4I7akIs@cluster0.h6sa7w0.mongodb.net/CanchasFutbol?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = {
    serverApi: { 
        version: '1', 
        strict: true, 
        deprecationErrors: true 
    }
};

async function run() {
    try {
        
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("✅ Conexión exitosa a MongoDB Atlas");
    } catch (err) {
        console.error("❌ Error conectando a MongoDB Atlas:", err);
        process.exit(1);
    }
}

run().catch(console.dir);

module.exports = mongoose;
