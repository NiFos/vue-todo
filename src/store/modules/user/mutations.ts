import { MutationTree } from "vuex";
import { UserState } from "./state";

const userMutations: MutationTree<UserState> = {
  auth(state, payload) {
    state.currentUser = payload;
  },
};

export default userMutations;
