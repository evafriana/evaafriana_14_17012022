import React from "react";
import { useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import DataTable from "react-data-table-component";

const labels = [
  { name: "First Name", sortable: true, selector: (row) => row.firstName },
  { name: "Last Name", sortable: true, selector: (row) => row.lastName },
  { name: "Start Date", sortable: true, selector: (row) => row.startDate },
  { name: "Department", sortable: true, selector: (row) => row.department },
  { name: "Date of Birth", sortable: true, selector: (row) => row.dateOfBirth },
  { name: "Street", sortable: true, selector: (row) => row.street },
  { name: "City", sortable: true, selector: (row) => row.city },
  { name: "State", sortable: true, selector: (row) => row.state },
  { name: "Zip Code", sortable: true, selector: (row) => row.zipcode },
];

const CurrentEmployee = () => {
  const employees = useSelector((state) => state.data);

  const [filterText, setFilterText] = React.useState("");

  const filteredItems = employees.filter((item) => {
    return (
      (item.firstName &&
        item.firstName.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.lastName &&
        item.lastName.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.street &&
        item.street.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.city &&
        item.city.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.state &&
        item.state.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.zipcode &&
        item.zipcode.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.department &&
        item.department.toLowerCase().includes(filterText.toLowerCase()))
    );
  });

  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <>
        <h5 className="search">Search :</h5>
        <input
          onChange={(e) => setFilterText(e.target.value)}
          value={filterText}
        />
      </>
    );
  }, [filterText]);

  return (
    <section>
      <Navbar />
      <article className="currentEmployee">
        <h1 className="title">CURRENT EMPLOYEES</h1>
        <span className="lineForm" />
        <DataTable
          key={JSON.stringify(employees)}
          columns={labels}
          data={filteredItems}
          pagination
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
        />
      </article>
    </section>
  );
};

export default CurrentEmployee;
