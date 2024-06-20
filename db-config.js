const mysql = require("mysql")

const dbConfig = {
    db: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PW,
        database: process.env.DATABASE_DB,
        connectTimeout: 10000
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
