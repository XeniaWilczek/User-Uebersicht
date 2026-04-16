import "./Overview.scss";

import UserCard from "../../components/UserCard";
import { useUserContext } from "../../context/userContext";

function Overview() {
  const { users, dispatch } = useUserContext();

  return (
    <div className="user-card-container">
      {users.map((u) => (
        <UserCard
          key={u.id}
          user={u}
          onDelete={(id) => dispatch({ type: "REMOVE_USER", payload: id })}
        />
      ))}
    </div>
  );
}

export default Overview;
