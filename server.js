import { handler } from './build/handler.js';
import express from 'express';

const app = express();

// add a route that lives separately from the SvelteKit app
app.get('/healthcheck', async (req, res) => {
    res.end("ok");
});

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);
const port = parseInt(process.env.PORT) || 8080;

function shutdownGracefully() {
    console.log("Shutting down.")
}

process.on('SIGINT', shutdownGracefully);
process.on('SIGTERM', shutdownGracefully);


app.listen(port, () => {
    console.log('listening on port ' + port);
});

