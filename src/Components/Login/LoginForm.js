import { useFormik } from "formik";
import Input from "../../common/Input";
import * as Yup from "yup";
import "./loginform.css";
import { Link } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  email: Yup.string().email("Email is not valid").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="email" label="Email" type="email" />
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />
        <button
          className="btn primary"
          style={{ width: "100%", paddingTop: "10px", fontSize: "16px" }}
          type="submit"
          disabled={!formik.isValid}
        >
          Login
        </button>
        <Link to="/signup">
          <p className="signupFrom-login">
            If you don't have an account, signup from here
          </p>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
