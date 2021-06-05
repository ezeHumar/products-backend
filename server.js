app = require("./app");

//Server port
const PORT = 3000;

//Server gets initialized
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});