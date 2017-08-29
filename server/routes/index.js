const FoldersController = require('../controllers').Folders;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.get('/Folders/:idFolder', FoldersController.showFolders)
  app.post('/Folders', FoldersController.create);
  app.put('/Folders', FoldersController.edit)
  app.delete('/Folders', FoldersController.delete)

};