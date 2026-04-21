const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hola Mundo DevOps 🚀");
});

module.exports = app;

// Solo para correr el servidor
if (require.main === module) {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Servidor corriendo en puerto ${PORT}`);
    });
}