import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import Index from '../app/index';
import { router } from 'expo-router';
import { getListCsv, selectCsv } from '../services/csv';

jest.mock('../services/csv', () => ({
  getListCsv: jest.fn(),
  selectCsv: jest.fn(),
}));

jest.mock('expo-router', () => ({
  router: { push: jest.fn() },
}));

describe('Index page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should display the loading message while fetching', () => {
    (getListCsv as jest.Mock).mockImplementation(() => new Promise(() => {}));
    const { getByText } = render(<Index />);
    expect(getByText('O conteúdo está sendo carregado, por favor aguarde...')).toBeTruthy();
  });

  it('should render the list of CSVs after fetching data', async () => {
    (getListCsv as jest.Mock).mockResolvedValue(['file1.csv', 'file2.csv']);
    const { getByText } = render(<Index />);
    await waitFor(() => {
      expect(getByText('SELECIONAR CSV: file1.csv')).toBeTruthy();
      expect(getByText('SELECIONAR CSV: file2.csv')).toBeTruthy();
    });
  });

  it('should navigate to error page if API call fails', async () => {
    (getListCsv as jest.Mock).mockRejectedValue(new Error('API Error'));
    render(<Index />);
    await waitFor(() => {
      expect(router.push).toHaveBeenCalledWith('/pages/Error');
    });
  });

  it('should call selectCsv and navigate when a CSV item is pressed', async () => {
    (getListCsv as jest.Mock).mockResolvedValue(['file1.csv']);
    (selectCsv as jest.Mock).mockResolvedValue({});
    
    const { getByText } = render(<Index />);
    await waitFor(() => {
      expect(getByText('SELECIONAR CSV: file1.csv')).toBeTruthy();
    });
    fireEvent.press(getByText('SELECIONAR CSV: file1.csv'));
    await waitFor(() => {
      expect(selectCsv).toHaveBeenCalledWith('file1.csv');
      expect(router.push).toHaveBeenCalledWith({
        pathname: '/pages/Dashboard',
        params: { filename: 'file1.csv' },
      });
    });
  });
});
