import queryString from 'query-string';
import { GIPHY_API_KEY } from '../config';

export default class Giphy {

  search(query)
  {

    query = queryString.stringify(query);

    const searchUrl = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${GIPHY_API_KEY}`;

    const promise = new Promise((resolve, reject) => {

    });

  }

}
