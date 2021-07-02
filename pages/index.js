import {
  Flex, Heading, Input, useColorMode, IconButton, useColorModeValue,
} from '@chakra-ui/react';
import { BiSun } from 'react-icons/bi';
import Link from 'next/link';

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const formBackgruond = useColorModeValue('gray.100', 'gray.700');
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackgruond} p={12} rounded={6} height="30vh" width="13vw" justifyContent="center" alignItems="center">
        <Heading mb={8}>Hostel da Galera</Heading>
        <Input placeholder="Email" variant="filled" mb={6} type="email" />
        <Input placeholder="Password" variant="filled" mb={6} type="password" />
        <Link href="/Home">
          <Input value="Login" variant="filled" mb={6} type="submit" backgroundColor="teal" color="white" />
        </Link>

        <IconButton aria-label="Search database" height="30px" width="30px" icon={<BiSun />} onClick={toggleColorMode} />
      </Flex>
    </Flex>

  );
}
