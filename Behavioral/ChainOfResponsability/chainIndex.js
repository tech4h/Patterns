const express = require('express');
const app = express();

/**
  *
    --> To test, let's pass the table dimension data here(table 10x10)  <-- 
    http://localhost:3000/table?lines=10&columns=10
  *
**/


/**
  *
    --> Checking how much columns and lines the user passed  <-- 
  *
**/
app.get('/table', function(req, resp, next){
    console.log("We are on the FIRST call of /table");
    req.table = {
        lines: parseInt(req.query.lines),
        columns: parseInt(req.query.columns)
    }
    next()
});

/**
  *
    --> Receiving columns and lines number and output these data  <-- 
  *
**/
app.get('/table', function(req, resp, next){
    console.log("We are on the SECOND call of /table");
    console.log(req.table);
    next() //If we comment these next() we'll lost the response
});

/**
  *
    --> Mounting the (L X C) - line and columns elements, one by one <-- 
  *
**/
app.get('/table', function(req, resp){
    console.log("Do you called here? Ok! Tech4H mounts your table, relax ;)");    
    let num = 1;
    let content = '<table border="1">';
        for (let l = 0; l < req.table.lines; l++) {
            content += '<tr>';
                for (let c = 0; c < req.table.columns; c++) {
                    content += `<td>${num}</td>`;
                    num++;
                }
            content += '</tr>';
        }
    content += '</table>'
    resp.send(content)
});

/**
  *
    --> The beggining of all is here, becouse it's the starter node of the chain <-- 
  *
**/
app.listen(3000, () => 
    console.log(" - We have our simple Tech4H node+express server - ")
);
    