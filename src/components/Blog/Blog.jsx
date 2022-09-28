import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-container">
        <details>
          <summary>How react works?</summary>
          <p>
            HTML (HyperText Markup Language) is the most basic building block of
            the Web. It defines the meaning and structure of web content.
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
