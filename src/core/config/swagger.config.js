import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'keycloak-backend:: Heroes API',
      description:
        'APIs used by the keycloak-backend',
      version: '1.0.0'
    },
    license: {
      name: 'MIT'
    }
  },
  apis: ['**/*.router.js']
};

const swaggerDocument = swaggerJSDoc(swaggerOptions);

export const initSwagger = (app, path = '/api/docs') => {
  app.use(path, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
