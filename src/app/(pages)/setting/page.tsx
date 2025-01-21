"use client"

import BreadCrumbs from "@/app/components/breadcrumbs"
import SmallWithSocial from "@/app/components/footer"
import Header from "@/app/components/heading"
import SidebarWithHeader from "@/app/components/sidebar"
import { Box, Heading, Text } from "@chakra-ui/react"


interface LinkItemProps {
    name: string;
    location: string;
}

const LinkItems: Array<LinkItemProps> = [
    { name: "Ini", location: "/home" },
    { name: "Settings", location: "/setting" },
];


const Setting = () => {
    return (
        <SidebarWithHeader>
            <Header>
                <BreadCrumbs items={LinkItems} />
            </Header>
            <Box textAlign="center" py={10} px={6}>
                <Heading as="h2" size="xl" mt={6} mb={2}>
                    This is the headline
                </Heading>
                <Text color={'gray.500'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </Text>
            </Box>
            <SmallWithSocial />
        </SidebarWithHeader>
    )
}

export default Setting