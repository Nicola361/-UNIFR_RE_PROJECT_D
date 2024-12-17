import { customElement } from 'aurelia';
import template from './grade.html';

@customElement({ name: 'grade', template })
export class Grade {
  logout() {
    alert("You have been logged out.");
    window.location.href = "/login.html";
  }
}
