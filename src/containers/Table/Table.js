import React, { useMemo } from "react";
import { useTable, useGlobalFilter, usePagination, UseSortByHooks, useSortBy } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import Column from "./Column";
import "../../scss/Table.scss";
import Filter from "./Filter";

const Table = () => {
  const columns = useMemo(() => Column, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    pageOptions,
    nextPage,
    canNextPage,
    previousPage,
    canPreviousPage,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    
    useSortBy,
    usePagination,
  );

  const {pageIndex} = state

  const { globalFilter } = state;
  return (
    <div className="conatiner">
      <div>
        <h3>Data Table with Global filter, Sorting and P  agination</h3></div> 
    <div className="col-12 mt-3 table-responsive">
      <div className="my-2">
        <Filter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header").toUpperCase()}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? <i className="fas fa-arrow-down ml-2"></i>: <i className="fas fa-arrow-up ml-2"></i>):''}
                  </span>
                  
                  </th>
         

             ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
          <span>
              page{' '}
              <strong>
                  {pageIndex + 1} of {pageOptions.length}
              </strong>
          </span>
        <button type="button" className="btn btn-outline-info mx-3" onClick={previousPage} disabled={!canPreviousPage}>Previous</button>
        <button type="button" className="btn btn-outline-info" onClick={nextPage} disabled={!canNextPage}>Next</button>
      </div>
    </div>
    </div>
  );
};

export default Table;
