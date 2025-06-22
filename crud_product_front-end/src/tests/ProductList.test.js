import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductList from '../components/ProductList';

describe('ProductList component', () => {
  test('renders ProductList with title', () => {
    render(
      <BrowserRouter>
        <ProductList products={[]} />
      </BrowserRouter>
    );
  
  const headerElement = screen.getByText(/Product List/i);
  expect(headerElement).toBeInTheDocument();
  
  });
});

