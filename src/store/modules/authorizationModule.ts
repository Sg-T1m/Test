import {
  GetReqest,
  LoginPostReqiest,
} from "@/utils/requestServices/RequestServices";
import { loginData } from "./../../interface/LoginData";
import axios from "axios";
export const AuthorizationModule = {
  state: (): store => ({
    isAuth: false,
    TypeUsers: "guest",
  }),
  getters: {
    getTypeUser(state: any) {
      return state.TypeUsers;
    },
    getStatusAuts(state: any) {
      return state.isAuth;
    },
  },
  mutations: {
    SetAuthStatus(state: any, status: boolean) {
      state.isAuth = status;
    },
    SetRoleUser(state: any, role: string) {
      state.TypeUsers = role;
    },
  },
  actions: {
    async authAction({ state, commit }: any, response: any) {
      if (response.status > 200) {
        commit("SetAuthStatus", false);
        commit("SetRoleUser", "guest");
      } else {
        commit("SetAuthStatus", true);
        commit("SetRoleUser", "user");
        localStorage.setItem("token", response.data);
      }
    },
    async checkAuth({ state, commit }: any, token: string) {
      const response = await GetReqest(
        "https://localhost:7217/api/Login?",
        token
      );
      if (response.status > 200) {
        commit("SetAuthStatus", false);
        commit("SetRoleUser", "guest");
        localStorage.setItem("token", "");
      } else {
        commit("SetAuthStatus", true);
        commit("SetRoleUser", "user");
      }
    },
  },
};
interface store {
  isAuth: boolean;
  TypeUsers: string;
}
