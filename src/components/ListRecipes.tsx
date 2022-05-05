import React, {useState, useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {styled} from "@mui/material";


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


export default function ListRecipes() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [recipes, setrecipes] = useState([]);


    useEffect(() => {
        fetch("http://127.0.0.1:3003/recipes")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setrecipes(result);
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
                        <StyledTableCell align="right">servings</StyledTableCell>
                        <StyledTableCell align="right">country</StyledTableCell>
                        <StyledTableCell align="right">cuisine</StyledTableCell>
                        <StyledTableCell align="right">calories</StyledTableCell>
                        <StyledTableCell align="right">author </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody> {recipes.map((recipe) => (
                    <StyledTableRow key={recipe['id']}>
                        <StyledTableCell component="th" scope="row">{recipe['id']}</StyledTableCell>
                        <StyledTableCell align="right">{recipe['servings']}</StyledTableCell>
                        <StyledTableCell align="right">{recipe['country']}</StyledTableCell>
                        <StyledTableCell align="right">{recipe['cuisine']}</StyledTableCell>
                        <StyledTableCell align="right">{recipe['calories']}</StyledTableCell>
                        <StyledTableCell align="right">{recipe['author_id']}</StyledTableCell>
                    </StyledTableRow>
        ))}
                </TableBody>
                </Table>
        </TableContainer>
    );
    }
}
