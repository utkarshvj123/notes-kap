import React from "react";
import { gettingData } from "../../data";
import Detail from "../../component/Detail/index";

class SingleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sellectedData: {},
    };
  }
  componentDidMount() {
    const newData = gettingData().find((obj) => {
      return obj.id === this.props.match.params.id;
    });

    this.setState({ sellectedData: newData });
  }
  render() {
    return (
      <div className="container mt-5 d-flex justify-content-center align-items-center">
        {Object.keys(this.state.sellectedData).length !== 0 ? (
          <Detail
            data={this.state.sellectedData}
            buttonName={"Back"}
            detailClick={() => {
              this.props.history.push(`/home`);
            }}
          />
        ) : (
          <div>No data</div>
        )}
      </div>
    );
  }
}
export default SingleView;
