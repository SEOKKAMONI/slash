import { render, screen } from '@testing-library/react';
import { Separated } from './Separated';

describe('Separated', () => {
  it('renders children separated by the specified separator', () => {
    render(
      <Separated with="|">
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Separated>
    );

    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('|')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
    expect(screen.getByText('|')).toBeInTheDocument();
    expect(screen.getByText('Child 3')).toBeInTheDocument();

    // Check if the separator does not appear after the last child
    const separators = screen.getAllByText('|');
    const lastSeparator = separators[separators.length - 1];

    const lastSeparatorSibling = lastSeparator.nextSibling;

    expect(lastSeparatorSibling).toBeNull();
  });
});
