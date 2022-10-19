import * as React from "react";
import { Link } from "gatsby";

const pageStyles = {
  padding: "100px",
};

const paragraphStyles = {
  margin: "30px 0",
};

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry 😔, we couldn't find what you were looking for.
      </p>
      <p style={paragraphStyles}>
        Contact us via&nbsp;
        <Link to="mailto:info@auokka.com">info@auokka.com</Link>
      </p>
      <p style={paragraphStyles}>
        Go back to <Link to="/">Home page</Link>
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
