import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const BasicTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ fontSize: '20px' }}>Dessert (100g serving)</TableCell>
                        <TableCell align="right" style={{ fontSize: '20px' }}>Calories</TableCell>
                        <TableCell align="right" style={{ fontSize: '20px' }}>Fat&nbsp;(g)</TableCell>
                        <TableCell align="right" style={{ fontSize: '20px' }}>Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right" style={{ fontSize: '20px' }}>Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" style={{ fontSize: '18px' }}>
                                {row.name}
                            </TableCell>
                            <TableCell align="right" style={{ fontSize: '18px' }}>{row.calories}</TableCell>
                            <TableCell align="right" style={{ fontSize: '18px' }}>{row.fat}</TableCell>
                            <TableCell align="right" style={{ fontSize: '18px' }}>{row.carbs}</TableCell>
                            <TableCell align="right" style={{ fontSize: '18px' }}>{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BasicTable;
