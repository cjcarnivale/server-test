'use strict'; 

const mocha = require('mocha'); 
const supertest = require('supertest'); 
const express = require('express');
 

const app = express(); 

describe('Endpoint Functionality', () => {
  it('Expect 200 on GET request to / endpoint', () => {
    supertest(app)
      .get('/')
      .expect(200, {name: 'Chris'}); 
  }); 

  it('Expect 201 on valid POST request to / endpoint', () => {
    supertest(app)
      .post('/')
      .send( {name: 'Shaq'})
      .expect(201, {name: 'Shaq'});  
  });   
});
