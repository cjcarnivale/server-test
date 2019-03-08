'use strict'; 

const mocha = require('mocha'); 
const supertest = require('supertest'); 
const express = require('express');
 

const { app }= require('../test-server');

describe('Endpoint Functionality', () => {
  it('Expect 200 on GET request to / endpoint', () => {
    return supertest(app)
      .get('/')
      .expect(200, [ {name: 'Chris'} ]); 
  }); 

  it('Expect 201 on valid POST request to / endpoint', () => {
    return supertest(app)
      .post('/')
      .send( {name: 'Shaq'})
      .expect(201, {name: 'Shaq'});  
  });   
});
