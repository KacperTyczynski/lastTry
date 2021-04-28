//const { TestScheduler } = require("@jest/core");
const request = require("supertest");
const app = require('../app');

describe('Test the root path', () => {
    //test('Powinno zwrocic metode GET', (done) => {
        // request(app).get('/')
        //     .then((req, res) => {
        //         expect(resp.statusCode).toBe(200)
        //         expect(resp.text).toBe('Hello World')
        //     })
        //     .catch((e) => {
        //     })
        //     .finally() => done())
    test('Powinno zwrocic metode GET', async () => {
        try {
            const resp = await request(app).get('/')
            // const resp = await request(app).delete('/')
            // const resp = await request(app).put('/')
            // const resp = await request(app).patch('/')
            expect(resp.statusCode).toBe(200)
        } catch(e) {
            throw e
        }
    });
});