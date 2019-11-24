import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const DeleteButtonBlock = ({ deleteAllItems }) => {
    return(
        <div className="delete-all">
            <Button
                variant="contained"
                color="secondary"
                className='delete-all-button'
                startIcon={<DeleteIcon />}
                onClick= {deleteAllItems}
            >
                Delete all items
            </Button>
        </div>
    );
};

DeleteButtonBlock.propTypes = {
    deleteAllItems : PropTypes.func,
}

DeleteButtonBlock.defaultProps = {
    deleteAllItems : () => {},
}

export default DeleteButtonBlock;