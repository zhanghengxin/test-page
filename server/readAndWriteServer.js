const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const router = express.Router()
let multer = require('multer');

var upload = multer(); // for parsing multipart/form-data
let fileSys = require('./creat')

let createFile = fileSys.createFile

async function save(name, data){
    await createFile(name, data)
}

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// const indexRouter =
router.post('/createFile', function (req, res) {
    // createFile(req.path, req.data)
    // console.log(req.param('name'), req.param('data'))
    // console.log(req.body)
    // save(req.name, req.data)
    let pathStr = path.join(__dirname, `/docs/${req.body['name']}`)
    save(pathStr, req.body['data'])
    res.send('存储成功')
})
router.post('/createImg',upload.any(), function(req, res){
    // let form = new formidable.IncomingForm();
    // form.parse(req, function(err, fields, files){
    //     console.log(files)
    //     if(err){
    //         res.json({
    //             url: './md.jpg'
    //         })
    //     } else {
    //         res.json({
    //             url: './md.jpg'
    //         })
    //     }
    // })
    console.log('=======',req.files[0].path)
    // let pathStr = path.join(__dirname, `/docs/img/${req.files[0].originalName}`)
    let pathStr = path.join(`/docs/img/${req.files[0].originalName}`)
    fileSys.resetImg( req.files[0].path, pathStr)
    res.json({
        url: pathStr
        // url: `@/../docs/img/${req.files[0].originalName}`
        // url: 'file:/' + pathStr
    })
})

app.use('/', router)

app.listen(3000)
