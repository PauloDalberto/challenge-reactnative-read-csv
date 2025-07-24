import React from 'react';
import { render } from '@testing-library/react-native';
import { CardWinners } from './cardWinners';

jest.mock('@expo/vector-icons', () => ({
  Ionicons: () => null,
}));

describe('CardWinners component', () => {
  const mockItem = {
    title: 'Melhor Filme',
    year: 2023,
  };

  it('should render the title correctly', () => {
    const { getByText } = render(<CardWinners item={mockItem} />);
    expect(getByText('Melhor Filme')).toBeTruthy();
  });

  it('should render the year correctly', () => {
    const { getByText } = render(<CardWinners item={mockItem} />);
    expect(getByText('2023')).toBeTruthy();
  });
});
