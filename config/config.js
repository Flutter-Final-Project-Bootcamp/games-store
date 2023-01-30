module.exports = {
    "development": {
        "username": process.env.DB_USERNAME || "root",
        "password": process.env.DB_PASSWORD || null,
        "database": process.env.DB_DATABASE || "database_development",
        "host": process.env.DB_HOST || "127.0.0.1",
        "dialect": "postgres"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "production": {
        "username": process.env.DB_USERNAME || "root",
        "password": process.env.DB_PASSWORD || null,
        "database": process.env.DB_DATABASE || "database_production",
        "host": process.env.DB_HOST || "127.0.0.1",
        "dialect": "postgres",
        "dialectOptions": {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
}
