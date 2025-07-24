import {  render, waitFor } from '@testing-library/react-native';
import React from 'react';
import Intervals from '../app/pages/Intervals';
import { router } from 'expo-router';
import { getIntervals } from '../services/movies';

jest.mock('../services/movies', () => ({
  getIntervals: jest.fn(),
}));

jest.mock('expo-router', () => ({
  router: { push: jest.fn() },
}));

jest.mock('@/src/components/utils/backHeader', () => ({
  BackHeader: () => <></>,
}));

describe('Intervals page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should display the loading component while fetching data', () => {
    (getIntervals as jest.Mock).mockImplementation(() => new Promise(() => {}));
    const { getByText } = render(<Intervals />);
    expect(getByText('O conteúdo está sendo carregado, por favor aguarde...')).toBeTruthy();
  });


  it('should navigate to error page if API call fails', async () => {
    (getIntervals as jest.Mock).mockRejectedValue(new Error('API Error'));
    render(<Intervals />);
    await waitFor(() => {
      expect(router.push).toHaveBeenCalledWith('/pages/Error');
    });
  });

  it('should display intervals data after successful API call', async () => {
    (getIntervals as jest.Mock).mockResolvedValue({
      min: [{ producer: "Produtor A", interval: 1 }],
      max: [{ producer: "Produtor B", interval: 10 }],
    });

    const { getByText } = render(<Intervals />);

    await waitFor(() => {
      expect(getByText('Menor Tempo:')).toBeTruthy();
      expect(getByText('Maior Tempo:')).toBeTruthy();
      expect(getByText(/produtor com o maior e menor intervalo/i)).toBeTruthy();
    });
  });
});
