const express = require('express');
const cors = require('cors');  // Import the cors module
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());  // This will allow all origins by default

// Middleware to parse JSON bodies for POST requests
app.use(express.json());

// Sample product catalog data
const productCatalog = [
    {
        "id": 1,
        "productName": "Dumbbell Set",
        "description": "Adjustable dumbbells for strength training with ergonomic grip.",
        "price": 1499.00,
        "imagePath": "https://m.media-amazon.com/images/I/612wD806BnL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        "id": 2,
        "productName": "Resistance Bands",
        "description": "Set of high-quality resistance bands for strength and flexibility training.",
        "price": 299.00,
        "imagePath": "https://m.media-amazon.com/images/I/71-87y93B+L._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        "id": 3,
        "productName": "Treadmill",
        "description": "Motorized treadmill with multiple incline levels and preset workout programs.",
        "price": 24999.00,
        "imagePath": "https://m.media-amazon.com/images/I/71Y0eu7+u5L._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
        "id": 4,
        "productName": "Yoga Mat",
        "description": "Non-slip yoga mat designed for comfort and support during workouts.",
        "price": 699.00,
        "imagePath": "https://m.media-amazon.com/images/I/717PPvt51HL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        "id": 5,
        "productName": "Kettlebell Set",
        "description": "Set of durable kettlebells for strength and endurance training.",
        "price": 4999.00,
        "imagePath": "https://m.media-amazon.com/images/I/61pC+tFd8mL._AC_UL480_FMwebp_QL65_.jpg"
    }
];

// In-memory cart (this can be replaced with database or session storage)
let cart = [];

// Endpoint to get the product catalog
app.get('/api/products', (req, res) => {
  res.json(productCatalog);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
