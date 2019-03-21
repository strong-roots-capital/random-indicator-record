# random-indicator-record [![Build status](https://travis-ci.org/strong-roots-capital/random-indicator-record.svg?branch=master)](https://travis-ci.org/strong-roots-capital/random-indicator-record) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/random-indicator-record.svg)](https://npmjs.org/package/@strong-roots-capital/random-indicator-record) [![codecov](https://codecov.io/gh/strong-roots-capital/random-indicator-record/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/random-indicator-record)

> Generate a random IndicatorRecord

## Install

```shell
npm install @strong-roots-capital/random-indicator-record
```

## Use

```typescript
import { randomIndicatorRecord } from '@strong-roots-capital/random-indicator-record'
import RecordContext from '@strong-roots-capital/record-context'
import IndicatorRecord from '@strong-roots-capital/indicator-record'

const randomIR: IndicatorRecord = randomIndicatorRecord()
console.log(randomIR)
//=>{ context:
//   { tradepair: 'DEFAULT_TRADEPAIR',
//     timeframe: 0,
//     exchange: 'DEFAULT_EXCHANGE' },
//   record:
//    { Time: 44, Open: 97, High: 144, Low: 18, Close: 56, Volume: 23223 },
//   indicators: Map {} }

const myContext = {timeframe: 1440, tradepair: 'CARROTSWHEY', exchange: 'Farmers Market'}
const randomIRmyContext = randomIndicatorRecord(myContext)
console.log(randomIRmyContext)
//=>{ context:
//   { timeframe: 1440,
//     tradepair: 'CARROTSWHEY',
//     exchange: 'Farmers Market' },
//  record:
//   { Time: 88, Open: 41, High: 117, Low: 17, Close: 75, Volume: 8265 },
//  indicators: Map {} }
```

## Related

- [indicator-record](https://github.com/strong-roots-capital/indicator-record)
- [random-record](https://github.com/strong-roots-capital/random-record)
