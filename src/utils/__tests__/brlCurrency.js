import brl from '../brlCurrency'

describe('util currency', () => {
  it('should return a correct currency formatted string', () => {
    expect(brl(0)).toBe('R$ 0,00')
    expect(brl('10,50')).toBe('R$ 10,50')
    expect(brl(100.123)).toBe('R$ 100,12')
  })
})
