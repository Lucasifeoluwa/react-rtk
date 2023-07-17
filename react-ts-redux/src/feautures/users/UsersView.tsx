import { useEffect } from "react";
import { fetchUsers } from "./usersSLice";
import { useAppDispatch, useAppSelector } from "../../app/hook";

const UsersView = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <p>Loading...</p>}
      {!user.loading && user.error ? <div>{user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default UsersView;
