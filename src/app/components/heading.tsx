import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";

interface HeaderProps {
    children?: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
    return (
        <Flex minWidth='max-content' alignItems='center' gap='2' bgColor={"white"} p={"4"} rounded={"lg"}>
            <Box p='2'>
                <Heading size='md'>INI HEADING</Heading>
            </Box>
            <Spacer />
            {children}
        </Flex>
    );
};

export default Header;
