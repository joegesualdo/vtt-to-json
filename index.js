const readLine = require('readline');
const fs = require('fs');

const fileName = 'meow.en.vtt';

function convertSectionArrayToObject(sectionArray){
  return {
    id: sectionArray[0],
    payload: sectionArray.slice(1)
  }
}

function convertAllSectionArraysToObject(sectionsArray) {
  items = []
  sectionsArray.forEach(function(item, index){
    if (index === 0) {
      // This doesn't add the first part (ie. WEBVTT...)
      return
    } else {
      items.push(convertSectionArrayToObject(item))
    }
  })
  return {
    items: items
  }
}

function convertVttToJson(fileName, callback) {
  var currentSectionArray = []
  var allSectionsArray = []

  var lineReader = readLine.createInterface({
    input: fs.createReadStream(fileName)
  });

  lineReader.on('line', function (line) {
    if (line == " "){
      currentSectionArray.push(line)
    } else if (line == ""){
      allSectionsArray.push(currentSectionArray)
      currentSectionArray = []
    } else {
      currentSectionArray.push(line)
    }
  })
  lineReader.on('close', function (line) {
    // Since when we close the file, we still have the last section in the current variable, we add and empty it here
    allSectionsArray.push(currentSectionArray)
    currentSectionArray = []

    callback(null, convertAllSectionArraysToObject(allSectionsArray))
  })
}

module.exports = convertVttToJson;
