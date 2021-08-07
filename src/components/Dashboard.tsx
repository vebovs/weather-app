import React from 'react';
import Content from './Content';
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
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <DrawerHeader>Weather information</DrawerHeader>
            <DrawerBody>
              <Content />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Container>
  );
}

export default Dashboard;
