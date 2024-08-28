import { makeAutoObservable, runInAction } from "mobx";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API;
const supabase = createClient(supabaseUrl, supabaseKey);

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

  send = async () => {
    if (this.text === "" || this.email === "" || this.name === "") return;

    this.sent = true;

    const { data, error } = await supabase
      .from("feedback")
      .insert([{
        name: this.name,
        surname: this.surname,
        email: this.email,
        theme: this.theme,
        text: this.text
      }])
      .select();

    this.name = "";
    this.surname = "";
    this.email = "";
    this.theme = "";
    this.text = "";
  };
}

export default new FeedbackState();
