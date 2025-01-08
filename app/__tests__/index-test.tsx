import Index from '@/app/index';
import React from 'react';
import { render } from '@testing-library/react-native';

describe('Index component', () => {
  it('has correct styles', () => {
    const { getByTestId } = render(<Index />);
    const view = getByTestId('view-container');
    
    expect(view.props.style).toEqual({
      backgroundColor: '#301038',
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
    });
  });

  it('renders correctly the logo image correctly', () => {
      const { getByTestId } = render(<Index />);

      // Check if the image is rendered
      const image = getByTestId('logo-image');
      expect(image).toBeTruthy();
      expect(image.props.source).toEqual(require('@/assets/images/bridge-logo-white.png'));
      expect(image.props.style).toEqual({ width: 200, height: 200, resizeMode: 'contain' });
  });

  it("should renders title correctly", () => {
    const { getByText } = render(<Index />);
    expect(getByText("Welcome to Bridge!")).toBeTruthy();
  });

  it("should return login button", () => {
    const { getByRole } = render(<Index />);

    const button = getByRole("button");
    expect(button).toBeTruthy();
  });


});


