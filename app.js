class ExchangeCounter extends React.Component {
  render() {
    return (
      <div className="">
        <label>
          Wpisz kwotę w złotówkach
          <input type="number" />
        </label>
        <DolarCurrency />
        <EuroCurrency />
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
