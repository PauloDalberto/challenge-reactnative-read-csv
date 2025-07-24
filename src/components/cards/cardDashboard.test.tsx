import { CardDashboard } from './cardDashboard'
import { render, fireEvent } from '@testing-library/react-native'

describe("CardDashboard", () => {
  it("should render the card dashboard and display the text", () => {
    const functionMock = jest.fn()
    const { getByText } = render(
      <CardDashboard
        onPress={functionMock}
        text='Card Dashboard'
        image={require('../../assets/images/oscar.jpg')}
      />
    )

    expect(getByText("Card Dashboard")).toBeTruthy()
  })

  it("should call onPress when pressed", () => {
    const functionMock = jest.fn()
    const { getByText } = render(
      <CardDashboard
        onPress={functionMock}
        text='Card Dashboard'
        image={require('../../assets/images/oscar.jpg')}
      />
    )

    const button = getByText("Card Dashboard").parent
    fireEvent.press(button!)
    expect(functionMock).toHaveBeenCalled()
  })
})
