import { useState } from "react";
import "./User.css";

type UserType = {
  name: string;
  email: string;
  id: number;
}[];

export default function Users() {
  const [users, setUsers] = useState<UserType>([]);
  const [error, setError] = useState<{ name?: string; email?: string }>({});
  const [termsAccepted, setTermsAccepted] = useState(false);

  const validateForm = (name: string, email: string) => {
    const newErrors: { name?: string; email?: string } = {};

    if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email address";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const termsCheckbox = form.elements.namedItem("terms") as HTMLInputElement;

    // Validate form
    const formErrors = validateForm(name, email);

    // Check if terms are accepted
    if (!termsCheckbox.checked) {
      alert("Please accept the terms and conditions");
      return;
    }

    // If there are validation errors
    if (Object.keys(formErrors).length > 0) {
      setError(formErrors);
      return;
    }

    // Clear previous errors
    setError({});

    const newUser = {
      name,
      email,
      id: Date.now(),
    };

    // Add user
    setUsers((prevUsers) => [...prevUsers, newUser]);

    // Reset form
    form.reset();
    setTermsAccepted(false);
  };

  return (
    <section className="container">
      <h1>Testing react </h1>
      <h2>Testing react in h2</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" required />
          {error.name && <span className="error">{error.name}</span>}
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required />
          {error.email && <span className="error">{error.email}</span>}
        </div>
        <label className="terms-label">
          <input
            type="checkbox"
            name="terms"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          I accept the terms and conditions
        </label>
        <button type="submit" disabled={!termsAccepted}>
          Submit
        </button>
      </form>
      <div>
        {/* Optional: Display users */}
        {users.length > 0 && (
          <div className="user-list">
            <h2>Registered Users</h2>
            {users.map((user) => (
              <div key={user.id} className="user-item">
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
