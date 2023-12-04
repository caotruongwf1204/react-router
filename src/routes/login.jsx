import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    alert("Login successful");

    navigate("/");
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="login-label">Email</label>
          <input
            className="login-input"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="text"
          />
          {errors.email && (
            <span>{errors.email.message}</span>
          )}
        </div>

        <div className="form-control">
          <label className="login-label">Password</label>
          <input
            className="login-input"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[a-zA-Z0-9]).{8,}$/,
                message:
                  "Password must be at least 8 characters long, with the first letter in uppercase and a combination of letters and numbers.",
              },
            })}
            type="password"
          />
          {errors.password && (
            <span>{errors.password.message}</span>
          )}
        </div>

        <div className="login-btn">
          <button className="btn-submit" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
