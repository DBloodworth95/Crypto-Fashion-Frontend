import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteShirt, GetShirts } from '../../../service/shirts';
import { Button } from 'react-bootstrap';
import { EditShirtModal, NewShirtModal } from './ShirtModal';
import { red } from '@material-ui/core/colors';
import { makeStyles, TableFooter } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TablePagination } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { IconButton } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: red
    },
    paginationActions: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}));

const paginationTheme = createTheme({
    direction: 'rtl',
})

function TablePaginationActions(props) {
    const classes = useStyles();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.paginationActions}>
            <ThemeProvider theme={paginationTheme}>
                <IconButton
                    onClick={handleFirstPageButtonClick}
                    disabled={page === 0}
                    aria-label="first page"
                >
                    {paginationTheme.direction !== 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
                </IconButton>
                <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                    {paginationTheme.direction !== 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </IconButton>
                <IconButton
                    onClick={handleNextButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="next page"
                >
                    {paginationTheme.direction !== 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </IconButton>
                <IconButton
                    onClick={handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="last page"
                >
                    {paginationTheme.direction !== 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
                </IconButton>
            </ThemeProvider>
        </div>
    );
}

export const ShirtTable = () => {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const shirts = useSelector(state => state.shirtReducer.shirts);
    const totalShirts = useSelector(state => state.shirtReducer.totalShirts);
    const dispatch = useDispatch();
    useEffect(() => {
        GetShirts(dispatch, page, rowsPerPage);
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        GetShirts(dispatch, newPage, rowsPerPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
        GetShirts(dispatch, 0, parseInt(event.target.value, 10));
    }

    return <Fragment>
        <h3>Shirts</h3>
        <div style={{ maxWidth: '80%', margin: 'auto' }}>
            <TableContainer component={Paper}>
                <div style={{ textAlign: 'right' }}>
                    <NewShirtModal />
                </div>
                <Table className={classes.root} aria-label="simple table">
                    <TableHead>
                        <TableCell>ID</TableCell>
                        <TableCell>Shirt Name</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableHead>
                    <TableBody>
                        {shirts.map((s) => (
                            <TableRow key={s.id}>
                                <TableCell component="th" scope="row"> {s.id} </TableCell>
                                <TableCell>{s.shirtName}</TableCell>
                                <TableCell><EditShirtModal shirt={s} /></TableCell>
                                <TableCell>
                                    <Button className='btn btn-danger' onClick={() => DeleteShirt(dispatch, s)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                count={totalShirts}
                                page={page}
                                SelectProps={{
                                    inputProps: { 'aria-label': 'rows per page' },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                rowsPerPage={rowsPerPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    </Fragment >
}