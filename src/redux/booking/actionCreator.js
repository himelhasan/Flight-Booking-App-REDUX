import { CREATEABOOKING } from "./actionIdentifier";

const CreateBookingAction = (value, id) => {
  return {
    type: CREATEABOOKING,
    payload: {
      match: { value },
      matchId: id,
    },
  };
};
