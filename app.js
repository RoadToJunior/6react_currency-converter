const Cash = (props) => {
  const cash = (props.pln / props.value).toFixed(2);
  return (
    <p>
      {props.title}
      {cash <= 0 ? "Podaj ilość złotówek!" : cash}
    </p>
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

  currencies = [
    {
      id: 1,
      name: "dollar",
      ratio: 3.6,
      title: "Wartość w dolarach:",
    },
    { id: 2, name: "euro", ratio: 4.2, title: "Wartość w euroskach:" },
    { id: 3, name: "funt", ratio: 5.1, title: "Wartość w funtach:" },
  ];

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
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
