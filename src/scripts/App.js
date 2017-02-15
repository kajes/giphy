import Giphy from './utils/Giphy';
import queryString from 'query-string';
import { GIPHY_API_KEY } from './config';

export default class App {

  constructor(searchForm)
  {
    this.giphy = new Giphy();
    this.searchForm = searchForm;
  }

  onSubmit()
  {

    const query = queryString.stringify({q: this.searchForm.firstElementChild.value});

    const url = `http://api.giphy.com/v1/gifs/search?${query}&api_key=${GIPHY_API_KEY}`;

    return this.giphy.search(url);

  }
}
