export interface IntervalItem {
  producer: string
  interval: number
  previousWin: number
  followingWin: number
}

export interface Interval {
  min: IntervalItem[]
  max: IntervalItem[]
}