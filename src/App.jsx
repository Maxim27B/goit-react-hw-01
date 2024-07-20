import Friendlist from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile';
import userData from './userdata.json';
import friends from './friends.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <Friendlist friends={friends} />
    </>
  );
};
export default App;
