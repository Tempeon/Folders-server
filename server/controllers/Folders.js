const Folders = require('../models').Folders;

module.exports = {
  create(req, res) {
    return Folders
      .create({
        Name: req.body.Name,
      })
      .then(Folder => res.status(201).send(Folder))
      .catch(error => res.status(400).send(error))
  }
}