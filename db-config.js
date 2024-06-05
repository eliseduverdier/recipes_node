const mysql = require("mysql")

const dbConfig = {
    db: {
        host: 'localhost',
        user: 'elise',
        password: 'password',
        database: 'recipes',
        connectTimeout: 60000
    },
    listPerPage: 10,
};

const db = mysql.createConnection(dbConfig.db);

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        process.exit(1); // Exit the process with an error code
    }
    console.log('MySQL Connected...');
});

module.exports = db
