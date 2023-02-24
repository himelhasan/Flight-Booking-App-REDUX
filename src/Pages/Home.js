import React from "react";
import "./Home.css";

import frameSvg from "../html/img/icons/Frame.svg";
import classType from "../html/img/icons/class.svg";
import avatar from "../html/img/icons/avatar.svg";
import DestinationTableRow from "../Components/DestinationTableRow";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { CreateBookingAction } from "../redux/booking/actionCreator";

const Home = () => {
  const alFlights = useSelector((state) => state);
  const dispatch = useDispatch();
  console.table(alFlights.allBookings);

  let allBookingsLength = alFlights.allBookings.length;
  let newID = allBookingsLength + 1;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const updatedNewBooking = { ...data, id: newID };
    dispatch(CreateBookingAction(updatedNewBooking, allBookingsLength));
  };

  return (
    <div>
      <section>
        {/* <!-- Input Data --> */}
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
          <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="first-hero lws-inputform">
              {/* <!-- From --> */}
              <div className="des-from">
                <p>Destination From</p>
                <div className="flex flex-row">
                  <img src={frameSvg} alt="" />
                  <select
                    {...register("from")}
                    className="outline-none px-2 py-2 w-full"
                    name="from"
                    id="lws-from"
                    required
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Saidpur">Saidpur</option>
                    <option value="Cox's Bazar">Cox's Bazar</option>
                  </select>
                </div>
              </div>

              {/* <!-- To --> */}
              <div className="des-from">
                <p>Destination To</p>
                <div className="flex flex-row">
                  <img src={frameSvg} alt="" />
                  <select
                    {...register("to")}
                    className="outline-none px-2 py-2 w-full"
                    name="to"
                    id="lws-to"
                    required
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Saidpur">Saidpur</option>
                    <option value="Cox's Bazar">Cox's Bazar</option>
                  </select>
                </div>
              </div>

              {/* <!-- Date --> */}
              <div className="des-from">
                <p>Journey Date</p>
                <input
                  {...register("date")}
                  type="date"
                  className="outline-none px-2 py-2 w-full date"
                  name="date"
                  id="lws-date"
                  required
                />
              </div>

              {/* <!-- Guests --> */}
              <div className="des-from">
                <p>Guests</p>
                <div className="flex flex-row">
                  <img src={avatar} alt="" />
                  <select
                    {...register("guests")}
                    className="outline-none px-2 py-2 w-full"
                    name="guests"
                    id="lws-guests"
                    required
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                  </select>
                </div>
              </div>

              {/* <!-- Class --> */}
              <div className="des-from !border-r-0">
                <p>Class</p>
                <div className="flex flex-row">
                  <img src={classType} alt="" />
                  <select
                    {...register("ticketClass")}
                    className="outline-none px-2 py-2 w-full"
                    name="ticketClass"
                    id="lws-ticketClass"
                    required
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option value="Business">Business</option>
                    <option value="Economy">Economy</option>
                  </select>
                </div>
              </div>

              <button className="addCity" type="submit" id="lws-addCity">
                <svg
                  width="15px"
                  height="15px"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span className="text-sm">Book</span>
              </button>
            </form>
          </div>
        </div>

        {/* <!-- Preview Data --> */}
        <div className="table-container">
          <table className="booking-table">
            <thead className="bg-gray-100/50">
              <tr className="text-black text-left">
                <th>Destination From</th>
                <th>Destination To</th>
                <th className="text-center">Journey Date</th>
                <th className="text-center">Guests</th>
                <th className="text-center">Class</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
              {alFlights.allBookings.map((flight) => (
                <DestinationTableRow key={flight.id} flight={flight} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Home;
