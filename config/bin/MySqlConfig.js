var MySqlClass = require("../../vendor/brainpi/src/MySql/MySql");

class MySqlConfig {

    constructor() {
        this.MySql = null;
    }

    // Transale the requested Data Node into a MySQL object
    process( dataString , configurationFile ) {

        const database = eval("configurationFile.database."+dataString);

        if(database == null) {
            process.exit(22);
        }

        this.MySql = new MySqlClass(
            database.connection,
            database.host,
            database.port,
            database.database,
            database.username,
            database.password
        );

        return this.MySql;

    }

}

module.exports = new MySqlConfig();