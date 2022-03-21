import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebaseUtils";

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>SignIn page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
}
