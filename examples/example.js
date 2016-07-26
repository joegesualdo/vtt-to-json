const vttToJson = require("./../index.js")

// const fileName = __dirname + '/meow.en.vtt';
let vttString =`WEBVTT
Kind: captions
Language: en
Style:
::cue(c.colorCCCCCC) { color: rgb(204,204,204);
 }
::cue(c.colorE5E5E5) { color: rgb(229,229,229);
 }
##

00:00:00.000 --> 00:00:06.600 align:start position:0%

here<00:00:04.980><c> we</c><00:00:05.190><c> have</c><c.colorCCCCCC><00:00:05.400><c> Alex</c></c><00:00:06.060><c> on</c><00:00:06.270><c> media</c><c.colorE5E5E5><00:00:06.600><c> row</c></c>

00:00:06.600 --> 00:00:06.899 align:start position:0%
here we have<c.colorCCCCCC> Alex</c> on media<c.colorE5E5E5> row
 </c>

00:00:06.899 --> 00:00:09.000 align:start position:0%
here we have<c.colorCCCCCC> Alex</c> on media<c.colorE5E5E5> row</c>
at<00:00:07.109><c> the</c><c.colorE5E5E5><00:00:07.170><c> RNC</c></c><c.colorCCCCCC><00:00:07.589><c> Alex</c></c><00:00:08.490><c> reaches</c><00:00:09.000><c> the</c>

00:00:09.000 --> 00:00:09.120 align:start position:0%
at the<c.colorE5E5E5> RNC</c><c.colorCCCCCC> Alex</c> reaches the


00:00:09.120 --> 00:00:10.980 align:start position:0%
at the<c.colorE5E5E5> RNC</c><c.colorCCCCCC> Alex</c> reaches the
<c.colorCCCCCC>young<00:00:09.389><c> turks</c><00:00:09.630><c> you</c><00:00:10.050><c> to</c><00:00:10.260><c> booth</c></c><c.colorE5E5E5><00:00:10.679><c> and</c></c><00:00:10.980><c> is</c>

00:00:10.980 --> 00:00:11.070 align:start position:0%
<c.colorCCCCCC>young turks you to booth</c><c.colorE5E5E5> and</c> is


00:00:11.070 --> 00:00:12.570 align:start position:0%
<c.colorCCCCCC>young turks you to booth</c><c.colorE5E5E5> and</c> is
instantly<00:00:11.580><c> met</c><00:00:11.910><c> by</c><00:00:12.150><c> a</c><00:00:12.179><c> group</c><00:00:12.570><c> of</c>`

// let vttString = `WEBVTT
// Kind: captions
// Language: en
//
// 00:00:00.867 --> 00:00:02.936
// Mr. Earnest: Good
// afternoon, everybody.
//
// 00:00:02.936 --> 00:00:05.405
// It's nice to
// see all of you.
//
// 00:00:05.405 --> 00:00:07.006
// For those of you who are
// paying close attention
//
// 00:00:07.006 --> 00:00:08.341
// to my personal schedule
// today, you know that
//
// 00:00:08.341 --> 00:00:11.044
// I went and appeared at
// a forum with the Center
//
// 00:00:11.044 --> 00:00:14.914
// of American Progress to
// talk about men and fathers
//
// 00:00:14.914 --> 00:00:17.484
// and work-life
// family balance.
//
// 00:00:17.484 --> 00:00:19.486
// I'm much less nervous
// sitting here talking
//
// 00:00:19.486 --> 00:00:21.488
// to you about a range of
// foreign policy issues,
//
// 00:00:21.488 --> 00:00:23.623
// and even some domestic
// ones, than I am talking
//
// 00:00:23.623 --> 00:00:25.792
// about my personal
// life with my wife
//
// 00:00:25.792 --> 00:00:27.293
// and child in
// the front row.
//
// 00:00:27.293 --> 00:00:29.629
// So for one day I can at
// least walk in here and
//
// 00:00:29.629 --> 00:00:30.964
// say I'm relieved to
// see all of you.`
//
vttToJson(vttString)
.then(sections => {
  console.log(sections)
});
