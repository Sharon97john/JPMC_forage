import React, { Component } from "react";
import DataStreamer, { ServerRespond } from "./DataStreamer";
import Graph from "./Graph";
import "./App.css";

/**
 * State declaration for <App />
 */
interface IState {
  data: ServerRespond[];
  canShowGraph: boolean;
}

/**
 * The parent element of the react app.
 * It renders title, button and Graph react element.
 */
class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      canShowGraph: false,
      data: [],
    };
  }

  /**
   * Render Graph react component with state.data parse as property data
   */
  renderGraph = () => {
    if (this.state.canShowGraph) return <Graph data={this.state.data} />;
  }

  /**
   * Get new data from server and update the state with the new data
   */
  getDataFromServer = () => {
    let count = 0;
    const dataStreamerInterval = setInterval(() => {
      DataStreamer.getData((serverResponds: ServerRespond[]) => {
        this.setState({
          data: [...this.state.data, ...serverResponds],
          canShowGraph: true,
        });
      });
      count += 1;
      if (count > 1000) clearInterval(dataStreamerInterval);
    }, 100);
  }

  /**
   * Render the App react component
   */
  render() {
    return (
      <div className="App">
        <header className="App-header">Bank & Merge Co Task 2</header>
        <div className="App-content">
          <button
            className="btn btn-primary Stream-button"
            onClick={this.getDataFromServer}
          >
            Start Streaming Data
          </button>
          <div className="Graph">{this.renderGraph()}</div>
        </div>
      </div>
    );
  }
}

export default App;
