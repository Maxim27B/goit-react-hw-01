const FriendListItem = ({ avatar, name, isOnline }) => {
    <div>
        <img src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p>{isOnline}</p>
    </div>
}

export default FriendListItem