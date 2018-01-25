import React from "react";

// const App = (props) => {
//   return (
//     <div>
//       {props.text}
//     </div>
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "this.props.text",
      placeholder: "Placeholder",
      hasLoaded: false,
      loading: "Loading..."
    };
    // this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    if (this.state.hasLoaded === true) {
      let saveEventValue = event.target.value;
      this.setState({ text: saveEventValue });
    } else {
      let saveEventValue = event.target.value;
      this.setState({ loading: saveEventValue });
    }
  }

  handleBtnClick() {
    this.setState(prevState => ({
      hasLoaded: !prevState.hasLoaded
    }));
    console.log(this.state.hasLoaded);
  }

  componentDidMount() {
    this.setState({ hasLoaded: true });
  }

  render() {
    const hasLoaded = this.state.hasLoaded;
    return (
      <React.Fragment>
        
        <h1>{hasLoaded ? this.state.text : this.state.loading}</h1>

        {/* <InputField /> */}
        <input
          type="text"
          placeholder={this.state.placeholder}
          onChange={event => this.handleInputChange(event)}
        />
        {/* <HasLoaded /> */}
        <input
          type="button"
          value="Click Me!"
          onClick={() => this.handleBtnClick()}
        />
      </React.Fragment>
    );
  }
}









// Theoretical Component Lineage Inheritance (Tested - Working)
//
// class InputField extends App {
//   render() {
//     return (
//       <React.Fragment>
//         <input
//           type="text"
//           placeholder={this.state.placeholder}
//           onChange={event => this.handleInputChange(event)}
//         />
//       </React.Fragment>
//     );
//   }
// }

// class HasLoaded extends App {
//   render() {
//     return (
//       <React.Fragment>
//         <input
//           type="button"
//           value="Click Me!"
//           onClick={() => this.handleBtnClick()}
//         />
//       </React.Fragment>
//     );
//   }
// }

export default App;
