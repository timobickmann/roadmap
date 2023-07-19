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
      <form className="form-control w-full max-w-xs gap-1" onSubmit={handleSubmit}>
        <h3 className="text-3xl mb-10">Sign up</h3>
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          className="input-bordered input w-full max-w-xs"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          className="input-bordered input w-full max-w-xs"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button disabled={isLoading} className="btn mt-5">
          Sign up
        </button>
        {error && <p className="bg-error text-error-content">{error}</p>}
      </form>
    </>
  );
}
export default Signup;
