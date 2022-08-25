import React, { useState, useEffect } from "react";
import { ScrollCards } from "../ScrollCards";
import "./style.css";
import db from "../../mocks/db.json";

export function Departmentlayout({ departmentId }) {
  const [department, setDepartment] = useState({});
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const item = db.departments.find((i) => i.id == departmentId);
    setDepartment(item);
    const doctorsArray = item.doctors;
    setDoctors(doctorsArray);
  }, [department]);

  return (
    <div className="department-container">
      <div className="department-page-banner">
        <img
          src={department.cover}
          alt="brch-cover"
          className="department-page-banner-image"
        />
      </div>
      <div className="reset-padding">
        <div className="departments-page-description">
          <h4 className="departments-page-title">{department.title}</h4>
          <p className="departments-page-text">{department.description}</p>
        </div>
        <div className="department-doctors">
          <h3 className="department-doctors-title">ჩვენი ექიმები</h3>
          <div className="department-doctors-cards">
            {doctors.map(({ id, name, avatar }) => {
              return (
                <ScrollCards key={id} title={name} src={avatar} route={id} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
