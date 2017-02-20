/*
 * This file is part of Giphy.
 *
 * (c) Yrgo, högre yrkesutbildning Göteborg.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * This is the gallery image class.
 *
 * @author Vincent Klaiber <hello@vinkla.com>
 */
export default class GalleryImage {
  /**
   * Create a new gallery image instance.
   *
   * @return {void}
   */
  constructor (source) {
    this.element = document.createElement('img');

    this.element.src = source;
  }
}
