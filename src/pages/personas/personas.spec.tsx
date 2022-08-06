import React from 'react';
import { render, screen } from '@testing-library/react';
import Personas from './personas';

describe('Personas', () => {
  it('should render title', () => {
    render(<Personas />);
    const titleElement = screen.getByText('Personas Page');
    expect(titleElement).toBeInTheDocument();
  });
});
