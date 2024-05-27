import React, { useMemo, useState } from "react";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { profileData } from "../../Constant";
import { COLUMNS } from "../../components/column";
import GlobalFilter from "../../components/ProfileFilter";
import Header from "../../components/Header";

const ReactTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => profileData, []);

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

  const handleDeleteModeToggle = () => {
    setDeleteRow(!deleterow);
    setSelectedRows([]);
  };

  const handleSelectRow = (row) => {
    setSelectedRows((prev) =>
      prev.includes(row.id)
        ? prev.filter((id) => id !== row.id)
        : [...prev, row.id]
    );
  };

  const handleDeleteSelected = () => {
    console.log("Delete rows:", selectedRows);
  };

  return (
    <>
      <Header />
      <GlobalFilter
        filter={globalFilter}
        setFilter={setGlobalFilter}
        setDeleteRow={handleDeleteModeToggle}
      />
      <div className="">
        <table
          {...getTableProps()}
          className=" w-[80%] mx-auto border-b-[1px] border-slate-300 mt-4"
        >
          <thead className="bg-gray-50 border-[1px] border-black ">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="px-6 py-3 text-left  font-medium    "
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? "▴" : "▾") : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="bg-cyan-500 divide-y divide-gray-200"
          >
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {deleterow && (
                    <td className="px-8 py-4">
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
                        <td {...cell.getCellProps()} className="px-6 py-4 ">
                          <div className="">
                            <div className=" h-10 w-10 absolute ">
                              <img
                                className="h-[36px] w-[36px] rounded-[100%]"
                                src="/images/profile-set.png"
                                alt="profile"
                              />
                            </div>
                            <div className="px-12">
                              <div className="text-sm   text-[#121212] font-bold">
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
                              className="px-2  inline-flex text-xs leading-5 font-semibold rounded-full 
                            bg-green-100  text-green-800"
                            >
                              🌅 {cell.render("Cell")}
                            </span>
                          ) : (
                            <span className="px-2  inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              🌭 {cell.render("Cell")}
                            </span>
                          )}
                        </td>
                      );
                    } else {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className="px-6 py-4 whitespace-nowrap text-[#7D8398] text-sm font-medium"
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    }
                  })}
                  <td className="  absolute -ml-[95px] py-4 whitespace-nowrap text-[#7D8398] text-sm font-medium ">
                    {deleterow ? (
                      <button
                        className="bg-green-500  hover:bg-red-500 text-white font-normal py-2 px-4 rounded-xl"
                        onClick={handleDeleteSelected}
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

        <div className="flex gap-5 mb-14 mt-8 justify-center">
          <span className="mt-2">
            page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <button
            className="bg-green-500 p-2 rounded-lg"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </button>
          <button
            className="bg-green-500 p-2 rounded-lg "
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ReactTable;
