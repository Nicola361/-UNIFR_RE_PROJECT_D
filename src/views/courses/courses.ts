import { customElement } from 'aurelia';
import template from './courses.html';

@customElement({ name: 'courses', template })
export class Courses {
  logout() {
    alert("You have been logged out.");
    window.location.href = "/login.html";
  }
}
