import { AuthController } from './controllers/AuthController.js';
import { GiftsController } from './controllers/GiftsController.js';
import { SandboxController } from './controllers/sandboxController.js';
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()
  SandboxController = new SandboxController()
  GiftsController = new GiftsController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
