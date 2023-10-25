// const { multiply } = require("./math")
import { multiply } from './math'

describe('multiply', () => {
    test('multiply(4, 2) to be 8', (done) => {
        multiply(4, 2).then((result) => {
            expect(result).toBe(8)
            done()
        })
    })

    test('multiply(2, 3) to be 6', () => {
        return multiply(2, 3).then((result) => {
            expect(result).toBe(6)
        })
    })

    test('multiply(2, 0) to be 0', async () => {
        const result = await multiply(2, 0)
        expect(result).toBe(0)
    })
})