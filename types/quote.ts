export enum QuoteStatus {
  PENDING = 'Pending',
  READY = 'Ready',
  BOOKED = 'Booked'
}

export interface Quote {
  id: string
  item: string
  pickup: {
    city: string
    country: string
    date: Date
  }
  dropoff: {
    city: string
    country: string
    date: Date
  }
  price: number
  status: QuoteStatus
}
