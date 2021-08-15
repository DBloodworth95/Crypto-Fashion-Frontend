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

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: red
    }
}));

export const ShirtTable = () => {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const shirts = useSelector(state => state.shirtReducer.shirts);
    const dispatch = useDispatch();
    useEffect(() => {
        GetShirts(dispatch);
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
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
                                count={100}
                                page={1}
                                onPageChange={handleChangePage}
                                rowsPerPage={10}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    </Fragment >
}