import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            isOnline={friend.isOnline}
            name={friend.name}
            avatar={friend.avatar}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
