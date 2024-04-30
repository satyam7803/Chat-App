import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />; //imported from AuthPage.jsx
  } else {
    return <ChatsPage user={user} />; //imported from ChatsPage.jsx
  }
}

export default App;
