const readLine = require('readline');
const fs = require('fs');

const fileName = 'meow.en.vtt';


// function convertSectionArrayToObject(sectionArray){
//   return {
//     id: sectionArray[0],
//     payload: sectionArray.slice(1)
//   }
// }
//
// function convertAllSectionArraysToObject(sectionsArray) {
//   items = []
//   sectionsArray.forEach(function(item, index){
//     if (index === 0) {
//       // This doesn't add the first part (ie. WEBVTT...)
//       return
//     } else {
//       items.push(convertSectionArrayToObject(item))
//     }
//   })
//   return {
//     items: items
//   }
// }
//
// function convertVttToJson(vttString, callback) {
//   var currentSectionArray = []
//   var allSectionsArray = []
//
//  vttString.split('\n').forEach((line) => {
//     if (line == " "){
//       currentSectionArray.push(line)
//     } else if (line == ""){
//       allSectionsArray.push(currentSectionArray)
//       currentSectionArray = []
//     } else {
//       currentSectionArray.push(line)
//     }
//   })
//   // Since when we close the file, we still have the last section in the current variable, we add and empty it here
//   allSectionsArray.push(currentSectionArray)
//   currentSectionArray = []
//
//   callback(null, convertAllSectionArraysToObject(allSectionsArray))
// }




function convertVttToJson(vttString) {
  return new Promise((resolve, reject) => {
  var current = {}
  var sections = []
  var start = false;
   vttString.split('\n').forEach((line) => {
    // console.log(line)
    if (line === " "){
      // current.push(line)
    } else if (line == "") {
    } else if (line.indexOf('-->') !== -1) {
      start = true;
      if (current.start) {
        sections.push(current)
      }
      // console.log(line.split("-->"))
      current = {
        start: line.split("-->")[0].trimRight().split(" ").pop(),
        end: line.split("-->")[1].trimLeft().split(" ").shift(),
        part: ''
      }
    // } else if (line == ""){
      // not auto
      // current.shift();
      // sections = sections.concat(current)
      // for auto
      // console.log(current)
      // sections.push(current[current.length - 1])
      // current = []
    } else if (line.replace(/<\/?[^>]+(>|$)/g, "") === ""){
    } else if (line.replace(/<\/?[^>]+(>|$)/g, "") === " "){
    } else {
      if (start){
        if (sections.length === 0) {
          sections.push(current)
        } else {
          if (sections[sections.length - 1].part.replace(/<\/?[^>]+(>|$)/g, "") === line.replace(/<\/?[^>]+(>|$)/g, "")) {
            // duplicate: don't do anything
            // console.log('dups')
          } else {
            current.part = line
            // sections.push(lne)
          }
        }
      }
      // console.log(line.replace(/<\/?[^>]+(>|$)/g, ""));
      // cleanText = results[0].replace(/<\/?[^>]+(>|$)/g, "");
    }
  })
  // console.log(sections)
    // console.log(current)
  // console.log(sections)
  // Since when we close the file, we still have the last section in the current variable, we add and empty it here
  // sections.push(current[current.length - 1])
  current = []

  var regex = /(<([0-9:.>]+)>)/ig
  // console.log(sections)
  sections.forEach(section => {
    // console.log(sections)
    // strs = section.part.join(" ").split()
    strs = section.part.split()
    // console.log(strs)
    // console.log(strs[strs.length - 5])
    var results = strs.map(function(s){
        return s.replace(regex, function(n){
          return n.split('').reduce(function(s,i){ return `==${n.replace("<", "").replace(">", "")}` }, 0)
        })
    });
    // console.log(results)
    cleanText = results[0].replace(/<\/?[^>]+(>|$)/g, "");
    cleanArray = cleanText.split(" ")
    // resultsObj = {}
    resultsArray = [];
    // console.log(cleanArray)
    // console.log(cleanArray)
    cleanArray.forEach(function(item){
      if (item.indexOf('==') > -1) {
        var pair = item.split("==")
        var key = pair[0]
        var value = pair[1]
        if(key == "" || key == "##") {
          return;
        }
        // console.log(item)
        resultsArray.push({
          word: item.split("==")[0],
          time: item.split("==")[1],
        })
        // resultsObj[item.split("==")[0]] = item.split("==")[1]
      } else {
        // console.log(item)
        resultsArray.push({
          word: item,
          time: undefined,
        })
        // resultsObj[item] = undefined
        // console.log(resultsObj)
      }
    })
    section.words = resultsArray;
  })
  // console.log(sections[sections.length - 2])
  // console.log(sections[sections.length - 3])
  // console.log(sections.join(" ").split(regex))
    resolve(sections);
  })
}

module.exports = convertVttToJson;
