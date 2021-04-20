const multer = require('multer')

let storage = multer.diskStorage({
   filename: (req, file, cb) => {
      let name = Date.now() + '-' + file.originalname
      cb(null, name)
   },
   destination: (req, file, cb) => {
      let path = './public/uploads'
      cb(null, path)
   }
})

let upload = multer({ storage })
module.exports = upload