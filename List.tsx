import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {styled} from "@mui/material";
import React, {useState, useEffect} from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function List() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:3003/users")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setUsers(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error['message']}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell align="right">User Name</StyledTableCell>
                                <StyledTableCell align="right">Password</StyledTableCell>
                                <StyledTableCell align="right">Last Name</StyledTableCell>
                                <StyledTableCell align="right">telephone number</StyledTableCell>
                                <StyledTableCell align="right">Recipes </StyledTableCell>
                            </TableRow>
                        </TableHead>
                    <TableBody> {users.map((user) => (
                            <StyledTableRow key={user['id']}>
                                <StyledTableCell component="th" scope="row">{user['id']}</StyledTableCell>
                                <StyledTableCell align="right">{user['user_name']}</StyledTableCell>
                                <StyledTableCell align="right">{user['password']}</StyledTableCell>
                                <StyledTableCell align="right">{user['last_name']}</StyledTableCell>
                                <StyledTableCell align="right">{user['telephone_number']}</StyledTableCell>
                                <StyledTableCell align="right">{user['recipes_id']}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}
