import { BUY_CAKE } from "../Constants";

export const buyCakeAction = (data) => {
  return {
    type: BUY_CAKE,
    payload: data,
  };
};
