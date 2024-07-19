import FriendListItem from './FriendListItem';

const Friendlist = friends => {
  const li = friends.map(friend => (
    <li key={friend.id}>
      {
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      }
    </li>
  ));
  return <ul>{li}</ul>;
};

export default Friendlist;
