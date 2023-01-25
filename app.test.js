/* eslint-disable no-undef */

'use strict';

const request = require('supertest');
const app = require('./app');

describe('Test the Roll Loads', () => {
    test('GET /Roll/Load succeeds', () => {
        return request(app)
	    .get('/Roll/Load')
	    .expect(200);
    });

    test('GET /Roll/Load returns JSON', () => {
        return request(app)
	    .get('/Roll/Load')
	    .expect('Content-type', /json/);
    });

    test('GET /recipes includes Red Well', () => {
        return request(app)
	    .get('/Roll/Load')
	    .expect(/Red Well/);
    });

    test('GET /Roll/Clear succeeds', () => {
        return request(app)
	    .get('/Roll/Clear')
	    .expect(200);
    });

    test('POST /Roll/Submit', () => {
        const params = {Officer: "test", RC:"12", HB:"Red Well"};
        return request(app)
        .post('/Roll/Submit')
        .send(params)
	    .expect(200);
    });
});
