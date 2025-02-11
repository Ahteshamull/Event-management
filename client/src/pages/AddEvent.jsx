import React, { useState } from 'react'
import { Link } from 'react-router';
import { handleError, handleSuccess } from '../Util';

const AddEvent = () => {
  const [allEvent, setAllEvent] = useState({
    image: "",
    name: "",
    description: "",
    date: "",
    time:"",
    location:""
  });
   const handleChange = (e) => {
     const { name, value } = e.target;

     const copyEvent = { ...allEvent };
     copyEvent[name] = value;
     setSignInfo(copyEvent);
  };
  const handleSignup = async (e) => {
       e.preventDefault();
       const {    image,
    name,
    description,
    date,
    time,
    location } = allEvent;
       if (!image || !description || !date || !name || !time || !location) {
         return handleError(" Fields Are Required");
       }
       
  
       try {
         const url = "https://localhost:3000/api/v1/event/create-event";
         const response = await fetch(url, {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
  
           body: JSON.stringify(signInfo),
         });
         console.log(response);
         const result = await response.json();
         const { success, message, error } = result;
         if (success) {
           handleSuccess(message || "event create successful");
  
           setTimeout(() => {
             navigate("/");
           }, 1000);
         } else if (error) {
           const details = error?.details[0].message;
           handleError(details);
         } else if (!success) {
           handleError(message);
         }
       } catch (error) {
         handleError(error);
       }
     };
  return (
    <div className="container mx-auto mt-10 mb-10 flex justify-center items-center">
      <div className="max-w-4xl w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create Event
        </h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label
              htmlFor="eventImage"
              className="block text-sm font-medium text-gray-700"
            >
              Event Image
            </label>
            <input
              onChange={handleChange}
              value={allEvent.image}
              type="file"
              id="image"
              name="image"
              className="mt-2 w-full border border-gray-300 p-3 rounded-md"
              required=""
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="eventName"
              className="block text-sm font-medium text-gray-700"
            >
              Event Name
            </label>
            <input
              onChange={handleChange}
              value={allEvent.name}
              type="text"
              id="eventName"
              name="eventName"
              className="mt-2 w-full border border-gray-300 p-3 rounded-md"
              placeholder="Enter event name"
              required=""
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600"
            >
              Event Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="mt-2 w-full border border-gray-400 p-3 rounded-sm"
              placeholder="Enter event description"
              required=""
              defaultValue={""}
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="eventDate"
                className="block text-sm font-medium text-gray-700"
              >
                Event Date
              </label>
              <input
                onChange={handleChange}
                value={allEvent.date}
                type="date"
                id="eventDate"
                name="eventDate"
                className="mt-2 w-full border border-gray-300 p-3 rounded-md"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="eventTime"
                className="block text-sm font-medium text-gray-700"
              >
                Event Time
              </label>
              <input
                onChange={handleChange}
                value={allEvent.time}
                type="time"
                id="eventTime"
                name="eventTime"
                className="mt-2 w-full border border-gray-300 p-3 rounded-md"
                required=""
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="eventLocation"
              className="block text-sm font-medium text-gray-700"
            >
              Event Location
            </label>
            <input
              onChange={handleChange}
              value={allEvent.location}
              type="text"
              id="eventLocation"
              name="eventLocation"
              className="mt-2 w-full border border-gray-300 p-3 rounded-md"
              placeholder="Enter event location"
              required=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-700"
            >
              Additional Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              className="mt-2 w-full border border-gray-300 p-3 rounded-md"
              placeholder="Add any additional notes"
              defaultValue={""}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-blue-700 hover:bg-transparent text-white hover:text-blue-700 transition-all duration-300"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEvent