//const favicon = require("serve-favicon");
//const bodyParser = require("body-parser");
const { sequelize } = require("sequelize");

/**
 * Initializes a Sequelize instance for connecting to a MariaDB database.
 *
 * @type {Sequelize}
 * @description Establishes a connection to the 'pokedex' database using the root user
 * with no password. The connection is configured for localhost with MariaDB dialect
 * and a GMT-2 timezone offset. Query logging is disabled.
 *
 * @property {string} database - 'pokedex'
 * @property {string} username - 'root'
 * @property {string} password - (empty)
 * @property {string} host - 'localhost'
 * @property {string} dialect - 'mariadb'
 * @property {Object} dialectOptions - MariaDB-specific options
 * @property {string} dialectOptions.timezone - 'Etc/GMT-2'
 * @property {boolean} logging - false
 */
//const sequelize = new Sequelize("pokedex", "root", " ", {
// host: "localhost",
//dialect: "mariadb",
//dialectOptions: {
//  timezone: "Etc/GMT-2",
// },
// logging: false,
//});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connexion etablie avec la base de donnees.");
  })
  .catch((err) => {
    console.error("Impossible de se connecter a la base de donnees :", err);
  });
