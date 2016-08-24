const vttToJson = require("./../index.js")

// const fileName = __dirname + '/meow.en.vtt';
// let s=`WEBVTT
// Kind: captions
// Language: en
// Style:
// ::cue(c.colorCCCCCC) { color: rgb(204,204,204);
//  }
// ::cue(c.colorE5E5E5) { color: rgb(229,229,229);
//  }
// ##
//
// 00:00:00.000 --> 00:00:06.600 align:start position:0%
//
// here<00:00:04.980><c> we</c><00:00:05.190><c> have</c><c.colorCCCCCC><00:00:05.400><c> Alex</c></c><00:00:06.060><c> on</c><00:00:06.270><c> media</c><c.colorE5E5E5><00:00:06.600><c> row</c></c>
//
// 00:00:06.600 --> 00:00:06.899 align:start position:0%
// here we have<c.colorCCCCCC> Alex</c> on media<c.colorE5E5E5> row
//  </c>
//
// 00:00:06.899 --> 00:00:09.000 align:start position:0%
// here we have<c.colorCCCCCC> Alex</c> on media<c.colorE5E5E5> row</c>
// at<00:00:07.109><c> the</c><c.colorE5E5E5><00:00:07.170><c> RNC</c></c><c.colorCCCCCC><00:00:07.589><c> Alex</c></c><00:00:08.490><c> reaches</c><00:00:09.000><c> the</c>
//
// 00:00:09.000 --> 00:00:09.120 align:start position:0%
// at the<c.colorE5E5E5> RNC</c><c.colorCCCCCC> Alex</c> reaches the
//
//
// 00:00:09.120 --> 00:00:10.980 align:start position:0%
// at the<c.colorE5E5E5> RNC</c><c.colorCCCCCC> Alex</c> reaches the
// <c.colorCCCCCC>young<00:00:09.389><c> turks</c><00:00:09.630><c> you</c><00:00:10.050><c> to</c><00:00:10.260><c> booth</c></c><c.colorE5E5E5><00:00:10.679><c> and</c></c><00:00:10.980><c> is</c>
//
// 00:00:10.980 --> 00:00:11.070 align:start position:0%
// <c.colorCCCCCC>young turks you to booth</c><c.colorE5E5E5> and</c> is
//
//
// 00:00:11.070 --> 00:00:12.570 align:start position:0%
// <c.colorCCCCCC>young turks you to booth</c><c.colorE5E5E5> and</c> is
// instantly<00:00:11.580><c> met</c><00:00:11.910><c> by</c><00:00:12.150><c> a</c><00:00:12.179><c> group</c><00:00:12.570><c> of</c>`

