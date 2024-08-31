import { makeAutoObservable, runInAction } from "mobx";

class AdminCreateState {
  constructor() {
    makeAutoObservable(this);
  }

  isPhotoMenuOpen = false;
  newPhotoUrl = "";
  
  setNewPhotoUrl(url) {
    runInAction(() => {
      this.newPhotoUrl = url;
    });
  }

  openPhotoMenu() {
    runInAction(() => {
      this.isPhotoMenuOpen = true;
    });
  }

  closePhotoMenu() {
    runInAction(() => {
      this.isPhotoMenuOpen = false;
    });
  }
}

export default new AdminCreateState();
