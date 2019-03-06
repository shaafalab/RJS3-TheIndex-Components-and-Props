import React, { Component } from "react";
import AuthorCard from "./AuthorCard";

class AuthorList extends Component {
  render() {
    const list = this.props.authors.map(author => (
      <AuthorCard key={author.first_name} author={author} />
    ));
    return (
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{list}</div>
      </div>
    );
  }
}

export default AuthorList;
