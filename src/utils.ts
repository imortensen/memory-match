import _ from 'lodash'

const utils = {

  createCards: (pairs: number): {id: number, color: string, isMatched: boolean}[] => {
    const colors =  _.shuffle(colorList)
                      .slice(0, pairs)
                      .reduce( (res:string[], current) => {
                        return res.concat([current, current])
                      }, [])

    return _.shuffle(colors).map( (color, id) => {
      return {id: id+1, color: color, isMatched: false}
    })
  }

}

// 15 Basic Colors
const colorList = [
  'Maroon',
  'Red',
  'Orange',
  'Yellow',
  'Olive',
  'Green',
  'Purple',
  'Fuchsia',
  'Lime',
  'Teal',
  'Blue',
  'Navy',
  'Black',
  'Gray',
  'Silver'
]

export default utils