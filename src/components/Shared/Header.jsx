import { Flex, Heading } from "@aws-amplify/ui-react";
import { FaChevronDown, FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  return (
    <Flex className="header" justifyContent="space-between">
      <div className="logo">
        <img src="/emeraldLogo.ico" />
      </div>
      <Flex justifyContent="space-between">
        <FaChevronDown className="mt1" />
        <FaRegCircleUser className="mt1" size={28} color="hsl(190, 70%, 70%)" />
        <div className="profile-details">
          <Heading level="6">William J</Heading>
          <sub>DATA Steward</sub>
        </div>
      </Flex>
    </Flex>
  );
};

export default Header;
