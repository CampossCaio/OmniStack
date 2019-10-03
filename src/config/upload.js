const multer = require('multer');
const path =  require('path');

//exportando um moodulo para fazer upload.
module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..','..', 'uploads'),
        filename: (rec, file, callback) => {
        const ext = path.extname(file.originalname);
        const name = path.basename(file.originalname, ext);
            callback(null, `${name}-${Date.now()}${path.extname(ext)}`);
        },
    }),
};