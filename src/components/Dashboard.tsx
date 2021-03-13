import React from 'react';
import { usePosition } from './Position';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Alert,
  Button,
  Text,
  HStack,
  Container,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

function Dashboard() {
  const { position } = usePosition()!;
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (position)
    return (
      <Container>
        <Alert
          status='success'
          variant='sublet'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
        >
          <HStack>
            <Text>Search for meteorological data</Text>
            <Button size='md' onClick={onOpen}>
              <Search2Icon />
            </Button>
          </HStack>
        </Alert>
        <Drawer isOpen={isOpen} placement='top' onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Dashboard</DrawerHeader>
              <DrawerBody>
                <h1>Content goes here!</h1>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Container>
    );
}

export default Dashboard;
