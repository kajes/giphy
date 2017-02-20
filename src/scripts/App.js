import Giphy from './utils/Giphy';

export default class App {

  constructor()
  {
    this.giphy = new Giphy();
    const form = document.forms.search;
    this.field = this.form.querySelector('input');
    this.form.addEventListener('submit', this.onSubmit.bind(this));
  }

  onSubmit(event)
  {

    event.preventDefault(event);
    this.giphy.search(this.field.value)
      .then(response => {
        for (let i = 0; i < response.data.length; i++) {
          const item = response.data[i]


        }

      })

  }
}
