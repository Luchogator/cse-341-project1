const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'API for managing contacts'
    },
    host: 'localhost:3000',
    schemes: ['https', 'http'],
    definitions: {
        Contact: {
            type: 'object',
            properties: {
                firstName: { type: 'string' },
                lastName: { type: 'string' },
                email: { type: 'string' },
                favoriteColor: { type: 'string' },
                birthday: { type: 'string' },
                username: { type: 'string' },
                name: { type: 'string' },
                ipAddress: { type: 'string' }
            }
        }
    }
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// This will generate the swagger.json file
swaggerAutogen(outputFile, endpointsFiles, doc);