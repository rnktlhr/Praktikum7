const exprees = require('express');
const connectDatabase = require('./config/db');

const app = exprees();
const PORT = 3000;

app.use(exprees.json());
app.use(exprees.urlencoded({ extended: true }));

async function startServer() {
    await connectDatabase();
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

startServer();
