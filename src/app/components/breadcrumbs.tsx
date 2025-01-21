import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

interface LinkItemProps {
    name: string;
    location: string;
}

const BreadCrumbs = ({ items }: { items: LinkItemProps[] }) => {
    return (
        <Breadcrumb spacing="8px" separator="/">
            {items.map((item, index) => (
                <BreadcrumbItem key={index}>
                    <BreadcrumbLink href={item.location}>{item.name}</BreadcrumbLink>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    );
};

export default BreadCrumbs;
