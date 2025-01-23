"use client"

import {
    Box,
    Button,
    Flex,
    Heading,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";

const TableLayout = ({ table }: { table: any }) => {
    return (
        <Box>
            <TableContainer bgColor={"white"} shadow={"sm"} mt={"5"} p={"2"}>
                <Table variant="simple">
                    <TableCaption>User Table</TableCaption>
                    <Thead>
                        {table.getHeaderGroups().map((headerGroup: any) => (
                            <Tr key={headerGroup.id}>
                                {headerGroup.headers.map((header: any) => (
                                    <Th key={header.id} colSpan={header.colSpan}>
                                        <Heading as={"h5"} size={"sm"}>
                                            {header.isPlaceholder
                                                ? null
                                                : typeof header.column.columnDef.header === "function"
                                                    ? header.column.columnDef.header(header.getContext())
                                                    : header.column.columnDef.header}
                                        </Heading>
                                    </Th>
                                ))}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody>
                        {table.getRowModel().rows.length > 0 ? (
                            table.getRowModel().rows.map((row: any) => (
                                <Tr key={row.id}>
                                    {row.getVisibleCells().map((cell: any) => (
                                        <Td key={cell.id}>
                                            {typeof cell.column.columnDef.cell === "function"
                                                ? cell.column.columnDef.cell(cell.getContext())
                                                : cell.getValue()}
                                        </Td>
                                    ))}
                                </Tr>
                            ))
                        ) : (
                            <Tr>
                                <Td colSpan={table.getHeaderGroups().length + 1} textAlign="center">
                                    Data belum tersedia
                                </Td>
                            </Tr>
                        )}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
};

const TableControl = ({ table }: { table: any }) => {
    return (
        <Flex justifyContent="space-between" alignItems="center" mt={4}>
            <Button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
            >
                Previous
            </Button>

            <Box>
                Page{" "}
                <strong>
                    {table.getState().pagination.pageIndex + 1} of{" "}
                    {table.getPageCount()}
                </strong>
            </Box>

            <Button
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
            >
                Next
            </Button>
        </Flex>
    );
};

export { TableControl, TableLayout };
