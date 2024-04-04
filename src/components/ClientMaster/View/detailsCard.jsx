import { Alert, Button, Card, Divider, Flex, Grid, Heading, Label, Text } from "@aws-amplify/ui-react";
import { useState } from "react";
import { FaBoxArchive, FaPencil } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const DetailsCard = ({ isConflict }) => {
  const navigate = useNavigate();
  const [isArchieved, setIsArchieved] = useState(false);

  const navigateEdit = () => {
    navigate("/edit");
  };

  return (
    <Card variation="outlined" columnStart="1" columnEnd="-1">
      <div className="card-heading">
        <Flex justifyContent="space-between" marginBottom="1rem">
          <Heading level={5}>Company Master (Golden)</Heading>
          <Flex>
            <Button onClick={navigateEdit}><FaPencil /> &nbsp; Edit</Button>
            {
              !isConflict && <Button onClick={() => setIsArchieved(true)}><FaBoxArchive /> &nbsp; Archive</Button>
            }
          </Flex>
        </Flex>
        {
          isArchieved &&
          <Alert marginBottom="1rem" variation="error" isDismissible onDismiss={() => setIsArchieved(false)}>Data archieved successfully</Alert>
        }
      </div>
      <div className="card-body">
        <Flex direction="column" marginBottom="2rem">
          <Heading level={6}>Company Master</Heading>
          <Divider size="small" />
        </Flex>
        <Grid templateColumns="1fr 1fr 1fr 1fr">
          <Flex direction="column" className="lbl-val">
            <Label>Emerald ID</Label>
            <Text>1</Text>
          </Flex>
          <Flex direction="column" className="lbl-val">
            <Label>Company Name</Label>
            <Text>Euland China Company</Text>
          </Flex>
          <Flex direction="column" className="lbl-val">
            <Label>Company ID</Label>
            <Text>1</Text>
          </Flex>
          <Flex direction="column" className="lbl-val">
            <Label>Status</Label>
            <Text>Golden</Text>
          </Flex>
          <Flex direction="column" className="lbl-val">
            <Label>Source System</Label>
            <Text>SFDC</Text>
          </Flex>
          {/* <Flex direction="column" className="lbl-val">
            <Label>Destination System</Label>
            <Text>TMM</Text>
          </Flex> */}
          <Flex direction="column" className="lbl-val">
            <Label>Company Email ID</Label>
            <Text>mills.udsc@ne.com</Text>
          </Flex>
          <Flex direction="column" className="lbl-val">
            <Label>Company Website</Label>
            <Text>www.udsc.com</Text>
          </Flex>
          <Flex direction="column" className="lbl-val">
            <Label>Company Number</Label>
            <Text>111234235</Text>
          </Flex>
          <Flex direction="column" className="lbl-val">
            <Label>Company Number phone Ext</Label>
            <Text>8787</Text>
          </Flex>
        </Grid>
        <Flex direction="column" marginBottom="2rem">
          <Heading level={6}>Billing Address Master</Heading>
          <Divider size="small" />
        </Flex>
        <Flex direction="column" className="lbl-val">
          <Label>Address Line</Label>
          <Text>1e Eeldepad 3A Main street, JG Den Haag, Netherlands - 2541</Text>
        </Flex>
      </div>
    </Card>
  );
};

export default DetailsCard;
