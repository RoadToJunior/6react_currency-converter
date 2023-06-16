const DollarCurrency = (props) => {
  return (
    <>
      <p>$$$:{(props.pln / props.value).toFixed(2)}</p>
    </>
  );
};

const EuroCurrency = (props) => {
  return (
    <>
      <p>Euro:{(props.pln / props.value).toFixed(2)}</p>
    </>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: 0,
  };
  handleNumberChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  render() {
    return (
      <div className="">
        <label>
          Wpisz kwotę w złotówkach
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleNumberChange}
          />
        </label>
        <DollarCurrency value={4.09} pln={this.state.amount} />
        <EuroCurrency value={4.47} pln={this.state.amount} />
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
