# Node.js Express Email Validation API
A simple React app that fetches and displays fun facts about numbers using the Numbers API.
## Prerequisites

📌 Features

    Fetches fun facts about numbers
    User can input a number to get a specific fact
    Random number fact on page load
    Simple and clean UI

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>=14.x)
- [npm](https://www.npmjs.com/) (Node.js package manager)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/pepps01/hngx-stage1-number-classification-api.git


2. Install the dependencies 
   ```bash
   npm install 
   npm run build

3. Runn the Application 
    ```bash
    npm start

4. API Endpoints
    GET /
    This is the root endpoint that returns a simple greeting.

    URL: http://localhost:3000/api/classify-number?number=371
    
    This endpoint validates the number query parameter and returns a JSON response with the email leverage on Numbers api

    Parameters:
    number (required): required to classify number

    ```bash 
    GET http://localhost:8000?number=317


5. Response:
    If the number is valid, you will receive a JSON response containing:

    {
        "number": 371,
        "is_prime": false,
        "is_perfect": false,
        "properties": ["armstrong", "odd"],
        "digit_sum": 11,  // sum of its digits
        "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371" //gotten from the numbers API
    }
  
   If the bad request is valid, you will receive a JSON response containing:
  
    {
        "number": "alphabet",
        "error": true
    }

