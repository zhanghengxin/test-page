// const path = require("path")
const fs = require("fs")

let create = {}

create.createFile =  function(name, data){
    console.log(name, data)
    return new Promise((resolve,reject)=>{
        fs.writeFile(name, data, (err)=>{
            if(err){
                console.log(err)
                reject(err)
            }
            resolve(console.log('追加内容成功'))
        })
    })
}
create.createImg = function(name, buffer){
    return new Promise((resolve,reject)=>{
        fs.writeFile(name, buffer, (err)=>{
            if(err){
                console.log(err)
                reject(err)
            }
            resolve(console.log('追加内容成功'))
        })
    })
}

create.resetImg = function(oName, nName){
    return new Promise((resolve,reject)=>{
        fs.rename(oName, nName, (err)=>{
            if(err){
                console.log(err)
                reject(err)
            }
            resolve(console.log('追加内容成功'))
        })
    })
}

module.exports = create
