import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// สร้างฟังก์ชันสำหรับสร้างไฟล์ CSV จากข้อมูล
const exportToCSV = (data) => {
  const csvData = "data:text/csv;charset=utf-8," + 
    Object.keys(data[0]).join(",") + "\n" +
    data.map(row => Object.values(row).join(",")).join("\n");
  const encodedURI = encodeURI(csvData);
  const link = document.createElement("a");
  link.setAttribute("href", encodedURI);
  link.setAttribute("download", "applicants.csv");
  document.body.appendChild(link);
  link.click();
}

function ApplicantSummary() {
  const [applicants, setApplicants] = React.useState([
    { id: 1, name: "John Doe", position: "Software Engineer", salary: 50000 },
    { id: 2, name: "Jane Doe", position: "Data Scientist", salary: 60000 },
    { id: 3, name: "Jane Doe", position: "Software Engineer", salary: 70000 },
    { id: 4, name: "Jane Doe", position: "Data Scientist", salary: 80000 },
    { id: 5, name: "Jane Doe", position: "Software Engineer", salary: 90000 },
  ]);

  const deleteApplicant = (id) => {
    setApplicants(applicants.filter(applicant => applicant.id !== id));
  };

  return (
    <div className="container">
      <h1 className="my-4">Applicant Summary</h1>
      <button className="btn btn-primary mb-3" onClick={() => exportToCSV(applicants)}>Download CSV</button>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant, index) => (
            <tr key={applicant.id}>
              <td>{index + 1}</td>
              <td>{applicant.name}</td>
              <td>{applicant.position}</td>
              <td>{applicant.salary}</td>
              <td>
                <button className="btn btn-warning me-2"><Link to="/edit">Edit</Link></button>
                <button className="btn btn-danger" onClick={() => deleteApplicant(applicant.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApplicantSummary;
