# vtt-to-text
A module to convert vtt (WebVTT) to plain text.

## Installation
```bash
npm i -S vtt-to-text
# or use yarn
yarn add vtt-to-text
```

## Example
Input:
```text
captions:  WEBVTT
Kind: captions
Language: en

00:00:00.160 --> 00:00:03.270 align:start position:0%
 
all<00:00:00.240><c> right</c><00:00:00.640><c> last</c><00:00:01.599><c> apple</c><00:00:02.159><c> story</c><00:00:02.560><c> of</c><00:00:02.639><c> the</c><00:00:02.800><c> day</c>

00:00:03.270 --> 00:00:03.280 align:start position:0%
all right last apple story of the day
```

Output:
```text
all right last apple story of the day
```

## Usage

```javascript
const {vttToPlainText} = require("vtt-to-text")

const captionVtt1 = `
captions:  WEBVTT
Kind: captions
Language: en

00:00:00.160 --> 00:00:03.270 align:start position:0%
all<00:00:00.240><c> right</c><00:00:00.640><c> last</c><00:00:01.599><c> apple</c><00:00:02.159><c> story</c><00:00:02.560><c> of</c><00:00:02.639><c> the</c><00:00:02.800><c> day</c>
`

let a = vttToPlainText(captionVtt1);
console.log(a);
```
