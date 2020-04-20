import React from "react";

const Request = (props) => {
  const totalRequest = props.request;
  const totalSalary = totalRequest.reduce(
    (total, frd) => total + frd.salary,
    0
  );
  const salary = Math.ceil(totalSalary);
  const tax = Math.round(totalSalary / 10);

  const grandTotal = (salary + tax).toFixed(2);

  return (
    <div>
      <strong>Total Friends Request : {totalRequest.length}</strong>
      <br />
      <strong>Salary : {salary}</strong>
      <br />
      <strong>Tax : {tax}</strong>
      <hr />
      <strong>Total Cost : {grandTotal}</strong>
    </div>
  );
};

export default Request;
