import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeName = (data) => {
    return setName(data.target.value);
  };
  const onChangeEmail = (data) => {
    return setEmail(data.target.value);
  };
  const onChangePassword = (data) => {
    return setPassword(data.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    setEmail("");
    setName("");
    setPassword("");
  };
  return (
    <div>
      <h1>Time to register</h1>
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={onChangeName}
        />
        <br />
        <label>Email</label>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={onChangeEmail}
        />
        <br />
        <label>password</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={onChangePassword}
        />

        <input type="submit" placeholder="submit" />
      </form>
    </div>
  );
};

export default Register;
