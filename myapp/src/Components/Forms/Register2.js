import { useState } from "react";

const Register2 = () => {
  const [form, setForm] = useState({
    inputName: "",
    inputEmail: "",
    inputPassword: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
  };

  //Onchange function

  const onChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Time to register</h1>
      <h1>This is the name {form.inputName}</h1>
      <form onSubmit={onSubmitHandler}>
        <label>Name</label>
        <input
          type="text"
          placeholder="name"
          value={form.inputName}
          onChange={onChangeHandler}
          name="inputName"
        />
        <br />
        <label>Email</label>
        <input
          type="text"
          placeholder="email"
          value={form.inputEmail}
          onChange={onChangeHandler}
          name="inputEmail"
        />
        <br />
        <label>password</label>
        <input
          type="password"
          placeholder="password"
          value={form.inputPassword}
          onChange={onChangeHandler}
          name="inputPassword"
        />

        <input type="submit" placeholder="submit" />
      </form>
    </div>
  );
};

export default Register2;
