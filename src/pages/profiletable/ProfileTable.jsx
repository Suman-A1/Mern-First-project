import React, { useMemo, useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { TableData } from "../../utils/constant";
import { column } from "../../utils/constant";
import SearchBar from "../../components/profiletable/SearchBar";
import Header from "../../components/navbar/Header";
import { ConfirmModal } from "../../components/profiletable/ConfirmModal";
import { useNavigate } from "react-router-dom";
import logout from "../../utils/auth";

const ProfileTable = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const columns = useMemo(() => column, []);
  const [data, setData] = useState(TableData);

  //const data = useMemo(() => TableData, []);

  const [deleterow, setDeleteRow] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
  } = tableInstance;

  const { globalFilter, pageIndex } = state;

  const handleDeleteModeRow = () => {
    // toggle the delete button
    setDeleteRow(!deleterow);
    setSelectedRows([]);
  };

  const handleSelectRow = (row) => {
    //checkbox
    setSelectedRows((prev) =>
      prev.includes(row.id)
        ? prev.filter((id) => id !== row.id)
        : [...prev, row.id]
    );
  };

  const handleSelectAll = () => {
    if (selectedRows.length === page.length) {
      setSelectedRows([]);
    } else {
      const allRowIds = page.map((row) => row.id);
      setSelectedRows(allRowIds);
    }
  };

  const handleDeleteSelected = (row) => {
    if (selectedRows.includes(row.id)) {
      setSelectedUsers([row.original]);
      setShowModal(true);
    }
  };
  const handleDeleteConfirm = (id) => {
    setData((prevData) => {
      const deletedUsers = prevData.filter((row) => row.id === id);
      console.log("Deleted users:", deletedUsers);
      return prevData.filter((row) => row.id !== id);
    });
    setShowModal(false);
    setSelectedRows([]);
    setSelectedUsers(null);
  };

  const handleLogout = () => {
    logout(navigate); // Use the logout function from auth.js
  };

  // const handleLogout = () => {
  //   localStorage.removeItem("loggedIn");
  //   navigate("/");
  // };

  return (
    <>
      <Header handleLogout={handleLogout} />
      <SearchBar
        filter={globalFilter}
        setFilter={setGlobalFilter}
        setDeleteRow={handleDeleteModeRow}
      />
      <div className="">
        <table
          {...getTableProps()}
          className="w-[73%] mx-auto border-b-[1px] border-slate-300 mt-4 "
        >
          <thead className="bg-gray-50 border-[1px] border-slate-100 shadow-sm ">
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {deleterow && (
                  <th className="px-6 py-3 text-left font-medium">
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      checked={selectedRows.length === page.length}
                    />
                  </th>
                )}
                {headerGroup.headers.map((column) => (
                  <th
                    key={column.id}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="px-6 py-3 text-left font-medium"
                  >
                    {column.render("Header")}
                    <span className="text-gray-400 ml-2 text-xs">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <i className="fa-solid fa-sort-down "></i>
                        ) : (
                          <i className="fa-solid fa-sort-up"></i>
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="bg-white divide-y divide-gray-200 "
          >
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="odd:bg-white even:bg-[#FCFCFC] "
                >
                  {deleterow && (
                    <td className="px-6 py-4 ">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(row.id)}
                        onChange={() => handleSelectRow(row)}
                      />
                    </td>
                  )}
                  {row.cells.map((cell) => {
                    if (cell.column.id === "name") {
                      return (
                        <td {...cell.getCellProps()} className="px-6 py-4">
                          <div className="">
                            <div className="h-10 w-10 absolute">
                              <img
                                className="h-[36px] w-[36px] rounded-[100%]"
                                src="/images/profile-set.png"
                                alt="profile"
                              />
                            </div>
                            <div className="px-12">
                              <div className="text-sm text-[#121212] font-bold">
                                {cell.render("Cell")}
                              </div>
                              <div className="text-xs text-gray-500">
                                {row.original.email}
                              </div>
                            </div>
                          </div>
                        </td>
                      );
                    } else if (cell.column.id === "image") {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className="px-6 py-4 whitespace-nowrap"
                        >
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {row.original.name}
                              </div>
                            </div>
                          </div>
                        </td>
                      );
                    } else if (cell.column.id === "status") {
                      const isActive = cell.value === "Active";
                      return (
                        <td
                          {...cell.getCellProps()}
                          className="px-6 py-4 whitespace-nowrap"
                        >
                          {isActive ? (
                            <span
                              className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                              bg-green-100 text-green-800"
                            >
                              ✔ {cell.render("Cell")}
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              ❌ {cell.render("Cell")}
                            </span>
                          )}
                        </td>
                      );
                    } else {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className="px-6 py-4 whitespace-nowrap text-[#7D8398] text-sm font-medium "
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    }
                  })}
                  <td className="absolute -ml-[95px] py-4 whitespace-nowrap text-[#7D8398] text-sm font-medium ">
                    {deleterow ? (
                      <button
                        className="bg-green-500 hover:bg-red-500 text-white font-normal py-2 px-5 rounded-xl"
                        onClick={() => handleDeleteSelected(row)}
                      >
                        Delete
                      </button>
                    ) : (
                      <button className="bg-green-500 hover:bg-green-700 text-white font-normal py-2 px-4 rounded-xl">
                        Message
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="flex gap-4 mb-14 mt-8 justify-end mr-44">
          <button
            className="text-[#999999] border-[#EBEBEB] border-[1px]  cursor-pointer hover:bg-green-500 hover:text-white p-2 px-3 rounded-lg "
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <i className="fa-solid fa-angles-left"></i>
          </button>
          <span className="mt-2  ">
            <div className="">
              <strong className="border-[#EBEBEB] border-[1px] w-2 mr-2 font-normal p-2.5 px-3  rounded-lg cursor-pointer text-[#999999] hover:bg-green-500 hover:text-white">
                {pageIndex + 1}
              </strong>{" "}
              <strong className="border-[#EBEBEB] border-[1px] w-2 font-normal py-2.5 p-2 px-3 rounded-lg cursor-pointer text-[#999999] hover:bg-green-500 hover:text-white">
                {pageOptions.length}
              </strong>{" "}
            </div>
          </span>
          {/* <button
            className="bg-green-500 p-2 rounded-lg"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <i className="fa-solid fa-angles-left"></i>
          </button> */}
          <button
            className="text-[#999999] border-[#EBEBEB] border-[1px] cursor-pointer hover:bg-green-500 hover:text-white p-2 px-3 rounded-lg"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>
      </div>
      <ConfirmModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        selectedUsers={selectedUsers}
        onDelete={() => {
          handleDeleteConfirm(selectedUsers[0].id);
          setShowModal(false);
          setSelectedUsers([]);
        }}
      />
    </>
  );
};

export default ProfileTable;
