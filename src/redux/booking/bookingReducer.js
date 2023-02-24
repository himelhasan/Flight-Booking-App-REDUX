import { CREATEABOOKING, DELETEABOOKING } from "./actionIdentifier";

const allFlightBookings = {
  allBookings: [],
};

let allBookingsLength = allFlightBookings.allBookings.length;
console.log(allBookingsLength);

const bookingReducer = (state = allFlightBookings, action) => {
  switch (action.type) {
    case CREATEABOOKING:
      // if (allBookingsLength < 3) {
      console.log(action.payload);
      if (action.payload.length < 3) {
        const newBooking = action.payload.match;
        const newBookingObject = {
          ...state,
          allBookings: [...state.allBookings, newBooking],
        };
        console.log(action.payload.allBookingsLength);
        return newBookingObject;
      } else return state;

    case DELETEABOOKING:
      const restBookings = state.allBookings.filter(
        (booking) => booking.id !== action.payload.matchId
      );
      return { ...state, allBookings: restBookings };

    default:
      return state;
  }
};

export default bookingReducer;
