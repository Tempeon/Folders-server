const Folders = require('../models').Folders;

module.exports = {
  create(req, res) {
    return Folders
      .create({
        Name: req.body.Name,
        idParent: req.body.idFolder,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
  showFolders(req, res) {
    return Folders
      .findAll({
        where: {
          idParent: req.body.idFolder
        }
      })
      .then(folders => res.status(201).send(folders))
      .catch(error => res.status(400).send(error))
  },
  edit(req, res) {
    return Folders
      .findOne({
        where:{
          id: req.body.id
        }
      })
      .then(folders => {
        return folders
          .update({
            Name: req.body.Name,
            idParent: req.body.idParent,
          })
          .then(folder => res.status(200).send(folder))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  },
  delete(req, res) {
    return Folders
      .findOne({
        where: {
          id: req.body.id,
        }
      })
      .then(folders => {
        return folders
          .destroy()
          .then(() => res.status(200).send({ message: 'Todo deleted successfully.' }))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  }
};