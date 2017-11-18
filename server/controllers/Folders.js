const Folders = require('../models').Folders;
const Notes = require('../models').Notes;

module.exports = {
  create(req, res) {
    return Folders
      .create({
        Name: req.body.Name,
        idParent: req.body.idParent || null,
      })
      .then(todo => res.send(todo))
      .catch(error => res.status(400).send(error));
  },

  showFolders(req, res) {
  /*  const findFolder = Folders.findAll({
      where: {
        idParent: req.params.idFolder
      }
    })
    const countFolder = findFolder.map(val => {
      return Folders.findAll({
        where: {
          idParent: val.id
        }
      }).then(con => ({id: val.id, Name: val.Name, ColChield: con.length}));
    })
    Promise.all([findFolder, countFolder]).then(([findFolder, countFolder]) => {
      //return findFolder.map(value => {...value})

      return {
        Folders: findFolder,
        Count: countFolder,
      }
    }).then(prom => res.send(prom))
  },
*/
    return Folders

      .findAll({
        where: {
          idParent: req.params.idFolder === 'undefined' ? null : req.params.idFolder
        }
      })
      /*.findAll({
        include: [{
          model: Folders,
          as: 'idParent',
        }],
      })*/
      .then(folders => res.status(201).send(folders))
      .catch(error => res.status(400).send(error))
  },
  edit(req, res) {
      console.log(req.body)
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
          })/*, {
          where:
        })*/
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
          .then(() => res.status(200).send({ message: 'Folder deleted successfully.', id: req.body.id }))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  },
  moveFolder(req, res) {
      console.log(req.params)
    return Folders
        .findOne({
            where:{
                id: req.body.id
            }
        })
        .then(folders => {

            return folders
                .update({
                    idParent: req.body.idParent,
                })
                .then(folder => res.status(200).send(folder))
                .catch(error => res.status(400).send(error))
        })
        .catch(error => res.status(400).send(error))
  },
};