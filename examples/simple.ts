import { randomIndicatorRecord } from '../src/random-indicator-record'
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
