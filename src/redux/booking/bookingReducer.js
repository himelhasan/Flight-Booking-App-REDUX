import { CREATEABOOKING, DELETEABOOKING } from "./actionIdentifier";

const allFlightBookings = {
  allBookings: [
    {
      id: 1,
      from: "Dhaka",
      to: "Sylhet",
      date: "11-01-23",
      guests: 2,
      ticketClass: "Business",
    },
    {
      id: 2,
      from: "Sylhet",
      to: "Sylhet",
      date: "11-01-23",
      guests: 2,
      ticketClass: "Business",
    },
  ],
};

// let lengthOfAllBookingsArray = allFlightBookings.allBookings.length;
// console.log(lengthOfAllBookingsArray);

let allBookingsLength = allFlightBookings.allBookings.length;
console.log(allBookingsLength);
// const newID = allBookingsLength + 1;
// console.log(newID);
// const updatedNewBooking = { ...newBooking, id: newID };

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
