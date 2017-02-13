import queryString from 'query-string';
import { GIPHY_API_KEY } from '../config';

export default class Giphy {

  search(query)
  {

    query = queryString.stringify(query);

    const searchUrl = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${GIPHY_API_KEY}`;

    return new Promise((resolve, reject) => {

      let image = new Image();

      image.addEventListener('load', event => {
        resolve(image);
      });

      image.addEventListener('error', event => {
        reject(new Error(`Failed to load image from source: ${query}`));
      });

    });

  }

}
