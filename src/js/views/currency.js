class CurrencyUI {
  constructor() {
    this.currency = document.getElementById('select');
    this.dictionery = {
      USD: '$',
      EUR: '€',
    }
  }

  get currencuValue() {
    return this.currency.value;
  }

  getCurrencySymbol() {
    return this.dictionery[this.currencuValue];
  }
}

const currencyUI = new CurrencyUI();

export default currencyUI;