const express = require('express');
const app = express();
const port = 8087;

// Redirect route
app.get('/', (req, res) => {
    res.json("Hello HoliYou!");
});

// Redirect route use like this: http://localhost:8087/holiyou?token=yourTokenHere
app.get('/holiyou', (req, res) => {
    const token = req.query.token;
    res.redirect(`holiyou://auth?token=${token}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
