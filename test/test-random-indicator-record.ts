import test from 'ava'
import RecordContext from '@strong-roots-capital/record-context'
import IndicatorRecord from '@strong-roots-capital/indicator-record'

/**
 * Library under test
 */

import { randomIndicatorRecord } from '../src/random-indicator-record'

test('should pass context through to generated record', t => {
    const context: RecordContext = {
        tradepair: 'XBTUSD',
        timeframe: 42069,
        exchange: 'bananarama'
    }
    const ir = randomIndicatorRecord(context)
    t.deepEqual(context, ir.context)
})

test('should return random records', t => {
    t.notDeepEqual(randomIndicatorRecord().record, randomIndicatorRecord().record)
})
