import app from "./src/app";

const port = process.env.PORT ;

app.listen(port, () => {
    console.log(`API de Finanzas corriendo en el puerto http://25.68.105.43:${port}`);
});