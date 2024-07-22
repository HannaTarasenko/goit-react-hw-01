const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <div className={CSS.friendListItem}>
            <img className={CSS.friendListAvatar}
            src={avatar} 
            alt= "avatar"
            width="48" />
            <p className={CSS.friendListName}>{name}</p>
            <p>{isOnline ? "Online" : "Offline"}</p>
        </div>
    )
}
export default FriendListItem;