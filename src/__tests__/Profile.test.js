import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import store from '../redux/ConfigureStore';
import Profile from '../components/Profile/Profile';
import Rockets from '../components/Rockets/Rockets';

const RocketsProvider = () => (
  <Provider store={store}>
    <Rockets />
  </Provider>
);

const ProfileProvider = () => (
  <Provider store={store}>
    <Profile />
  </Provider>
);

afterEach(() => {
    cleanup();
});

describe('Check MyRockets', () => {
  it('matches snapshot', () => {
    const component = renderer.create(<ProfileProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('Rockets Component', () => {
  it('renders rockets and perform click of reservation button', async () => {
    render(<RocketsProvider />);
    const allRockets = await screen.findAllByText('Reserve Rocket');
    expect(allRockets).toHaveLength(4);

    const reserveButton = await screen.findAllByText(/Reserve Rocket/i);
    fireEvent.click(reserveButton[0]);
    fireEvent.click(reserveButton[1]);
    fireEvent.click(reserveButton[2]);
  });
});

describe('Run tests on profile page functions', () => {
  it('persists the reservation made on the rockets component', () => {
    render(<ProfileProvider />);
    const profileRockets = screen.getByTestId('profileRockets');
    expect(profileRockets.childElementCount).toBe(4)
  });

  it('removes the reserved rockets when clicked', async () => {
    render(<ProfileProvider />);
    const deleteButtons = await screen.findAllByRole('img');
    expect(deleteButtons.length).toBe(3);
    
    fireEvent.click(deleteButtons[0]);
    fireEvent.click(deleteButtons[1]);

    const profileRockets = screen.getByTestId('profileRockets');
    expect(profileRockets.childElementCount).toBe(2)
  });
});
