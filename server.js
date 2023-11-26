import { handler } from './build/handler.js';
import express from 'express';
//import cursusdb from 'cursusdb-node'

const app = express();


// cursusdb.Connect("0.0.0.0", "7681", "alex", "padula", false).then(async (cluster) => {
//     console.log("Database connected.")
// }).catch((err) => {
//     console.error(err)
//     process.exit(1);
// })

// add a route that lives separately from the SvelteKit app
app.get('/healthcheck', async (req, res) => {
    res.end("ok");
});

// app.get('/api/users', async (req, res) => {
//     // Database query test
//     const results = await cursusdb.Query("select * from users;")
//     res.end(results);
// });

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);
const port = parseInt(process.env.PORT) || 8080;

// Do DB shutdown
function shutdownGracefully() {
    // cursusdb.Close().then(r => {
    //     console.log("cursusdb closed gracefully.")
    //     process.exit(0);
    // })
}

process.on('SIGINT', shutdownGracefully);
process.on('SIGTERM', shutdownGracefully);

app.listen(port, () => {
    console.log('listening on port ' + port);
});