const express = require("express");
const mariadb = require("mariadb");
const cors = require('cors');

const port = 3000;

const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "conferencia",
    connectionLimit: 5
})

const app = express();

app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
    let conn;

    try {
        conn = await pool.getConnection();
        const rows = await conn.query("INSERT INTO usuarios (nombre, apellido, email, pais, ocupacion, descripcion) VALUES (?, ?, ?, ?, ?, ?)",
        [req.body.nombre, req.body.apellido, req.body.email, req.body.pais, req.body.ocupacion, req.body.descripcion]);
        res.json({message: "El usuario se ha registrado con éxito"});
    } catch (err) {
        res.status(500).json({message: "Ocurrió un error en el servidor"});
    } finally {
        if (conn) conn.release();
    }
})

app.listen(port, () => {
    console.log(`El servidor esta andando en el puerto:${port}`);
})