function convertVttToJson(vttString) {
  return new Promise((resolve, reject) => {
  var current = {}
  var sections = []
  var start = false;
   vttString.split('\n').forEach((line) => {
    if (line.replace(/<\/?[^>]+(>|$)/g, "") === " "){
    } else if (line.replace(/<\/?[^>]+(>|$)/g, "") == "") {
    } else if (line.indexOf('-->') !== -1) {
      start = true;
      // if (current.start) {
      //   sections.push(current)
      // }
      current = {
        start: timeString2ms(line.split("-->")[0].trimRight().split(" ").pop()),
        end: timeString2ms(line.split("-->")[1].trimLeft().split(" ").shift()),
        part: ''
      }
    } else if (line.replace(/<\/?[^>]+(>|$)/g, "") === ""){
    } else if (line.replace(/<\/?[^>]+(>|$)/g, "") === " "){
    } else {
      if (start){
        if (sections.length !== 0) {
          if (sections[sections.length - 1].part.replace(/<\/?[^>]+(>|$)/g, "") === line.replace(/<\/?[^>]+(>|$)/g, "")) {
            console.log('no match')
          } else {
            current.part = line
            sections.push(current)
            current = {
            }
          }
        } else {
          current.part = line
          sections.push(current)
          current = {
          }
        }
      }
    }
  })

  current = []

  var regex = /(<([0-9:.>]+)>)/ig
  sections.forEach(section => {
    strs = section.part.split()
    var results = strs.map(function(s){
        return s.replace(regex, function(n){
          return n.split('').reduce(function(s,i){ return `==${n.replace("<", "").replace(">", "")}` }, 0)
        })
    });
    cleanText = results[0].replace(/<\/?[^>]+(>|$)/g, "");
    cleanArray = cleanText.split(" ")
    resultsArray = [];
    cleanArray.forEach(function(item){
      if (item.indexOf('==') > -1) {
        var pair = item.split("==")
        var key = pair[0]
        var value = pair[1]
        if(key == "" || key == "##") {
          return;
        }
        resultsArray.push({
          word: cleanWord(item.split("==")[0]),
          time: timeString2ms(item.split("==")[1]),
        })
      } else {
        resultsArray.push({
          word: cleanWord(item),
          time: undefined,
        })
      }
    })
    section.words = resultsArray;
    section.part = section.part.replace(/<\/?[^>]+(>|$)/g, "")
  })
    resolve(sections);
  })
}

// helpers
//   http://codereview.stackexchange.com/questions/45335/milliseconds-to-time-string-time-string-to-milliseconds
function timeString2ms(a,b){// time(HH:MM:SS.mss) // optimized
 return a=a.split('.'), // optimized
  b=a[1]*1||0, // optimized
  a=a[0].split(':'),
  b+(a[2]?a[0]*3600+a[1]*60+a[2]*1:a[1]?a[0]*60+a[1]*1:a[0]*1)*1e3 // optimized
}

// removes everything but characters and apostrophe and dash
function cleanWord(word) {
  return word.replace(/[^0-9a-z'-]/gi, '')
}


module.exports = convertVttToJson;
