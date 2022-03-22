const express = require('express');
const app = express();
app.use(express.json());
let a = 3;
let b = 4;

let sum = a+b;

console.log(sum);

app.post('/sum', (req, res) => {
    const firstNumber = req.body.firstNumber;
    const secondNumber = req.body.secondNumber;
    const sum = a+b;

    console.log(sum)
  res.send({"Result": sum});
  

})
app.get('/', (req, res) => {
    res.send('Hello World ');
  })
app.listen(8000, () => {
  console.log(`Example app listening on port 8000`);
})

//Create a JavaScript program to add two numbers and print sum in console
//Create a JS program to add two numbers and print sum on browser (Example, "Sum = 15")
//Create an API which acceps two numbers and sends sum in response. (Example, {status: 200, response: 15, message: successful})





