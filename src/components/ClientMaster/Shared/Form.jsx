import {
  Alert,
  Button,
  Card,
  Flex,
  Heading,
  Label,
  SelectField,
  Text,
  TextField,
  ThemeProvider,
} from "@aws-amplify/ui-react";
import { useState } from "react";
import { FaCloudArrowUp, FaFileWord } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { DESTINATION_SYSTEM_OPTIONS } from "../../../constants";

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

const Form = ({ data }) => {
  const [isDataSubmitted, setSubmitData] = useState(false);
  const navigate = useNavigate();

  const isEditPage = Object.keys(data).length > 1;
  console.log(data, isEditPage, data.clientName);

  const submitClientMaster = () => {
    setSubmitData(true);
    navigate("/");
  };

  return (
    <div className="client-master-form">
      <form>
        <Heading marginBottom="1rem" level="6">
          Company Master
        </Heading>
        <Flex marginBottom="2rem">
          <Flex direction="column" width="50%">
            {isEditPage && (
              <TextField
                defaultValue={data.emeraldId}
                disabled
                label="Emerald Id"
                className="txt-field"
              />
            )}
            <TextField
              defaultValue={isEditPage ? data.clientName : ""}
              disabled={isEditPage}
              label="Company Name*"
              className="txt-field"
            />
            <TextField
              defaultValue={isEditPage ? data.sourceSystem : ""}
              disabled={isEditPage}
              label="Source System"
              className="txt-field"
            />
            <TextField
              defaultValue={isEditPage ? "mills.udsc@ne.com" : ""}
              label="Email ID"
              className="txt-field"
            />
            <TextField
              defaultValue={isEditPage ? "13324454" : ""}
              label="Company Number"
              className="txt-field"
            />
          </Flex>
          <Flex direction="column" width="50%">
            {isEditPage && (
              <TextField
                defaultValue={data.isConflict ? "Conflict" : "Golden"}
                disabled
                label="Status"
                className="txt-field"
              />
            )}
            <TextField
              defaultValue={isEditPage ? data.clientId : ""}
              disabled={isEditPage}
              label="Company ID"
              className="txt-field"
            />
            <Label marginBottom="-5px" htmlFor="destination-system">
              Destination System
            </Label>
            <Select
              defaultValue={isEditPage ? [DESTINATION_SYSTEM_OPTIONS[0]] : []}
              isMulti
              name="destination-system"
              options={DESTINATION_SYSTEM_OPTIONS}
              className="txt-field"
              classNamePrefix="select"
              id="destination-system"
            />
            <TextField
              defaultValue={isEditPage ? "www.UDSC.com" : ""}
              label="Website"
              className="txt-field"
            />
            <TextField
              defaultValue={isEditPage ? "23456" : ""}
              label="Company Number Phone Ext"
              className="txt-field"
            />
          </Flex>
        </Flex>
        <Heading marginBottom="1rem">Billing Address</Heading>
        <Flex direction="column" marginBottom="1rem">
          <TextField
            defaultValue={isEditPage ? "1e Eeldepad 3A Main street" : ""}
            label="Address Line"
            className="txt-field"
          />
        </Flex>
        <Flex marginBottom="2rem">
          <Flex direction="column" width="50%">
            <TextField
              defaultValue={isEditPage ? "JG Den Haag" : ""}
              label="City"
              className="txt-field"
            />
            <TextField
              defaultValue={isEditPage ? "Netherlands" : ""}
              label="Country"
              className="txt-field"
            />
          </Flex>
          <Flex direction="column" width="50%">
            <TextField
              defaultValue={isEditPage ? "JG Den Haag" : ""}
              label="State"
              className="txt-field"
            />
            <TextField
              defaultValue={isEditPage ? "2541" : ""}
              label="Zipcode"
              className="txt-field"
            />
          </Flex>
        </Flex>
        <Heading marginBottom="1rem">Attachments</Heading>
        <Flex marginBottom="2rem" direction="column">
          <ThemeProvider theme={cardTheme}>
            <Card variation="outlined" className="attachment-card">
              <Flex justifyContent="space-between">
                {isEditPage && (
                  <>
                    <Flex marginTop="1rem">
                      <span className="color-blue">
                        <FaFileWord />
                      </span>
                      <Text>4577878989.docx</Text>
                    </Flex>
                    <Button>Remove</Button>
                  </>
                )}
                {!isEditPage && (
                  <>
                    <Flex>
                      <Flex marginTop="1rem">
                        <FaCloudArrowUp className="color-blue" />
                      </Flex>
                      <div className="opacity4">
                        <span>
                          File Format: PDF, Word Doc, PPT, Excel Files
                        </span>
                        <br />
                        <span>Maximum Size: 3MB</span>
                      </div>
                    </Flex>
                    <Button>Choose File</Button>
                  </>
                )}
              </Flex>
            </Card>
          </ThemeProvider>
        </Flex>
        {isDataSubmitted && (
          <Flex direction="column" marginBottom="2rem">
            <Alert
              variation="success"
              isDismissible
              onDismiss={() => setSubmitData(false)}
            >
              Data submitted successfully
            </Alert>
          </Flex>
        )}
        <Flex justifyContent="center">
          <Button
            className="btn-cancel"
            onClick={() => {
              setSubmitData(false);
            }}
          >
            Cancel
          </Button>
          <Button
            className="btn-submit"
            onClick={submitClientMaster}
            variation="primary"
          >
            {isEditPage ? "Save" : "Submit"}
          </Button>
        </Flex>
      </form>
    </div>
  );
};

export default Form;
