import { CREATEABOOKING, DELETEABOOKING } from "./actionIdentifier";

export const CreateBookingAction = (value, allBookingsLength) => {
  return {
    type: CREATEABOOKING,
    payload: {
      match: value,
      length: allBookingsLength,
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
