import {useState} from "react";
import firebaseInitialize from "../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";
import {useEffect} from "react";

firebaseInitialize();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  // google signin
  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // Github signin
  const signInUsingGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("inside state change", user);
        setUser(user);
      }
    });
  }, []);
  // signout function
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  return {
    user,
    error,
    signInUsingGoogle,
    logOut,
    signInUsingGithub,
  };
};
export default useFirebase;
