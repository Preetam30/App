import { Route, Routes } from "react-router-dom";
import Create from "./components/ClientMaster/Create";
import Edit from "./components/ClientMaster/Edit";
import Dashboard from "./components/Dashboard";
import View from "./components/ClientMaster/View";

import { Amplify } from "aws-amplify";
import {
  useAuthenticator,
  withAuthenticator,
  Authenticator,
} from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const App = () => {
  const { signOut } = useAuthenticator();
  return (
    <Routes>
      <Route path="/create" element={<Create />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/review" element={<View />} />
      <Route path="/review-conflict" element={<View />} />
      <Route exact path="/" element={<Dashboard />} />
    </Routes>
  );
};

// export default App;
export default withAuthenticator(App);
