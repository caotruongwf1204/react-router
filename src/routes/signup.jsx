import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./signup.css";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();

  const password = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
    alert("Account created successfully");
    navigate("/login");
  };

  return (
    <div className="signup">
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="signup-input"
            type="text"
            name="name"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="signup-input"
            type="email"
            name="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="signup-input"
            type="password"
            name="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[a-zA-Z0-9]).{8,}$/,
                message:
                  "Password must be at least 8 characters long, with the first letter in uppercase and a combination of letters and numbers.",
              },
            })}
          />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm password</label>
          <input
            className="signup-input"
            type="password"
            name="confirm-password"
            id="confirm-password"
            {...register("confirm-password", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors["confirm-password"] && (
            <span>{errors["confirm-password"].message}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone number</label>
          <input
            className="signup-input"
            type="tel"
            name="phone"
            id="phone"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Please enter a valid phone number",
              },
            })}
          />
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            className="signup-textarea"
            type="text"
            name="address"
            id="address"
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && <span>{errors.address.message}</span>}
        </div>

        <div className="signup-btn">
        <button className="btn-submit" type="submit">Create Account</button>
        </div>
      </form>
    </div>
  );
}
