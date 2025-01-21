"use client";

import BreadCrumbs from "@/app/components/breadcrumbs";
import SmallWithSocial from "@/app/components/footer";
import Header from "@/app/components/heading";
import SidebarWithHeader from "@/app/components/sidebar";
import { Button, Stack, Text } from "@chakra-ui/react";
import { FcLock } from "react-icons/fc";

interface LinkItemProps {
    name: string;
    location: string;
}

const LinkItems: Array<LinkItemProps> = [
    { name: "ini", location: "/home" },
    { name: "Home", location: "/home" },
];

const Home = () => {
    return (
        <SidebarWithHeader>
            <Header>
                <BreadCrumbs items={LinkItems} />
            </Header>
            <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
                <Stack direction="row" alignItems="center">
                    <Text fontWeight="semibold">Your Privacy</Text>
                    <FcLock />
                </Stack>

                <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
                    <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
                        We use cookies and similar technologies to help personalise content, tailor and
                        measure ads, and provide a better experience. By clicking OK or turning an
                        option on in Cookie Preferences, you agree to this, as outlined in our Cookie
                        Policy. To change preferences or withdraw consent, please update your Cookie
                        Preferences.
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }}>
                        <Button variant="outline" colorScheme="green">
                            Cookie Preferences
                        </Button>
                        <Button colorScheme="green">OK</Button>
                    </Stack>
                </Stack>
            </Stack>
            <SmallWithSocial />
        </SidebarWithHeader>
    );
};

export default Home;
