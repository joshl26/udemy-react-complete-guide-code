import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome page</h1>
      <Route path="/welcome/new-user">
        <h1>Welcome, New User!</h1>
      </Route>
    </section>
  );
};

export default Welcome;
