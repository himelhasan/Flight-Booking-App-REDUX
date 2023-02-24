import { CREATEABOOKING, DELETEABOOKING } from "./actionIdentifier";

export const CreateBookingAction = (value, id) => {
  return {
    type: CREATEABOOKING,
    payload: {
      match: { value },
      matchId: id,
    },
  };
};
export const deleteABookingAction = (value, id) => {
  return {
    type: DELETEABOOKING,
    payload: {
      match: { value },
      matchId: id,
    },
  };
};
