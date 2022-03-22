import SignUpForm from "../../components/signup/Signup";
import SignInForm from "../../components/signin/Signin";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
