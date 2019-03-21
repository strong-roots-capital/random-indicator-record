/**
 * random-indicator-record
 * Generate a random IndicatorRecord
 */

import randomRecord from 'random-record'
import RecordContext from '@strong-roots-capital/record-context'
import IndicatorRecord from '@strong-roots-capital/indicator-record'

const DEFAULT_CONTEXT: RecordContext = {
    tradepair: 'DEFAULT_TRADEPAIR',
    timeframe: 0,
    exchange: 'DEFAULT_EXCHANGE'
}

/**
 * Generate a random Indicator Record.
 *
 * @param context - Override default context in generated IndicatorRecord
 * @return Randomized IndicatorRecord
 */
export function randomIndicatorRecord<T = any>(context: RecordContext = DEFAULT_CONTEXT): IndicatorRecord {

    const indicatorRecord: IndicatorRecord<T> = {
        context: context,
        record: randomRecord(),
        indicators: new Map<string, T>()
    }
    return indicatorRecord
}
