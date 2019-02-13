import React from "react";
import { connect } from "react-redux";

import * as actions from "./actions.js";

const API = process.env.REACT_APP_API;

const styles = {
  clickable: { cursor: "pointer" },
  delete: {
    color: "red",
    cursor: "pointer",
    marginLeft: ".5em"
  }
};

class Models extends React.Component {
  componentDidMount() {
    let url = `${API}/models`;
    console.log(url);
    this.props.getModels(url);
  }

  selectModel = model => {
    let url = `${API}/${model}`;
    console.log(url);
    this.props.clearRecord();
    this.props.setModel(model);
    this.props.getRecords(url);
  };

  render() {
    return (
      <ul>
        {this.props.models.map((model, i) => (
          <li
            key={`models-${i}`}
            onClick={() => {
              this.selectModel(model);
            }}
          >
            <span style={styles.clickable}>{model}</span>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  models: state.api.models
});

const mapDispatchToProps = (dispatch, getState) => ({
  setModel: model => dispatch(actions.setModel(model)),
  getModels: url => dispatch(actions.getModels(url)),
  getRecords: url => dispatch(actions.getRecords(url)),
  clearRecord: () => dispatch(actions.clearRecord())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Models);
