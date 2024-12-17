import { IRouter } from "@aurelia/router";
import { inject } from "aurelia";

@inject(IRouter)
export class Login {
  constructor(private router: IRouter) { }


  validateUser(event: Event): void {
    event.preventDefault();

    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    if (email === "Nicola.schaerer@unifr.ch" && password === "123") {
      this.router.load("dashboard");
    } else {
      alert("Sign in not possible");
    }
  }

  login(userType: string) {
    if (userType === 'student') {
      alert("Student-Login ist derzeit nicht verfügbar.");
    } else if (userType === 'professor') {
      alert("Professoren-Login ist derzeit nicht verfügbar.");
    }
  }
}
