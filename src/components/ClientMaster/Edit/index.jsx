import { Breadcrumbs, Heading } from "@aws-amplify/ui-react";
import Form from "../Shared/Form";
import { FaAngleRight } from "react-icons/fa6";
import Header from "../../Shared/Header";
import { CLIENT_MASTER_LIST } from "../../../constants";

const EditBreadCrumbs = () => {
  return (
    <Breadcrumbs
      items={[
        {
          href: "/",
          label: "Client List View",
        },
        {
          href: "/review",
          label: "Emerald ID 1",
        },
        {
          label: "Edit Emerald ID 1",
        },
      ]}
      separator={<FaAngleRight />}
    />
  );
};

const Edit = () => {
  return (
    <>
      <Header />
      <div className="client-master-create-wrapper">
        <EditBreadCrumbs />
        <div className="page-heading">
          <Heading level={6}>Company Master : Emerald ID 1</Heading>
        </div>
        <div className="create-form-wrapper">
          <Form data={CLIENT_MASTER_LIST[0]} />
        </div>
      </div>
    </>
  );
};

export default Edit;
