import { Table, TableHead, TableRow, TableCell, TableBody, Flex, Button, Heading, Pagination, usePagination, ThemeProvider } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

const PaginationTheme = {
  name: 'pagination-theme',
  tokens: {
    components: {
      pagination: {
        current: {
          backgroundColor: { value: '#337FCC' },
        }
      },
    },
  },
};

const List = ({ clientList }) => {
  const navigate = useNavigate();
  const paginationProps = usePagination({ totalPages: 1, currentPage: 1 });

  const navigateToReviewConflict = () => {
    navigate("/review-conflict");
  };

  const navigateToCreate = () => {
    navigate("/create");
  };

  return (
    <div className="table-wraper">
      <Flex justifyContent="space-between" marginBottom="1rem">
        <Flex direction="column" gap="0">
          <Heading>All Company Master</Heading>
          <sub>Total number of companies: {clientList.length}</sub>
        </Flex>
        <Button onClick={navigateToCreate} variation="primary">Add New Master Company</Button>
      </Flex>
      <Table
        caption=""
        highlightOnHover={false}
        size="small"
        variation="bordered"
        marginBottom="2rem"
      >
        <TableHead>
          <TableRow>
            <TableCell as="th">Emerald ID</TableCell>
            <TableCell as="th">Company Name</TableCell>
            <TableCell as="th">Company ID</TableCell>
            <TableCell as="th">Source System</TableCell>
            <TableCell as="th">Created By</TableCell>
            <TableCell as="th">Updated By</TableCell>
            <TableCell as="th">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            clientList.map((row) => {
              return (
                <TableRow>
                  <TableCell>{row.emeraldId}</TableCell>
                  <TableCell>{row.clientName}</TableCell>
                  <TableCell>{row.clientId}</TableCell>
                  <TableCell>{row.sourceSystem}</TableCell>
                  <TableCell>{row.createdBy}</TableCell>
                  <TableCell>{row.updatedBy}</TableCell>
                  <TableCell><Button onClick={navigateToReviewConflict} colorTheme="overlay">Review</Button></TableCell>
                </TableRow>
              );
            })
          }
        </TableBody>
      </Table>
      <ThemeProvider theme={PaginationTheme}>
        <Pagination {...paginationProps}/>
      </ThemeProvider>
    </div>
  );
};

export default List;