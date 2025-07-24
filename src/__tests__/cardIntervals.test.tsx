import { IntervalItem } from '@/src/@types/interval'
import { render } from '@testing-library/react-native'
import { CardIntervals } from '../components/cards/cardIntervals'

const mockData: IntervalItem[] = [
  {
    producer: 'Jane Doe',
    previousWin: 2001,
    followingWin: 2005,
    interval: 4,
  },
  {
    producer: 'John Smith',
    previousWin: 1990,
    followingWin: 2000,
    interval: 10,
  },
]

describe('CardIntervals component', () => {
  it('should render the title', () => {
    const { getByText } = render(
      <CardIntervals
        title="Card Intervals"
        data={mockData}
        image={require('../assets/images/second.png')}
      />
    )

    expect(getByText("Card Intervals")).toBeTruthy()
  })

  it('should render data for the first producer', () => {
    const { getByText } = render(
      <CardIntervals
        title="Card Intervals"
        data={mockData}
        image={require('../assets/images/second.png')}
      />
    )

    expect(getByText("Jane Doe")).toBeTruthy()
    expect(getByText("Primeira vitória: 2001")).toBeTruthy()
    expect(getByText("Segunda vitória: 2005")).toBeTruthy()
    expect(getByText("Intervalo entre vitórias: 4")).toBeTruthy()
  })

  it('should render data for the second producer', () => {
    const { getByText } = render(
      <CardIntervals
        title="Card Intervals"
        data={mockData}
        image={require('../assets/images/second.png')}
      />
    )

    expect(getByText("John Smith")).toBeTruthy()
    expect(getByText("Primeira vitória: 1990")).toBeTruthy()
    expect(getByText("Segunda vitória: 2000")).toBeTruthy()
    expect(getByText("Intervalo entre vitórias: 10")).toBeTruthy()
  })
})
