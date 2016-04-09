## vtt-to-json [![Build Status](https://travis-ci.org/joegesualdo/vtt-to-json.svg?branch=master)](https://travis-ci.org/joegesualdo/vtt-to-json)
> Convert [WebVTT file](https://developer.mozilla.org/en-US/docs/Web/API/Web_Video_Text_Tracks_Format) to JSON

## Install
```
$ npm install --save vtt-to-json
```

## Usage
```javascript
const vttToJson = require("vtt-to-json")

const fileLocation = __dirname + '/meow.en.vtt';

vttToJson(fileName, function(err, obj){
  console.log(obj)
});
```

## Test
```
$ npm test
```

## API
### `vttToJson(fileLocation, callback)`
> What does this method do?

| Name | Type | Description |
|------|------|-------------|
| fileLocation | `String` | The location of the VTT file you want to convert 
| callback | `function` | Called when the conversion is finished|


```javascript
const vttToJson = require("vtt-to-json")

const fileLocation = __dirname + '/meow.en.vtt';

vttToJson(fileName, function(err, obj){
  console.log(obj)
});
```

## License
MIT © [Joe Gesualdo]()
