import queryString from 'query-string';
import { GIPHY_API_KEY } from '../config';

export default class Giphy {

  search(query)
  {

    const search = queryString.stringify({
      q: query,
      api-key: GIPHY_API_KEY
    });

    const url = 'http://api.giphy.com/v1/';

    fetch(url)
      return .then(response => response.json());

  }

}
