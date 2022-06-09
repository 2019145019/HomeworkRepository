const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database("product2.db")

const products = [
  {
      "name":"Campbell Biology",
      "cost":"16$",
      "img":"Campbell Biology.jpg",
      "cat":"Biology"
  },
  {
      "name":"Human Biology",
      "cost":"16$",
      "img":"Human Biology.jpg",
      "cat":"Biology"
  },
  {
      "name":"Biology 11th Edition",
      "cost":"14$",
      "img":"Biology 11th Edition.jpg",
      "cat":"Biology"
  },
  {
      "name":"Cengage Biology",
      "cost":"12$",
      "img":"Cengage Biology.jpg",
      "cat":"Biology"
  },
  {
      "name":"Concepts of Biology",
      "cost":"18$",
      "img":"Concepts of Biology.jpg",
      "cat":"Biology"
  },
  {
      "name":"Essential Cell Biology",
      "cost":"14$",
      "img":"Essential Cell Biology.jpg",
      "cat":"Biology"
  },
  {
      "name":"Biological Science",
      "cost":"8$",
      "img":"Biological Science.jpg",
      "cat":"Biology"
  },
  {
      "name":"Must Know High School Biology",
      "cost":"7$",
      "img":"Must Know High School Biology.jpg",
      "cat":"Biology"
  },
  {
      "name":"Modern Classical Physics",
      "cost":"17$",
      "img":"Modern Classical Physics.jpg",
      "cat":"Physics"
  },
  {
      "name":"Introduction To General Relativity And Cosmology",
      "cost":"6$",
      "img":"Introduction To General Relativity And Cosmology.jpg",
      "cat":"Physics"
  },
  {
      "name":"Conceptual Physics",
      "cost":"14$",
      "img":"Conceptual Physics.jpg",
      "cat":"Physics"
  },
  {
      "name":"No Bulls--t Guide To Math And Physics",
      "cost":"19$",
      "img":"No Bulls--t Guide To Math And Physics.jpg",
      "cat":"Physics"
  },
  {
      "name":"Fundamentals Of Physics",
      "cost":"11$",
      "img":"Fundamentals Of Physics.jpg",
      "cat":"Physics"
  },
  {
      "name":"Introduction To Quantum Mechanics",
      "cost":"14$",
      "img":"Introduction To Quantum Mechanics.jpg",
      "cat":"Physics"
  },
  {
      "name":"Basic Physics",
      "cost":"6$",
      "img":"Basic Physics.jpg",
      "cat":"Physics"
  },
  {
      "name":"University Physics With Modern Physics",
      "cost":"13$",
      "img":"University Physics With Modern Physics.jpg",
      "cat":"Physics"
  },
  {
      "name":"Chemistry 10th Edition",
      "cost":"11$",
      "img":"Chemistry 10th Edition.jpg",
      "cat":"Chemistry"
  },
  {
      "name":"Organic Chemistry As a Second Language",
      "cost":"11$",
      "img":"Organic Chemistry As a Second Language.jpg",
      "cat":"Chemistry"
  },
  {
      "name":"Chemistry 2e by OpenStax",
      "cost":"10$",
      "img":"Chemistry 2e by OpenStax.jpg",
      "cat":"Chemistry"
  },
  {
      "name":"An Introduction to General, Organic, and Biological Chemistry",
      "cost":"12$",
      "img":"An Introduction to General, Organic, and Biological Chemistry.jpg",
      "cat":"Chemistry"
  },
  {
      "name":"Chemistry For Dummies",
      "cost":"15$",
      "img":"Chemistry For Dummies.jpg",
      "cat":"Chemistry"
  },
  {
      "name":"Prentice Hall Chemistry",
      "cost":"16$",
      "img":"Prentice Hall Chemistry.jpg",
      "cat":"Chemistry"
  },
  {
      "name":"Computer Science Illuminated",
      "cost":"6$",
      "img":"Computer Science Illuminated.jpg",
      "cat":"Computer science"
  },
  {
      "name":"Starting Out with Programming Logic and Design",
      "cost":"11$",
      "img":"Starting Out with Programming Logic and Design.jpg",
      "cat":"Computer science"
  },
  {
      "name":"An Introduction to Computer Science Using Python 3.6",
      "cost":"7$",
      "img":"An Introduction to Computer Science Using Python 3.6.jpg",
      "cat":"Computer science"
  },
  {
      "name":"Essentials of Computer Organization and Architecture",
      "cost":"9$",
      "img":"Essentials of Computer Organization and Architecture.jpg",
      "cat":"Computer science"
  },
  {
      "name":"Invitation to Computer Science",
      "cost":"15$",
      "img":"Invitation to Computer Science.jpg",
      "cat":"Computer science"
  },
  {
      "name":"Barron's AP Computer Science A",
      "cost":"16$",
      "img":"Barron's AP Computer Science A.jpg",
      "cat":"Computer science"
  }
]

db.serialize(() => {
  db.run(`
  CREATE TABLE IF NOT EXISTS "product" (
    "product_id"	INTEGER,
    "product_image"	VARCHAR(100),
    "product_title"	VARCHAR(100),
    "product_price"	VARCHAR(100),
    "product_category"	VARCHAR(100),
    PRIMARY KEY("product_id" AUTOINCREMENT)
  );
  `);
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const query = `INSERT INTO product (product_image, product_title, product_price, product_category) VALUES ("assets/img/${product.img}", "${product.name}", "${product.cost}", "${product.cat}")`
      console.log(query)
      db.run(query)
    }
});


db.close();
