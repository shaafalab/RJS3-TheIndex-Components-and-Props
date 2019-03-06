import React, { Component } from "react";
import authors from "./data";

import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";

class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="content col-10">
            <div className="authors">
              <div className="row">
                <AuthorList authors={authors} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
