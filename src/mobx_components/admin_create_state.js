import { makeAutoObservable, runInAction } from "mobx";

class AdminCreateState {
  constructor() {
    makeAutoObservable(this);
  }

  isPhotoMenuOpen = false;
  newPhotoUrl = "";
  textAreaHeight = 0;
  
  setNewPhotoUrl(url) {
    runInAction(() => {
      this.newPhotoUrl = url;
    });
  }

  setTextAreaHeight(height) {
    runInAction(() => {
      this.textAreaHeight = height;
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
