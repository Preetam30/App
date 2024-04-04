import {
  Breadcrumbs,
  Flex,
  Heading,
  ThemeProvider,
} from "@aws-amplify/ui-react";
import { FaAngleRight } from "react-icons/fa6";
import DetailsCard from "./detailsCard";
import ConflictDetailsCard from "./conflictDetailsCard";
import Header from "../../Shared/Header";
import { useEffect, useState } from "react";

const ReviewBreadCrumbs = () => {
  return (
    <Breadcrumbs
      items={[
        {
          href: "/",
          label: "Client List View",
        },
        {
          label: "View Emerald ID 1",
        },
      ]}
      separator={<FaAngleRight />}
    />
  );
};

const cardTheme = {
  name: "card-theme",
  tokens: {
    components: {
      card: {
        backgroundColor: { value: "#F7F7F7" },
        outlined: {
          borderRadius: { value: "{radii.large}" },
        },
      },
    },
  },
};

const conflictCardTheme = {
  name: "conflict-card-theme",
  tokens: {
    components: {
      card: {
        backgroundColor: { value: "#fff" },
        outlined: {
          borderRadius: { value: "{radii.large}" },
        },
      },
    },
  },
};

const View = () => {
  const [isConflict, setConflict] = useState(false);

  useEffect(() => {
    let relativePath = window.location.href.split("/");
    relativePath = relativePath[relativePath.length - 1];

    if (relativePath === "review-conflict") {
      setConflict(true);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="client-master-view-wrapper">
        <ReviewBreadCrumbs />
        <div className="page-heading">
          <Heading level={6}>Emerald ID 1</Heading>
        </div>
        <div className="card-wrapper">
          <Flex direction="column">
            <ThemeProvider theme={cardTheme}>
              <DetailsCard isConflict={isConflict} />
            </ThemeProvider>
            {isConflict && (
              <ThemeProvider theme={conflictCardTheme}>
                <ConflictDetailsCard />
              </ThemeProvider>
            )}
          </Flex>
        </div>
      </div>
    </>
  );
};

export default View;
