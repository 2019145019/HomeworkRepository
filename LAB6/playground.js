const ejs = require('ejs')
const yh = {
  name: "yeonghwan",
  age: 23,
  sex: "male",
}

ejs.renderFile("template.ejs", yh, {}, function(err, str) {
  if (err) {
   console.error(err)
   return; 
  
  }

  console.log(str)
})
