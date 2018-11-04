# @qc/date-round

Rounds a date to the nearest interval from 1 milliseconds up to 24 hours.


## Installation

```sh
npm install @qc/date-round

# or
yarn add @qc/date-round
```


## Examples

**Nearest Hour**

```js
import { round } from '@qc/date-round'

let date = new Date(Date.UTC(2000, 0, 1, 2, 34, 56))
console.log(date) // 2000-01-01T02:34:56
let interval = 60 * 60 * 1000
date = round(date, interval)
console.log(date) // 2000-01-01T03:00:00
```

**Nearest Half Hour**

```js
import { round } from '@qc/date-round'

let date = new Date(Date.UTC(2000, 0, 1, 2, 34, 56))
console.log(date) // 2000-01-01T02:34:56
let interval = 30 * 60 * 1000
date = round(date, interval)
console.log(date) // 2000-01-01T02:30:00
```

**Nearest 15 Minutes**

```js
import { round } from '@qc/date-round'

let date = new Date(Date.UTC(2000, 0, 1, 2, 34, 56))
console.log(date) // 2000-01-01T02:34:56
let interval = 15 * 60 * 1000
date = round(date, interval)
console.log(date) // 2000-01-01T02:30:00
```

**Nearest Ten Minutes**

```js
import { round } from '@qc/date-round'

let date = new Date(Date.UTC(2000, 0, 1, 2, 34, 56))
console.log(date) // 2000-01-01T02:34:56
let interval = 10 * 60 * 1000
date = round(date, interval)
console.log(date) // 2000-01-01T02:30:00
```

**Nearest Five Minutes**

```js
import { round } from '@qc/date-round'

let date = new Date(Date.UTC(2000, 0, 1, 2, 34, 56))
console.log(date) // 2000-01-01T02:34:56
let interval = 5 * 60 * 1000
date = round(date, interval)
console.log(date) // 2000-01-01T02:35:00
```

**Nearest Minute**

```js
import { round } from '@qc/date-round'

let date = new Date(Date.UTC(2000, 0, 1, 2, 34, 56))
console.log(date) // 2000-01-01T02:34:56
let interval = 60 * 1000
date = round(date, interval)
console.log(date) // 2000-01-01T02:35:00
```

**Nearest Second**

```js
import { round } from '@qc/date-round'

let date = new Date(Date.UTC(2000, 0, 1, 2, 34, 56))
date.setMilliseconds(789)
console.log(date) // 2000-01-01T02:34:56.789
let interval = 1000
date = round(date, interval)
console.log(date) // 2000-01-01T02:35:57
```

**Nearest 250 Milliseconds**

```js
import { round } from '@qc/date-round'

let date = new Date(Date.UTC(2000, 0, 1, 2, 34, 56))
date.setMilliseconds(789)
console.log(date) // 2000-01-01T02:34:56.789
let interval = 250
date = round(date, interval)
console.log(date) // 2000-01-01T02:35:57.75
```
