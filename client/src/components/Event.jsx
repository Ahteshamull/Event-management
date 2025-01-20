import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router";

import axios from "axios";
const Event = () => {
  const [updateData, setUpdateData] = useState(" ");

  const [allTask, setAllTask] = useState([]);
  const [id, setId] = useState("");
  async function getAllTasks() {
    try {
      const allData = await axios.get(
        "http://localhost:3000/api/v1/event/all-event"
      );
      setAllTask(allData.data.Data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllTasks();
  }, [allTask]);
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/api/v1/event/update-event${id}`)
      .then((data) => {
        console.log(data);
        alert("Are you sure you want to delete");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleUpdate = async () => {
    try {
      await axios.patch(
        `http://localhost:3000/api/v1/event/update-event${id}`,
        {
          name: updateData,
        }
      );

      getAllTasks();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <section className="main-content w-full px-6">
        <div className="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
          <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
              Latest Events Blogs Posts
            </h2>
         
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
                <div className="bg-white rounded overflow-hidden group relative">
                  {/* Image */}
                  <img
                    src="https://readymadeui.com/cardImg.webp"
                    alt="Blog Post 1"
                    className="w-full h-52 object-cover group-hover:opacity-50 transition-opacity"
                  />

                  {/* Hover Buttons */}
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 flex gap-5 group-hover:opacity-100 transition-opacity">
                    <Link to={"/add-event"}>
                      <button
                        onClick={handleUpdate}
                        className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-green-700 hover:bg-transparent text-white hover:text-green-700 transition-all duration-300"
                      >
                        <RxUpdate size={20} />
                      </button>
                    </Link>

                    <button
                      onClick={handleDelete}
                      className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-red-700 outline-none bg-transparent hover:bg-red-700 text-red-700 hover:text-white transition-all duration-300"
                    >
                      <MdDelete size={20} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      Lorem Ipsum Dolor
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore...
                    </p>
                    <div className="flex justify-between">
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08 April 2024
                      </p>
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08:50 PM
                      </p>
                    </div>
                    <h2 className="text-teal-500 text-[13px] font-semibold mt-4">
                      Dhaka, Bangladesh
                    </h2>
                    <a
                      href="javascript:void(0);"
                      className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded overflow-hidden group relative">
                  {/* Image */}
                  <img
                    src="https://readymadeui.com/cardImg.webp"
                    alt="Blog Post 1"
                    className="w-full h-52 object-cover group-hover:opacity-50 transition-opacity"
                  />

                  {/* Hover Buttons */}
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 flex gap-5 group-hover:opacity-100 transition-opacity">
                    <Link to={"/add-event"}>
                      <button
                        onClick={handleUpdate}
                        className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-green-700 hover:bg-transparent text-white hover:text-green-700 transition-all duration-300"
                      >
                        <RxUpdate size={20} />
                      </button>
                    </Link>

                    <button
                      onClick={handleDelete}
                      className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-red-700 outline-none bg-transparent hover:bg-red-700 text-red-700 hover:text-white transition-all duration-300"
                    >
                      <MdDelete size={20} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      Lorem Ipsum Dolor
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore...
                    </p>
                    <div className="flex justify-between">
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08 April 2024
                      </p>
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08:50 PM
                      </p>
                    </div>
                    <h2 className="text-teal-500 text-[13px] font-semibold mt-4">
                      Dhaka, Bangladesh
                    </h2>
                    <a
                      href="javascript:void(0);"
                      className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded overflow-hidden group relative">
                  {/* Image */}
                  <img
                    src="https://readymadeui.com/cardImg.webp"
                    alt="Blog Post 1"
                    className="w-full h-52 object-cover group-hover:opacity-50 transition-opacity"
                  />

                  {/* Hover Buttons */}
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 flex gap-5 group-hover:opacity-100 transition-opacity">
                    <Link to={"/add-event"}>
                      <button
                        onClick={handleUpdate}
                        className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-green-700 hover:bg-transparent text-white hover:text-green-700 transition-all duration-300"
                      >
                        <RxUpdate size={20} />
                      </button>
                    </Link>

                    <button
                      onClick={handleDelete}
                      className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-red-700 outline-none bg-transparent hover:bg-red-700 text-red-700 hover:text-white transition-all duration-300"
                    >
                      <MdDelete size={20} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      Lorem Ipsum Dolor
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore...
                    </p>
                    <div className="flex justify-between">
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08 April 2024
                      </p>
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08:50 PM
                      </p>
                    </div>
                    <h2 className="text-teal-500 text-[13px] font-semibold mt-4">
                      Dhaka, Bangladesh
                    </h2>
                    <a
                      href="javascript:void(0);"
                      className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded overflow-hidden group relative">
                  {/* Image */}
                  <img
                    src="https://readymadeui.com/cardImg.webp"
                    alt="Blog Post 1"
                    className="w-full h-52 object-cover group-hover:opacity-50 transition-opacity"
                  />

                  {/* Hover Buttons */}
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 flex gap-5 group-hover:opacity-100 transition-opacity">
                    <Link to={"/add-event"}>
                      <button
                        onClick={handleUpdate}
                        className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-green-700 hover:bg-transparent text-white hover:text-green-700 transition-all duration-300"
                      >
                        <RxUpdate size={20} />
                      </button>
                    </Link>

                    <button
                      onClick={handleDelete}
                      className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-red-700 outline-none bg-transparent hover:bg-red-700 text-red-700 hover:text-white transition-all duration-300"
                    >
                      <MdDelete size={20} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      Lorem Ipsum Dolor
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore...
                    </p>
                    <div className="flex justify-between">
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08 April 2024
                      </p>
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08:50 PM
                      </p>
                    </div>
                    <h2 className="text-teal-500 text-[13px] font-semibold mt-4">
                      Dhaka, Bangladesh
                    </h2>
                    <a
                      href="javascript:void(0);"
                      className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded overflow-hidden group relative">
                  {/* Image */}
                  <img
                    src="https://readymadeui.com/cardImg.webp"
                    alt="Blog Post 1"
                    className="w-full h-52 object-cover group-hover:opacity-50 transition-opacity"
                  />

                  {/* Hover Buttons */}
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 flex gap-5 group-hover:opacity-100 transition-opacity">
                    <Link to={"/add-event"}>
                      <button
                        onClick={handleUpdate}
                        className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-green-700 hover:bg-transparent text-white hover:text-green-700 transition-all duration-300"
                      >
                        <RxUpdate size={20} />
                      </button>
                    </Link>

                    <button
                      onClick={handleDelete}
                      className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-red-700 outline-none bg-transparent hover:bg-red-700 text-red-700 hover:text-white transition-all duration-300"
                    >
                      <MdDelete size={20} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      Lorem Ipsum Dolor
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore...
                    </p>
                    <div className="flex justify-between">
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08 April 2024
                      </p>
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08:50 PM
                      </p>
                    </div>
                    <h2 className="text-teal-500 text-[13px] font-semibold mt-4">
                      Dhaka, Bangladesh
                    </h2>
                    <a
                      href="javascript:void(0);"
                      className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded overflow-hidden group relative">
                  {/* Image */}
                  <img
                    src="https://readymadeui.com/cardImg.webp"
                    alt="Blog Post 1"
                    className="w-full h-52 object-cover group-hover:opacity-50 transition-opacity"
                  />

                  {/* Hover Buttons */}
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 flex gap-5 group-hover:opacity-100 transition-opacity">
                    <Link to={"/add-event"}>
                      <button
                        onClick={handleUpdate}
                        className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-green-700 hover:bg-transparent text-white hover:text-green-700 transition-all duration-300"
                      >
                        <RxUpdate size={20} />
                      </button>
                    </Link>

                    <button
                      onClick={handleDelete}
                      className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-red-700 outline-none bg-transparent hover:bg-red-700 text-red-700 hover:text-white transition-all duration-300"
                    >
                      <MdDelete size={20} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      Lorem Ipsum Dolor
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore...
                    </p>
                    <div className="flex justify-between">
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08 April 2024
                      </p>
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08:50 PM
                      </p>
                    </div>
                    <h2 className="text-teal-500 text-[13px] font-semibold mt-4">
                      Dhaka, Bangladesh
                    </h2>
                    <a
                      href="javascript:void(0);"
                      className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded overflow-hidden group relative">
                  {/* Image */}
                  <img
                    src="https://readymadeui.com/cardImg.webp"
                    alt="Blog Post 1"
                    className="w-full h-52 object-cover group-hover:opacity-50 transition-opacity"
                  />

                  {/* Hover Buttons */}
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 flex gap-5 group-hover:opacity-100 transition-opacity">
                    <Link to={"/add-event"}>
                      <button
                        onClick={handleUpdate}
                        className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-green-700 hover:bg-transparent text-white hover:text-green-700 transition-all duration-300"
                      >
                        <RxUpdate size={20} />
                      </button>
                    </Link>

                    <button
                      onClick={handleDelete}
                      className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-red-700 outline-none bg-transparent hover:bg-red-700 text-red-700 hover:text-white transition-all duration-300"
                    >
                      <MdDelete size={20} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      Lorem Ipsum Dolor
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore...
                    </p>
                    <div className="flex justify-between">
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08 April 2024
                      </p>
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08:50 PM
                      </p>
                    </div>
                    <h2 className="text-teal-500 text-[13px] font-semibold mt-4">
                      Dhaka, Bangladesh
                    </h2>
                    <a
                      href="javascript:void(0);"
                      className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded overflow-hidden group relative">
                  {/* Image */}
                  <img
                    src="https://readymadeui.com/cardImg.webp"
                    alt="Blog Post 1"
                    className="w-full h-52 object-cover group-hover:opacity-50 transition-opacity"
                  />

                  {/* Hover Buttons */}
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 flex gap-5 group-hover:opacity-100 transition-opacity">
                    <Link to={"/add-event"}>
                      <button
                        onClick={handleUpdate}
                        className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-green-700 hover:bg-transparent text-white hover:text-green-700 transition-all duration-300"
                      >
                        <RxUpdate size={20} />
                      </button>
                    </Link>

                    <button
                      onClick={handleDelete}
                      className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-red-700 outline-none bg-transparent hover:bg-red-700 text-red-700 hover:text-white transition-all duration-300"
                    >
                      <MdDelete size={20} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      Lorem Ipsum Dolor
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore...
                    </p>
                    <div className="flex justify-between">
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08 April 2024
                      </p>
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08:50 PM
                      </p>
                    </div>
                    <h2 className="text-teal-500 text-[13px] font-semibold mt-4">
                      Dhaka, Bangladesh
                    </h2>
                    <a
                      href="javascript:void(0);"
                      className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded overflow-hidden group relative">
                  {/* Image */}
                  <img
                    src="https://readymadeui.com/cardImg.webp"
                    alt="Blog Post 1"
                    className="w-full h-52 object-cover group-hover:opacity-50 transition-opacity"
                  />

                  {/* Hover Buttons */}
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 flex gap-5 group-hover:opacity-100 transition-opacity">
                    <Link to={"/add-event"}>
                      <button
                        onClick={handleUpdate}
                        className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-green-700 hover:bg-transparent text-white hover:text-green-700 transition-all duration-300"
                      >
                        <RxUpdate size={20} />
                      </button>
                    </Link>

                    <button
                      onClick={handleDelete}
                      className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-red-700 outline-none bg-transparent hover:bg-red-700 text-red-700 hover:text-white transition-all duration-300"
                    >
                      <MdDelete size={20} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      Lorem Ipsum Dolor
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore...
                    </p>
                    <div className="flex justify-between">
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08 April 2024
                      </p>
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08:50 PM
                      </p>
                    </div>
                    <h2 className="text-teal-500 text-[13px] font-semibold mt-4">
                      Dhaka, Bangladesh
                    </h2>
                    <a
                      href="javascript:void(0);"
                      className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded overflow-hidden group relative">
                  {/* Image */}
                  <img
                    src="https://readymadeui.com/cardImg.webp"
                    alt="Blog Post 1"
                    className="w-full h-52 object-cover group-hover:opacity-50 transition-opacity"
                  />

                  {/* Hover Buttons */}
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 flex gap-5 group-hover:opacity-100 transition-opacity">
                    <Link to={"/add-event"}>
                      <button
                        onClick={handleUpdate}
                        className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-green-700 hover:bg-transparent text-white hover:text-green-700 transition-all duration-300"
                      >
                        <RxUpdate size={20} />
                      </button>
                    </Link>

                    <button
                      onClick={handleDelete}
                      className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-red-700 outline-none bg-transparent hover:bg-red-700 text-red-700 hover:text-white transition-all duration-300"
                    >
                      <MdDelete size={20} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      Lorem Ipsum Dolor
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore...
                    </p>
                    <div className="flex justify-between">
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08 April 2024
                      </p>
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08:50 PM
                      </p>
                    </div>
                    <h2 className="text-teal-500 text-[13px] font-semibold mt-4">
                      Dhaka, Bangladesh
                    </h2>
                    <a
                      href="javascript:void(0);"
                      className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded overflow-hidden group relative">
                  {/* Image */}
                  <img
                    src="https://readymadeui.com/cardImg.webp"
                    alt="Blog Post 1"
                    className="w-full h-52 object-cover group-hover:opacity-50 transition-opacity"
                  />

                  {/* Hover Buttons */}
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 flex gap-5 group-hover:opacity-100 transition-opacity">
                    <Link to={"/add-event"}>
                      <button
                        onClick={handleUpdate}
                        className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-green-700 hover:bg-transparent text-white hover:text-green-700 transition-all duration-300"
                      >
                        <RxUpdate size={20} />
                      </button>
                    </Link>

                    <button
                      onClick={handleDelete}
                      className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-red-700 outline-none bg-transparent hover:bg-red-700 text-red-700 hover:text-white transition-all duration-300"
                    >
                      <MdDelete size={20} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      Lorem Ipsum Dolor
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore...
                    </p>
                    <div className="flex justify-between">
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08 April 2024
                      </p>
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08:50 PM
                      </p>
                    </div>
                    <h2 className="text-teal-500 text-[13px] font-semibold mt-4">
                      Dhaka, Bangladesh
                    </h2>
                    <a
                      href="javascript:void(0);"
                      className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded overflow-hidden group relative">
                  {/* Image */}
                  <img
                    src="https://readymadeui.com/cardImg.webp"
                    alt="Blog Post 1"
                    className="w-full h-52 object-cover group-hover:opacity-50 transition-opacity"
                  />

                  {/* Hover Buttons */}
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 flex gap-5 group-hover:opacity-100 transition-opacity">
                    <Link to={"/add-event"}>
                      <button
                        onClick={handleUpdate}
                        className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-green-700 hover:bg-transparent text-white hover:text-green-700 transition-all duration-300"
                      >
                        <RxUpdate size={20} />
                      </button>
                    </Link>

                    <button
                      onClick={handleDelete}
                      className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-red-700 outline-none bg-transparent hover:bg-red-700 text-red-700 hover:text-white transition-all duration-300"
                    >
                      <MdDelete size={20} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      Lorem Ipsum Dolor
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore...
                    </p>
                    <div className="flex justify-between">
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08 April 2024
                      </p>
                      <p className="text-orange-500 text-[13px] font-semibold mt-4">
                        08:50 PM
                      </p>
                    </div>
                    <h2 className="text-teal-500 text-[13px] font-semibold mt-4">
                      Dhaka, Bangladesh
                    </h2>
                    <a
                      href="javascript:void(0);"
                      className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default Event;
