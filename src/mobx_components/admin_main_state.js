import { makeAutoObservable, runInAction } from "mobx";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API;
const supabase = createClient(supabaseUrl, supabaseKey);

class AdminState {
  constructor() {
    makeAutoObservable(this);
  }

  isOpen = false;
  currentOption = "";
  navigete = null;

  setNavigete(navigete) {
    runInAction(() => {
      this.navigete = navigete;
    });
  }

  open(key) {
    runInAction(() => {
      this.isOpen = true;
      this.currentOption = key;
    });
  }
  close() {
    runInAction(() => {
      this.isOpen = false;
      this.currentOption = "";
    });
  }

  action(type) {
    switch (type) {
      case "create": {
        this.navigete("create/:" + this.currentOption)
        this.close()
        break;
      }
      case "delete": {
        this.navigete("delete/:" + this.currentOption)
        this.close()
        break;
      }
      case "update": {
        this.navigete("update/:" + this.currentOption)
        this.close()
        break;
      }
    }
  }
}

export default new AdminState();
