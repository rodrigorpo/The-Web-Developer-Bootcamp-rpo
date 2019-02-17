/*----------------------------------------------------------|
|   - Install nodejs                                        |
|       $ npm install package_name (to install a package)   |
|       $ node file.js (to execute a js file)               |
|   - Use require to import a package.                      |
|----------------------------------------------------------*/

const faker = require('faker');

let randomItems = [];

const NUM_ITEMS = 10;

for (let i = 0; i < NUM_ITEMS; i++) {
    randomItems.push({name: faker.commerce.productName(), price: faker.commerce.price()});
}
console.log(randomItems);