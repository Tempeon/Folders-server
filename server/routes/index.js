const FoldersController = require('../controllers').Folders;
const NotesController = require('../controllers').Notes;
const TagsContoller = require('../controllers').Tags;
const SearchController = require('../controllers').Search

module.exports = (app) => {

  app.get('/Folders/:idFolder', FoldersController.showFolders);
  app.post('/Folders', FoldersController.create);
  app.put('/Folders', FoldersController.edit);
  app.put('/Folders/editIdParent', FoldersController.moveFolder);
  app.delete('/Folders', FoldersController.delete);


  app.post('/Notes', NotesController.create);
  app.get('/Notes/:idFolder', NotesController.showNotes);
  app.put('/Notes/Edit', NotesController.editNote);
  app.put('/Notes/Rename', NotesController.rename);
  app.put('/Notes/editIdFolder', NotesController.editFolder);
  app.delete('/Notes', NotesController.delete);

  app.post('/Tags', TagsContoller.create);
  app.get('/Tags/:idNote', TagsContoller.list);
  app.delete('/Tags', TagsContoller.delete);

  app.get('/Search/:Name', SearchController.findName)
};