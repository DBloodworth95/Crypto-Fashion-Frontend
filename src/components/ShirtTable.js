import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteShirt, GetShirts } from '../service/shirts';
import { Button } from 'react-bootstrap';
import { EditShirtModal, NewShirtModal } from './ShirtModal';

export const ShirtTable = () => {
    const shirts = useSelector(state => state.shirtReducer.shirts);
    const dispatch = useDispatch();
    useEffect(() => {
        GetShirts(dispatch);
    }, []);

    return <Fragment>
        <h3>Shirts</h3>
        <div style={{ maxWidth: '70%', margin: 'auto' }}>
            <div style={{ textAlign: 'right' }}>
                <NewShirtModal />
            </div>
            <table className='table table-dark'>
                <tbody>
                    {
                        shirts.map(s =>
                            <tr>
                                <td style={{ width: '3rem' }}>
                                    <EditShirtModal shirt={s} />
                                </td>
                                <td style={{ width: '3rem' }}>
                                    <Button className='btn btn-danger' onClick={() => DeleteShirt(dispatch, s)}>Delete</Button>
                                </td>
                                <td style={{ textAlign: 'left' }}>{s.shirtName}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </Fragment>
}