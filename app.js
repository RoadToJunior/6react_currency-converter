const DollarCurrency = (props) => {
  return (
    <>
      <p>$$$:{props.value * props.pln}</p>
    </>
  );
};

const EuroCurrency = (props) => {
  return (
    <>
      <p>Euro:{props.value * props.pln}.</p>
    </>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    number: 0,
  };
  handleNumberChange = (e) => {
    this.setState({
      number: e.target.value,
    });
  };

  render() {
    return (
      <div className="">
        <label>
          Wpisz kwotę w złotówkach
          <input type="number" onChange={this.handleNumberChange} />
        </label>
        <DollarCurrency value={4.09} pln={this.state.number} />
        <EuroCurrency value={4.47} pln={this.state.number} />
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
