import React from "react";

import * as actions from "./actions.js";

import Record from "./record.js";
import Models from "./models.js";
import Records from "./records.js";
import Auth from "../auth/auth";
import Login from "../auth/login";
import LoginContext from "../auth/context";

export default class CMS extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LoginContext>
        <Login />
        <Auth capability="read">
          <header>
            <nav>
              <Models />
            </nav>
          </header>

          <section>
            <Records />
          </section>

          <section>
            <Auth capability={"update" || "create"}>
              <Record />
            </Auth>
          </section>
        </Auth>
      </LoginContext>
    );
  }
}
