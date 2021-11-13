import React, {ReactElement, useState} from 'react';

import {Modal} from 'antd';

import cloud from 'assets/svg/content/main/cloud.svg';
import rocket from 'assets/svg/content/main/rocket.svg';

import ReportForm from 'views/content/Form';

import popup from 'assets/svg/popup.svg';

interface Props {}

export default function Main({} : Props): ReactElement {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [popupPic, setPopup] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    (document as any) ?. getElementById('manarie').click();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const commitValues = (values : any) => {
    /** Will only trigger if form valid. */
    console.log(values);
    values && setPopup(true);
    setTimeout(() => {
      setPopup(false);
    }, 3000);
  };

  return (
    <div style={
      {
        display: 'flex',
        flex: '10',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '600px'
      }
    }>
      <img alt=''
        src={cloud}/>
      <img src={rocket}
        alt=''
        style={
          {marginTop: '-160px'}
        }/>
      <h4 style={
        {
          fontFamily: 'Montserrat',
          fontSize: '20px',
          marginTop: '80px'
        }
      }>Start creating reports</h4>
      <p>You don't have any reports defined yet</p>
      <button onClick={showModal}
        style={
          {
            color: 'white',
            border: 0,
            backgroundColor: 'blue',
            height: '40px',
            width: '200px',
            borderRadius: '20px'

          }
      }>
        CREATE REPORT
      </button>
      <Modal title="Create Report"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={
          {
            height: '700px',
            marginLeft: '100px'
          }
        }
        width={
          window.innerWidth
        }
        cancelText="Cancel"
        okText="Save">
        <ReportForm commitValues={commitValues}/>
        {popupPic && <img src={popup}
          alt=''
          onClick={() => setPopup(false)}
          style={
            {marginLeft: '80%'}
          }/>}

      </Modal>
    </div>
  )
}
