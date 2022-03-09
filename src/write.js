// import fs file system
const fs = require('fs');

// recieves text and writes in index.html
const writeHtml = (html) => {

    fs.writeFile('index.html', html, (err) => {

        // if error it will show it 
        if (err) throw err;

        console.log("The file HTML was succesfully saved!");
    });
}

module.exports = {
    writeHtml
}