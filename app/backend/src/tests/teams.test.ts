import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');
// import { Model } from 'sequelize/types';
import { app } from '../app';
import Teams from '../database/models/Teams';
import { allTeams, oneTeam } from './helpers/fakeDB';


chai.use(chaiHttp);

const { expect } = chai;

describe('3) Mapeamento de teste da rota /teams', () => {
    before(() => {
    sinon.stub(Teams, 'findAll')
    .onCall(0).resolves(allTeams as Teams[])
    .onCall(1).resolves(undefined)
    .onCall(2).rejects()
    sinon.stub(Teams, 'findOne')
    .onCall(0).resolves(oneTeam as Teams)
    .onCall(1).resolves(undefined)
    .onCall(2).rejects()
    })
    after(() => sinon.restore())
    describe('A) Verificação do retorno correto da função' ,() => {
        it('1) chamada da rota GET /teams', async () => {
            // sinon.stub(Teams, 'findAll').on(allTeams as Teams[])
            const httpRes = await chai.request(app).get('/teams');
            // console.log('Corpo : ', httpRes.body);
            
            expect(httpRes.status).to.be.eq(200);
            expect(httpRes.body).to.deep.eq(allTeams);
        });
        it('2) chadama da rota GET /teams/:id', async () => {
            // sinon.stub(Teams, 'findOne').resolves(oneTeam as Teams)
            const httpRes = await chai.request(app).get('/teams/1');

            expect(httpRes.status).to.be.eq(200);
        });
    });
    describe('B) Verificação do retorno em caso de falha', () => {
        it('1) chamada da rota GET /teams',async () => {
            // sinon.stub(Teams, 'findAll').resolves([])
            const httpRes = await chai.request(app).get('/teams');

            expect(httpRes.status).to.be.eq(401);
        })
        it('2) chamada da rota GET /teams:id', async () => {
            const httpRes = await chai.request(app).get('/teams/1');

            expect(httpRes.status).to.be.eq(401);
        });
        it('3) quebra do sistema o retorno de status 500', async () => {
            const httpRes1 = await chai.request(app).get('/teams');
            const httpRes2 = await chai.request(app).get('/teams/1')
        })
    })
});