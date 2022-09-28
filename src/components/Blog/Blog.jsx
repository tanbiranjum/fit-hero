import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-container">
        <details>
          <summary>How react works?</summary>
          <p>
            React implements a virtual DOM, which is essentially a JavaScript
            representation of the DOM tree. Therefore, it will use a virtual
            version of the DOM whenever it wants to read from or write to it.
            The virtual DOM will then look for the most effective approach to
            update the DOM of the browser. React DOM takes care of updating the
            DOM to match the React elements. 
          </p>
        </details>
        <details>
          <summary>Difference between props and state?</summary>
          <p>
            State is the component's local state, which is protected from access
            outside of the component and cannot be changed. It is the functional
            equivalent of local variables. Contrarily, props enable components
            to accept data from their parent component in the form of props,
            making them reusable.
          </p>
        </details>
        <details>
          <summary>Usage of useEffect expect load data from api?</summary>
          <p>
            useEffect runs on when a state is changed! So it can be use for do
            something based on changes in state. It can also use for load data
            from local storage or do something after the components mounts. It
            can also be used for filtering.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Blog;
