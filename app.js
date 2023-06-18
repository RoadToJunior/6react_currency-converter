const Cash = (props) => {
  const value = (props.cash / props.ratio).toFixed(2);
  return (
    <p>
      {props.title}
      {props.cash <= 0 ? "Podaj ilość złotówek!" : value}
    </p>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: 0,
    product: "electricity",
  };

  static defaultProps = {
    currencies: [
      {
        id: 1,
        name: "dollar",
        ratio: 3.6,
        title: "Wartość w dolarach:",
      },
      { id: 2, name: "euro", ratio: 4.2, title: "Wartość w euroskach:" },
      { id: 3, name: "pound", ratio: 5.1, title: "Wartość w funtach:" },
    ],
    price: {
      electricity: 0.51,
      gas: 6.7,
      oranges: 4.5,
    },
  };

  handleNumberChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  handleSelect = (e) => {
    this.setState({
      product: e.target.value,
    });
  };

  insertSuffix(product) {
    if (product === "electricity") return <em>kWh</em>;
    else if (product === "gas") return <em>litrów</em>;
    else if (product === "oranges") return <em>kilogramów</em>;
    else return null;
  }
  render() {
    const { amount, product } = this.state;

    const calculators = this.currencies.map((currency) => (
      <Cash
        key={currency.id}
        name={currency.name}
        ratio={currency.ratio}
        title={currency.title}
        cash={amount}
      />
    ));

    return (
      <div className="">
        <label>
          Wybierz produkt:
          <select value={product} onChange={this.handleSelect}>
            <option value="electricity">prąd</option>
            <option value="gas">benzyna</option>
            <option value="oranges">pomarańcze</option>
          </select>
        </label>
        <br />
        <label>
          Wpisz kwotę w złotówkach
          <input
            type="number"
            value={amount}
            onChange={this.handleNumberChange}
          />
          {this.insertSuffix(this.state.product)}
        </label>
        {calculators}
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
