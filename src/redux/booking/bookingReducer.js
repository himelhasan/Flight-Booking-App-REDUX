import { CREATEABOOKING, DELETEABOOKING } from "./actionIdentifier";

const allFlightBookings = {
  allBookings: [
    {
      id: 1,
      DestinationFrom: "Dhaka",
      DestinationTo: "Sylhet",
      JourneyDate: "11-01-23",
      NumberOfGuests: 2,
      FlightClass: "Business",
    },
  ],
};

const bookingReducer = (state = allFlightBookings, action) => {
  switch (action.type) {
    case CREATEABOOKING:
      return [...state, action.payload.match];

    case DELETEABOOKING:
      const restMatches = state.allBookings.filter(
        (booking) => booking.id !== action.payload.matchId
      );
      return { ...state, allBookings: restMatches };

    default:
      return state;
  }
};

export default bookingReducer;
