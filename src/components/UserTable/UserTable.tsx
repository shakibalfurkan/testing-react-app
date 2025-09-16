import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  age: number;
};

type UsersProps = {
  users: User[];
};

export default function UserTable({ users }: UsersProps) {
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true);
    }, 1500);
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody data-testId="users">
          {users.map((user: User) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showMessage && <div data-testId="welcome">Welcome message.</div>}
    </div>
  );
}
