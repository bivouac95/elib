import { makeAutoObservable, runInAction } from "mobx";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API;
const supabase = createClient(supabaseUrl, supabaseKey);

class PagesState {
  constructor(key = "") {
    makeAutoObservable(this);
    if (key !== "") this.update(key);
  }

  id = null;
  name = "";
  key = "";
  content = [];
  loaded = false;

  async getContent() {
    const { data, error } = await supabase
      .from("articles")
      .select()
      .eq("page", this.id);

    if (error) {
      console.error(error);
    } else {
      runInAction(() => {
        this.content = data;
        this.loaded = true;
      });
    }
  }


  async update(key = this.key) {
    runInAction(() => {
      this.key = key;
      this.loaded = false;
    });
    const { data, error } = await supabase
      .from("web_pages")
      .select()
      .eq("key", key);

    if (error) {
      console.error(error);
    } else {
      if (data.length > 0) {
        const page = data[0];
        runInAction(() => {
          this.id = page.id;
          this.name = page.name;
        });
        await this.getContent();
      }
    }
  }
}

export default new PagesState();
