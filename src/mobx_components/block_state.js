import { makeAutoObservable, runInAction } from "mobx";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API;
const supabase = createClient(supabaseUrl, supabaseKey);

class BlockState {
  constructor(id = null) {
    makeAutoObservable(this);
    if (id !== null) this.update(id);
  }

  id = null;
  page = null;
  headling = "";
  images = [];
  content = "";
  loaded = false;
  date = "";

  async update(id) {
    runInAction(() => {
      this.id = id;
      this.loaded = false;
    });
    const { data, error } = await supabase
      .from("articles")
      .select()
      .eq("id", id);

    if (error) {
      console.error(error);
    } else {
      if (data.length > 0) {
        const block = data[0];
        runInAction(() => {
          this.id = block.id;
          this.page = block.page;
          this.headling = block.headling;
          this.images = block.images;
          if (block.content) this.content = block.content;
          this.date = block.date;
          this.loaded = true;
        });
      }
    }
  }
}

export default new BlockState();
