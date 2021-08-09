import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteShirt, GetShirts } from '../../../service/shirts';
import { Button } from 'react-bootstrap';
import { EditShirtModal, NewShirtModal } from './ShirtModal';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: red
    }
}));

export const ShirtTable = () => {
    const classes = useStyles();
    const shirts = useSelector(state => state.shirtReducer.shirts);
    const dispatch = useDispatch();
    useEffect(() => {
        GetShirts(dispatch);
    }, []);

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
                </Table>
            </TableContainer>

        </div>
    </Fragment >
}