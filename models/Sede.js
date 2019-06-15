const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const Persona = sequelize.define("Sede", {
  rif: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  ubicacion: {
    type: Sequelize.STRING,
    allowNull: false, 
  },
  hEntrada: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  hSalida: {
      type: Sequelize.INTEGER,
      allowNull:false,
  },
});

Sede.sync();
module.exports = Sede;