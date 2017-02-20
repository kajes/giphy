/*
 * This file is part of Giphy.
 *
 * (c) Yrgo, högre yrkesutbildning Göteborg.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { GIPHY_API_KEY } from '../config';
import queryString from 'query-string';

/**
 * This is the giphy class.
 *
 * @author Vincent Klaiber <hello@vinkla.com>
 */
export default class Giphy {
  /**
   * Search for GIFs on Giphy.
   *
   * @param query {string}
   *
   * @return {Promise}
   */
  search (query) {
    const url = this.buildApiUrl(query);

    return window.fetch(url)
      .then(response => response.json())
      .catch(error => console.error(error));
  }

  /**
   * Build the Giphy API url.
   *
   * @param query {string}
   *
   * @return {string}
   */
  buildApiUrl (query) {
    // Build the search query string with the stringify method from the
    // query-string package.
    const search = queryString.stringify({
      q: query,
      api_key: GIPHY_API_KEY,
      rating: 'g'
    });

    window.history.pushState(query, null, '?search='+query);

    return `https://api.giphy.com/v1/gifs/search?${search}`;
  }
}
