/*
 * This file is part of Giphy.
 *
 * (c) Yrgo, högre yrkesutbildning Göteborg.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * This is the gallery item class.
 *
 * @author Vincent Klaiber <hello@vinkla.com>
 */
export default class GalleryItem {
  /**
   * Create a new gallery item instance.
   *
   * @return {void}
   */
  constructor (href) {
    this.element = document.createElement('a');

    this.element.href = href;
    this.element.title = 'View on Giphy';

    this.element.classList.add('gallery__item');
  }
}
