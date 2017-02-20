/*
 * This file is part of Giphy.
 *
 * (c) Yrgo, högre yrkesutbildning Göteborg.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * This is the not found class.
 *
 * @author Vincent Klaiber <hello@vinkla.com>
 */
export default class NotFound {
  /**
   * Create a new not found instance.
   *
   * @return {void}
   */
  constructor (element) {
    this.element = element;
  }

  /**
   * Hide the not-found element.
   *
   * @return {void}
   */
  hide () {
    this.element.classList.add('not-found--active');
  }

  /**
   * Hide the not-found element.
   *
   * @param query {string}
   *
   * @return {void}
   */
  show (query) {
    this.element.textContent = `We couldn't find any GIFs with the search query "${query}".`;
    this.element.classList.add('not-found--active');
  }
}
