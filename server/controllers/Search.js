const Folders = require('../models').Folders;
const Notes = require('../models').Notes;
const Tags = require('../models').Tags;

module.exports = {
  findName(req, res) {
    const findFolder = Folders.findAndCountAll({
      where: {
        Name: {
          $iLike: `%${req.params.Name}%`,
        }
      },
      order: [
        ['createdAt', 'DESC']
      ],
      row: true
    });

    const findNote = Notes.findAndCountAll({
      where: {
        Name: {
          $iLike: `%${req.params.Name}%`,
        }
      },
      order: [
        ['createdAt', 'DESC']
      ],
      row: true
    });
    Promise.all([findFolder, findNote]).then(([findFolder, findNote]) => {
      return{
        folder: findFolder,
        file: findNote,
      }
    }).then(rezult  => res.send(rezult))
  }
};