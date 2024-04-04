import {
  Alert,
  Button,
  Card,
  Divider,
  Flex,
  Grid,
  Heading,
  Label,
  Text,
  ThemeProvider,
} from "@aws-amplify/ui-react";
import { useState } from "react";
import { FaCircleExclamation, FaFileWord } from "react-icons/fa6";

const cardTheme = {
  name: "attachment-card-theme",
  tokens: {
    components: {
      card: {
        outlined: {
          borderRadius: { value: "{radii.large}" },
          borderStyle: { value: "dotted" },
        },
      },
    },
  },
};

const ConflictDetailsCard = () => {
  const [isRejected, setIsRejected] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [isDownloaded, setDownload] = useState(false);

  const downloadAttachment = () => {
    const link = document.createElement("a");
    link.href =
      "https://file-examples.com/storage/fe1b802e1565fe057a1d758/2017/02/file-sample_100kB.doc";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownload(true);
  };

  return (
    <Card variation="outlined" columnStart="1" columnEnd="-1">
      <div className="conflict-card-heading">
        <Heading level={5}>Conflict</Heading>
      </div>
      <div className="card-body">
        <Flex direction="column" marginBottom="2rem">
          <Heading level={6}>Company Master</Heading>
          <Divider size="small" />
        </Flex>
        <Grid templateColumns="1fr 1fr 1fr 1fr">
          <Flex direction="column" className="lbl-val">
            <Label>Emerald ID</Label>
            <Text>-</Text>
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
            <Text className="conflict-text">
              Conflict <FaCircleExclamation />
            </Text>
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
            <Text className="conflict-text">
              mills.udsc@ne.com <FaCircleExclamation />
            </Text>
          </Flex>
          <Flex direction="column" className="lbl-val">
            <Label>Company Website</Label>
            <Text>www.udsc.com</Text>
          </Flex>
          <Flex direction="column" className="lbl-val">
            <Label>Company Number</Label>
            <Text className="conflict-text">
              111234235 <FaCircleExclamation />
            </Text>
          </Flex>
          <Flex direction="column" className="lbl-val">
            <Label>Company Number Phone Ext</Label>
            <Text className="conflict-text">
              8787 <FaCircleExclamation />
            </Text>
          </Flex>
        </Grid>
        <Flex direction="column" marginBottom="2rem">
          <Heading level={6}>Billing Address Master</Heading>
          <Divider size="small" />
        </Flex>
        <Flex direction="column" className="lbl-val">
          <Label>Address Line</Label>
          <Text className="conflict-text">
            1e Eeldepad 3A Main street, JG Den Haag, Netherlands - 2541{" "}
            <FaCircleExclamation />
          </Text>
        </Flex>
        <Flex direction="column" className="lbl-val">
          <Heading level={6}>Attachments</Heading>
          <ThemeProvider theme={cardTheme}>
            <Card variation="outlined" className="attachment-card">
              <Flex justifyContent="space-between">
                <Flex marginTop="1rem">
                  <span className="color-blue">
                    <FaFileWord />
                  </span>
                  <Text>4577878989.docx</Text>
                </Flex>
                <Button onClick={downloadAttachment}>Download</Button>
              </Flex>
            </Card>
          </ThemeProvider>
          {isDownloaded && (
            <Alert
              margin="1rem"
              variation="success"
              isDismissible
              onDismiss={() => setDownload(false)}
            >
              Attachment Downloaded
            </Alert>
          )}
        </Flex>
      </div>
      <div className="card-footer">
        {isRejected && (
          <Alert
            margin="1rem"
            variation="error"
            isDismissible
            onDismiss={() => setIsRejected(false)}
          >
            Conflict data is Rejected
          </Alert>
        )}
        {isApproved && (
          <Alert
            margin="1rem"
            variation="success"
            isDismissible
            onDismiss={() => setIsApproved(false)}
          >
            Conflict data is Approved
          </Alert>
        )}
        <Flex justifyContent="center">
          <Button
            className="btn-reject"
            onClick={() => {
              setIsRejected(true);
              setIsApproved(false);
            }}
          >
            Reject
          </Button>
          <Button
            className="btn-approve"
            onClick={() => {
              setIsRejected(false);
              setIsApproved(true);
            }}
            variation="primary"
          >
            Approve
          </Button>
        </Flex>
      </div>
    </Card>
  );
};

export default ConflictDetailsCard;
