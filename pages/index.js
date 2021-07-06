import { useState } from 'react';
import {
  Flex, Heading, Input, useColorMode, IconButton, useColorModeValue,
} from '@chakra-ui/react';
import { BiSun } from 'react-icons/bi';
import Link from 'next/link';
import { useAuth } from '../contexts/auth';

export default function Home() {
  const { setUser } = useAuth();
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  const [employeeUser, setEmployeeUser] = useState('');
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6} height="30vh" width="13vw" justifyContent="center" alignItems="center">
        <Heading mb={8}>Hostel da Galera</Heading>
        <Input placeholder="Usuário" variant="filled" mb={6} type="name" value={employeeUser} onChange={(e) => setEmployeeUser(e.target.value)} />
        <Input placeholder="Password" variant="filled" mb={6} type="password" />
        <Link href="/Home">
          <Input value="Login" variant="filled" mb={6} type="submit" backgroundColor="teal" color="white" onClick={() => { setUser(employeeUser); }} />

        </Link>

        <IconButton aria-label="Search database" height="30px" width="30px" icon={<BiSun />} onClick={toggleColorMode} />
      </Flex>
    </Flex>

  );
}
