import React from "react";
import Link from "next/link";
import { Box, Burger, Button, Flex, Menu, Overlay } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import useUser from "src/store/useUser";
import { JSONCrackLogo } from "../JsonCrackLogo";

const StyledNavbarWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3;
`;

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  margin: 0 auto;
  border-bottom: 1px solid gray;
  background: #ffffff;
  padding: 8px 16px;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.35),
    0 2px 5px 0 rgba(0, 0, 0, 0.35);

  @media only screen and (max-width: 1024px) {
    .desktop {
      display: none;
    }
  }

  @media only screen and (max-width: 768px) {
    .hide-mobile {
      display: none;
    }
  }
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
  gap: 16px;
`;

export const Navbar = () => {
  const isAuthenticated = useUser(state => state.isAuthenticated);
  const [opened, { toggle }] = useDisclosure();

  return (
    <StyledNavbarWrapper>
      <StyledNavbar>
        <Left>
          <JSONCrackLogo />
          <Button color="dark" component={Link} href="/editor" prefetch={false} visibleFrom="sm">
            Editor
          </Button>
        </Left>
        <Right>
          {!isAuthenticated && (
            <Button
              component={Link}
              href="/sign-in"
              variant="outline"
              color="dark"
              className="hide-mobile"
              visibleFrom="sm"
            >
              Login
            </Button>
          )}
          
          <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" hiddenFrom="sm" />
          {opened && (
            <Overlay top={56} h="100dvh">
              <Box
                bg="white"
                top={56}
                left={0}
                pos="fixed"
                w="100%"
                pb="lg"
                style={{ zIndex: 3, borderBottom: "1px solid black" }}
              >
                
              </Box>
            </Overlay>
          )}
        </Right>
      </StyledNavbar>
    </StyledNavbarWrapper>
  );
};
