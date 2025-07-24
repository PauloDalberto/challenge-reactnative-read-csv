import { render, waitFor } from '@testing-library/react-native';
import React from 'react';
import Winners from '../app/pages/Winners';
import { router } from 'expo-router';
import { getWinners } from '../services/movies';

jest.mock('../services/movies', () => ({
  getWinners: jest.fn(),
}));

jest.mock('expo-router', () => ({
  router: { push: jest.fn() },
}));

jest.mock('@/src/components/utils/backHeader', () => ({
  BackHeader: () => <></>,
}));

describe('Winners page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should display the loading component while fetching data', () => {
    (getWinners as jest.Mock).mockImplementation(() => new Promise(() => {}));
    const { getByText } = render(<Winners />);
    expect(getByText('O conteúdo está sendo carregado, por favor aguarde...')).toBeTruthy();
  });

  it('should navigate to error page if API call fails', async () => {
    (getWinners as jest.Mock).mockRejectedValue(new Error('API Error'));
    render(<Winners />);
    await waitFor(() => {
      expect(router.push).toHaveBeenCalledWith('/pages/Error');
    });
  });

  it('should display winners data after successful API call', async () => {
    (getWinners as jest.Mock).mockResolvedValue([
      { title: 'Filme A', year: 2000 },
      { title: 'Filme B', year: 2005 },
    ]);

    const { getByText } = render(<Winners />);

    await waitFor(() => {
      expect(getByText('Filme A')).toBeTruthy();
      expect(getByText('Filme B')).toBeTruthy();
    });
  });

});