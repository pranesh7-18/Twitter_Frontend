import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./layout/Layout";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { data } = useSelector((state) => state.currentProfile);
  const isRehydrated = useSelector((state) => state._persist?.rehydrated);

  // Show a loader until state is rehydrated
  if (!isRehydrated) return <div>Loading...</div>;

  return (
    <Route
      {...rest}
      render={(props) =>
        data ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};

export default PrivateRoute;