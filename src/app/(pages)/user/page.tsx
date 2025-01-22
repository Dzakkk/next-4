"use client";

import BreadCrumbs from "@/app/components/breadcrumbs";
import SmallWithSocial from "@/app/components/footer";
import Header from "@/app/components/heading";
import SidebarWithHeader from "@/app/components/sidebar";
import { TableLayout, TableControl } from "@/app/components/table";
import { fakeUsers, UserInterface } from "@/types/User";
import { Box } from "@chakra-ui/react";
import { ColumnDef, getCoreRowModel, getPaginationRowModel, PaginationState, useReactTable } from "@tanstack/react-table";
import { info } from "console";
import { access } from "fs";
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

    useEffect(() => {
        setDataUsers(fakeUsers)
        setTotalData(fakeUsers.length)
    }, [totalData])

    useEffect(() => {
        setDataUsers(fakeUsers)
    }, [dataUsers])

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
                accessorFn: (row) => row.role,
                id: "role",
                header: "Status",
                cell: (info) => info.getValue(),
                footer: (props) => props.column.id
            },

        ],
        []
    );



    const table = useReactTable({
        data: fakeUsers,
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

    return (
        <SidebarWithHeader>
            <Header>
                <BreadCrumbs items={LinkItems} />
            </Header>
            <Box mb={"20"}>
                <TableLayout table={table} />
                <TableControl table={table}/>
            </Box>

            <SmallWithSocial />
        </SidebarWithHeader>
    );
};

export default User;
