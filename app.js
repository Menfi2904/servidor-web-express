const express = require("express");
const app = express();
const port = 3000;
const contador = require("./contador");

app.route("/saludo").get((req, res) => {
  const saludos = [
    "Español: Hola ¿Como estas?",
    "Ingles: Hello, ¿How are you?",
    "Japones: こんにちは、元気ですか",
  ];
  const saludarAletorio = Math.floor(Math.random() * saludos.length);
  res.status(200).send(saludos[saludarAletorio]);
});

app.route("/desarrolladores").get((req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});

app.route("/contadordenumeros").get((req, res) => {
  const numeroContados = contador.contarNumeros();
  res.json({ numeros: numeroContados });
});

app.listen(port, () => {
  console.log(`servidor corriendo en el puerto ${port}`);
});
