import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const Friendlist = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={css.listItem}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Friendlist;
