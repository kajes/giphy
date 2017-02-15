import queryString from 'query-string';
import { GIPHY_API_KEY } from '../config';

export default class Giphy {

  search(q)
  {

    const query = queryString.stringify({q});

    const searchUrl = `http://api.giphy.com/v1/gifs/search?${query}&api_key=${GIPHY_API_KEY}`;

    fetch(searchUrl).then((response) => {

      if (response.status != 200) {
        return new Error(`Search URL failed to respond correctly: ${searchUrl}`);
      }

      response.json().then((data) => {

        return new Promise((resolve, reject) => {

          let giphyResponse = new Image();

          giphyResponse.addEventListener('load', event => {
            resolve(giphyResponse);
          });

          giphyResponse.addEventListener('error', event => {
            reject(new Error(`No GIFs found: ${q}`));
          });

        });

      });


    }

    );

  }

}
