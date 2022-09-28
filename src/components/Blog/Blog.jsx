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
          <summary>What is CSS?</summary>
          <p>
            Cascading Style Sheets (CSS) is a stylesheet language used to
            describe the presentation of a document written in HTML.
          </p>
        </details>
        <details>
          <summary>What is JavaScript?</summary>
          <p>
            JavaScript (JS) is a lightweight, interpreted, or just-in-time
            compiled programming language with first-class functions.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Blog;
