const request = require('supertest');
const app = require('../../../app');
const db = require('../../../db-config')
const cheerio = require('cheerio');

describe('Recipes list', () => {

    jest.setTimeout(3000);

    beforeAll(() => {
        require('dotenv').config({path: './.env.test'});
    });
    afterAll(async () => {
        // Close the pool connection
        await db.end();
    });

    it('should list recipes', async () => {
        const response = await request(app).get('/recipes');

        expect(response.status).toBe(200);

        const $ = cheerio.load(response.text);
        const divExists = $('ul').length > 0;
        expect(divExists).toBeTruthy();
    });

});
