var client = require('mysql')
var databaseConfig = require('../config/databaseConfig')

class database {
    constructor() {

    }

    connect() {
        this.connection = client.createConnection(databaseConfig)
        this.connection.connect(function (err) {
            console.log(err)
        })
    }

}

module.exports = database