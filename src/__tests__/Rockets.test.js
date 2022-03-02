import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import store from '../redux/ConfigureStore';
import Rockets from '../components/Rockets/Rockets';

const ReduxProvider = () => (
  <Provider store={store}>
    <Rockets />
  </Provider>
);

describe('Check rocket snapshot', () => {
  it('matches snapshot', () => {
    const component = renderer
      .create(
        <ReduxProvider />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('Rockets Component', () => {
  it('renders rockets', async () => {
    render(<ReduxProvider />);
    const allRockets = await screen.findAllByText('Reserve Rocket');
    expect(allRockets).toHaveLength(4);
  });

  test('user operation on click rocket reservation and cancel reservation', async () => {
    render(<ReduxProvider />);

    const reserveButton = await screen.findAllByText(/Reserve Rocket/i);
    fireEvent.click(reserveButton[0]);
    const badges = await screen.findAllByRole('switch');
    expect(badges).toHaveLength(1);

    expect(reserveButton[0].textContent).toBe('Cancel Reservation');
    fireEvent.click(reserveButton[0]);

    expect(badges[0].style.display).toBe('none');
    expect(reserveButton[0].textContent).toBe('Reserve Rocket');
  });
});
