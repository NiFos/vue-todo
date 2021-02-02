import { TodoState } from "./modules/todo/state";
import { UserState } from "./modules/user/state";

export interface RootState {
  user: UserState;
  todo: TodoState;
}
