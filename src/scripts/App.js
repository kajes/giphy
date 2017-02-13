import Giphy from './utils/Giphy';
export default class App {

  constructor(search)
  {
    this.giphy = new Giphy();
    this.search = search;
  }

  onSubmit()
  {
    const query = document.querySelector('.search__input').value;
    return this.giphy.search(query);
  }
}
