import { useParams } from "react-router-dom";
import { Departmentlayout } from "../components/DepartmentLayout/";
import { Layout } from "../components/Layout";

export function Department() {
  const { id } = useParams();

  return (
    <Layout>
      <Departmentlayout departmentId={id} />
    </Layout>
  );
}
