const express = require('express');
const figlet = require('figlet');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Endpoint to generate ASCII art
app.get('/api/figlet/:font', (req, res) => {
    const { font } = req.params;
    const { text } = req.query;

    if (!text) {
        return res.status(400).send('Error: Query parameter "text" is required.');
    }

    figlet.fonts((err, fonts) => {
        if (err) {
            return res.status(500).send('Error fetching available fonts.');
        }

        if (!fonts.includes(font)) {
            return res.status(400).send('Error: Invalid font specified.');
        }

        figlet.text(text, { font }, (err, data) => {
            if (err) {
                return res.status(500).send('Error generating ASCII art.');
            }
            res.type('text/plain');
            res.send(data);
        });
    });
});

// Endpoint to list available fonts
app.get('/api/fonts', (req, res) => {
    figlet.fonts((err, fonts) => {
        if (err) {
            return res.status(500).send('Error fetching available fonts.');
        }
        res.json(fonts);
    });
});

app.listen(port, () => {
    console.log(`ASCII art API is running on http://localhost:${port}`);
});
