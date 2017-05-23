import React, { Component }from 'react';
import styles from './oldplatform.less';

class Frame extends Component {
  constructor(pros) {
    super(pros);
  }
  componentWillReceiveProps(){
    document.getElementById("iframepage").contentWindow.postMessage(
      this.props.location.query,
        "http://10.0.251.149:8080/starott_manageportal_client"
      );
  }

  render(){
    return (
      <div className={styles.full}>
        <iframe className={styles.full} src="http://10.0.251.149:8080/starott_manageportal_client" id="iframepage" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
      </div>
    )
  }
}
Frame.propTypes = {};
export default Frame;
