import client from './databaseConnection.js';

class BaseRepository {
    async getAll(tableName, columnsArray) {
        const queryText = `SELECT ${columnsArray} FROM ${tableName};`;

        return (await client.query(queryText)).rows;
    }

    async getByID(tableName, columnsArray, id) {
        const queryText = `SELECT ${columnsArray} FROM ${tableName} WHERE id = $1;`;

        return (await client.query(queryText, [id])).rows[0];
    }

    async insertOne(tableName, columnsArray, valuesArray) {
        let variableFlags = Array.from(
            new Array(
                columnsArray.length
            ).keys()
        ).map(
            index => `$${index + 1}`
        );

        const queryText = `INSERT INTO ${tableName} (${columnsArray}) VALUES (${variableFlags});`;

        await client.query(queryText, valuesArray);
    }
}

export default BaseRepository;
