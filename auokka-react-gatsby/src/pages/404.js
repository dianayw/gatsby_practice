import * as React from "react";
import { Link } from "gatsby";

const pageStyles = {
  padding: "100px",
};

const paragraphStyles = {
  marginBottom: "50px",
};

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1>Page not found</h1>
      <p>Sorry 😔, we couldn't find what you were looking for.</p>
      <p>
        Contact us via&nbsp;
        <Link to="mailto:info@auokka.com">info@auokka.com</Link>
      </p>
      <p>
        Go back to <Link to="/">Home page</Link>
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
