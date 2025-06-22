import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductForm from '../components/ProductForm';

describe('ProductForm component', () => {
  test('renders form fields', () => {
    render(
      <BrowserRouter>
        <ProductForm />
      </BrowserRouter>
    );
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();
  });
});
