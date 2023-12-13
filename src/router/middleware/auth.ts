import checkAuth from "@/mixins/checkAuth"
import { mixins } from "vue-class-component"

mixins: [checkAuth]
export default async function auth({ next, store }: any) {
  if (!await checkAuth.methods.checAuth()) {
    return next({
      name: "Catalog",
    });
  }
  return next();
}
