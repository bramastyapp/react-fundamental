import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return <h3>Ada Error!!</h3>;
}

export default ErrorPage;
