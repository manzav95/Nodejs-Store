const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

function loadProducts(){
    connection.query("SELECT * FROM products", function(err, res){
        console.table(res);
    });
}

connection.connect(function(err){
    if(err) throw err;
    console.log("Hello");
    loadProducts();
})

function 

function checkInventory(itemId, inventory){
    for(let index = 0; index < inventory.length; index++){

    }
}

function promptCustomer(inventory){
    inquirer.prompt({
        type: "input",
        name: "choice",
        message: "What is the ID of the item you like?",
        validate: function(val){
            // return !isNaN(val) || val.toLowerCase() === 
        }
    }).then(function(val){
        checkIFExit(val.choice);
        let itemId = parseInt(val.choice);
        let product = checkInventory(itemId, inventory);
        console.log()
    })
}