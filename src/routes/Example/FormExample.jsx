import React from 'react';
import {connect} from 'dva';
import Form from '../../components/Example/Form';

function FormExample(){
    return <Form />;
}

FormExample.propTypes = {};

export default connect()(FormExample);
