import { Breadcrumbs, Heading } from "@aws-amplify/ui-react";
import Form from "../Shared/Form";
import { FaAngleRight } from "react-icons/fa6";
import Header from "../../Shared/Header";

const CreateBreadCrumbs = () => {
  return (
    <Breadcrumbs
      items={[
        {
          href: "/",
          label: "Company List View",
        },
        {
          label: "Add New Company Master",
        },
      ]}
      separator={<FaAngleRight />}
    />
  );
};

const Create = () => {
  return (
    <>
      <Header />
      <div className="client-master-create-wrapper">
        <CreateBreadCrumbs />
        <div className="page-heading">
          <Heading level={6}>Add New Company Master</Heading>
        </div>
        <div className="create-form-wrapper">
          <Form data={[]} />
        </div>
      </div>
    </>
  );
};

export default Create;
