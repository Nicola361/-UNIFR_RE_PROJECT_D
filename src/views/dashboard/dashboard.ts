import { customElement } from 'aurelia';
import template from './dashboard.html';

@customElement({ name: 'dashboard', template })
export class dashboard {
  logout() {
    alert("You have been logged out.");
    window.location.href = "/login.html";
  }
}
