// Data to be sent in the POST request
const data = {
    email: "avezqureshi14@gmail.com",
    password: "123456789"
};

// Options for the fetch request
const requestOptions = {
    method: 'POST', // HTTP method
    headers: {
        'Content-Type': 'application/json' // Indicating the request payload is JSON
    },
    body: JSON.stringify(data) // Converting the data to a JSON string
};

// Making the POST request
fetch('https://dev-backend.morphbots.co/admin-login', requestOptions)
    .then(response => {
        if (!response.ok) {
            // Handle HTTP errors
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Parse the JSON response
    })
    .then(data => {
        console.log('Success:', data); // Handle the response data
    })
    .catch(error => {
        console.error('Error:', error); // Handle any errors
    });
