const express = require("express");
const router = express.Router();
const personaController = require("../../controllers/personacontroller");

router.get("/", (req, res) => {
  res.render("Home", { title: "Home" });
});
router.get("/taquilla", (req,res)=>{
  res.render("taquilla", {title:"Taquilla"});
});
router.get("/GFunciones2", (req,res)=>{
  res.render("gFunciones2", {title:"Eliminar Funciones"});
});
router.get("/GFunciones3", (req,res)=>{
  res.render("gFunciones3", {title:"Crear Funciones"});
});
router.get("/GFunciones", (req,res)=>{
  res.render("gFunciones", {title:"Crear Peliculas"});
});
router.get("/GMantenimiento", (req,res)=>{
  res.render("gMantenimiento", {title:"Gestion de Mantenimiento"});
});
router.get("/CSede", (req,res)=>{
  res.render("cSede", {title:"Crear Sede"});
});
router.get("/CSala", (req,res)=>{
  res.render("cSala", {title:"Crear Sala"});
});
router.get("/Combos", (req,res)=>{
  res.render("combos", {title:"Combos"});
});
router.get("/ServicioButaca", (req,res)=>{
  res.render("servicioButaca", {title:"Servicio a Butaca"});
});
router.get("/Productos", (req,res)=>{
  res.render("productos", {title:"Productos"});
});
router.get("/Carameleria", (req,res)=>{
  res.render("carameleria", {title:"Carameleria"});
});
router.get("/Gerente", (req,res)=>{
  res.render("gerente", {title:"Gerente"});
});
router.get("/Jefe", (req,res)=>{
  res.render("jefe", {title:"Jefe"});
});
router.get("/Create", (req,res)=>{
  res.render("CRUD/create", {title:"Create"});
});

router.post("/Crud/Create" ,(req,res)=>{
  console.log(req.body);
  personaController.CreatePersona(req.body);
  res.redirect('/');
});

router.get("/prepa", (req, res) => {
  res.render("prepa", { title: "prepa" });
});

router.get("/Read", (req,res)=>{
  personaController.GetPersona((persona, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Failed to show empleados"
      });
    else {
      
      res.render("read", {persona});
    }
  });
});

router.get("/Update", (req,res)=>{
  res.render("update", {title:'Update'});
});

router.post("/Crud/Update", (req, res) => {
  console.log(req.body);
    if(!!req.body.cedula){ 
      console.log(req.body.cedula);
    personaController.UpdatePersona(req.body,req.body.cedula);
  }
  res.redirect('/Read');
});

router.get('/Delete', (req,res)=>{
  res.render('delete',{title:'Delete'});
});

router.post("/Crud/Delete",(req,res)=>{
  personaController.DeletePersona(req.body,req.body.cedula);
  res.redirect('/Read');

});


module.exports = router;
