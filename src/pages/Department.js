import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Departmentlayout } from "../components/DepartmentLayout/";
import { Layout } from "../components/Layout";
import db from "../mocks/db.json";

export function Department() {
  const [department, setDepartment] = useState();
  const { id } = useParams();

  useEffect(() => {
    let item = db.mediCards.find((i) => i.id == id);
    setDepartment(item);
  }, []);

  return (
    <Layout>
      <Departmentlayout department={department} />
    </Layout>
  );
}
