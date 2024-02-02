<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
                  // XHR Object
                  var request = new XMLHttpRequest();

// Open the connection
request.open("GET", "https://restcountries.com/v3/all");

// Sending the request
request.send();

// Handling the response when it's loaded
request.onload = function () {
    // Parse the JSON response
    var data = JSON.parse(request.response);

    // Task 1: Get all the countries from the Asia continent/region using Filter function
    var asiaCountries = data.filter(country => country.region?.includes('Asia'));
            console.log("Asia Countries:", asiaCountries);

    // Task 2: Get all the countries with a population of less than 2 lakhs using Filter function
    var lessThan2LakhPop = data.filter(country => country.population < 200000);
    console.log("Countries with Population Less than 2 Lakhs:", lessThan2LakhPop);

    // Task 3: Print name, capital, flag using forEach function
    data.forEach(country => {
        console.log("Name:", country.name?.common);
        console.log("Capital:", country.capital?.[0]);
        console.log("Flag:", country.flags?.[0]);
    });

    // Task 4: Print the total population of countries using reduce function
    var totalPopulation = data.reduce((acc, country) => acc + (country.population || 0), 0);
    console.log("Total Population:", totalPopulation);

    // Task 5: Print the country that uses US dollars as currency
    var usDollarCountry = data.find(country => country.currencies?.USD);
    console.log("Country that uses US Dollars:", usDollarCountry?.name?.common);
};
        



    </script>
    
</body>
</html>