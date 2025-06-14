import './App.css'
import ExpensesList from './components/expenseAndIncomeList'
import {useEffect, useState} from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import type {User} from 'firebase/auth'
import { auth } from "./backend/firebase";
import SignIn from "./components/signIn";

function App() {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.displayName}</p>
          <ExpensesList />
          <button onClick={() => signOut(auth)}>Sign out</button>
        </>
      ) : (
        <SignIn />
      )}
    </div>
  )
}

export default App
