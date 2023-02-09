const { faker } = require('@faker-js/faker');
const fs = require('fs');
const names = fs.createWriteStream("names.txt");


for (let i = 1; i <= 1000; i++) {
    names.write( i + " " + faker.name.fullName() + ", \n");
} 


console.log("Ready");