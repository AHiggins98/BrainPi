var CsvMapClass = require("./src/CsvMap");
const fs        = require("fs");
var init = require("../Config/init");
var parse = require('csv-parse');

class Csv {

    constructor( type, ref, path ) {
        this.CsvMap = null;
        this.type   = type;
        this.ref    = ref;
        this.path   = path;
    }

    init() {

        if(!this.verify()) {
            process.exit(22);
        }

    }

    verify() {
        this.type.toLowerCase() === 'csv' ? true : false;
    }

    createCsvMap() {

    }

    open( name ) {
        const appDir = init.readConfiguration().app.dir;

        const path = `${appDir}${this.path}${name}.csv`;

        if (fs.existsSync(path)) {
            return new Promise(function(resolve) {
                var fileContent = fs.readFileSync(path, {encoding: 'utf8'});
                resolve(fileContent);
            });
        } else {
            throw new Error(`${name} DOES NOT EXIST! File Specified: ${path} Does Not Exist.`)
        }

    }
}

module.exports = Csv;