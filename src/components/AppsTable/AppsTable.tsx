import React from 'react';
import { Box, Paper, TableContainer, Table, TableHead, TableBody } from '@mui/material';

import { IAppItem } from "../../types/apps.types";

import { AppTableRow } from "./AppTableRow";

type TAppsTableProps = {
    items: IAppItem[]
}

export const AppsTable = ({items}: TAppsTableProps) => {

    const handleRowClick = (appId: string) => {

    }

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                    >
                        <TableHead></TableHead>
                        <TableBody>
                            {items.map((row, index) => (
                                <AppTableRow key={row.appId} row={row} onItemClick={handleRowClick} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    )
}

