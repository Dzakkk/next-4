"use client"

import SidebarWithHeader from "@/app/components/sidebar"
import { Button, Center, Stack, Text } from "@chakra-ui/react"
import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { SiLinkedin, SiMessenger } from "react-icons/si"

const Setting = () => {
    return (
        <SidebarWithHeader>
            <Center p={8}>
                <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
                    {/* Facebook */}
                    <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
                        <Center>
                            <Text>Continue with Facebook</Text>
                        </Center>
                    </Button>

                    {/* Google */}
                    <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
                        <Center>
                            <Text>Sign in with Google</Text>
                        </Center>
                    </Button>

                    {/* LinkedIn */}
                    <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiLinkedin />}>
                        <Center>
                            <Text>Send to Linkedin</Text>
                        </Center>
                    </Button>

                    {/* Messenger */}
                    <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiMessenger />}>
                        <Center>
                            <Text>Send to Messenger</Text>
                        </Center>
                    </Button>
                </Stack>
            </Center>
        </SidebarWithHeader>
    )
}

export default Setting