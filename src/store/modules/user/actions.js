import { auth } from "../../../lib/firebase";
import router from "../../../router";

const userActions = {
  async auth({ commit }, { email, password, isReg }) {
    try {
      let currentUser;

      if (isReg) {
        const response = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        currentUser = response.user.email;
      } else {
        const response = await auth.signInWithEmailAndPassword(email, password);
        currentUser = response.user.email;
      }

      commit("auth", currentUser);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  },
};

export default userActions;
