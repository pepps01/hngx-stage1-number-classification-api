const express = require('express')
const app = express()
const axios = require('axios');
const cors = require('cors');
const port = process.env.PORT || 3000
const { isPrime, isPerfect, isArmstrong, digitSum } = require('./NumberUtils');






app.get('/api/classify-number', async(req, res) => {
  const number = req.query.number;
    if (!number) {
        return res.status(400).json({
        error: "Email query parameter is required"
        });
    }
     if (isNaN(number)) {
        return res.status(400).json({
            number: number,
            error: "The input is not a number"
        });
    }

    const num = parseInt(number);

    // Prepare properties
    const properties = [];
    if (isArmstrong(num)) properties.push("armstrong");
    if (num % 2 === 1) properties.push("odd");
    else properties.push("even");

    // Get fun fact about the number from Numbers API
    try {
        const response = await axios.get(`http://numbersapi.com/${num}?json`);
        const funFact = response.data.text;

        const result = {
            number: num,
            is_prime: isPrime(num),
            is_perfect: isPerfect(num),
            properties: properties,
            digit_sum: digitSum(num),
            fun_fact: funFact
        };

        return res.json(result);
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: 'Error fetching fun fact from Numbers API'
        });
    }

})



 
app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})