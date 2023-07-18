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
      <form className="flex flex-col items-start gap-5" onSubmit={handleSubmit}>
        <h3>Login</h3>
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
        <button disabled={isLoading} className="bg-gray-500">Login</button>
        {error && <p className="bg-error text-error-content">{error}</p>}
      </form>
    </>
  );
}
export default Login;
