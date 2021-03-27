import utils from './utils'

describe('Utils', () => {
  describe('Create cards', () => {
    test('Length of array', ()  => {
      const cards = utils.createCards(4)
      expect(cards).toHaveLength(8)
      console.log(cards)
    })
  })
})