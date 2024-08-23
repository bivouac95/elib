import { makeAutoObservable, runInAction } from "mobx";

class FeedbackState {
  constructor() {
    makeAutoObservable(this);
  }

  name = "";
  surname = "";
  email = "";
  theme = "";
  text = "";
  sent = false;

  setName = (name) => {
    runInAction(() => {
      this.name = name;
    });
  };

  setSurname = (surname) => {
    runInAction(() => {
      this.surname = surname;
    });
  };

  setEmail = (email) => {
    runInAction(() => {
      this.email = email;
    });
  };

  setTheme = (theme) => {
    runInAction(() => {
      this.theme = theme;
    });
  };

  setText = (text) => {
    runInAction(() => {
      this.text = text;
    });
  };

  send(){
    this.sent = true
    console.log(this.name, this.surname, this.email, this.theme, this.text)
    this.name = ""
    this.surname = ""
    this.email = ""
    this.theme = ""
    this.text = ""
  }
}

export default new FeedbackState();
