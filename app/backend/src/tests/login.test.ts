import * as bcrypt from 'bcryptjs';
import * as chai from 'chai';
import { expect } from 'chai';
import * as jwt from 'jsonwebtoken';
import * as sinon from 'sinon';
import { app } from '../app';
import User from '../database/models/Users';
import * as helper from './helpers/fakeDB';
// @ts-ignore
import chaiHttp = require('chai-http');

describe('1) Mapeamento de testes da rota /login e login/validate', () => {
    before(() => {
      sinon.stub(User, 'findOne')
      .onCall(0).resolves(helper.oneUser as User) // A-1
      .onCall(1).resolves(undefined)
      .onCall(2).resolves(helper.oneUser as User)
      sinon.stub(bcrypt, 'compareSync')
      .onCall(0).returns(true) // A-1
      .onCall(1).returns(false)
      sinon.stub(jwt, 'sign') 
      .onCall(0).resolves(helper.tokenMockOk as string) // A-1
      sinon.stub(jwt, 'decode')
      .onCall(0).returns({ data: helper.oneUser}) // A-2
    })
    after(() => sinon.restore())
    describe('A) Verificação do retorno correto da chamadas bem sucedidas', () => {
        it('1) chamada da rota POST /login: ', async () => {
            const httpRes = await chai.request(app).post('/login').send(helper.sucessLogin)

            expect(httpRes.status).to.be.eq(200);
            expect(httpRes.body).to.deep.eq({ token: helper.tokenMockOk});
        })
        it('B) cahamada da rota GET /login/validate', async () => {
            const httpRes = await chai.request(app).get('/login/validate')
            .set('authorization', helper.tokenMockOk)

            expect(httpRes.status).to.be.eq(200)
            expect(httpRes.body).to.deep.eq({ role: 'admin' })
        })
    });
    describe('B) Verificação do retorno correto da chamadas mal sucedidas', () => {
        it('1) observação de falha na rota POST /login por campo faltando', async () => {
            const httpRes = await chai.request(app).post('/login').send(helper.failLoginIsRequired)

            expect(httpRes.status).to.be.eq(400);
            expect(httpRes.body).to.deep.eq(helper.failLoginMessage400)
            
        });
        it('2) observação de falha na rota POST /login por campo email invalido',async () => {
            const httpRes = await chai.request(app).post('/login').send(helper.failLoginEmailIsNotEmail)

            expect(httpRes.status).to.be.eq(401);
            expect(httpRes.body).to.deep.eq(helper.failLoginMessage401)
        })
        it('3) observação de falha na rota POST /login por campo password too short',async () => {
            const httpRes = await chai.request(app).post('/login').send(helper.failLoginPasswordTooShort)

            expect(httpRes.status).to.be.eq(401);
            expect(httpRes.body).to.deep.eq(helper.failLoginMessage401)
        });
        it('4) observação de falha na rota POST /login por campo password too short',async () => {
            const httpRes = await chai.request(app).post('/login').send(helper.failLoginEmailWrong)

            expect(httpRes.status).to.be.eq(401);
            expect(httpRes.body).to.deep.eq(helper.failLoginMessage401)
        });
        it('5) observação de falha na rota POST /login por campo password too short',async () => {
            const httpRes = await chai.request(app).post('/login').send(helper.failLoginPasswordWrong)

            expect(httpRes.status).to.be.eq(401);
            expect(httpRes.body).to.deep.eq(helper.failLoginMessage401)
        });
        it('6) observação de falha na rota GET /login/validate por token invalido', async () => {
            const httpRes = await chai.request(app).get('/login/validate')
            .set('authorization', 'token invalid')

            expect(httpRes.status).to.be.eq(401);
            expect(httpRes.body).to.deep.eq({message: 'Token sem usuario'})
        });
        it('7) observação de falha na rota GET /login/validate sem token ', async () => {
            const httpRes = await chai.request(app).get('/login/validate')

            expect(httpRes.status).to.be.eq(401);
            expect(httpRes.body).to.deep.eq({message: 'Token inexistente'})
        });
    });
});