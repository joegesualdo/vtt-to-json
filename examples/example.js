const vttToJson = require("./../index.js")

const fileName = __dirname + '/meow.en.vtt';

vttToJson(fileName, function(err, obj){
  console.log(obj)
});
