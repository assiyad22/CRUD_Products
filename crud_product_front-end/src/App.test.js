import { render, screen } from '@testing-library/react';
import App from './App';

test('renders product management app', () => {
  render(<App />);
  
  // Navigation elements
  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Product List' })).toBeInTheDocument();
  
  // Main content
  expect(screen.getByRole('heading', { name: 'Product List' })).toBeInTheDocument();
  
  // Add Product elements - we need to distinguish between them
  const addProductLinks = screen.getAllByRole('link', { name: 'Add Product' });
  expect(addProductLinks).toHaveLength(2); // Both should be links
  
  // Search input
  expect(screen.getByPlaceholderText('Search by name or description...')).toBeInTheDocument();
});