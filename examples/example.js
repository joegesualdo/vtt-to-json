const vttToJson = require("./../index.js")

const fileName = __dirname + '/meow.en.vtt';
let s=`WEBVTT
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
<c.colorCCCCCC>Mr.<00:00:09.389><c> turks</c><00:00:09.630><c> you</c><00:00:10.050><c> to</c><00:00:10.260><c> booth</c></c><c.colorE5E5E5><00:00:10.679><c> and</c></c><00:00:10.980><c> is</c>

00:00:10.980 --> 00:00:11.070 align:start position:0%
<c.colorCCCCCC>Mr. turks you to booth</c><c.colorE5E5E5> and</c> is


00:00:11.070 --> 00:00:12.570 align:start position:0%
<c.colorCCCCCC>Mr. turks you to booth</c><c.colorE5E5E5> and</c> is
instantly<00:00:11.580><c> met</c><00:00:11.910><c> by</c><00:00:12.150><c> a</c><00:00:12.179><c> group</c><00:00:12.570><c> of</c>`

let vttString = `01:03:30.773 --> 01:03:36.679
And if not then Russia
will have shown itself

01:03:36.679 --> 01:03:39.382
very clearly to be an
irresponsible actor on a

01:03:39.382 --> 01:03:43.786
world stage that is
supporting a murderous

01:03:43.786 --> 01:03:48.724
regime and will have to be
-- will have to answer to`

let test = `WEBVTT
Kind: captions
Language: en

00:00:05.734 --> 00:00:07.200
The President:
Hi, everybody.

00:00:07.200 --> 00:00:09.500
In recent weeks, you might
have noticed something.

00:00:09.500 --> 00:00:12.900
Or maybe even heard the sound
of it if you live close enough.

00:00:12.900 --> 00:00:14.600
New homes are going up.

00:00:14.600 --> 00:00:17.934
In fact, construction workers
are breaking ground on new homes

00:00:17.934 --> 00:00:21.533
in America at the fastest
pace in more than four years.

00:00:21.533 --> 00:00:24.567
At the same time, more
homes are being sold.

00:00:24.567 --> 00:00:26.333
Home values are
back on the rise.

00:00:26.333 --> 00:00:29.667
And foreclosure filings are at
their lowest point in the five

00:00:29.667 --> 00:00:32.300
years since the housing bubble
burst and left millions of

00:00:32.300 --> 00:00:35.333
responsible families
holding the bag.

00:00:35.333 --> 00:00:37.400
Now, we're not where
we need to be yet.

00:00:37.400 --> 00:00:39.433
Too many homes are
still underwater.

00:00:39.433 --> 00:00:41.667
Too many families are still
having a hard time making the

00:00:41.667 --> 00:00:44.667
mortgage on their piece
of the American Dream.

00:00:44.667 --> 00:00:48.500
But one of the heaviest drags on
our recovery is getting lighter.

00:00:48.500 --> 00:00:50.734
Now we have to build on
the progress we've made,

00:00:50.734 --> 00:00:52.800
and keep moving forward.

00:00:52.800 --> 00:00:54.800
I never believed that the best
way to deal with the housing

00:00:54.800 --> 00:00:57.000
market was to just
sit back, do nothing,

00:00:57.000 --> 00:00:59.567
and simply wait for
things to hit bottom.

00:00:59.567 --> 00:01:02.834
That would have been a disaster
for all the responsible families

00:01:02.834 --> 00:01:04.367
who -- through no
fault of their own --

00:01:04.367 --> 00:01:06.667
were struggling
to make ends meet.

00:01:06.667 --> 00:01:10.367
Instead, I've made helping
those homeowners a priority.

00:01:10.367 --> 00:01:12.667
Since I took office, my
Administration has taken action

00:01:12.667 --> 00:01:15.867
to help millions of families
stay in their homes.

00:01:15.867 --> 00:01:19.033
We teamed up with attorneys
general in almost every state to

00:01:19.033 --> 00:01:21.800
investigate and crack
down on the practices that

00:01:21.800 --> 00:01:23.467
caused this mess.

00:01:23.467 --> 00:01:27.100
And in the end, we secured a
$25 billion settlement from the

00:01:27.100 --> 00:01:30.300
biggest banks -- one of the
biggest settlements in history

00:01:30.300 --> 00:01:34.767
-- and used it to provide relief
to families all across America.

00:01:34.767 --> 00:01:37.400
We've taken action to help
responsible homeowners refinance

00:01:37.400 --> 00:01:38.734
their mortgages.

00:01:38.734 --> 00:01:41.333
As a result, just this year
hundreds of thousands of

00:01:41.333 --> 00:01:43.934
Americans who were stuck in
high-interest loans have been

00:01:43.934 --> 00:01:46.900
able to take advantage of
historically low rates and are

00:01:46.900 --> 00:01:49.834
saving thousands of
dollars every year.

00:01:49.834 --> 00:01:54.300
And now I want every homeowner
in America to have that chance.

00:01:54.300 --> 00:01:56.333
I just wish it didn't
require an act of Congress.

00:01:56.333 --> 00:01:57.333
But it does.

00:01:57.333 --> 00:02:00.500
So, back in February, I sent
Congress a plan to give every

00:02:00.500 --> 00:02:04.633
responsible homeowner the chance
to save about $3,000 a year on

00:02:04.633 --> 00:02:08.066
their mortgage by refinancing
at historically low rates.

00:02:08.066 --> 00:02:11.533
That's the equivalent
of a $3,000 tax cut.

00:02:11.533 --> 00:02:13.433
It's a plan we know will work.

00:02:13.433 --> 00:02:15.000
It has the support
of independent,

00:02:15.000 --> 00:02:17.500
nonpartisan economists
and leaders across the

00:02:17.500 --> 00:02:19.033
housing industry.

00:02:19.033 --> 00:02:22.367
It's a no-brainer that
should have passed easily.

00:02:22.367 --> 00:02:24.934
But Republicans in Congress
banded together and kept this

00:02:24.934 --> 00:02:27.100
plan from even coming to a vote.

00:02:27.100 --> 00:02:29.533
They banded together and
prevented millions of Americans

00:02:29.533 --> 00:02:31.433
-- including many of
you listening today --

00:02:31.433 --> 00:02:34.233
from saving $3,000 a year.

00:02:34.233 --> 00:02:36.233
That's money that could have
gone back into the value of your

00:02:36.233 --> 00:02:39.533
home, or your kid's
college savings account.

00:02:39.533 --> 00:02:42.433
That's money that could have
gone into your local businesses,

00:02:42.433 --> 00:02:46.100
so they could hire and create
more jobs in your town.

00:02:46.100 --> 00:02:49.200
But Republicans in Congress
still won't let that happen.

00:02:49.200 --> 00:02:50.734
And that's only held
back the economy,

00:02:50.734 --> 00:02:53.633
when we should be doing
everything we can to accelerate

00:02:53.633 --> 00:02:55.633
our economic engine.

00:02:55.633 --> 00:02:58.433
Let's be honest -- Republicans
in Congress won't act on this

00:02:58.433 --> 00:03:00.400
plan before the election.

00:03:00.400 --> 00:03:03.700
But maybe they'll come to their
senses afterward if you give`

vttToJson(test)
.then(sections => {
  console.log(sections[67])
});
