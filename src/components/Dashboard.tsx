import { useEffect, useState } from "react";
import List from "./ClientMaster/List";
import { CLIENT_MASTER_LIST } from "../constants";
import { clientMasterListType } from "../types/clientMasterList";
import Header from "./Shared/Header";

function Dashboard() {
  const [clientMasterList, setClientMasterList] = useState<clientMasterListType[]>([]);

  useEffect(() => {
    setClientMasterList(CLIENT_MASTER_LIST);
  }, []);

  return (
    <>
      <Header />
      <div className="client-master-list">
        <List clientList={clientMasterList} />
      </div>
    </>
  );
};

export default Dashboard;
