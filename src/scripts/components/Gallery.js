/*
 * This file is part of Giphy.
 *
 * (c) Yrgo, högre yrkesutbildning Göteborg.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import GalleryImage from './GalleryImage.js';
import GalleryItem from './GalleryItem.js';

/**
 * This is the gallery class.
 *
 * @author Vincent Klaiber <hello@vinkla.com>
 */
export default class Gallery {
  /**
   * Create a new gallery instance.
   *
   * @return {void}
   */
  constructor (element) {
    this.element = element;
  }

  /**
   * Add a GIF to the gallery.
   *
   * @return {void}
   */
  addItem (item) {
    const galleryItem = new GalleryItem(item.url);
    const galleryImage = new GalleryImage(item.images.original.url);

    galleryItem.element.appendChild(galleryImage.element);

    this.element.appendChild(galleryItem.element);
  }

  /**
   * Reset and remove all current gallery items.
   *
   * @return {void}
   */
  removeItems () {
    this.element.querySelectorAll('.gallery__item').forEach(item => item.remove());
  }
}
