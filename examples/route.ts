import express from 'express';
const app=express();
app.post('/webhooks/stripe',(_req,res)=>res.sendStatus(204));