let vttString = `WEBVTT
Kind: captions
Language: en
Style:
::cue(c.colorCCCCCC) { color: rgb(204,204,204);
 }
::cue(c.colorE5E5E5) { color: rgb(229,229,229);
 }
##

00:00:00.000 --> 00:00:00.950 align:start position:0%
 
in<00:00:00.329><c> the</c><00:00:00.390><c> wake</c><00:00:00.659><c> of</c><00:00:00.719><c> the</c><c.colorCCCCCC><00:00:00.870><c> Orlando</c></c>

00:00:00.950 --> 00:00:01.350 align:start position:0%
in the wake of the<c.colorCCCCCC> Orlando
 </c>

00:00:01.350 --> 00:00:02.669 align:start position:0%
in the wake of the<c.colorCCCCCC> Orlando
massacre<00:00:01.770><c> Democrats</c></c><00:00:02.220><c> have</c><00:00:02.340><c> gone</c><c.colorE5E5E5><00:00:02.669><c> on</c></c>

00:00:02.669 --> 00:00:02.760 align:start position:0%
<c.colorCCCCCC>massacre Democrats</c> have gone<c.colorE5E5E5> on
 </c>

00:00:02.760 --> 00:00:04.049 align:start position:0%
<c.colorCCCCCC>massacre Democrats</c> have gone<c.colorE5E5E5> on</c>
office<00:00:03.240><c> in</c><00:00:03.419><c> their</c><00:00:03.540><c> efforts</c><00:00:04.049><c> to</c>

00:00:04.049 --> 00:00:04.080 align:start position:0%
office in their efforts to
 

00:00:04.080 --> 00:00:05.660 align:start position:0%
office in their efforts to
address<00:00:04.350><c> gun</c><00:00:05.009><c> violence</c><c.colorCCCCCC><00:00:05.339><c> Senator</c></c>

00:00:05.660 --> 00:00:06.060 align:start position:0%
address gun violence<c.colorCCCCCC> Senator
 </c>

00:00:06.060 --> 00:00:07.770 align:start position:0%
address gun violence<c.colorCCCCCC> Senator</c>
<c.colorE5E5E5>Chris<00:00:06.270><c> Murphy</c></c><00:00:06.509><c> is</c><00:00:06.750><c> nearly</c><c.colorCCCCCC><00:00:06.990><c> 15</c></c><00:00:07.770><c> hour</c>

00:00:07.770 --> 00:00:07.980 align:start position:0%
<c.colorE5E5E5>Chris Murphy</c> is nearly<c.colorCCCCCC> 15</c> hour
 

00:00:07.980 --> 00:00:09.409 align:start position:0%
<c.colorE5E5E5>Chris Murphy</c> is nearly<c.colorCCCCCC> 15</c> hour
filibuster<00:00:08.309><c> last</c><00:00:08.970><c> week</c><c.colorE5E5E5><00:00:09.240><c> prompting</c></c>

00:00:09.409 --> 00:00:09.809 align:start position:0%
filibuster last week<c.colorE5E5E5> prompting
 </c>

00:00:09.809 --> 00:00:10.950 align:start position:0%
filibuster last week<c.colorE5E5E5> prompting</c>
<c.colorCCCCCC>Republicans</c><00:00:10.349><c> to</c><c.colorCCCCCC><00:00:10.500><c> greet</c><00:00:10.800><c> all</c><00:00:10.950><c> votes</c></c>

00:00:10.950 --> 00:00:11.309 align:start position:0%
<c.colorCCCCCC>Republicans</c> to<c.colorCCCCCC> greet all votes
 </c>

00:00:11.309 --> 00:00:12.739 align:start position:0%
<c.colorCCCCCC>Republicans</c> to<c.colorCCCCCC> greet all votes</c>
on<c.colorCCCCCC><00:00:11.460><c> two</c><00:00:11.759><c> Democratic</c></c><00:00:12.599><c> proposals</c>

00:00:12.739 --> 00:00:13.139 align:start position:0%
on<c.colorCCCCCC> two Democratic</c> proposals
 

00:00:13.139 --> 00:00:14.549 align:start position:0%
on<c.colorCCCCCC> two Democratic</c> proposals
those<c.colorCCCCCC><00:00:13.769><c> promise</c></c><00:00:14.190><c> votes</c><00:00:14.460><c> came</c><00:00:14.549><c> today</c>

00:00:14.549 --> 00:00:14.730 align:start position:0%
those<c.colorCCCCCC> promise</c> votes came today
 

00:00:14.730 --> 00:00:15.750 align:start position:0%
those<c.colorCCCCCC> promise</c> votes came today
with<00:00:15.059><c> the</c><00:00:15.150><c> Senate</c><00:00:15.389><c> voting</c><00:00:15.660><c> on</c><00:00:15.750><c> a</c>

00:00:15.750 --> 00:00:15.809 align:start position:0%
with the Senate voting on a
 

00:00:15.809 --> 00:00:17.100 align:start position:0%
with the Senate voting on a
total<00:00:16.139><c> of</c><00:00:16.289><c> four</c><c.colorE5E5E5><00:00:16.590><c> gun</c></c><00:00:17.100><c> measures</c>

00:00:17.100 --> 00:00:17.279 align:start position:0%
total of four<c.colorE5E5E5> gun</c> measures
 

00:00:17.279 --> 00:00:19.199 align:start position:0%
total of four<c.colorE5E5E5> gun</c> measures
including<c.colorCCCCCC><00:00:18.029><c> Murphy's</c></c><00:00:18.690><c> proposal</c><00:00:19.199><c> with</c>

00:00:19.199 --> 00:00:19.380 align:start position:0%
including<c.colorCCCCCC> Murphy's</c> proposal with
 

00:00:19.380 --> 00:00:20.250 align:start position:0%
including<c.colorCCCCCC> Murphy's</c> proposal with
<c.colorCCCCCC>centers<00:00:19.680><c> cory</c><00:00:19.920><c> booker</c><00:00:20.250><c> Chuck</c></c>

00:00:20.250 --> 00:00:20.460 align:start position:0%
<c.colorCCCCCC>centers cory booker Chuck
 </c>

00:00:20.460 --> 00:00:21.980 align:start position:0%
<c.colorCCCCCC>centers cory booker Chuck
Schumer</c><00:00:20.760><c> to</c><00:00:21.119><c> expand</c><00:00:21.810><c> the</c><00:00:21.869><c> background</c>

00:00:21.980 --> 00:00:22.380 align:start position:0%
<c.colorCCCCCC>Schumer</c> to expand the background
 

00:00:22.380 --> 00:00:24.029 align:start position:0%
<c.colorCCCCCC>Schumer</c> to expand the background
check<00:00:22.619><c> system</c><00:00:22.769><c> to</c><00:00:23.220><c> include</c><00:00:23.580><c> sales</c><00:00:24.029><c> at</c>

00:00:24.029 --> 00:00:24.269 align:start position:0%
check system to include sales at
 

00:00:24.269 --> 00:00:25.789 align:start position:0%
check system to include sales at
gun<00:00:24.420><c> shows</c><00:00:24.869><c> and</c><00:00:25.320><c> also</c><00:00:25.769><c> between</c>

00:00:25.789 --> 00:00:26.189 align:start position:0%
gun shows and also between
 

00:00:26.189 --> 00:00:27.840 align:start position:0%
gun shows and also between
people<00:00:26.760><c> making</c><00:00:27.240><c> contact</c><c.colorCCCCCC><00:00:27.750><c> or</c><00:00:27.840><c> the</c></c>

00:00:27.840 --> 00:00:27.960 align:start position:0%
people making contact<c.colorCCCCCC> or the
 </c>

00:00:27.960 --> 00:00:29.400 align:start position:0%
people making contact<c.colorCCCCCC> or the</c>
internet<c.colorCCCCCC><00:00:28.109><c> and</c></c><00:00:28.949><c> a</c><00:00:29.010><c> proposal</c><00:00:29.400><c> from</c>

00:00:29.400 --> 00:00:29.550 align:start position:0%
internet<c.colorCCCCCC> and</c> a proposal from
 

00:00:29.550 --> 00:00:30.980 align:start position:0%
internet<c.colorCCCCCC> and</c> a proposal from
<c.colorCCCCCC>Senator<00:00:29.939><c> Dianne</c><00:00:30.210><c> Feinstein's</c></c><c.colorE5E5E5><00:00:30.810><c> to</c></c>

00:00:30.980 --> 00:00:31.380 align:start position:0%
<c.colorCCCCCC>Senator Dianne Feinstein's</c><c.colorE5E5E5> to
 </c>

00:00:31.380 --> 00:00:32.969 align:start position:0%
<c.colorCCCCCC>Senator Dianne Feinstein's</c><c.colorE5E5E5> to</c>
prevent<00:00:31.800><c> any</c><00:00:31.890><c> individual</c><00:00:32.730><c> on</c><00:00:32.969><c> a</c>

00:00:32.969 --> 00:00:33.090 align:start position:0%
prevent any individual on a
 

00:00:33.090 --> 00:00:34.320 align:start position:0%
prevent any individual on a
terror<00:00:33.450><c> watch</c><00:00:33.780><c> list</c><00:00:34.110><c> from</c><00:00:34.230><c> buying</c><00:00:34.320><c> a</c>

00:00:34.320 --> 00:00:34.590 align:start position:0%
terror watch list from buying a
 

00:00:34.590 --> 00:00:36.360 align:start position:0%
terror watch list from buying a
gun<c.colorCCCCCC><00:00:34.680><c> now</c><00:00:35.760><c> backed</c></c><00:00:36.149><c> by</c><00:00:36.239><c> the</c><c.colorCCCCCC><00:00:36.360><c> NRA</c></c>

00:00:36.360 --> 00:00:36.690 align:start position:0%
gun<c.colorCCCCCC> now backed</c> by the<c.colorCCCCCC> NRA
 </c>

00:00:36.690 --> 00:00:37.890 align:start position:0%
gun<c.colorCCCCCC> now backed</c> by the<c.colorCCCCCC> NRA
Republicans</c><00:00:37.380><c> counter</c><00:00:37.649><c> program</c><00:00:37.890><c> with</c>

00:00:37.890 --> 00:00:38.190 align:start position:0%
<c.colorCCCCCC>Republicans</c> counter program with
 

00:00:38.190 --> 00:00:39.510 align:start position:0%
<c.colorCCCCCC>Republicans</c> counter program with
to<00:00:38.370><c> measure</c><00:00:38.610><c> their</c><00:00:38.700><c> own</c><c.colorCCCCCC><00:00:38.969><c> both</c></c><00:00:39.510><c> of</c>

00:00:39.510 --> 00:00:39.629 align:start position:0%
to measure their own<c.colorCCCCCC> both</c> of
 

00:00:39.629 --> 00:00:40.400 align:start position:0%
to measure their own<c.colorCCCCCC> both</c> of
which<00:00:39.840><c> were</c><00:00:39.960><c> deemed</c><00:00:40.230><c> insufficient</c>

00:00:40.400 --> 00:00:40.800 align:start position:0%
which were deemed insufficient
 

00:00:40.800 --> 00:00:41.730 align:start position:0%
which were deemed insufficient
by<c.colorCCCCCC><00:00:40.860><c> Democrats</c></c><c.colorE5E5E5><00:00:41.430><c> so</c></c><00:00:41.489><c> they</c><00:00:41.610><c> gave</c><00:00:41.730><c> the</c>

00:00:41.730 --> 00:00:41.879 align:start position:0%
by<c.colorCCCCCC> Democrats</c><c.colorE5E5E5> so</c> they gave the
 

00:00:41.879 --> 00:00:44.030 align:start position:0%
by<c.colorCCCCCC> Democrats</c><c.colorE5E5E5> so</c> they gave the
GOP<00:00:42.239><c> caucus</c><c.colorE5E5E5><00:00:42.510><c> something</c></c><00:00:43.290><c> to</c><00:00:43.440><c> vote</c><00:00:43.680><c> for</c>

00:00:44.030 --> 00:00:44.430 align:start position:0%
GOP caucus<c.colorE5E5E5> something</c> to vote for
 

00:00:44.430 --> 00:00:45.510 align:start position:0%
GOP caucus<c.colorE5E5E5> something</c> to vote for
as<00:00:44.579><c> opposed</c><00:00:44.940><c> to</c><00:00:44.969><c> only</c><00:00:45.149><c> things</c><00:00:45.510><c> about</c>

00:00:45.510 --> 00:00:45.690 align:start position:0%
as opposed to only things about
 

00:00:45.690 --> 00:00:47.010 align:start position:0%
as opposed to only things about
against<c.colorCCCCCC><00:00:46.110><c> in</c><00:00:46.200><c> a</c></c><00:00:46.230><c> repeat</c><00:00:46.710><c> of</c><00:00:47.010><c> previous</c>

00:00:47.010 --> 00:00:47.280 align:start position:0%
against<c.colorCCCCCC> in a</c> repeat of previous
 

00:00:47.280 --> 00:00:48.690 align:start position:0%
against<c.colorCCCCCC> in a</c> repeat of previous
attempts<00:00:47.850><c> to</c><c.colorE5E5E5><00:00:47.910><c> passing</c></c><00:00:48.300><c> laws</c><00:00:48.420><c> in</c><00:00:48.690><c> the</c>

00:00:48.690 --> 00:00:48.750 align:start position:0%
attempts to<c.colorE5E5E5> passing</c> laws in the
 

00:00:48.750 --> 00:00:50.100 align:start position:0%
attempts to<c.colorE5E5E5> passing</c> laws in the
wake<00:00:48.930><c> of</c><00:00:48.960><c> mass</c><00:00:49.170><c> shootings</c><c.colorE5E5E5><00:00:49.559><c> all</c><00:00:50.100><c> four</c></c>

00:00:50.100 --> 00:00:50.309 align:start position:0%
wake of mass shootings<c.colorE5E5E5> all four
 </c>

00:00:50.309 --> 00:00:51.239 align:start position:0%
wake of mass shootings<c.colorE5E5E5> all four</c>
measures<c.colorCCCCCC><00:00:50.670><c> fail</c><00:00:50.879><c> to</c></c><00:00:51.149><c> meet</c><c.colorE5E5E5><00:00:51.239><c> the</c></c>

00:00:51.239 --> 00:00:51.360 align:start position:0%
measures<c.colorCCCCCC> fail to</c> meet<c.colorE5E5E5> the
 </c>

00:00:51.360 --> 00:00:52.440 align:start position:0%
measures<c.colorCCCCCC> fail to</c> meet<c.colorE5E5E5> the</c>
60-vote<00:00:51.780><c> threshold</c><c.colorCCCCCC><00:00:51.989><c> needed</c></c><c.colorE5E5E5><00:00:52.440><c> for</c></c>

00:00:52.440 --> 00:00:52.649 align:start position:0%
60-vote threshold<c.colorCCCCCC> needed</c><c.colorE5E5E5> for
 </c>

00:00:52.649 --> 00:00:54.589 align:start position:0%
60-vote threshold<c.colorCCCCCC> needed</c><c.colorE5E5E5> for</c>
passage<c.colorCCCCCC><00:00:52.829><c> Democrats</c></c><c.colorE5E5E5><00:00:54.000><c> were</c></c><00:00:54.090><c> outraged</c>

00:00:54.589 --> 00:00:54.989 align:start position:0%
passage<c.colorCCCCCC> Democrats</c><c.colorE5E5E5> were</c> outraged
 

00:00:54.989 --> 00:00:55.620 align:start position:0%
passage<c.colorCCCCCC> Democrats</c><c.colorE5E5E5> were</c> outraged
<c.colorCCCCCC>Murphy</c><00:00:55.289><c> telling</c><00:00:55.530><c> the</c><00:00:55.620><c> Washington</c>

00:00:55.620 --> 00:00:55.710 align:start position:0%
<c.colorCCCCCC>Murphy</c> telling the Washington
 

00:00:55.710 --> 00:00:57.180 align:start position:0%
<c.colorCCCCCC>Murphy</c> telling the Washington
Post<c.colorCCCCCC><00:00:56.160><c> Republicans</c></c><00:00:56.670><c> have</c><00:00:56.760><c> decided</c><00:00:57.180><c> to</c>

00:00:57.180 --> 00:00:57.239 align:start position:0%
Post<c.colorCCCCCC> Republicans</c> have decided to
 

00:00:57.239 --> 00:00:58.909 align:start position:0%
Post<c.colorCCCCCC> Republicans</c> have decided to
sell<00:00:57.600><c> weapons</c><00:00:57.870><c> to</c><c.colorCCCCCC><00:00:58.140><c> Isis</c></c><00:00:58.680><c> and</c>

00:00:58.909 --> 00:00:59.309 align:start position:0%
sell weapons to<c.colorCCCCCC> Isis</c> and
 

00:00:59.309 --> 00:01:00.300 align:start position:0%
sell weapons to<c.colorCCCCCC> Isis</c> and
<c.colorE5E5E5>democratic<00:00:59.760><c> senate</c></c><00:01:00.059><c> leader</c><00:01:00.300><c> harry</c>

00:01:00.300 --> 00:01:00.570 align:start position:0%
<c.colorE5E5E5>democratic senate</c> leader harry
 

00:01:00.570 --> 00:01:01.429 align:start position:0%
<c.colorE5E5E5>democratic senate</c> leader harry
reid<00:01:00.690><c> saying</c><00:01:01.109><c> Republicans</c><00:01:01.350><c> should</c>

00:01:01.429 --> 00:01:01.829 align:start position:0%
reid saying Republicans should
 

00:01:01.829 --> 00:01:03.470 align:start position:0%
reid saying Republicans should
be<00:01:02.010><c> embarrassed</c><00:01:02.399><c> by</c><00:01:02.760><c> their</c><00:01:02.969><c> actions</c>

00:01:03.470 --> 00:01:03.870 align:start position:0%
be embarrassed by their actions
 

00:01:03.870 --> 00:01:05.390 align:start position:0%
be embarrassed by their actions
ninety<00:01:05.010><c> percent</c><00:01:05.070><c> of</c><c.colorCCCCCC><00:01:05.369><c> americans</c></c>

00:01:05.390 --> 00:01:05.790 align:start position:0%
ninety percent of<c.colorCCCCCC> americans
 </c>

00:01:05.790 --> 00:01:06.840 align:start position:0%
ninety percent of<c.colorCCCCCC> americans</c>
support<c.colorE5E5E5><00:01:05.850><c> expanding</c></c><00:01:06.840><c> background</c>

00:01:06.840 --> 00:01:07.049 align:start position:0%
support<c.colorE5E5E5> expanding</c> background
 

00:01:07.049 --> 00:01:07.700 align:start position:0%
support<c.colorE5E5E5> expanding</c> background
checks

00:01:07.700 --> 00:01:08.100 align:start position:0%
checks
 

00:01:08.100 --> 00:01:09.510 align:start position:0%
checks
<c.colorCCCCCC>it's</c><00:01:08.850><c> not</c><00:01:09.030><c> ninety</c><00:01:09.390><c> percent</c><00:01:09.510><c> of</c>

00:01:09.510 --> 00:01:09.750 align:start position:0%
<c.colorCCCCCC>it's</c> not ninety percent of
 

00:01:09.750 --> 00:01:10.830 align:start position:0%
<c.colorCCCCCC>it's</c> not ninety percent of
Democrats<c.colorE5E5E5><00:01:10.320><c> is</c></c><00:01:10.409><c> ninety</c><00:01:10.740><c> percent</c><00:01:10.830><c> of</c>

00:01:10.830 --> 00:01:11.100 align:start position:0%
Democrats<c.colorE5E5E5> is</c> ninety percent of
 

00:01:11.100 --> 00:01:11.600 align:start position:0%
Democrats<c.colorE5E5E5> is</c> ninety percent of
<c.colorE5E5E5>the</c><c.colorCCCCCC><00:01:11.189><c> american</c><00:01:11.250><c> people</c></c>

00:01:11.600 --> 00:01:12.000 align:start position:0%
<c.colorE5E5E5>the</c><c.colorCCCCCC> american people
 </c>

00:01:12.000 --> 00:01:12.570 align:start position:0%
<c.colorE5E5E5>the</c><c.colorCCCCCC> american people</c>
Democrats<00:01:12.570><c> Republicans</c>

00:01:12.570 --> 00:01:12.689 align:start position:0%
Democrats Republicans
 

00:01:12.689 --> 00:01:15.109 align:start position:0%
Democrats Republicans
<c.colorCCCCCC>independence<00:01:14.189><c> and</c></c><c.colorE5E5E5><00:01:15.090><c> eighty-five</c></c>

00:01:15.109 --> 00:01:15.509 align:start position:0%
<c.colorCCCCCC>independence and</c><c.colorE5E5E5> eighty-five
 </c>

00:01:15.509 --> 00:01:16.590 align:start position:0%
<c.colorCCCCCC>independence and</c><c.colorE5E5E5> eighty-five
percent</c><00:01:15.659><c> of</c><c.colorCCCCCC><00:01:15.960><c> americans</c></c><00:01:16.350><c> want</c><00:01:16.590><c> to</c>

00:01:16.590 --> 00:01:16.650 align:start position:0%
<c.colorE5E5E5>percent</c> of<c.colorCCCCCC> americans</c> want to
 

00:01:16.650 --> 00:01:17.570 align:start position:0%
<c.colorE5E5E5>percent</c> of<c.colorCCCCCC> americans</c> want to
close<00:01:16.920><c> a</c><00:01:17.009><c> terrorist</c><c.colorCCCCCC><00:01:17.400><c> ,</c><00:01:17.549><c> Lupul</c></c>

00:01:17.570 --> 00:01:17.970 align:start position:0%
close a terrorist<c.colorCCCCCC> , Lupul
 </c>

00:01:17.970 --> 00:01:19.820 align:start position:0%
close a terrorist<c.colorCCCCCC> , Lupul</c>
<c.colorE5E5E5>Democrats</c><c.colorCCCCCC><00:01:19.530><c> Republicans</c></c><00:01:19.740><c> and</c>

00:01:19.820 --> 00:01:20.220 align:start position:0%
<c.colorE5E5E5>Democrats</c><c.colorCCCCCC> Republicans</c> and
 

00:01:20.220 --> 00:01:22.740 align:start position:0%
<c.colorE5E5E5>Democrats</c><c.colorCCCCCC> Republicans</c> and
<c.colorCCCCCC>independence<00:01:20.850><c> but</c></c><c.colorE5E5E5><00:01:22.110><c> the</c><00:01:22.229><c> NRA</c></c><00:01:22.560><c> says</c><c.colorE5E5E5><00:01:22.740><c> no</c></c>

00:01:22.740 --> 00:01:23.070 align:start position:0%
<c.colorCCCCCC>independence but</c><c.colorE5E5E5> the NRA</c> says<c.colorE5E5E5> no
 </c>

00:01:23.070 --> 00:01:25.969 align:start position:0%
<c.colorCCCCCC>independence but</c><c.colorE5E5E5> the NRA</c> says<c.colorE5E5E5> no
so</c><c.colorCCCCCC><00:01:24.840><c> Republicans</c></c><00:01:25.380><c> do</c><c.colorE5E5E5><00:01:25.530><c> nothing</c></c>

00:01:25.969 --> 00:01:26.369 align:start position:0%
<c.colorE5E5E5>so</c><c.colorCCCCCC> Republicans</c> do<c.colorE5E5E5> nothing
 </c>

00:01:26.369 --> 00:01:27.659 align:start position:0%
<c.colorE5E5E5>so</c><c.colorCCCCCC> Republicans</c> do<c.colorE5E5E5> nothing</c>
despite<00:01:27.000><c> today's</c><c.colorE5E5E5><00:01:27.090><c> votes</c></c><00:01:27.570><c> the</c><00:01:27.659><c> fight</c>

00:01:27.659 --> 00:01:27.900 align:start position:0%
despite today's<c.colorE5E5E5> votes</c> the fight
 

00:01:27.900 --> 00:01:28.950 align:start position:0%
despite today's<c.colorE5E5E5> votes</c> the fight
to<00:01:27.990><c> pass</c><00:01:28.200><c> something</c><00:01:28.470><c> in</c><00:01:28.710><c> the</c><00:01:28.770><c> wake</c><c.colorCCCCCC><00:01:28.950><c> of</c></c>

00:01:28.950 --> 00:01:28.979 align:start position:0%
to pass something in the wake<c.colorCCCCCC> of
 </c>

00:01:28.979 --> 00:01:29.899 align:start position:0%
to pass something in the wake<c.colorCCCCCC> of
Orlando's</c><00:01:29.430><c> not</c><00:01:29.579><c> over</c><c.colorCCCCCC><00:01:29.820><c> republican</c></c>

00:01:29.899 --> 00:01:30.299 align:start position:0%
<c.colorCCCCCC>Orlando's</c> not over<c.colorCCCCCC> republican
 </c>

00:01:30.299 --> 00:01:31.650 align:start position:0%
<c.colorCCCCCC>Orlando's</c> not over<c.colorCCCCCC> republican</c>
senator<00:01:30.540><c> Susan</c><00:01:30.840><c> Collins</c><00:01:30.869><c> has</c><00:01:31.650><c> been</c>

00:01:31.650 --> 00:01:31.740 align:start position:0%
senator Susan Collins has been
 

00:01:31.740 --> 00:01:32.149 align:start position:0%
senator Susan Collins has been
working<00:01:32.009><c> on</c><00:01:32.070><c> a</c><00:01:32.130><c> bipartisan</c>

00:01:32.149 --> 00:01:32.549 align:start position:0%
working on a bipartisan
 

00:01:32.549 --> 00:01:33.689 align:start position:0%
working on a bipartisan
compromise<c.colorCCCCCC><00:01:33.180><c> enter</c></c><00:01:33.420><c> that</c><00:01:33.600><c> may</c><00:01:33.689><c> still</c>

00:01:33.689 --> 00:01:33.840 align:start position:0%
compromise<c.colorCCCCCC> enter</c> that may still
 

00:01:33.840 --> 00:01:34.680 align:start position:0%
compromise<c.colorCCCCCC> enter</c> that may still
come<00:01:34.049><c> up</c><00:01:34.140><c> for</c><00:01:34.320><c> a</c><00:01:34.380><c> vote</c><00:01:34.500><c> that</c><c.colorE5E5E5><00:01:34.680><c> would</c></c>

00:01:34.680 --> 00:01:34.950 align:start position:0%
come up for a vote that<c.colorE5E5E5> would
 </c>

00:01:34.950 --> 00:01:36.420 align:start position:0%
come up for a vote that<c.colorE5E5E5> would</c>
still<c.colorE5E5E5><00:01:35.280><c> face</c></c><00:01:35.520><c> an</c><00:01:36.090><c> uphill</c><00:01:36.210><c> battle</c><00:01:36.420><c> in</c>

00:01:36.420 --> 00:01:36.630 align:start position:0%
still<c.colorE5E5E5> face</c> an uphill battle in
 

00:01:36.630 --> 00:01:38.130 align:start position:0%
still<c.colorE5E5E5> face</c> an uphill battle in
the<c.colorE5E5E5><00:01:36.720><c> house</c></c><00:01:36.960><c> meanwhile</c><c.colorCCCCCC><00:01:37.470><c> the</c><00:01:37.890><c> NRA</c></c><c.colorE5E5E5><00:01:38.130><c> is</c></c>

00:01:38.130 --> 00:01:38.159 align:start position:0%
the<c.colorE5E5E5> house</c> meanwhile<c.colorCCCCCC> the NRA</c><c.colorE5E5E5> is
 </c>

00:01:38.159 --> 00:01:39.360 align:start position:0%
the<c.colorE5E5E5> house</c> meanwhile<c.colorCCCCCC> the NRA</c><c.colorE5E5E5> is</c>
<c.colorCCCCCC>wayne<00:01:38.400><c> lapierre</c></c><00:01:38.640><c> argued</c><00:01:39.360><c> yesterday</c>

00:01:39.360 --> 00:01:39.570 align:start position:0%
<c.colorCCCCCC>wayne lapierre</c> argued yesterday
 

00:01:39.570 --> 00:01:40.880 align:start position:0%
<c.colorCCCCCC>wayne lapierre</c> argued yesterday
the<c.colorCCCCCC><00:01:39.960><c> Democratic</c></c><c.colorE5E5E5><00:01:40.380><c> proposal</c></c><c.colorCCCCCC><00:01:40.530><c> reflect</c></c>

00:01:40.880 --> 00:01:41.280 align:start position:0%
the<c.colorCCCCCC> Democratic</c><c.colorE5E5E5> proposal</c><c.colorCCCCCC> reflect
 </c>

00:01:41.280 --> 00:01:42.509 align:start position:0%
the<c.colorCCCCCC> Democratic</c><c.colorE5E5E5> proposal</c><c.colorCCCCCC> reflect</c>
<c.colorE5E5E5>an</c><00:01:41.340><c> attempt</c><00:01:41.729><c> to</c><00:01:42.030><c> distract</c><00:01:42.509><c> from</c>

00:01:42.509 --> 00:01:42.720 align:start position:0%
<c.colorE5E5E5>an</c> attempt to distract from
 

00:01:42.720 --> 00:01:44.120 align:start position:0%
<c.colorE5E5E5>an</c> attempt to distract from
failures<00:01:43.170><c> to</c><00:01:43.290><c> combat</c><00:01:43.649><c> terrorism</c><00:01:43.920><c> and</c>

00:01:44.120 --> 00:01:44.520 align:start position:0%
failures to combat terrorism and
 

00:01:44.520 --> 00:01:45.710 align:start position:0%
failures to combat terrorism and
<c.colorCCCCCC>accuse<00:01:44.820><c> Democrats</c></c><00:01:45.360><c> of</c><00:01:45.570><c> political</c>

00:01:45.710 --> 00:01:46.110 align:start position:0%
<c.colorCCCCCC>accuse Democrats</c> of political
 

00:01:46.110 --> 00:01:46.820 align:start position:0%
<c.colorCCCCCC>accuse Democrats</c> of political
correctness

00:01:46.820 --> 00:01:47.220 align:start position:0%
correctness
 

00:01:47.220 --> 00:01:48.659 align:start position:0%
correctness
<c.colorCCCCCC>I</c><00:01:47.759><c> think</c><00:01:48.060><c> we</c><00:01:48.149><c> don't</c><00:01:48.299><c> need</c><00:01:48.509><c> to</c><00:01:48.659><c> look</c>

00:01:48.659 --> 00:01:48.899 align:start position:0%
<c.colorCCCCCC>I</c> think we don't need to look
 

00:01:48.899 --> 00:01:50.759 align:start position:0%
<c.colorCCCCCC>I</c> think we don't need to look
right<00:01:49.229><c> in</c><00:01:49.530><c> the</c><00:01:49.619><c> face</c><00:01:49.860><c> of</c><00:01:50.520><c> what</c><00:01:50.759><c> these</c>

00:01:50.759 --> 00:01:50.909 align:start position:0%
right in the face of what these
 

00:01:50.909 --> 00:01:52.070 align:start position:0%
right in the face of what these
people<00:01:51.360><c> are</c><c.colorE5E5E5><00:01:51.420><c> they</c></c><c.colorCCCCCC><00:01:51.720><c> were</c></c><c.colorE5E5E5><00:01:51.840><c> facing</c></c>

00:01:52.070 --> 00:01:52.470 align:start position:0%
people are<c.colorE5E5E5> they</c><c.colorCCCCCC> were</c><c.colorE5E5E5> facing
 </c>

00:01:52.470 --> 00:01:53.340 align:start position:0%
people are<c.colorE5E5E5> they</c><c.colorCCCCCC> were</c><c.colorE5E5E5> facing</c>
they<00:01:52.560><c> don't</c><00:01:52.770><c> care</c><00:01:52.979><c> about</c><00:01:53.130><c> the</c><00:01:53.340><c> law</c>

00:01:53.340 --> 00:01:53.549 align:start position:0%
they don't care about the law
 

00:01:53.549 --> 00:01:55.789 align:start position:0%
they don't care about the law
<c.colorCCCCCC>lost</c><00:01:54.990><c> didn't</c><00:01:55.229><c> stop</c><c.colorCCCCCC><00:01:55.500><c> him</c></c><00:01:55.619><c> in</c><00:01:55.710><c> Boston</c>

00:01:55.789 --> 00:01:56.189 align:start position:0%
<c.colorCCCCCC>lost</c> didn't stop<c.colorCCCCCC> him</c> in Boston
 

00:01:56.189 --> 00:01:57.450 align:start position:0%
<c.colorCCCCCC>lost</c> didn't stop<c.colorCCCCCC> him</c> in Boston
<c.colorE5E5E5>lost</c><00:01:56.820><c> didn't</c><00:01:57.030><c> stop</c><00:01:57.329><c> in</c><c.colorCCCCCC><00:01:57.450><c> san</c></c>

00:01:57.450 --> 00:01:57.750 align:start position:0%
<c.colorE5E5E5>lost</c> didn't stop in<c.colorCCCCCC> san
 </c>

00:01:57.750 --> 00:01:59.040 align:start position:0%
<c.colorE5E5E5>lost</c> didn't stop in<c.colorCCCCCC> san
bernardino</c><c.colorE5E5E5><00:01:57.869><c> we</c><00:01:58.409><c> had</c></c><00:01:58.590><c> every</c><00:01:58.829><c> type</c><00:01:59.040><c> of</c>

00:01:59.040 --> 00:01:59.130 align:start position:0%
<c.colorCCCCCC>bernardino</c><c.colorE5E5E5> we had</c> every type of
 

00:01:59.130 --> 00:02:00.360 align:start position:0%
<c.colorCCCCCC>bernardino</c><c.colorE5E5E5> we had</c> every type of
gun<00:01:59.369><c> control</c><00:01:59.520><c> in</c><c.colorE5E5E5><00:01:59.909><c> the</c></c><00:01:59.969><c> UK</c><00:02:00.240><c> law</c><00:02:00.360><c> you</c>

00:02:00.360 --> 00:02:00.540 align:start position:0%
gun control in<c.colorE5E5E5> the</c> UK law you
 

00:02:00.540 --> 00:02:01.860 align:start position:0%
gun control in<c.colorE5E5E5> the</c> UK law you
could<00:02:00.659><c> have</c><c.colorE5E5E5><00:02:00.990><c> and</c></c><00:02:01.530><c> they</c><00:02:01.590><c> didn't</c><00:02:01.860><c> stop</c>

00:02:01.860 --> 00:02:02.159 align:start position:0%
could have<c.colorE5E5E5> and</c> they didn't stop
 

00:02:02.159 --> 00:02:03.479 align:start position:0%
could have<c.colorE5E5E5> and</c> they didn't stop
<c.colorCCCCCC>him</c><00:02:02.280><c> in</c><c.colorE5E5E5><00:02:02.399><c> Paris</c></c><c.colorCCCCCC><00:02:02.670><c> where</c></c><00:02:03.180><c> people</c><00:02:03.479><c> can't</c>

00:02:03.479 --> 00:02:03.780 align:start position:0%
<c.colorCCCCCC>him</c> in<c.colorE5E5E5> Paris</c><c.colorCCCCCC> where</c> people can't
 

00:02:03.780 --> 00:02:04.950 align:start position:0%
<c.colorCCCCCC>him</c> in<c.colorE5E5E5> Paris</c><c.colorCCCCCC> where</c> people can't
even<c.colorE5E5E5><00:02:03.869><c> own</c><00:02:04.140><c> guns</c></c>

00:02:04.950 --> 00:02:05.350 align:start position:0%
even<c.colorE5E5E5> own guns
 </c>

00:02:05.350 --> 00:02:06.820 align:start position:0%
even<c.colorE5E5E5> own guns</c>
<c.colorCCCCCC>John</c><00:02:05.860><c> analysis</c><c.colorCCCCCC><00:02:06.340><c> Center</c><00:02:06.520><c> cory</c><00:02:06.820><c> booker</c></c>

00:02:06.820 --> 00:02:07.119 align:start position:0%
<c.colorCCCCCC>John</c> analysis<c.colorCCCCCC> Center cory booker
 </c>

00:02:07.119 --> 00:02:07.810 align:start position:0%
<c.colorCCCCCC>John</c> analysis<c.colorCCCCCC> Center cory booker</c>
<c.colorE5E5E5>democrat</c><00:02:07.540><c> from</c><c.colorCCCCCC><00:02:07.600><c> new</c><00:02:07.689><c> jersey</c></c><c.colorE5E5E5><00:02:07.810><c> who</c></c>

00:02:07.810 --> 00:02:08.170 align:start position:0%
<c.colorE5E5E5>democrat</c> from<c.colorCCCCCC> new jersey</c><c.colorE5E5E5> who
 </c>

00:02:08.170 --> 00:02:09.250 align:start position:0%
<c.colorE5E5E5>democrat</c> from<c.colorCCCCCC> new jersey</c><c.colorE5E5E5> who</c>
co-sponsored<00:02:08.560><c> the</c><c.colorE5E5E5><00:02:08.979><c> measure</c></c><00:02:09.250><c> to</c>

00:02:09.250 --> 00:02:09.340 align:start position:0%
co-sponsored the<c.colorE5E5E5> measure</c> to
 

00:02:09.340 --> 00:02:10.060 align:start position:0%
co-sponsored the<c.colorE5E5E5> measure</c> to
expand<00:02:09.670><c> background</c><00:02:09.759><c> checks</c><00:02:10.060><c> and</c>

00:02:10.060 --> 00:02:10.300 align:start position:0%
expand background checks and
 

00:02:10.300 --> 00:02:11.740 align:start position:0%
expand background checks and
<c.colorCCCCCC>center</c><c.colorE5E5E5><00:02:10.600><c> your</c></c><00:02:10.750><c> reaction</c><00:02:11.260><c> to</c><00:02:11.740><c> the</c>

00:02:11.740 --> 00:02:11.830 align:start position:0%
<c.colorCCCCCC>center</c><c.colorE5E5E5> your</c> reaction to the
 

00:02:11.830 --> 00:02:12.210 align:start position:0%
<c.colorCCCCCC>center</c><c.colorE5E5E5> your</c> reaction to the
<c.colorCCCCCC>votes</c><00:02:12.069><c> today</c>

00:02:12.210 --> 00:02:12.610 align:start position:0%
<c.colorCCCCCC>votes</c> today
 

00:02:12.610 --> 00:02:14.020 align:start position:0%
<c.colorCCCCCC>votes</c> today
first<00:02:13.450><c> of</c><00:02:13.510><c> all</c><00:02:13.540><c> forgive</c><00:02:13.810><c> me</c><00:02:13.900><c> for</c><00:02:14.020><c> just</c>

00:02:14.020 --> 00:02:14.230 align:start position:0%
first of all forgive me for just
 

00:02:14.230 --> 00:02:15.850 align:start position:0%
first of all forgive me for just
dropping<00:02:14.680><c> off</c><00:02:14.860><c> script</c><c.colorCCCCCC><00:02:15.160><c> are</c></c><00:02:15.850><c> your</c>

00:02:15.850 --> 00:02:16.060 align:start position:0%
dropping off script<c.colorCCCCCC> are</c> your
 

00:02:16.060 --> 00:02:17.140 align:start position:0%
dropping off script<c.colorCCCCCC> are</c> your
book<00:02:16.300><c> about</c><00:02:16.480><c> a</c><00:02:16.600><c> very</c><00:02:17.140><c> broken</c>

00:02:17.140 --> 00:02:17.530 align:start position:0%
book about a very broken
 

00:02:17.530 --> 00:02:18.630 align:start position:0%
book about a very broken
criminal<00:02:17.650><c> justice</c><00:02:17.920><c> system</c>

00:02:18.630 --> 00:02:19.030 align:start position:0%
criminal justice system
 

00:02:19.030 --> 00:02:20.560 align:start position:0%
criminal justice system
<c.colorCCCCCC>i<00:02:19.060><c> I'm</c></c><00:02:20.020><c> really</c><c.colorCCCCCC><00:02:20.260><c> looking</c></c><00:02:20.500><c> forward</c><c.colorCCCCCC><00:02:20.560><c> to</c></c>

00:02:20.560 --> 00:02:20.890 align:start position:0%
<c.colorCCCCCC>i I'm</c> really<c.colorCCCCCC> looking</c> forward<c.colorCCCCCC> to
 </c>

00:02:20.890 --> 00:02:21.640 align:start position:0%
<c.colorCCCCCC>i I'm</c> really<c.colorCCCCCC> looking</c> forward<c.colorCCCCCC> to</c>
<c.colorE5E5E5>it</c><00:02:21.069><c> more</c><00:02:21.190><c> people</c><00:02:21.520><c> need</c><00:02:21.640><c> to</c>

00:02:21.640 --> 00:02:21.670 align:start position:0%
<c.colorE5E5E5>it</c> more people need to
 

00:02:21.670 --> 00:02:24.180 align:start position:0%
<c.colorE5E5E5>it</c> more people need to
understand<00:02:22.209><c> how</c><00:02:22.300><c> deeply</c><00:02:22.750><c> unjust</c>

00:02:24.180 --> 00:02:24.580 align:start position:0%
understand how deeply unjust
 

00:02:24.580 --> 00:02:25.620 align:start position:0%
understand how deeply unjust
<c.colorE5E5E5>America's</c><00:02:25.390><c> criminal</c><00:02:25.540><c> justice</c>

00:02:25.620 --> 00:02:26.020 align:start position:0%
<c.colorE5E5E5>America's</c> criminal justice
 

00:02:26.020 --> 00:02:27.120 align:start position:0%
<c.colorE5E5E5>America's</c> criminal justice
system<00:02:26.319><c> is</c><00:02:26.440><c> so</c><00:02:26.530><c> thank</c><00:02:26.800><c> you</c><00:02:26.860><c> for</c><00:02:26.920><c> that</c>

00:02:27.120 --> 00:02:27.520 align:start position:0%
system is so thank you for that
 

00:02:27.520 --> 00:02:29.650 align:start position:0%
system is so thank you for that
<c.colorE5E5E5>awesome<00:02:27.850><c> thank</c></c><00:02:28.120><c> you</c><c.colorCCCCCC><00:02:28.180><c> and</c></c><00:02:29.440><c> look</c><c.colorE5E5E5><00:02:29.650><c> today</c></c>

00:02:29.650 --> 00:02:29.860 align:start position:0%
<c.colorE5E5E5>awesome thank</c> you<c.colorCCCCCC> and</c> look<c.colorE5E5E5> today
 </c>

00:02:29.860 --> 00:02:30.419 align:start position:0%
<c.colorE5E5E5>awesome thank</c> you<c.colorCCCCCC> and</c> look<c.colorE5E5E5> today</c>
was<00:02:30.280><c> appalling</c>

00:02:30.419 --> 00:02:30.819 align:start position:0%
was appalling
 

00:02:30.819 --> 00:02:33.040 align:start position:0%
was appalling
<c.colorCCCCCC>how</c><00:02:32.170><c> can</c><00:02:32.350><c> you</c><00:02:32.380><c> have</c><00:02:32.530><c> a</c><00:02:32.620><c> nation</c><00:02:33.040><c> where</c>

00:02:33.040 --> 00:02:33.220 align:start position:0%
<c.colorCCCCCC>how</c> can you have a nation where
 

00:02:33.220 --> 00:02:34.270 align:start position:0%
<c.colorCCCCCC>how</c> can you have a nation where
you<00:02:33.520><c> can</c><00:02:33.760><c> be</c><00:02:33.940><c> under</c><00:02:34.270><c> FBI</c>

00:02:34.270 --> 00:02:34.510 align:start position:0%
you can be under FBI
 

00:02:34.510 --> 00:02:36.010 align:start position:0%
you can be under FBI
investigation<00:02:34.750><c> on</c><00:02:35.920><c> a</c><00:02:36.010><c> terrorist</c>

00:02:36.010 --> 00:02:36.310 align:start position:0%
investigation on a terrorist
 

00:02:36.310 --> 00:02:38.590 align:start position:0%
investigation on a terrorist
no-fly<c.colorE5E5E5><00:02:36.640><c> list</c><00:02:37.270><c> and</c><00:02:38.140><c> literally</c></c><00:02:38.590><c> be</c>

00:02:38.590 --> 00:02:38.680 align:start position:0%
no-fly<c.colorE5E5E5> list and literally</c> be
 

00:02:38.680 --> 00:02:40.330 align:start position:0%
no-fly<c.colorE5E5E5> list and literally</c> be
able<00:02:39.040><c> to</c><00:02:39.280><c> go</c><00:02:39.670><c> to</c><00:02:39.790><c> a</c><00:02:39.850><c> gun</c><00:02:40.030><c> show</c><00:02:40.330><c> and</c>

00:02:40.330 --> 00:02:40.480 align:start position:0%
able to go to a gun show and
 

00:02:40.480 --> 00:02:41.739 align:start position:0%
able to go to a gun show and
load<00:02:41.050><c> up</c><00:02:41.140><c> a</c><c.colorE5E5E5><00:02:41.230><c> trunk</c></c><00:02:41.560><c> full</c><00:02:41.590><c> of</c><00:02:41.739><c> weapons</c>

00:02:41.739 --> 00:02:41.980 align:start position:0%
load up a<c.colorE5E5E5> trunk</c> full of weapons
 

00:02:41.980 --> 00:02:44.010 align:start position:0%
load up a<c.colorE5E5E5> trunk</c> full of weapons
we<c.colorE5E5E5><00:02:42.280><c> are</c></c><00:02:42.370><c> so</c><00:02:42.640><c> exposed</c><00:02:43.090><c> on</c><00:02:43.540><c> this</c><c.colorE5E5E5><00:02:43.780><c> and</c></c>

00:02:44.010 --> 00:02:44.410 align:start position:0%
we<c.colorE5E5E5> are</c> so exposed on this<c.colorE5E5E5> and
 </c>

00:02:44.410 --> 00:02:45.510 align:start position:0%
we<c.colorE5E5E5> are</c> so exposed on this<c.colorE5E5E5> and</c>
you<00:02:44.500><c> have</c><c.colorE5E5E5><00:02:44.680><c> al</c></c><c.colorCCCCCC><00:02:44.830><c> Qaeda</c><00:02:45.220><c> terrorists</c></c>

00:02:45.510 --> 00:02:45.910 align:start position:0%
you have<c.colorE5E5E5> al</c><c.colorCCCCCC> Qaeda terrorists
 </c>

00:02:45.910 --> 00:02:48.150 align:start position:0%
you have<c.colorE5E5E5> al</c><c.colorCCCCCC> Qaeda terrorists</c>
literally<00:02:46.269><c> giving</c><00:02:46.569><c> instructions</c><c.colorE5E5E5><00:02:47.350><c> to</c></c>

00:02:48.150 --> 00:02:48.550 align:start position:0%
literally giving instructions<c.colorE5E5E5> to
 </c>

00:02:48.550 --> 00:02:52.680 align:start position:0%
literally giving instructions<c.colorE5E5E5> to</c>
those<c.colorE5E5E5><00:02:48.790><c> are</c></c><00:02:48.940><c> seeking</c><00:02:49.390><c> to</c><c.colorE5E5E5><00:02:49.569><c> uh</c></c><c.colorCCCCCC><00:02:50.319><c> a</c></c><00:02:51.489><c> sort</c>

00:02:52.680 --> 00:02:53.080 align:start position:0%
those<c.colorE5E5E5> are</c> seeking to<c.colorE5E5E5> uh</c><c.colorCCCCCC> a</c> sort
 

00:02:53.080 --> 00:02:54.059 align:start position:0%
those<c.colorE5E5E5> are</c> seeking to<c.colorE5E5E5> uh</c><c.colorCCCCCC> a</c> sort
of<00:02:53.140><c> get</c><00:02:53.410><c> to</c><00:02:53.560><c> be</c><00:02:53.680><c> violent</c><c.colorCCCCCC><00:02:53.920><c> terrorists</c></c>

00:02:54.059 --> 00:02:54.459 align:start position:0%
of get to be violent<c.colorCCCCCC> terrorists
 </c>

00:02:54.459 --> 00:02:55.630 align:start position:0%
of get to be violent<c.colorCCCCCC> terrorists</c>
here<c.colorCCCCCC><00:02:54.610><c> telling</c></c><00:02:55.450><c> them</c><00:02:55.569><c> to</c><00:02:55.630><c> take</c>

00:02:55.630 --> 00:02:55.840 align:start position:0%
here<c.colorCCCCCC> telling</c> them to take
 

00:02:55.840 --> 00:02:57.030 align:start position:0%
here<c.colorCCCCCC> telling</c> them to take
advantage<00:02:56.050><c> of</c><00:02:56.290><c> these</c><00:02:56.440><c> massive</c>

00:02:57.030 --> 00:02:57.430 align:start position:0%
advantage of these massive
 

00:02:57.430 --> 00:02:58.959 align:start position:0%
advantage of these massive
gaping<00:02:57.670><c> loopholes</c><00:02:58.450><c> center</c><00:02:58.810><c> let</c><00:02:58.959><c> me</c>

00:02:58.959 --> 00:02:59.019 align:start position:0%
gaping loopholes center let me
 

00:02:59.019 --> 00:02:59.830 align:start position:0%
gaping loopholes center let me
ask<00:02:59.170><c> you</c><00:02:59.260><c> this</c><c.colorCCCCCC><00:02:59.380><c> so</c></c><c.colorE5E5E5><00:02:59.530><c> John</c><00:02:59.830><c> senator</c></c>

00:02:59.830 --> 00:03:00.100 align:start position:0%
ask you this<c.colorCCCCCC> so</c><c.colorE5E5E5> John senator
 </c>

00:03:00.100 --> 00:03:01.660 align:start position:0%
ask you this<c.colorCCCCCC> so</c><c.colorE5E5E5> John senator</c>
<c.colorCCCCCC>Cornyn</c><00:03:00.580><c> proposed</c><00:03:01.150><c> essentially</c><00:03:01.660><c> a</c>

00:03:01.660 --> 00:03:01.720 align:start position:0%
<c.colorCCCCCC>Cornyn</c> proposed essentially a
 

00:03:01.720 --> 00:03:02.769 align:start position:0%
<c.colorCCCCCC>Cornyn</c> proposed essentially a
countermeasure<c.colorE5E5E5><00:03:02.080><c> write</c></c><00:03:02.440><c> a</c><c.colorE5E5E5><00:03:02.530><c> three</c><00:03:02.769><c> day</c></c>

00:03:02.769 --> 00:03:02.890 align:start position:0%
countermeasure<c.colorE5E5E5> write</c> a<c.colorE5E5E5> three day
 </c>

00:03:02.890 --> 00:03:03.880 align:start position:0%
countermeasure<c.colorE5E5E5> write</c> a<c.colorE5E5E5> three day</c>
waiting<c.colorCCCCCC><00:03:03.069><c> list</c></c><00:03:03.430><c> for</c><00:03:03.459><c> folks</c><00:03:03.850><c> that</c><00:03:03.880><c> were</c>

00:03:03.880 --> 00:03:04.060 align:start position:0%
waiting<c.colorCCCCCC> list</c> for folks that were
 

00:03:04.060 --> 00:03:05.470 align:start position:0%
waiting<c.colorCCCCCC> list</c> for folks that were
red<00:03:04.299><c> flag</c><00:03:04.660><c> because</c><00:03:04.720><c> they</c><00:03:05.019><c> were</c><00:03:05.470><c> on</c>

00:03:05.470 --> 00:03:05.620 align:start position:0%
red flag because they were on
 

00:03:05.620 --> 00:03:06.519 align:start position:0%
red flag because they were on
this<00:03:05.769><c> list</c><00:03:06.160><c> and</c><00:03:06.310><c> then</c><00:03:06.430><c> the</c><c.colorCCCCCC><00:03:06.519><c> court</c></c>

00:03:06.519 --> 00:03:06.819 align:start position:0%
this list and then the<c.colorCCCCCC> court
 </c>

00:03:06.819 --> 00:03:07.540 align:start position:0%
this list and then the<c.colorCCCCCC> court</c>
that<00:03:06.940><c> the</c><00:03:07.120><c> government</c><c.colorE5E5E5><00:03:07.480><c> would</c><00:03:07.540><c> have</c></c>

00:03:07.540 --> 00:03:07.600 align:start position:0%
that the government<c.colorE5E5E5> would have
 </c>

00:03:07.600 --> 00:03:08.399 align:start position:0%
that the government<c.colorE5E5E5> would have</c>
to<c.colorE5E5E5><00:03:07.690><c> go</c></c><00:03:07.780><c> to</c><00:03:07.870><c> court</c>

00:03:08.399 --> 00:03:08.799 align:start position:0%
to<c.colorE5E5E5> go</c> to court
 

00:03:08.799 --> 00:03:10.589 align:start position:0%
to<c.colorE5E5E5> go</c> to court
affirmative<00:03:09.280><c> Lee</c><00:03:09.489><c> to</c><00:03:09.579><c> stop</c><00:03:09.910><c> them</c>

00:03:10.589 --> 00:03:10.989 align:start position:0%
affirmative Lee to stop them
 

00:03:10.989 --> 00:03:12.340 align:start position:0%
affirmative Lee to stop them
what<00:03:11.650><c> was</c><00:03:12.070><c> wrong</c><00:03:12.220><c> with</c><00:03:12.340><c> that</c>

00:03:12.340 --> 00:03:12.489 align:start position:0%
what was wrong with that
 

00:03:12.489 --> 00:03:12.960 align:start position:0%
what was wrong with that
alternative

00:03:12.960 --> 00:03:13.360 align:start position:0%
alternative
 

00:03:13.360 --> 00:03:14.739 align:start position:0%
alternative
well<00:03:14.019><c> a</c><00:03:14.170><c> couple</c><c.colorE5E5E5><00:03:14.350><c> things</c><00:03:14.500><c> were</c></c><00:03:14.739><c> wrong</c>

00:03:14.739 --> 00:03:14.920 align:start position:0%
well a couple<c.colorE5E5E5> things were</c> wrong
 

00:03:14.920 --> 00:03:17.290 align:start position:0%
well a couple<c.colorE5E5E5> things were</c> wrong
number<00:03:15.310><c> one</c><c.colorCCCCCC><00:03:15.700><c> of</c></c><00:03:16.540><c> the</c><00:03:16.720><c> standard</c><c.colorCCCCCC><00:03:17.290><c> for</c></c>

00:03:17.290 --> 00:03:17.530 align:start position:0%
number one<c.colorCCCCCC> of</c> the standard<c.colorCCCCCC> for
 </c>

00:03:17.530 --> 00:03:18.190 align:start position:0%
number one<c.colorCCCCCC> of</c> the standard<c.colorCCCCCC> for</c>
which<00:03:17.680><c> the</c><00:03:17.769><c> government</c><00:03:18.010><c> would</c><00:03:18.190><c> have</c>

00:03:18.190 --> 00:03:18.220 align:start position:0%
which the government would have
 

00:03:18.220 --> 00:03:19.150 align:start position:0%
which the government would have
to<00:03:18.340><c> approve</c><00:03:18.790><c> would</c><00:03:19.150><c> be</c>

00:03:19.150 --> 00:03:19.450 align:start position:0%
to approve would be
 

00:03:19.450 --> 00:03:20.769 align:start position:0%
to approve would be
we<00:03:19.540><c> have</c><00:03:19.720><c> probable</c><00:03:20.170><c> cause</c><00:03:20.260><c> what</c><00:03:20.769><c> they</c>

00:03:20.769 --> 00:03:20.829 align:start position:0%
we have probable cause what they
 

00:03:20.829 --> 00:03:21.549 align:start position:0%
we have probable cause what they
<c.colorE5E5E5>had</c><00:03:20.980><c> that</c><00:03:21.100><c> standard</c><00:03:21.549><c> against</c>

00:03:21.549 --> 00:03:21.910 align:start position:0%
<c.colorE5E5E5>had</c> that standard against
 

00:03:21.910 --> 00:03:22.860 align:start position:0%
<c.colorE5E5E5>had</c> that standard against
suspected<c.colorCCCCCC><00:03:22.359><c> terrorists</c></c>

00:03:22.860 --> 00:03:23.260 align:start position:0%
suspected<c.colorCCCCCC> terrorists
 </c>

00:03:23.260 --> 00:03:24.310 align:start position:0%
suspected<c.colorCCCCCC> terrorists</c>
what<00:03:23.470><c> they</c><00:03:23.560><c> would</c><00:03:23.709><c> do</c><00:03:23.859><c> is</c><00:03:24.190><c> it</c><00:03:24.310><c> would</c>

00:03:24.310 --> 00:03:24.489 align:start position:0%
what they would do is it would
 

00:03:24.489 --> 00:03:26.950 align:start position:0%
what they would do is it would
<c.colorE5E5E5>be</c><00:03:24.670><c> arrest</c><00:03:25.120><c> them</c><00:03:25.810><c> number</c><c.colorE5E5E5><00:03:26.019><c> two</c></c><00:03:26.320><c> is</c><00:03:26.950><c> it</c>

00:03:26.950 --> 00:03:27.130 align:start position:0%
<c.colorE5E5E5>be</c> arrest them number<c.colorE5E5E5> two</c> is it
 

00:03:27.130 --> 00:03:28.480 align:start position:0%
<c.colorE5E5E5>be</c> arrest them number<c.colorE5E5E5> two</c> is it
<c.colorCCCCCC>didn't</c><c.colorE5E5E5><00:03:27.579><c> even</c></c><00:03:28.120><c> if</c><00:03:28.209><c> it</c><00:03:28.299><c> was</c><00:03:28.480><c> a</c>

00:03:28.480 --> 00:03:28.540 align:start position:0%
<c.colorCCCCCC>didn't</c><c.colorE5E5E5> even</c> if it was a
 

00:03:28.540 --> 00:03:29.890 align:start position:0%
<c.colorCCCCCC>didn't</c><c.colorE5E5E5> even</c> if it was a
successful<00:03:29.200><c> way</c><00:03:29.470><c> of</c><00:03:29.620><c> trying</c><c.colorCCCCCC><00:03:29.890><c> two</c></c>

00:03:29.890 --> 00:03:30.010 align:start position:0%
successful way of trying<c.colorCCCCCC> two
 </c>

00:03:30.010 --> 00:03:31.950 align:start position:0%
successful way of trying<c.colorCCCCCC> two
marrow</c><00:03:30.790><c> which</c><c.colorCCCCCC><00:03:31.000><c> it</c></c><00:03:31.090><c> was</c><00:03:31.359><c> it</c><c.colorCCCCCC><00:03:31.540><c> they</c></c>

00:03:31.950 --> 00:03:32.350 align:start position:0%
<c.colorCCCCCC>marrow</c> which<c.colorCCCCCC> it</c> was it<c.colorCCCCCC> they
 </c>

00:03:32.350 --> 00:03:33.720 align:start position:0%
<c.colorCCCCCC>marrow</c> which<c.colorCCCCCC> it</c> was it<c.colorCCCCCC> they</c>
would<c.colorE5E5E5><00:03:32.530><c> have</c><00:03:32.680><c> FBI</c></c><00:03:33.160><c> agents</c><00:03:33.549><c> exposing</c>

00:03:33.720 --> 00:03:34.120 align:start position:0%
would<c.colorE5E5E5> have FBI</c> agents exposing
 

00:03:34.120 --> 00:03:35.440 align:start position:0%
would<c.colorE5E5E5> have FBI</c> agents exposing
their<00:03:34.239><c> operations</c><00:03:34.930><c> exposing</c><00:03:35.440><c> their</c>

00:03:35.440 --> 00:03:35.560 align:start position:0%
their operations exposing their
 

00:03:35.560 --> 00:03:37.050 align:start position:0%
their operations exposing their
investigations<c.colorCCCCCC><00:03:36.280><c> unnecessarily</c></c>

00:03:37.050 --> 00:03:37.450 align:start position:0%
investigations<c.colorCCCCCC> unnecessarily
 </c>

00:03:37.450 --> 00:03:38.410 align:start position:0%
investigations<c.colorCCCCCC> unnecessarily</c>
but<00:03:37.780><c> then</c><00:03:37.930><c> a</c><00:03:37.959><c> terrorist</c><00:03:38.320><c> could</c><00:03:38.410><c> still</c>

00:03:38.410 --> 00:03:38.650 align:start position:0%
but then a terrorist could still
 

00:03:38.650 --> 00:03:40.359 align:start position:0%
but then a terrorist could still
go<00:03:38.829><c> behind</c><00:03:39.400><c> all</c><00:03:39.850><c> of</c><00:03:39.970><c> that</c><00:03:40.269><c> and</c><00:03:40.359><c> just</c>

00:03:40.359 --> 00:03:40.480 align:start position:0%
go behind all of that and just
 

00:03:40.480 --> 00:03:41.739 align:start position:0%
go behind all of that and just
go<00:03:40.660><c> on</c><00:03:40.810><c> the</c><00:03:40.840><c> internet</c><c.colorE5E5E5><00:03:40.930><c> or</c></c><00:03:41.470><c> go</c><00:03:41.620><c> to</c><00:03:41.739><c> a</c>

00:03:41.739 --> 00:03:41.769 align:start position:0%
go on the internet<c.colorE5E5E5> or</c> go to a
 

00:03:41.769 --> 00:03:43.090 align:start position:0%
go on the internet<c.colorE5E5E5> or</c> go to a
gun<00:03:41.950><c> show</c><00:03:42.220><c> where</c><00:03:42.790><c> they</c><00:03:42.880><c> have</c><00:03:43.000><c> to</c><00:03:43.090><c> show</c>

00:03:43.090 --> 00:03:43.239 align:start position:0%
gun show where they have to show
 

00:03:43.239 --> 00:03:44.580 align:start position:0%
gun show where they have to show
no<00:03:43.390><c> identification</c><00:03:43.750><c> whatsoever</c><c.colorCCCCCC><00:03:44.470><c> and</c></c>

00:03:44.580 --> 00:03:44.980 align:start position:0%
no identification whatsoever<c.colorCCCCCC> and
 </c>

00:03:44.980 --> 00:03:46.440 align:start position:0%
no identification whatsoever<c.colorCCCCCC> and</c>
still<00:03:45.220><c> be</c><00:03:45.400><c> able</c><00:03:45.519><c> to</c><00:03:45.670><c> buy</c><00:03:45.790><c> a</c><00:03:45.880><c> weapon</c><c.colorCCCCCC><00:03:46.150><c> so</c></c>

00:03:46.440 --> 00:03:46.840 align:start position:0%
still be able to buy a weapon<c.colorCCCCCC> so
 </c>

00:03:46.840 --> 00:03:47.610 align:start position:0%
still be able to buy a weapon<c.colorCCCCCC> so
it's</c><00:03:46.989><c> still</c><00:03:47.109><c> left</c><00:03:47.410><c> these</c><00:03:47.560><c> gaping</c>

00:03:47.610 --> 00:03:48.010 align:start position:0%
<c.colorCCCCCC>it's</c> still left these gaping
 

00:03:48.010 --> 00:03:49.030 align:start position:0%
<c.colorCCCCCC>it's</c> still left these gaping
holes<00:03:48.609><c> that</c><00:03:48.730><c> leaves</c><00:03:49.030><c> our</c>

00:03:49.030 --> 00:03:49.150 align:start position:0%
holes that leaves our
 

00:03:49.150 --> 00:03:50.339 align:start position:0%
holes that leaves our
<c.colorE5E5E5>communities<00:03:49.900><c> incredibly</c></c>

00:03:50.339 --> 00:03:50.739 align:start position:0%
<c.colorE5E5E5>communities incredibly
 </c>

00:03:50.739 --> 00:03:51.910 align:start position:0%
<c.colorE5E5E5>communities incredibly</c>
vulnerable<00:03:50.980><c> we</c><00:03:51.400><c> are</c><00:03:51.459><c> at</c><00:03:51.640><c> war</c><00:03:51.910><c> right</c>

00:03:51.910 --> 00:03:52.060 align:start position:0%
vulnerable we are at war right
 

00:03:52.060 --> 00:03:54.430 align:start position:0%
vulnerable we are at war right
now<c.colorCCCCCC><00:03:52.359><c> with</c></c><00:03:53.109><c> terrorism</c><c.colorE5E5E5><00:03:53.620><c> and</c></c><00:03:54.310><c> our</c><00:03:54.430><c> enemy</c>

00:03:54.430 --> 00:03:54.820 align:start position:0%
now<c.colorCCCCCC> with</c> terrorism<c.colorE5E5E5> and</c> our enemy
 

00:03:54.820 --> 00:03:56.709 align:start position:0%
now<c.colorCCCCCC> with</c> terrorism<c.colorE5E5E5> and</c> our enemy
knows<00:03:55.359><c> they</c><00:03:55.840><c> can</c><00:03:56.019><c> easily</c><00:03:56.560><c> get</c><00:03:56.709><c> guns</c>

00:03:56.709 --> 00:03:57.100 align:start position:0%
knows they can easily get guns
 

00:03:57.100 --> 00:03:58.540 align:start position:0%
knows they can easily get guns
in<00:03:57.190><c> this</c><00:03:57.280><c> country</c><c.colorE5E5E5><00:03:57.400><c> to</c><00:03:58.269><c> bring</c></c><c.colorCCCCCC><00:03:58.540><c> about</c></c>

00:03:58.540 --> 00:03:58.690 align:start position:0%
in this country<c.colorE5E5E5> to bring</c><c.colorCCCCCC> about
 </c>

00:03:58.690 --> 00:04:00.000 align:start position:0%
in this country<c.colorE5E5E5> to bring</c><c.colorCCCCCC> about
those</c><00:03:59.019><c> may</c><00:03:59.230><c> have</c><00:03:59.470><c> a</c><00:03:59.560><c> really</c><c.colorE5E5E5><00:03:59.920><c> instruct</c></c>

00:04:00.000 --> 00:04:00.400 align:start position:0%
<c.colorCCCCCC>those</c> may have a really<c.colorE5E5E5> instruct
 </c>

00:04:00.400 --> 00:04:01.480 align:start position:0%
<c.colorCCCCCC>those</c> may have a really<c.colorE5E5E5> instruct</c>
even<c.colorE5E5E5><00:04:00.640><c> more</c><00:04:00.790><c> so</c><00:04:00.970><c> than</c></c><c.colorCCCCCC><00:04:01.060><c> Europe</c></c><c.colorE5E5E5><00:04:01.480><c> that</c></c>

00:04:01.480 --> 00:04:01.840 align:start position:0%
even<c.colorE5E5E5> more so than</c><c.colorCCCCCC> Europe</c><c.colorE5E5E5> that
 </c>

00:04:01.840 --> 00:04:03.250 align:start position:0%
even<c.colorE5E5E5> more so than</c><c.colorCCCCCC> Europe</c><c.colorE5E5E5> that
this</c><00:04:02.079><c> is</c><00:04:02.230><c> the</c><00:04:02.319><c> country</c><c.colorE5E5E5><00:04:02.799><c> which</c></c><00:04:03.250><c> you</c>

00:04:03.250 --> 00:04:03.370 align:start position:0%
<c.colorE5E5E5>this</c> is the country<c.colorE5E5E5> which</c> you
 

00:04:03.370 --> 00:04:05.739 align:start position:0%
<c.colorE5E5E5>this</c> is the country<c.colorE5E5E5> which</c> you
can<00:04:03.489><c> get</c><c.colorE5E5E5><00:04:03.700><c> ak-47</c></c><00:04:04.930><c> assault</c><00:04:04.959><c> rifles</c><00:04:05.739><c> and</c>

00:04:05.739 --> 00:04:06.130 align:start position:0%
can get<c.colorE5E5E5> ak-47</c> assault rifles and
 

00:04:06.130 --> 00:04:07.589 align:start position:0%
can get<c.colorE5E5E5> ak-47</c> assault rifles and
other<00:04:06.250><c> weapons</c><00:04:06.549><c> to</c><00:04:06.819><c> do</c><00:04:06.970><c> mass</c><00:04:07.239><c> carnage</c>

00:04:07.589 --> 00:04:07.989 align:start position:0%
other weapons to do mass carnage
 

00:04:07.989 --> 00:04:09.160 align:start position:0%
other weapons to do mass carnage
you<00:04:08.350><c> just</c><c.colorE5E5E5><00:04:08.590><c> talked</c></c><00:04:08.859><c> we</c><c.colorE5E5E5><00:04:08.980><c> just</c><00:04:09.160><c> talked</c></c>

00:04:09.160 --> 00:04:09.370 align:start position:0%
you just<c.colorE5E5E5> talked</c> we<c.colorE5E5E5> just talked
 </c>

00:04:09.370 --> 00:04:10.180 align:start position:0%
you just<c.colorE5E5E5> talked</c> we<c.colorE5E5E5> just talked
about</c><00:04:09.400><c> criminal</c><00:04:09.760><c> justice</c><00:04:09.790><c> and</c><00:04:10.180><c> you</c>

00:04:10.180 --> 00:04:10.269 align:start position:0%
<c.colorE5E5E5>about</c> criminal justice and you
 

00:04:10.269 --> 00:04:10.569 align:start position:0%
<c.colorE5E5E5>about</c> criminal justice and you
<c.colorE5E5E5>and</c><c.colorCCCCCC><00:04:10.359><c> I</c><00:04:10.420><c> have</c></c><c.colorE5E5E5><00:04:10.540><c> had</c><00:04:10.569><c> conversations</c></c>

00:04:10.569 --> 00:04:10.810 align:start position:0%
<c.colorE5E5E5>and</c><c.colorCCCCCC> I have</c><c.colorE5E5E5> had conversations
 </c>

00:04:10.810 --> 00:04:11.739 align:start position:0%
<c.colorE5E5E5>and</c><c.colorCCCCCC> I have</c><c.colorE5E5E5> had conversations</c>
about<00:04:11.170><c> this</c><00:04:11.410><c> before</c><00:04:11.709><c> on</c><00:04:11.739><c> this</c>

00:04:11.739 --> 00:04:11.890 align:start position:0%
about this before on this
 

00:04:11.890 --> 00:04:13.110 align:start position:0%
about this before on this
program<c.colorE5E5E5><00:04:12.160><c> off</c></c><00:04:12.970><c> air</c>

00:04:13.110 --> 00:04:13.510 align:start position:0%
program<c.colorE5E5E5> off</c> air
 

00:04:13.510 --> 00:04:14.500 align:start position:0%
program<c.colorE5E5E5> off</c> air
<c.colorCCCCCC>it's</c><c.colorE5E5E5><00:04:14.049><c> something</c></c><c.colorCCCCCC><00:04:14.320><c> that</c></c><00:04:14.410><c> you</c><00:04:14.500><c> have</c>

00:04:14.500 --> 00:04:14.709 align:start position:0%
<c.colorCCCCCC>it's</c><c.colorE5E5E5> something</c><c.colorCCCCCC> that</c> you have
 

00:04:14.709 --> 00:04:15.699 align:start position:0%
<c.colorCCCCCC>it's</c><c.colorE5E5E5> something</c><c.colorCCCCCC> that</c> you have
talked<00:04:14.979><c> about</c><00:04:15.250><c> a</c><00:04:15.489><c> lot</c><00:04:15.699><c> about</c>

00:04:15.699 --> 00:04:16.030 align:start position:0%
talked about a lot about
 

00:04:16.030 --> 00:04:16.610 align:start position:0%
talked about a lot about
<c.colorE5E5E5>reforming<00:04:16.510><c> criminals</c></c>

00:04:16.610 --> 00:04:17.010 align:start position:0%
<c.colorE5E5E5>reforming criminals
 </c>

00:04:17.010 --> 00:04:18.450 align:start position:0%
<c.colorE5E5E5>reforming criminals</c>
the<00:04:17.040><c> system</c><00:04:17.340><c> is</c><c.colorE5E5E5><00:04:17.940><c> there</c></c><00:04:18.060><c> some</c><c.colorCCCCCC><00:04:18.210><c> part</c><00:04:18.450><c> of</c></c>

00:04:18.450 --> 00:04:18.480 align:start position:0%
the system is<c.colorE5E5E5> there</c> some<c.colorCCCCCC> part of
 </c>

00:04:18.480 --> 00:04:19.500 align:start position:0%
the system is<c.colorE5E5E5> there</c> some<c.colorCCCCCC> part of
you</c><c.colorE5E5E5><00:04:18.600><c> looks</c><00:04:18.870><c> at</c></c><00:04:18.990><c> the</c><c.colorE5E5E5><00:04:19.140><c> the</c></c><00:04:19.500><c> terror</c>

00:04:19.500 --> 00:04:19.770 align:start position:0%
<c.colorCCCCCC>you</c><c.colorE5E5E5> looks at</c> the<c.colorE5E5E5> the</c> terror
 

00:04:19.770 --> 00:04:20.270 align:start position:0%
<c.colorCCCCCC>you</c><c.colorE5E5E5> looks at</c> the<c.colorE5E5E5> the</c> terror
watch<c.colorE5E5E5><00:04:19.860><c> list</c></c>

00:04:20.270 --> 00:04:20.670 align:start position:0%
watch<c.colorE5E5E5> list
 </c>

00:04:20.670 --> 00:04:22.650 align:start position:0%
watch<c.colorE5E5E5> list</c>
legislation<c.colorCCCCCC><00:04:21.180><c> and</c><00:04:21.390><c> things</c></c><c.colorE5E5E5><00:04:22.260><c> am</c></c><00:04:22.650><c> i</c>

00:04:22.650 --> 00:04:22.740 align:start position:0%
legislation<c.colorCCCCCC> and things</c><c.colorE5E5E5> am</c> i
 

00:04:22.740 --> 00:04:24.420 align:start position:0%
legislation<c.colorCCCCCC> and things</c><c.colorE5E5E5> am</c> i
doing<c.colorCCCCCC><00:04:23.340><c> am</c></c><c.colorE5E5E5><00:04:23.550><c> I</c></c><00:04:23.640><c> promulgating</c><00:04:24.420><c> the</c>

00:04:24.420 --> 00:04:24.540 align:start position:0%
doing<c.colorCCCCCC> am</c><c.colorE5E5E5> I</c> promulgating the
 

00:04:24.540 --> 00:04:27.150 align:start position:0%
doing<c.colorCCCCCC> am</c><c.colorE5E5E5> I</c> promulgating the
kinds<00:04:25.140><c> of</c><00:04:25.200><c> laws</c><00:04:25.830><c> that</c><00:04:26.400><c> in</c><00:04:26.670><c> moments</c><00:04:27.150><c> of</c>

00:04:27.150 --> 00:04:27.180 align:start position:0%
kinds of laws that in moments of
 

00:04:27.180 --> 00:04:28.740 align:start position:0%
kinds of laws that in moments of
crisis<00:04:27.750><c> before</c><c.colorE5E5E5><00:04:27.990><c> have</c></c><00:04:28.410><c> ended</c><00:04:28.740><c> up</c>

00:04:28.740 --> 00:04:28.860 align:start position:0%
crisis before<c.colorE5E5E5> have</c> ended up
 

00:04:28.860 --> 00:04:29.810 align:start position:0%
crisis before<c.colorE5E5E5> have</c> ended up
disproportionately<00:04:29.760><c> affecting</c>

00:04:29.810 --> 00:04:30.210 align:start position:0%
disproportionately affecting
 

00:04:30.210 --> 00:04:31.440 align:start position:0%
disproportionately affecting
certain<00:04:30.360><c> populations</c><00:04:31.140><c> which</c><00:04:31.290><c> is</c><00:04:31.440><c> to</c>

00:04:31.440 --> 00:04:31.560 align:start position:0%
certain populations which is to
 

00:04:31.560 --> 00:04:32.810 align:start position:0%
certain populations which is to
say<00:04:31.650><c> in</c><00:04:32.580><c> this</c><00:04:32.730><c> case</c>

00:04:32.810 --> 00:04:33.210 align:start position:0%
say in this case
 

00:04:33.210 --> 00:04:35.670 align:start position:0%
say in this case
<c.colorCCCCCC>muslim-americans</c><c.colorE5E5E5><00:04:35.220><c> folks</c></c><00:04:35.580><c> of</c><00:04:35.670><c> the</c>

00:04:35.670 --> 00:04:35.730 align:start position:0%
<c.colorCCCCCC>muslim-americans</c><c.colorE5E5E5> folks</c> of the
 

00:04:35.730 --> 00:04:36.420 align:start position:0%
<c.colorCCCCCC>muslim-americans</c><c.colorE5E5E5> folks</c> of the
<c.colorCCCCCC>Muslim</c><00:04:36.000><c> faith</c><00:04:36.090><c> that</c><00:04:36.420><c> are</c>

00:04:36.420 --> 00:04:36.540 align:start position:0%
<c.colorCCCCCC>Muslim</c> faith that are
 

00:04:36.540 --> 00:04:37.350 align:start position:0%
<c.colorCCCCCC>Muslim</c> faith that are
disproportionately<00:04:37.290><c> on</c><00:04:37.350><c> those</c>

00:04:37.350 --> 00:04:37.560 align:start position:0%
disproportionately on those
 

00:04:37.560 --> 00:04:38.180 align:start position:0%
disproportionately on those
<c.colorE5E5E5>kinds</c><00:04:37.830><c> of</c><00:04:37.860><c> lists</c>

00:04:38.180 --> 00:04:38.580 align:start position:0%
<c.colorE5E5E5>kinds</c> of lists
 

00:04:38.580 --> 00:04:39.690 align:start position:0%
<c.colorE5E5E5>kinds</c> of lists
can<00:04:38.730><c> you</c><00:04:38.820><c> imagine</c><00:04:38.970><c> if</c><00:04:39.540><c> this</c><00:04:39.690><c> law</c>

00:04:39.690 --> 00:04:39.900 align:start position:0%
can you imagine if this law
 

00:04:39.900 --> 00:04:41.840 align:start position:0%
can you imagine if this law
<c.colorE5E5E5>passed</c><00:04:40.380><c> essentially</c><00:04:41.130><c> the</c><00:04:41.820><c> hammer</c>

00:04:41.840 --> 00:04:42.240 align:start position:0%
<c.colorE5E5E5>passed</c> essentially the hammer
 

00:04:42.240 --> 00:04:43.340 align:start position:0%
<c.colorE5E5E5>passed</c> essentially the hammer
being<00:04:42.510><c> brought</c><00:04:42.780><c> down</c><00:04:42.840><c> on</c><00:04:43.140><c> a</c><00:04:43.230><c> small</c>

00:04:43.340 --> 00:04:43.740 align:start position:0%
being brought down on a small
 

00:04:43.740 --> 00:04:45.360 align:start position:0%
being brought down on a small
<c.colorCCCCCC>marginalized</c><c.colorE5E5E5><00:04:44.970><c> section</c></c><00:04:45.270><c> of</c><c.colorCCCCCC><00:04:45.360><c> america</c></c>

00:04:45.360 --> 00:04:45.750 align:start position:0%
<c.colorCCCCCC>marginalized</c><c.colorE5E5E5> section</c> of<c.colorCCCCCC> america
 </c>

00:04:45.750 --> 00:04:47.630 align:start position:0%
<c.colorCCCCCC>marginalized</c><c.colorE5E5E5> section</c> of<c.colorCCCCCC> america</c>
<c.colorE5E5E5>who</c><c.colorCCCCCC><00:04:46.530><c> is</c></c><00:04:46.860><c> so</c><00:04:47.070><c> first</c><00:04:47.340><c> of</c><00:04:47.400><c> all</c><c.colorCCCCCC><00:04:47.430><c> I</c></c>

00:04:47.630 --> 00:04:48.030 align:start position:0%
<c.colorE5E5E5>who</c><c.colorCCCCCC> is</c> so first of all<c.colorCCCCCC> I
 </c>

00:04:48.030 --> 00:04:49.260 align:start position:0%
<c.colorE5E5E5>who</c><c.colorCCCCCC> is</c> so first of all<c.colorCCCCCC> I</c>
absolutely<00:04:48.600><c> have</c><00:04:48.810><c> always</c><00:04:49.200><c> had</c><00:04:49.260><c> a</c>

00:04:49.260 --> 00:04:49.350 align:start position:0%
absolutely have always had a
 

00:04:49.350 --> 00:04:50.210 align:start position:0%
absolutely have always had a
problem<c.colorCCCCCC><00:04:49.530><c> people</c></c>

00:04:50.210 --> 00:04:50.610 align:start position:0%
problem<c.colorCCCCCC> people
 </c>

00:04:50.610 --> 00:04:51.750 align:start position:0%
problem<c.colorCCCCCC> people</c>
<c.colorE5E5E5>I</c><00:04:50.730><c> had</c><00:04:51.060><c> this</c><00:04:51.150><c> idea</c><c.colorCCCCCC><00:04:51.270><c> first</c><00:04:51.630><c> we'll</c></c><c.colorE5E5E5><00:04:51.750><c> even</c></c>

00:04:51.750 --> 00:04:51.870 align:start position:0%
<c.colorE5E5E5>I</c> had this idea<c.colorCCCCCC> first we'll</c><c.colorE5E5E5> even
 </c>

00:04:51.870 --> 00:04:53.520 align:start position:0%
<c.colorE5E5E5>I</c> had this idea<c.colorCCCCCC> first we'll</c><c.colorE5E5E5> even</c>
<c.colorCCCCCC>a</c><c.colorE5E5E5><00:04:51.930><c> terrorist</c></c><00:04:52.350><c> watch</c><00:04:52.560><c> list</c><00:04:52.920><c> itself</c><c.colorCCCCCC><00:04:53.520><c> or</c></c>

00:04:53.520 --> 00:04:53.730 align:start position:0%
<c.colorCCCCCC>a</c><c.colorE5E5E5> terrorist</c> watch list itself<c.colorCCCCCC> or
 </c>

00:04:53.730 --> 00:04:55.790 align:start position:0%
<c.colorCCCCCC>a</c><c.colorE5E5E5> terrorist</c> watch list itself<c.colorCCCCCC> or</c>
<c.colorE5E5E5>the</c><c.colorCCCCCC><00:04:53.790><c> no-fly</c><00:04:54.120><c> list</c></c><00:04:54.960><c> rather</c><c.colorCCCCCC><00:04:55.170><c> i</c></c><00:04:55.710><c> had</c>

00:04:55.790 --> 00:04:56.190 align:start position:0%
<c.colorE5E5E5>the</c><c.colorCCCCCC> no-fly list</c> rather<c.colorCCCCCC> i</c> had
 

00:04:56.190 --> 00:04:56.970 align:start position:0%
<c.colorE5E5E5>the</c><c.colorCCCCCC> no-fly list</c> rather<c.colorCCCCCC> i</c> had
some<00:04:56.340><c> problems</c><00:04:56.760><c> we've</c><00:04:56.970><c> seen</c>

00:04:56.970 --> 00:04:57.240 align:start position:0%
some problems we've seen
 

00:04:57.240 --> 00:04:58.400 align:start position:0%
some problems we've seen
mistakes<00:04:57.690><c> being</c><00:04:57.870><c> made</c>

00:04:58.400 --> 00:04:58.800 align:start position:0%
mistakes being made
 

00:04:58.800 --> 00:04:59.820 align:start position:0%
mistakes being made
<c.colorCCCCCC>I</c><00:04:58.860><c> do</c><00:04:59.400><c> worry</c><00:04:59.790><c> about</c><00:04:59.820><c> the</c>

00:04:59.820 --> 00:05:00.120 align:start position:0%
<c.colorCCCCCC>I</c> do worry about the
 

00:05:00.120 --> 00:05:01.130 align:start position:0%
<c.colorCCCCCC>I</c> do worry about the
discrimination<00:05:00.780><c> being</c><00:05:01.110><c> unyielding</c>

00:05:01.130 --> 00:05:01.530 align:start position:0%
discrimination being unyielding
 

00:05:01.530 --> 00:05:03.860 align:start position:0%
discrimination being unyielding
be<00:05:02.400><c> wielded</c><00:05:02.880><c> against</c><c.colorE5E5E5><00:05:03.270><c> vulnerable</c></c>

00:05:03.860 --> 00:05:04.260 align:start position:0%
be wielded against<c.colorE5E5E5> vulnerable
 </c>

00:05:04.260 --> 00:05:05.580 align:start position:0%
be wielded against<c.colorE5E5E5> vulnerable</c>
populations<c.colorCCCCCC><00:05:05.070><c> but</c></c><c.colorE5E5E5><00:05:05.490><c> the</c></c><c.colorCCCCCC><00:05:05.580><c> Feinstein</c></c>

00:05:05.580 --> 00:05:05.940 align:start position:0%
populations<c.colorCCCCCC> but</c><c.colorE5E5E5> the</c><c.colorCCCCCC> Feinstein
 </c>

00:05:05.940 --> 00:05:07.590 align:start position:0%
populations<c.colorCCCCCC> but</c><c.colorE5E5E5> the</c><c.colorCCCCCC> Feinstein</c>
bill<00:05:06.150><c> actually</c><00:05:06.420><c> had</c><00:05:06.990><c> a</c><00:05:07.380><c> due</c><00:05:07.590><c> process</c>

00:05:07.590 --> 00:05:07.860 align:start position:0%
bill actually had a due process
 

00:05:07.860 --> 00:05:09.960 align:start position:0%
bill actually had a due process
elements<00:05:08.490><c> built</c><00:05:08.790><c> into</c><00:05:09.150><c> it</c><c.colorE5E5E5><00:05:09.330><c> to</c></c><00:05:09.900><c> try</c><c.colorE5E5E5><00:05:09.960><c> to</c></c>

00:05:09.960 --> 00:05:10.140 align:start position:0%
elements built into it<c.colorE5E5E5> to</c> try<c.colorE5E5E5> to
 </c>

00:05:10.140 --> 00:05:11.060 align:start position:0%
elements built into it<c.colorE5E5E5> to</c> try<c.colorE5E5E5> to</c>
keep<00:05:10.350><c> us</c><00:05:10.560><c> safe</c>

00:05:11.060 --> 00:05:11.460 align:start position:0%
keep us safe
 

00:05:11.460 --> 00:05:12.530 align:start position:0%
keep us safe
it<00:05:11.700><c> actually</c><c.colorE5E5E5><00:05:11.910><c> had</c></c><00:05:12.150><c> transparency</c>

00:05:12.530 --> 00:05:12.930 align:start position:0%
it actually<c.colorE5E5E5> had</c> transparency
 

00:05:12.930 --> 00:05:14.220 align:start position:0%
it actually<c.colorE5E5E5> had</c> transparency
built<00:05:13.230><c> into</c><00:05:13.470><c> it</c><00:05:13.650><c> so</c><00:05:13.680><c> that</c><00:05:13.950><c> watch</c><00:05:14.220><c> dogs</c>

00:05:14.220 --> 00:05:14.340 align:start position:0%
built into it so that watch dogs
 

00:05:14.340 --> 00:05:15.750 align:start position:0%
built into it so that watch dogs
like<00:05:14.760><c> you</c><00:05:15.000><c> and</c><00:05:15.180><c> frankly</c><00:05:15.480><c> I</c><00:05:15.570><c> like</c><00:05:15.750><c> to</c>

00:05:15.750 --> 00:05:15.840 align:start position:0%
like you and frankly I like to
 

00:05:15.840 --> 00:05:17.480 align:start position:0%
like you and frankly I like to
think<c.colorE5E5E5><00:05:15.930><c> of</c></c><00:05:16.020><c> myself</c><00:05:16.080><c> as</c><00:05:16.500><c> well</c><00:05:16.800><c> I</c><00:05:17.460><c> could</c>

00:05:17.480 --> 00:05:17.880 align:start position:0%
think<c.colorE5E5E5> of</c> myself as well I could
 

00:05:17.880 --> 00:05:19.400 align:start position:0%
think<c.colorE5E5E5> of</c> myself as well I could
expose<00:05:18.180><c> problems</c><00:05:19.110><c> with</c><00:05:19.290><c> it</c>

00:05:19.400 --> 00:05:19.800 align:start position:0%
expose problems with it
 

00:05:19.800 --> 00:05:20.990 align:start position:0%
expose problems with it
so<c.colorE5E5E5><00:05:19.980><c> this</c></c><00:05:20.160><c> was</c><00:05:20.400><c> not</c><00:05:20.640><c> what</c><00:05:20.820><c> Republicans</c>

00:05:20.990 --> 00:05:21.390 align:start position:0%
so<c.colorE5E5E5> this</c> was not what Republicans
 

00:05:21.390 --> 00:05:22.320 align:start position:0%
so<c.colorE5E5E5> this</c> was not what Republicans
tried<00:05:21.690><c> some</c><00:05:21.870><c> trying</c><00:05:22.110><c> to</c><00:05:22.170><c> say</c><00:05:22.320><c> is</c>

00:05:22.320 --> 00:05:22.440 align:start position:0%
tried some trying to say is
 

00:05:22.440 --> 00:05:23.070 align:start position:0%
tried some trying to say is
getting<00:05:22.680><c> rid</c><00:05:22.890><c> of</c><00:05:22.950><c> due</c><00:05:23.070><c> process</c>

00:05:23.070 --> 00:05:23.190 align:start position:0%
getting rid of due process
 

00:05:23.190 --> 00:05:25.290 align:start position:0%
getting rid of due process
<c.colorE5E5E5>altogether</c><c.colorCCCCCC><00:05:23.820><c> there</c></c><00:05:24.930><c> was</c><00:05:25.080><c> some</c><00:05:25.290><c> of</c>

00:05:25.290 --> 00:05:25.410 align:start position:0%
<c.colorE5E5E5>altogether</c><c.colorCCCCCC> there</c> was some of
 

00:05:25.410 --> 00:05:26.520 align:start position:0%
<c.colorE5E5E5>altogether</c><c.colorCCCCCC> there</c> was some of
that<00:05:25.560><c> baked</c><00:05:25.920><c> into</c><00:05:26.070><c> this</c><00:05:26.250><c> system</c><00:05:26.520><c> with</c>

00:05:26.520 --> 00:05:26.820 align:start position:0%
that baked into this system with
 

00:05:26.820 --> 00:05:27.300 align:start position:0%
that baked into this system with
which<00:05:26.940><c> we</c><00:05:27.090><c> could</c><00:05:27.210><c> have</c><00:05:27.300><c> done</c>

00:05:27.300 --> 00:05:27.420 align:start position:0%
which we could have done
 

00:05:27.420 --> 00:05:27.920 align:start position:0%
which we could have done
something

00:05:27.920 --> 00:05:28.320 align:start position:0%
something
 

00:05:28.320 --> 00:05:30.200 align:start position:0%
something
and<00:05:28.560><c> so</c><c.colorCCCCCC><00:05:28.710><c> I</c></c><00:05:28.980><c> do</c><00:05:29.520><c> have</c><00:05:29.640><c> a</c><00:05:29.760><c> problem</c><c.colorE5E5E5><00:05:30.120><c> right</c></c>

00:05:30.200 --> 00:05:30.600 align:start position:0%
and so<c.colorCCCCCC> I</c> do have a problem<c.colorE5E5E5> right
 </c>

00:05:30.600 --> 00:05:31.010 align:start position:0%
and so<c.colorCCCCCC> I</c> do have a problem<c.colorE5E5E5> right</c>
now

00:05:31.010 --> 00:05:31.410 align:start position:0%
now
 

00:05:31.410 --> 00:05:32.520 align:start position:0%
now
<c.colorE5E5E5>and</c><00:05:31.590><c> by</c><00:05:31.680><c> the</c><00:05:31.740><c> way</c><00:05:31.830><c> this</c><00:05:32.040><c> isn't</c><00:05:32.370><c> just</c><00:05:32.520><c> a</c>

00:05:32.520 --> 00:05:32.580 align:start position:0%
<c.colorE5E5E5>and</c> by the way this isn't just a
 

00:05:32.580 --> 00:05:33.900 align:start position:0%
<c.colorE5E5E5>and</c> by the way this isn't just a
problem<00:05:33.330><c> all</c><00:05:33.510><c> this</c><00:05:33.660><c> talk</c><00:05:33.900><c> about</c>

00:05:33.900 --> 00:05:33.960 align:start position:0%
problem all this talk about
 

00:05:33.960 --> 00:05:35.030 align:start position:0%
problem all this talk about
terrorism<00:05:34.470><c> this</c><00:05:34.740><c> week</c>

00:05:35.030 --> 00:05:35.430 align:start position:0%
terrorism this week
 

00:05:35.430 --> 00:05:36.870 align:start position:0%
terrorism this week
please<00:05:35.700><c> know</c><00:05:35.910><c> that</c><00:05:36.480><c> when</c><c.colorE5E5E5><00:05:36.720><c> I</c><00:05:36.750><c> had</c></c><00:05:36.870><c> a</c>

00:05:36.870 --> 00:05:36.900 align:start position:0%
please know that when<c.colorE5E5E5> I had</c> a
 

00:05:36.900 --> 00:05:38.040 align:start position:0%
please know that when<c.colorE5E5E5> I had</c> a
chance<c.colorE5E5E5><00:05:36.960><c> in</c></c><00:05:37.320><c> private</c><00:05:37.710><c> to</c><00:05:37.770><c> talk</c><00:05:37.800><c> to</c><00:05:38.040><c> my</c>

00:05:38.040 --> 00:05:38.160 align:start position:0%
chance<c.colorE5E5E5> in</c> private to talk to my
 

00:05:38.160 --> 00:05:38.750 align:start position:0%
chance<c.colorE5E5E5> in</c> private to talk to my
caucus

00:05:38.750 --> 00:05:39.150 align:start position:0%
caucus
 

00:05:39.150 --> 00:05:41.360 align:start position:0%
caucus
<c.colorCCCCCC>I</c><00:05:39.270><c> made</c><00:05:39.750><c> it</c><00:05:39.810><c> very</c><00:05:40.050><c> clear</c><00:05:40.140><c> that</c><00:05:40.800><c> there</c>

00:05:41.360 --> 00:05:41.760 align:start position:0%
<c.colorCCCCCC>I</c> made it very clear that there
 

00:05:41.760 --> 00:05:43.200 align:start position:0%
<c.colorCCCCCC>I</c> made it very clear that there
are<00:05:42.240><c> every</c><00:05:42.630><c> single</c><00:05:42.930><c> day</c><00:05:43.110><c> in</c><00:05:43.200><c> our</c>

00:05:43.200 --> 00:05:43.350 align:start position:0%
are every single day in our
 

00:05:43.350 --> 00:05:44.820 align:start position:0%
are every single day in our
country<c.colorCCCCCC><00:05:43.890><c> for</c></c><00:05:44.160><c> every</c><00:05:44.520><c> single</c><00:05:44.820><c> day</c>

00:05:44.820 --> 00:05:45.000 align:start position:0%
country<c.colorCCCCCC> for</c> every single day
 

00:05:45.000 --> 00:05:46.040 align:start position:0%
country<c.colorCCCCCC> for</c> every single day
people<00:05:45.390><c> being</c><00:05:45.630><c> murdered</c>

00:05:46.040 --> 00:05:46.440 align:start position:0%
people being murdered
 

00:05:46.440 --> 00:05:48.360 align:start position:0%
people being murdered
<c.colorCCCCCC>uh<00:05:46.470><c> because</c></c><c.colorE5E5E5><00:05:47.520><c> criminals</c></c><00:05:48.000><c> can</c><00:05:48.360><c> so</c>

00:05:48.360 --> 00:05:48.510 align:start position:0%
<c.colorCCCCCC>uh because</c><c.colorE5E5E5> criminals</c> can so
 

00:05:48.510 --> 00:05:49.500 align:start position:0%
<c.colorCCCCCC>uh because</c><c.colorE5E5E5> criminals</c> can so
easily<00:05:48.600><c> get</c><00:05:49.080><c> their</c><00:05:49.200><c> hands</c><00:05:49.440><c> on</c><c.colorE5E5E5><00:05:49.500><c> their</c></c>

00:05:49.500 --> 00:05:49.650 align:start position:0%
easily get their hands on<c.colorE5E5E5> their
 </c>

00:05:49.650 --> 00:05:50.450 align:start position:0%
easily get their hands on<c.colorE5E5E5> their</c>
<c.colorCCCCCC>got</c><00:05:49.890><c> on</c><00:05:50.070><c> guns</c>

00:05:50.450 --> 00:05:50.850 align:start position:0%
<c.colorCCCCCC>got</c> on guns
 

00:05:50.850 --> 00:05:52.310 align:start position:0%
<c.colorCCCCCC>got</c> on guns
women<00:05:51.240><c> are</c><00:05:51.630><c> being</c><00:05:51.780><c> murdered</c><c.colorCCCCCC><00:05:52.020><c> every</c></c>

00:05:52.310 --> 00:05:52.710 align:start position:0%
women are being murdered<c.colorCCCCCC> every
 </c>

00:05:52.710 --> 00:05:53.550 align:start position:0%
women are being murdered<c.colorCCCCCC> every</c>
<c.colorE5E5E5>year</c><00:05:52.920><c> in</c><00:05:53.010><c> our</c><00:05:53.100><c> country</c><00:05:53.550><c> because</c>

00:05:53.550 --> 00:05:53.730 align:start position:0%
<c.colorE5E5E5>year</c> in our country because
 

00:05:53.730 --> 00:05:56.240 align:start position:0%
<c.colorE5E5E5>year</c> in our country because
their<00:05:54.030><c> abusers</c><c.colorE5E5E5><00:05:54.750><c> their</c></c><00:05:55.230><c> stalkers</c><00:05:55.800><c> are</c>

00:05:56.240 --> 00:05:56.640 align:start position:0%
their abusers<c.colorE5E5E5> their</c> stalkers are
 

00:05:56.640 --> 00:05:57.870 align:start position:0%
their abusers<c.colorE5E5E5> their</c> stalkers are
who<00:05:56.910><c> are</c><00:05:57.090><c> otherwise</c><c.colorCCCCCC><00:05:57.390><c> banned</c></c><00:05:57.870><c> from</c>

00:05:57.870 --> 00:05:57.960 align:start position:0%
who are otherwise<c.colorCCCCCC> banned</c> from
 

00:05:57.960 --> 00:05:58.950 align:start position:0%
who are otherwise<c.colorCCCCCC> banned</c> from
<c.colorE5E5E5>getting</c><00:05:58.200><c> guns</c><c.colorCCCCCC><00:05:58.350><c> to</c><00:05:58.950><c> brick-and-mortar</c></c>

00:05:58.950 --> 00:05:59.220 align:start position:0%
<c.colorE5E5E5>getting</c> guns<c.colorCCCCCC> to brick-and-mortar
 </c>

00:05:59.220 --> 00:06:00.960 align:start position:0%
<c.colorE5E5E5>getting</c> guns<c.colorCCCCCC> to brick-and-mortar
stores</c><00:05:59.970><c> can</c><00:06:00.120><c> go</c><00:06:00.240><c> to</c><00:06:00.360><c> gun</c><00:06:00.540><c> shows</c><00:06:00.960><c> and</c>

00:06:00.960 --> 00:06:01.320 align:start position:0%
<c.colorCCCCCC>stores</c> can go to gun shows and
 

00:06:01.320 --> 00:06:02.510 align:start position:0%
<c.colorCCCCCC>stores</c> can go to gun shows and
acquire<00:06:01.710><c> gun</c><00:06:01.950><c> so</c><00:06:02.100><c> easily</c>

00:06:02.510 --> 00:06:02.910 align:start position:0%
acquire gun so easily
 

00:06:02.910 --> 00:06:03.770 align:start position:0%
acquire gun so easily
so<00:06:03.030><c> we</c><00:06:03.150><c> have</c><00:06:03.240><c> a</c><00:06:03.270><c> massive</c><00:06:03.750><c> problem</c>

00:06:03.770 --> 00:06:04.170 align:start position:0%
so we have a massive problem
 

00:06:04.170 --> 00:06:05.400 align:start position:0%
so we have a massive problem
with<c.colorCCCCCC><00:06:04.590><c> with</c></c><c.colorE5E5E5><00:06:04.890><c> violence</c></c><00:06:05.310><c> in</c><00:06:05.400><c> our</c>

00:06:05.400 --> 00:06:05.430 align:start position:0%
with<c.colorCCCCCC> with</c><c.colorE5E5E5> violence</c> in our
 

00:06:05.430 --> 00:06:06.690 align:start position:0%
with<c.colorCCCCCC> with</c><c.colorE5E5E5> violence</c> in our
communities<00:06:06.000><c> as</c><00:06:06.180><c> long</c><00:06:06.420><c> as</c><00:06:06.570><c> we</c><00:06:06.690><c> have</c>

00:06:06.690 --> 00:06:06.870 align:start position:0%
communities as long as we have
 

00:06:06.870 --> 00:06:08.130 align:start position:0%
communities as long as we have
these<c.colorCCCCCC><00:06:07.230><c> gaping</c></c><00:06:07.650><c> loopholes</c><00:06:08.130><c> which</c>

00:06:08.130 --> 00:06:08.190 align:start position:0%
these<c.colorCCCCCC> gaping</c> loopholes which
 

00:06:08.190 --> 00:06:09.620 align:start position:0%
these<c.colorCCCCCC> gaping</c> loopholes which
<c.colorCCCCCC>terrorists</c><00:06:08.730><c> can</c><00:06:08.850><c> exploit</c><c.colorCCCCCC><00:06:09.240><c> soaking</c></c>

00:06:09.620 --> 00:06:10.020 align:start position:0%
<c.colorCCCCCC>terrorists</c> can exploit<c.colorCCCCCC> soaking
 </c>

00:06:10.020 --> 00:06:11.990 align:start position:0%
<c.colorCCCCCC>terrorists</c> can exploit<c.colorCCCCCC> soaking</c>
criminals<00:06:10.590><c> as</c><00:06:10.800><c> well</c><c.colorE5E5E5><00:06:11.100><c> and</c></c><c.colorCCCCCC><00:06:11.760><c> and</c></c><c.colorE5E5E5><00:06:11.910><c> cities</c></c>

00:06:11.990 --> 00:06:12.390 align:start position:0%
criminals as well<c.colorE5E5E5> and</c><c.colorCCCCCC> and</c><c.colorE5E5E5> cities
 </c>

00:06:12.390 --> 00:06:13.530 align:start position:0%
criminals as well<c.colorE5E5E5> and</c><c.colorCCCCCC> and</c><c.colorE5E5E5> cities
like</c><00:06:12.600><c> the</c><00:06:12.720><c> one</c><00:06:12.900><c> I</c><00:06:12.960><c> was</c><00:06:13.200><c> the</c><00:06:13.320><c> mayor</c><00:06:13.530><c> of</c>

00:06:13.530 --> 00:06:13.710 align:start position:0%
<c.colorE5E5E5>like</c> the one I was the mayor of
 

00:06:13.710 --> 00:06:15.270 align:start position:0%
<c.colorE5E5E5>like</c> the one I was the mayor of
<c.colorCCCCCC>that<00:06:14.400><c> I</c></c><00:06:14.430><c> was</c><c.colorCCCCCC><00:06:14.760><c> standing</c></c><c.colorE5E5E5><00:06:15.120><c> in</c></c><c.colorCCCCCC><00:06:15.270><c> fact</c></c>

00:06:15.270 --> 00:06:15.540 align:start position:0%
<c.colorCCCCCC>that I</c> was<c.colorCCCCCC> standing</c><c.colorE5E5E5> in</c><c.colorCCCCCC> fact
 </c>

00:06:15.540 --> 00:06:17.160 align:start position:0%
<c.colorCCCCCC>that I</c> was<c.colorCCCCCC> standing</c><c.colorE5E5E5> in</c><c.colorCCCCCC> fact</c>
<c.colorE5E5E5>today</c><00:06:15.780><c> at</c><00:06:16.080><c> a</c><00:06:16.140><c> rally</c><c.colorE5E5E5><00:06:16.410><c> where</c><00:06:17.100><c> the</c></c><00:06:17.160><c> law</c>

00:06:17.160 --> 00:06:17.310 align:start position:0%
<c.colorE5E5E5>today</c> at a rally<c.colorE5E5E5> where the</c> law
 

00:06:17.310 --> 00:06:18.600 align:start position:0%
<c.colorE5E5E5>today</c> at a rally<c.colorE5E5E5> where the</c> law
enforcement<00:06:17.850><c> stood</c><00:06:18.300><c> up</c><00:06:18.480><c> and</c><00:06:18.600><c> said</c>

00:06:18.600 --> 00:06:18.750 align:start position:0%
enforcement stood up and said
 

00:06:18.750 --> 00:06:19.950 align:start position:0%
enforcement stood up and said
the<00:06:18.900><c> overwhelming</c><00:06:19.440><c> majority</c><00:06:19.500><c> of</c><00:06:19.950><c> the</c>

00:06:19.950 --> 00:06:20.100 align:start position:0%
the overwhelming majority of the
 

00:06:20.100 --> 00:06:21.590 align:start position:0%
the overwhelming majority of the
guns<00:06:20.460><c> being</c><00:06:20.610><c> used</c><00:06:20.970><c> in</c><00:06:21.030><c> crimes</c><00:06:21.420><c> are</c>

00:06:21.590 --> 00:06:21.990 align:start position:0%
guns being used in crimes are
 

00:06:21.990 --> 00:06:22.940 align:start position:0%
guns being used in crimes are
not<00:06:22.140><c> coming</c><00:06:22.410><c> from</c><c.colorCCCCCC><00:06:22.530><c> New</c><00:06:22.740><c> Jersey</c></c><c.colorE5E5E5><00:06:22.920><c> where</c></c>

00:06:22.940 --> 00:06:23.340 align:start position:0%
not coming from<c.colorCCCCCC> New Jersey</c><c.colorE5E5E5> where
 </c>

00:06:23.340 --> 00:06:23.930 align:start position:0%
not coming from<c.colorCCCCCC> New Jersey</c><c.colorE5E5E5> where</c>
we<00:06:23.460><c> have</c><00:06:23.550><c> strong</c>

00:06:23.930 --> 00:06:24.330 align:start position:0%
we have strong
 

00:06:24.330 --> 00:06:26.550 align:start position:0%
we have strong
<c.colorE5E5E5>uh<00:06:24.390><c> laws</c></c><00:06:25.350><c> against</c><00:06:25.770><c> acquiring</c><c.colorCCCCCC><00:06:26.550><c> god</c></c>

00:06:26.550 --> 00:06:26.870 align:start position:0%
<c.colorE5E5E5>uh laws</c> against acquiring<c.colorCCCCCC> god
 </c>

00:06:26.870 --> 00:06:28.060 align:start position:0%
<c.colorE5E5E5>uh laws</c> against acquiring<c.colorCCCCCC> god</c>
without<00:06:27.110><c> background</c><00:06:27.440><c> checks</c><c.colorCCCCCC><00:06:27.650><c> were</c></c>

00:06:28.060 --> 00:06:28.460 align:start position:0%
without background checks<c.colorCCCCCC> were
 </c>

00:06:28.460 --> 00:06:29.900 align:start position:0%
without background checks<c.colorCCCCCC> were</c>
<c.colorE5E5E5>coming</c><00:06:28.760><c> from</c><c.colorCCCCCC><00:06:28.850><c> states</c></c><c.colorE5E5E5><00:06:29.600><c> I</c><00:06:29.630><c> have</c></c><00:06:29.900><c> very</c>

00:06:29.900 --> 00:06:30.020 align:start position:0%
<c.colorE5E5E5>coming</c> from<c.colorCCCCCC> states</c><c.colorE5E5E5> I have</c> very
 

00:06:30.020 --> 00:06:31.210 align:start position:0%
<c.colorE5E5E5>coming</c> from<c.colorCCCCCC> states</c><c.colorE5E5E5> I have</c> very
<c.colorCCCCCC>lacks</c><00:06:30.680><c> laws</c>

00:06:31.210 --> 00:06:31.610 align:start position:0%
<c.colorCCCCCC>lacks</c> laws
 

00:06:31.610 --> 00:06:32.630 align:start position:0%
<c.colorCCCCCC>lacks</c> laws
<c.colorE5E5E5>all<00:06:31.940><c> right</c><00:06:32.060><c> senator</c></c><c.colorCCCCCC><00:06:32.300><c> Corrie</c><00:06:32.630><c> Booker</c></c>

00:06:32.630 --> 00:06:32.690 align:start position:0%
<c.colorE5E5E5>all right senator</c><c.colorCCCCCC> Corrie Booker
 </c>

00:06:32.690 --> 00:06:34.010 align:start position:0%
<c.colorE5E5E5>all right senator</c><c.colorCCCCCC> Corrie Booker
great<00:06:33.320><c> thanks</c></c><c.colorE5E5E5><00:06:33.560><c> four</c></c><00:06:33.680><c> times</c><00:06:33.920><c> and</c><c.colorCCCCCC><00:06:34.010><c> I</c></c>

00:06:34.010 --> 00:06:34.070 align:start position:0%
<c.colorCCCCCC>great thanks</c><c.colorE5E5E5> four</c> times and<c.colorCCCCCC> I
 </c>

00:06:34.070 --> 00:06:34.700 align:start position:0%
<c.colorCCCCCC>great thanks</c><c.colorE5E5E5> four</c> times and<c.colorCCCCCC> I</c>
really<00:06:34.310><c> appreciate</c><00:06:34.700><c> it</c>

00:06:34.700 --> 00:06:35.030 align:start position:0%
really appreciate it
 

00:06:35.030 --> 00:06:35.960 align:start position:0%
really appreciate it
<c.colorCCCCCC>ok</c><00:06:35.360><c> hey</c><00:06:35.480><c> there</c><c.colorCCCCCC><00:06:35.630><c> i'm</c><00:06:35.750><c> chris</c><00:06:35.960><c> hayes</c></c>

00:06:35.960 --> 00:06:36.200 align:start position:0%
<c.colorCCCCCC>ok</c> hey there<c.colorCCCCCC> i'm chris hayes
 </c>

00:06:36.200 --> 00:06:37.400 align:start position:0%
<c.colorCCCCCC>ok</c> hey there<c.colorCCCCCC> i'm chris hayes</c>
<c.colorE5E5E5>from</c><00:06:36.380><c> MSNBC</c><00:06:36.740><c> thanks</c><00:06:37.310><c> for</c><00:06:37.400><c> watching</c>

00:06:37.400 --> 00:06:37.790 align:start position:0%
<c.colorE5E5E5>from</c> MSNBC thanks for watching
 

00:06:37.790 --> 00:06:39.470 align:start position:0%
<c.colorE5E5E5>from</c> MSNBC thanks for watching
MSNBC<00:06:38.150><c> on</c><00:06:38.600><c> youtube</c><00:06:39.170><c> if</c><00:06:39.260><c> you</c><00:06:39.320><c> want</c><00:06:39.470><c> to</c>

00:06:39.470 --> 00:06:39.530 align:start position:0%
MSNBC on youtube if you want to
 

00:06:39.530 --> 00:06:40.340 align:start position:0%
MSNBC on youtube if you want to
keep<00:06:39.620><c> up</c><00:06:39.890><c> to</c><00:06:39.950><c> date</c><00:06:40.070><c> with</c><00:06:40.250><c> the</c><00:06:40.340><c> videos</c>

00:06:40.340 --> 00:06:40.670 align:start position:0%
keep up to date with the videos
 

00:06:40.670 --> 00:06:41.420 align:start position:0%
keep up to date with the videos
<c.colorCCCCCC>were</c><00:06:40.760><c> putting</c><00:06:41.030><c> out</c><c.colorE5E5E5><00:06:41.090><c> you</c></c><00:06:41.300><c> can</c><00:06:41.420><c> click</c>

00:06:41.420 --> 00:06:41.660 align:start position:0%
<c.colorCCCCCC>were</c> putting out<c.colorE5E5E5> you</c> can click
 

00:06:41.660 --> 00:06:43.400 align:start position:0%
<c.colorCCCCCC>were</c> putting out<c.colorE5E5E5> you</c> can click
<c.colorE5E5E5>Subscribe<00:06:42.320><c> just</c></c><00:06:42.500><c> below</c><00:06:42.740><c> me</c><c.colorCCCCCC><00:06:42.950><c> or</c></c><00:06:43.400><c> click</c>

00:06:43.400 --> 00:06:43.640 align:start position:0%
<c.colorE5E5E5>Subscribe just</c> below me<c.colorCCCCCC> or</c> click
 

00:06:43.640 --> 00:06:44.870 align:start position:0%
<c.colorE5E5E5>Subscribe just</c> below me<c.colorCCCCCC> or</c> click
over<00:06:43.820><c> on</c><00:06:43.940><c> this</c><00:06:44.060><c> list</c><00:06:44.420><c> to</c><00:06:44.450><c> see</c><00:06:44.570><c> lots</c><00:06:44.870><c> of</c>

00:06:44.870 --> 00:06:44.990 align:start position:0%
over on this list to see lots of
 

00:06:44.990 --> 00:06:50.990 align:start position:0%
over on this list to see lots of
other<00:06:45.410><c> great</c><00:06:45.620><c> videos</c>`

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
  console.log(sections[30])
});
