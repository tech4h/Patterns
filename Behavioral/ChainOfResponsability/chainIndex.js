const express = require('express');
const app = express();

app.get('/table', function(){
    console.log("Table instance here...")
});

app.listen(3000, () => 
    console.log(" - We have our simple Tech4H node+express server - ")
);
    