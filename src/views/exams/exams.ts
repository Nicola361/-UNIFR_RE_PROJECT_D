import { customElement } from 'aurelia';
import template from './exams.html';

@customElement({ name: 'exams', template })
export class Exams {
  logout() {
    alert("You have been logged out.");
    window.location.href = "/login.html";
  }
}
