const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const Sede = sequelize.define("Sede", {
  rif: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  ubicacion: {
    type: Sequelize.STRING,
    allowNull: false, 
  },
  horaEntrada: {
    type: Sequelize.STRING,
    allowNull: false
  },
  horaSalida: {
      type: Sequelize.STRING,
      allowNull:false,
  },
  cantidadSalas: {
    type: Sequelize.INTEGER,
    allowNull:true,
}
});

Sede.sync();
module.exports = Sede;