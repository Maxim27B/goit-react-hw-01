import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileContainer}>
      <div className={css.photoContainer}>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.location}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.infoList}>
        <li className={css.listItem}>
          <span>Followers</span>
          <span className={css.statsNumbers}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span>
          <span className={css.statsNumbers}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span>
          <span className={css.statsNumbers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
