const Tags = require('../models').Tags;

module.exports = {
  create(req, res) {
    return Tags
      .create({
        Name: req.body.Name,
        idNote: req.body.idParent,

      })
      .then(todo => res.send(todo))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Tags
      .findAll({
        where: {
          idNote: req.params.idNote,
        }
      })
      .then(tags => res.send(tags))
      .catch (error => res.status(400).send(error))
  },
  delete(req, res) {
    return Tags
      .findOne({
        where: {
          id: req.body.id
        }
      })
      .then(tag => {
        return tag
          .destroy()
          .then(() => res.status(200).send({message: 'note delete successfully', id: req.body.id }))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  }
};