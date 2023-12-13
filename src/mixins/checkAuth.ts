import store from "@/store";
import { GetReqest } from "@/utils/requestServices/RequestServices";

export default {
  methods: {
    async checAuth() {
      const token: string | null = localStorage.getItem("token");
      const answer = await GetReqest(
        "https://localhost:7217/api/Login?",
        token!
      );

      if (answer.status > 200) {
        store.commit("SetAuthStatus", false);
        store.commit("SetRoleUser", "guest");
        return false;
      } else {
        return true;
      }
    },
    mounted() {
      console.log("mixin mounted");
    },
  },
};
