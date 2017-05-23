import React from 'react';
import {connect} from 'dva';
import Table from '../../components/Example/Table';

function TableExample(){
    return <Table />;
}

TableExample.propTypes = {};

export default connect()(TableExample);
