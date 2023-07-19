import { useState } from "react";
import useLogin from "../hooks/useLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isLoading, login } = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <>
      <form className="form-control w-full max-w-xs gap-1" onSubmit={handleSubmit}>
        <h3 className="text-3xl mb-10">Login</h3>
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
          Login
        </button>
        {error && <p className="bg-error text-error-content">{error}</p>}
      </form>
    </>
  );
}
export default Login;
