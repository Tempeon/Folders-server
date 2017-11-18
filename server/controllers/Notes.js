const Notes = require('../models').Notes;

module.exports = {
  create(req, res) {
    return Notes
      .create({
        Name: req.body.Name,
        Content: '',
        idFolder: req.body.idFolder,
      })
      .then(note => res.status(201).send(note))
      .catch(error => res.status(400).send(error))
  },
  showNotes(req, res) {
    return Notes
      .findAll({
        where: {
          idFolder: req.params.idFolder
        }
      })
      .then(notesList => res.status(201).send(notesList))
      .catch(error => res.status(400).send(req.params.idFolder))
  },
  rename(req, res) {
    return Notes
      .findOne({
        where: {
          id: req.body.id
        }
      })
      .then(Note => {
        return Note
          .update({
            Name: req.body.Name
          })
          .then(note => res.send(note))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  },
  editNote(req, res) {
    return Notes
      .findOne({
        where: {
          id: req.body.id
        }
      })
      .then(Note => {
        return Note
          .update({
            Name: req.body.Name,
            Content: req.body.Content || 'null',
          })
          .then(note => res.status(200).send(note))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  },
  delete(req, res) {
    return Notes
      .findOne({
        where: {
          id: req.body.id
        }
      })
      .then(note => {
        return note
          .destroy()
          .then(() => res.status(200).send({message: 'note delete successfully', id: req.body.id }))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error));
  },
    editFolder(req, res) {
      return Notes
        .findOne({
          where: {
            id: req.body.id
          }
        })
      .then(Note => {
        return Note
          .update({
            idFolder: req.body.idFolder
          })
          .then(note => res.status(200).send(note))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
    }
};