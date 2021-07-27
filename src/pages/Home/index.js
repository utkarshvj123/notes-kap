import React from "react";
import { gettingData } from "../../data";
import Detail from "../../component/Detail";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const newData = gettingData();
    this.setState({ data: newData });
  }
  addHandler = () => {
    console.log("clicked");
  };

  render() {
    return (
      <div className="container mt-5">
        <div>
          <button
            className="btn btn-primary"
            onClick={() => this.props.history.push("/add")}
          >
            Add
          </button>
        </div>
        <div className="d-flex row mt-5">
          {this.state.data.length > 0 ? (
            this.state.data.map((obj) => (
              <div key={obj.id} className="col">
                <Detail
                  data={obj}
                  detailClick={() => {
                    this.props.history.push(`/detail/${obj.id}`);
                  }}
                  buttonName={"Detail"}
                />
              </div>
            ))
          ) : (
            <div>No dta</div>
          )}
        </div>
      </div>
    );
  }
}
export default Home;
