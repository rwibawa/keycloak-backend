#!/usr/bin/env node

import express from 'express';
import cors from 'cors';

import { appPort, initSplashScreen, serverInitCallback } from './core/config/app.config';
import { initKeycloak } from './core/config/keycloak.config';
import { RouterConfig } from './core/config/router.config';
import { initSwagger } from './core/config/swagger.config';

// Init App
initSplashScreen();
const app = express();

// Middleware
app.use(cors());

// Init Routers
const { routers } = new RouterConfig(app);

// Swagger
initSwagger(app);

// Security -> Keycloak
initKeycloak(app);

app.listen(appPort, serverInitCallback);

