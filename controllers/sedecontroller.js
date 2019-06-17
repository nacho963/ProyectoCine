const sequelize = require('sequelize');
const db = require('../config/database');
const Sede = require('../models/Sede.js');

const controller = {};

controller.CreateSede= async function (data){
    try {
        console.log(data)
        Sede.create(data);
    } catch (error) {
        callback(null,error);
        
    }
};

controller.GetSede = async function(callback){
    try {
        let response = await Sede.findAll({ 
        });
        let sede = response.map(result => result.dataValues);
        callback(sede, null);
        
    } catch (error) {
        callback(error, null);
        
    }
}

controller.UpdateSede = async function (data){
        let response = Sede.update({
            rif: data.rif,
            ubicacion: data.ubicacion,
            horaEntrada: data.horaEntrada,
            horaSalida: data.horaSalida,
            cantidadSalas: data.cantidadSalas
           
        },{
            where:{
                rif: data.rif
            }
        });
}

controller.DeleteSede = async function (data){
    console.log(data)
    let response = Sede.destroy({
        where:{
            rif: data.rif
        }
    })
}


module.exports = controller;