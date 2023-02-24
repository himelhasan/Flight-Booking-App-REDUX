import { CREATEABOOKING, DELETEABOOKING } from "./actionIdentifier";

export const CreateBookingAction = (value) => {
  return {
    type: CREATEABOOKING,
    payload: {
      match: { value },
    },
  };
};
export const deleteABookingAction = (id) => {
  return {
    type: DELETEABOOKING,
    payload: {
      matchId: id,
    },
  };
};
