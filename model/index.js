var mysql      = require('mysql');
var connection = null;
var database = new Object();

database.connect = function () {
    connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'postman'
    });

    connection.connect(function(err){
        if(!err) {
            console.log("Database is connected ... nn");
        } else {
            console.log("Error connecting database ... nn");
        }
    });

}
database.getWarehouse = function(input){
    //console.log(input+"input");
    connection.query("SELECT warehouse_id,warehouse_address FROM warehouse WHERE company_id="+input,function(err,rows,fields){
        console.log(rows);
        if(err){
            console.log(err);
            //callback(err,null);
        }
        else{
            //callback(null, rows);
        }
    });
}
database.addCompany = function(input){
    //console.log(input+"input");
    connection.query("INSERT INTO company (company_name) VALUES ('"+ input +"')",function(err,rows,fields){
        if(err){
            console.log(err);
        }
        else {
            console.log("added company");
        }
    });
}
database.addWarehouse = function(input){
    //console.log(input+"input");
    connection.query("INSERT INTO warehouse (warehouse_address,company_id) VALUES ('"+input.warehouse_address+"','"+input.company_id+"')",function(err,rows,fields){
        if(err){
            console.log(err);
        }
        else {
            console.log("added warehouse");
        }
    });
}
database.addProduct = function(input){
    //console.log(input+"input");
    connection.query("INSERT INTO product (product_name,warehouse_id) VALUES ('"+input.product_name+"','"+input.warehouse_id+"')",function(err,rows,fields){
        if(err){
            console.log(err);
        }
        else {
            console.log("added product");
        }
    });
}
module.exports = database;