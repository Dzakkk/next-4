"use client";

import BreadCrumbs from "@/app/components/breadcrumbs";
import SmallWithSocial from "@/app/components/footer";
import Header from "@/app/components/heading";
import SidebarWithHeader from "@/app/components/sidebar";
import { TableLayout, TableControl } from "@/app/components/table";
import { initValueUser, UserInterface } from "@/types/User";
import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, useDisclosure } from "@chakra-ui/react";
import { ColumnDef, getCoreRowModel, getPaginationRowModel, PaginationState, useReactTable } from "@tanstack/react-table";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useMemo, useState } from "react";

interface LinkItemProps {
    name: string;
    location: string;
}

const LinkItems: Array<LinkItemProps> = [
    { name: "ini", location: "/user" },
    { name: "user", location: "/user" },
];

const User = () => {

    const [dataUsers, setDataUsers] = useState<UserInterface[]>([])
    const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 })
    const [totalData, setTotalData] = useState<number>(0)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isEdit, setIsEdit] = useState<boolean>(false);

    useEffect(() => {
        setDataUsers(dataUsers)
        setTotalData(dataUsers.length)
    }, [totalData])

    useEffect(() => {
        setDataUsers(dataUsers)
    }, [])

    const fetchDataOption = {
        pageIndex,
        pageSize
    }

    const pagination = useMemo(
        () => ({
            pageIndex,
            pageSize,
        }),
        [pageIndex, pageSize]
    );

    const columns = useMemo<ColumnDef<UserInterface>[]>(
        () => [
            {
                accessorFn: (row) => row.name,
                id: "username",
                header: "Username",
                cell: (info) => info.getValue(),
                footer: (props) => props.column.id
            },
            {
                accessorFn: (row) => row.email,
                id: "email",
                header: "Email",
                cell: (info) => info.getValue(),
                footer: (props) => props.column.id
            },
            {
                accessorFn: (row) => row.status,
                id: "status",
                header: "Status",
                cell: (info) => info.getValue(),
                footer: (props) => props.column.id
            },
            {
                id: "actions",
                header: "Actions",
                cell: (info) => {
                    const row = info.row.original;
                    return (
                        <Box display="flex" gap="2">
                            <Button size="sm" colorScheme="yellow" onClick={() => handleEdit(row)}>
                                Edit
                            </Button>
                            <Button size="sm" colorScheme="red" onClick={() => handleDelete(row.id)}>
                                Delete
                            </Button>
                        </Box>
                    );
                },
            },
        ],
        []
    );



    const table = useReactTable({
        data: dataUsers,
        columns: columns,
        // pageCount: totalData,
        state: {
            pagination,
        },

        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),

        manualFiltering: false,
        manualPagination: false
    })

    const handleEdit = (user: UserInterface) => {
        formik.setValues(user);
        setIsEdit(true);
        onOpen();
    };

    const handleDelete = (id: number) => {
        const filteredUsers = dataUsers.filter((user) => user.id !== id);
        setDataUsers(filteredUsers);
    };

    const handleSubmit = (values: UserInterface) => {
        if (isEdit) {
            setDataUsers((prevUsers) =>
                prevUsers.map((user) => (user.id === values.id ? { ...values } : user))
            );
        } else {
            setDataUsers((prevUsers) => [
                ...prevUsers,
                { ...values, id: prevUsers.length + 1 },
            ]);
        }
        formik.resetForm();
        setIsEdit(false);
        onClose();
    };

    const userSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        status: Yup.string().required("Status is required"),
    });

    const formik = useFormik({
        initialValues: initValueUser,
        validationSchema: userSchema,
        onSubmit: handleSubmit,
    });

    return (
        <SidebarWithHeader>
            <Header>
                <BreadCrumbs items={LinkItems} />
            </Header>
            <Button onClick={onOpen} mt={"4"} colorScheme={"blue"} shadow={"lg"}>
                Add Data
            </Button>
            <Box mb={20}>
                <TableLayout table={table} />
                <TableControl table={table} />
            </Box>
            <SmallWithSocial />
            {/* Modal */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{isEdit ? "Edit User" : "Add User"}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl
                                isInvalid={formik.touched.name && Boolean(formik.errors.name)}
                                mb={4}
                            >
                                <FormLabel>Name</FormLabel>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <Box color="red.500">{formik.errors.name}</Box>
                                )}
                            </FormControl>
                            <FormControl
                                isInvalid={formik.touched.email && Boolean(formik.errors.email)}
                                mb={4}
                            >
                                <FormLabel>Email</FormLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <Box color="red.500">{formik.errors.email}</Box>
                                )}
                            </FormControl>
                            <FormControl
                                isInvalid={formik.touched.status && Boolean(formik.errors.status)}
                                mb={4}
                            >
                                <FormLabel>Status</FormLabel>
                                <RadioGroup
                                    id="status"
                                    name="status"
                                    value={formik.values.status}
                                    onChange={(value) => formik.setFieldValue("status", value)}
                                >
                                    <Box display="flex" flexDirection="column" gap={2}>
                                        <Radio   value="user">User</Radio>
                                        <Radio value="killer">Killer</Radio>
                                    </Box>
                                </RadioGroup>
                                {formik.touched.status && formik.errors.status && (
                                    <Box color="red.500">{formik.errors.status}</Box>
                                )}
                            </FormControl>

                            <ModalFooter>
                                <Button
                                    colorScheme="blue"
                                    type="submit"
                                    mr={3}
                                    isDisabled={!formik.dirty || !formik.isValid}
                                >
                                    Save
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </SidebarWithHeader>
    );
};

export default User;
