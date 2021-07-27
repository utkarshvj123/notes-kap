import React from "react";
import DefaultInput from "../../component/DefaultInput";
import Select from "../../component/Select";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imgUrl: "",
      title: "",
      category: {},
      description: "",
      dateTime: "",
      isError: false,
      errorMessage: "",
    };
  }
  handleOnChange = (data) => {
    this.setState({ category: data, isError: false });
  };

  submitHandler = () => {
    const { name, description, title, category } = this.state;
    if (name && description && title && Object.keys(category).length > 0) {
      this.props.history.push("/home");
    } else {
      this.setState({
        isError: true,
        errorMessage: "Please fill valid detail.",
      });
    }
  };

  render() {
    const options = [
      { id: "1", name: "Low" },
      { id: "2", name: "Medium" },
      { id: "3", name: "High" },
    ];

    const {
      description,
      name,
      imgUrl,
      title,
      category,
      dateTime,
      isError,
      errorMessage,
    } = this.state;
    return (
      <div className="container mt-5 p-5">
        <DefaultInput
          valueOfInput={name}
          onChangeInput={(value) => {
            this.setState({ name: value, isError: false });
          }}
          label={"Name :"}
          classInput={"p-3"}
        />
        <DefaultInput
          valueOfInput={title}
          onChangeInput={(value) => {
            this.setState({ title: value, isError: false });
          }}
          label={"Title :"}
          classInput={"p-3"}
        />{" "}
        <DefaultInput
          valueOfInput={description}
          onChangeInput={(value) => {
            this.setState({ description: value, isError: false });
          }}
          label={"Description :"}
          classInput={"p-3"}
        />{" "}
        <div className="p-3">
          <Select
            options={options}
            handleOnChange={this.handleOnChange}
            currentSelected={this.state.category}
          />
        </div>
        <div className="p-3">
          {isError && (
            <div class="alert alert-danger " role="alert">
              {errorMessage}
            </div>
          )}
        </div>
        <button
          className="btn btn-primary"
          onClick={() => this.submitHandler()}
        >
          Submit
        </button>
      </div>
    );
  }
}
export default Add;
