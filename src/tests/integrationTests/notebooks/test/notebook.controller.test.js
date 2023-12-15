const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { Notebook } = require('../../../../models/Notebook');
const NotebookController = require('../../../../controllers/notebook.controller');

const expect = chai.expect;

chai.use(chaiHttp);

describe('GET /api/v1/notebooks', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should return all notebooks', async () => {
    const notebooksData = [
      { id: 1, name: 'Notebook 1', price: 999, description: 'Description 1' },
      { id: 2, name: 'Notebook 2', price: 1299, description: 'Description 2' }
    ];

    sinon.stub(Notebook, 'findAll').resolves(notebooksData);

    const req = {
      body: {}
    };

    const res = {
      json: sinon.stub(),
      status: sinon.stub().returnsThis()
    };

    await NotebookController.index(req, res);

    sinon.assert.calledWith(res.json, notebooksData);
    sinon.assert.calledWith(res.status, 200);
  });

  it('should handle error if notebooks not found', async () => {
    sinon.stub(Notebook, 'findAll').resolves([]);

    const req = {
      body: {}
    };
  
    const res = {
      json: sinon.stub(),
      status: sinon.stub().returnsThis()
    };

    await NotebookController.index(req, res);

    sinon.assert.calledWith(res.status, 406);
    sinon.assert.calledWithMatch(res.json, { message: 'Notebooks not found' });
  });
});
