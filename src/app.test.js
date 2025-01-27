import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Navigationbar from './Navigationbar';
import Dashboard from './Dashboard';

// Mock components to avoid actual implementations for the test
jest.mock('./Navigationbar', () => () => <div>Navigationbar</div>);
jest.mock('./Dashboard', () => () => <div>Dashboard</div>);

describe('App Component', () => {
 

  test('renders Dashboard component on default route', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </MemoryRouter>
    );

    expect(getByText('Dashboard')).toBeInTheDocument();
  });

});
