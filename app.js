const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hola Mundo DevOps 🚀");
});

module.exports = app;

// Solo para correr el servidor
if (require.main === module) {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}