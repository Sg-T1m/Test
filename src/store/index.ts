import { AuthorizationModule } from "./modules/authorizationModule";
import { RegistrationModule } from "./modules/registrationModule";
import { createStore } from "vuex";

export default createStore({
  state: {
 
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Registration: RegistrationModule,
    Authorization: AuthorizationModule,
  },
});
interface store {
}
