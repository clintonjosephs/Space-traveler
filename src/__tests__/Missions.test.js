import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Missions from '../components/Missions/Missions';
import store from '../redux/ConfigureStore';

const ReduxProvider = () => (
  <Provider store={store}>
    <Missions />
  </Provider>
);

describe('Missions Component', () => {
  it('renders', async () => {
    render(<ReduxProvider />);
    const missionText = screen.getByText('Mission');
    const descriptionText = screen.getByText('Description');
    const statusText = screen.getByText('Status');
    expect(missionText).toMatchSnapshot();
    expect(descriptionText).toMatchSnapshot();
    expect(statusText).toMatchSnapshot();
  });

  it('renders missions', async () => {
    render(<ReduxProvider />);
    const firstMissionName = await screen.findByText('Thaicom');
    const allMissionStatus = await screen.findAllByText('NOT A MEMBER');
    expect(firstMissionName).toMatchSnapshot();
    expect(allMissionStatus).toHaveLength(10);
  });

  it('missions change status when clicking the join mission button', async () => {
    render(<ReduxProvider />);
    const firstJoinButton = await screen.findAllByText('Join Mission');
    const firstMemberStatus = await screen.findAllByText('NOT A MEMBER');
    fireEvent.click(firstJoinButton[0]);
    expect(firstJoinButton[0].textContent).toBe('Leave Mission');
    expect(firstMemberStatus[0].textContent).toBe('Active Member');
    fireEvent.click(firstJoinButton[0]);
    expect(firstJoinButton[0].textContent).toBe('Join Mission');
    expect(firstMemberStatus[0].textContent).toBe('NOT A MEMBER');
  });
});
