import { formatNumber, formatPercent, formatUsername } from 'common/utils'

test('formats thousands', () => {
  const result = formatNumber(1_853)
  expect(result).toEqual('1.9K')
})

test('formats millions', () => {
  const result = formatNumber(986_643_000)
  expect(result).toEqual('986.6M')
})

test('formats percentages', () => {
  const result = formatPercent(21.29)
  expect(result).toEqual('21.3%')
})

test('formats username', () => {
  expect(formatUsername('test')).toEqual('@test')
  expect(formatUsername('@test')).toEqual('@test')
})
