import { useState } from "react";
import useSignup from "../hooks/useSignup";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isLoading, signup } = useSignup();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <>
      <form className="flex flex-col items-start gap-5" onSubmit={handleSubmit}>
        <h3>Sign up</h3>
        <label className="flex flex-col gap-2">
          Email
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label className="flex flex-col gap-2">
          Password
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button disabled={isLoading} className="bg-gray-500">Sign up Button</button>
        {error && <p className="text-error-content bg-error">{error}</p>}
      </form>
    </>
  );
}
export default Signup;
