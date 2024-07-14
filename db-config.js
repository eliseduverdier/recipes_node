//*
const {Pool} = require('pg');

const db = new Pool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PW,
    database: process.env.DATABASE_DB,
    port: process.env.DATABASE_PORT,  // PostgreSQL default port is 5432
    ssl: {
        rejectUnauthorized: false
    }
});

db.connect((err, client, release) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        throw err;
    }
    // console.log('Connected to the database.');
    release();
});

module.exports = db;
