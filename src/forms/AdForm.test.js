import React from 'react';
import { render } from '@testing-library/react';
import { AdForm } from './AdForm';


describe("AdForm", () => {
  it("renders without crashing", () => {
    render(<AdForm onSubmit={() => {}} />);
  });

  it('renders the form with default values', () => {
    const onSubmit = jest.fn();

    const { getByLabelText, getByText } = render(
      <AdForm onSubmit={onSubmit} />
    );

    expect(getByLabelText('Title:')).toBeInTheDocument();
    expect(getByLabelText('Description:')).toBeInTheDocument();
    expect(getByLabelText('Image:')).toBeInTheDocument();
    expect(getByText('Create')).toBeInTheDocument(); 
  });


});
