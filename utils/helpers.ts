import Chance from 'chance'
const commafy = require('commafy')

export const addCommas = (num: number): string => {
  return commafy(num)
}

const chance = new Chance()

const QuoteStatus = {
  PENDING: 'Pending',
  READY: 'Ready',
  BOOKED: 'Booked'
}

export const generateTestData = () => {
  const data = []

  for (let i = 0; i < 100; i++) {
    data.push({
      id: `SF-${chance.bb_pin()}`.toUpperCase(),
      item: '',
      pickup: {
        city: chance.city(),
        country: chance.country(),
        date: chance.date()
      },
      dropoff: {
        city: chance.city(),
        country: chance.country(),
        date: chance.date()
      },
      price: chance.integer({ min: 1000000, max: 20000000 }),
      status:
        // @ts-expect-error - Implicit any
        QuoteStatus[
          Object.keys(QuoteStatus)[Math.floor(Math.random() * Object.keys(QuoteStatus).length)]
        ]
    })
  }

  return data
}
