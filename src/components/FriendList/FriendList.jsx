import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const Friendlist = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id} className={css.listItem}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

export default Friendlist;
