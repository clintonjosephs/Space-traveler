import React from 'react';
import { Provider } from 'react-redux';
import {
  render, screen, fireEvent, cleanup,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import store from '../redux/ConfigureStore';
import Profile from '../components/Profile/Profile';
import Rockets from '../components/Rockets/Rockets';
import Missions from '../components/Missions/Missions';

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

const MissionsProvider = () => (
  <Provider store={store}>
    <Missions />
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
    expect(profileRockets.childElementCount).toBe(4);
  });

  it('removes the reserved rockets when clicked', async () => {
    render(<ProfileProvider />);
    const deleteButtons = await screen.findAllByRole('img');
    expect(deleteButtons.length).toBe(3);

    fireEvent.click(deleteButtons[0]);
    fireEvent.click(deleteButtons[1]);

    const profileRockets = screen.getByTestId('profileRockets');
    expect(profileRockets.childElementCount).toBe(2);
  });
});

describe('Profile component', () => {
  it('renders profile', async () => {
    render(<ProfileProvider />);
    const headingElement1 = await screen.findByText('My Missions');
    const headingElement2 = await screen.findByText('My Rockets');
    expect(headingElement1).toMatchSnapshot();
    expect(headingElement2).toMatchSnapshot();
  });

  it('renders no missions joined', async () => {
    render(<ProfileProvider />);
    const listedItem = await screen.findByText('No Missions joined yet');
    expect(listedItem).toMatchSnapshot();
  });

  it('renders missions and perform click of reservation button', async () => {
    render(<MissionsProvider />);
    const allMissions = await screen.findAllByText('Join Mission');
    expect(allMissions).toHaveLength(10);
    fireEvent.click(allMissions[0]);
    fireEvent.click(allMissions[1]);
    fireEvent.click(allMissions[2]);
  });

  describe('Run tests on profile page functions', () => {
    it('persists the reservation made on the missions component', async () => {
      render(<ProfileProvider />);
      const joinedMission1 = await screen.findByText('Thaicom');
      const joinedMission2 = await screen.findByText('Telstar');
      const joinedMission3 = await screen.findByText('Iridium NEXT');
      expect(joinedMission1).toMatchSnapshot();
      expect(joinedMission2).toMatchSnapshot();
      expect(joinedMission3).toMatchSnapshot();
    });

    it('removes the reserved missions when clicked', async () => {
      render(<ProfileProvider />);
      const deleteButtons = await screen.findAllByRole('figure');
      expect(deleteButtons.length).toBe(3);
      fireEvent.click(deleteButtons[0]);
      fireEvent.click(deleteButtons[1]);
      fireEvent.click(deleteButtons[2]);
      const listedItem = await screen.findByText('No Missions joined yet');
      expect(listedItem).toMatchSnapshot();
    });
  });
});
