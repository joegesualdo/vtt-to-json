## vtt-to-json [![Build Status](https://travis-ci.org/joegesualdo/vtt-to-json.svg?branch=master)](https://travis-ci.org/joegesualdo/vtt-to-json)
> Convert [WebVTT file](https://developer.mozilla.org/en-US/docs/Web/API/Web_Video_Text_Tracks_Format) to JSON

## Install
```
$ npm install --save vtt-to-json
```

## Usage
```javascript
const vttToJson = require("vtt-to-json")

let vttString = '...';

vttToJson(vttString)
.then((result) => {
  console.log(result)
});
```

## Test
```
$ npm test
```

## API
### `vttToJson(vttString)`
> What does this method do?

| Name | Type | Description |
|------|------|-------------|
| vttString| `String` | A string representing the vtt you want to convert. 

returns `Promise` that passed the vtt json value.

```javascript
const vttToJson = require("vtt-to-json")

let vttString = '...';

vttToJson(vttString)
.then((result) => {
  console.log(result)
});
```

## License
MIT © [Joe Gesualdo]()
