const express = require('express');
const app = express();
const multer = require('multer');

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) { //cb=callback
            cb(null, __dirname+'/uploads') //destination
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname+".jpg")
        }
    })
});
console.log(__dirname+'/uploads')
app.post('/upload', upload.single("userfile"), (req, res) => {
    res.send("done")
})
app.listen(4000)