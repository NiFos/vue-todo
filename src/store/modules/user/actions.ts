import { RootState } from "@/store/state";
import { ActionTree } from "vuex";
import { auth } from "../../../lib/firebase";
import router from "../../../router";
import { UserState } from "./state";

const userActions: ActionTree<UserState, RootState> = {
  async auth({ commit }, { email, password, isReg }) {
    try {
      let currentUser;

      if (isReg) {
        const response = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        currentUser = response.user?.email;
      } else {
        const response = await auth.signInWithEmailAndPassword(email, password);
        currentUser = response.user?.email;
      }

      commit("auth", currentUser);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  },
};

export default userActions;
