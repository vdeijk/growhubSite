import { makeAutoObservable } from "mobx";

class RouterService {
  currentPath = "";

  constructor() {
    makeAutoObservable(this);
  }

  navigateTo(path: string) {}
}

const routerService = new RouterService();
export default routerService;
