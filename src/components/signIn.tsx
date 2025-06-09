import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../backend/firebase";



const SignIn = () => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Signed in:", user.displayName);
    } catch (error) {
      console.error("Google Sign-In error:", error);
    }
  };

  return <button onClick={handleGoogleSignIn}>Sign in with Google</button>;
};

export default SignIn;