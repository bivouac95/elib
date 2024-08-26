import { makeAutoObservable, runInAction } from "mobx";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API;
const supabase = createClient(supabaseUrl, supabaseKey);

class SearchState {
  constructor(key = "") {
    makeAutoObservable(this);
    if (key !== "") this.update(key);
  }

  key = "";
  articles = [];
  loaded = false;

  async update(key) {
    runInAction(() => {
      this.key = key;
      this.loaded = false;
    });
    const { data, error } = await supabase
      .from("articles")
      .select()
      .ilike("headling", `%${key}%`);

    if (error) {
      console.error(error);
    } else {
      if (data.length > 0) {
        runInAction(() => {
          this.articles = data;
          this.loaded = true;
        });
      } else {
        runInAction(() => {
          this.articles = [];
          this.loaded = true;
        });
      }
    }
  }
}

export default new SearchState();
