import React, {ReactElement, memo} from 'react';

import arrow_right from 'assets/svg/nav/side_menu/arrow_right.svg';
import logo from 'assets/svg/nav/side_menu/logo.svg';

import dashboard from 'assets/svg/nav/menu_icons/dashboard.svg';
import incidents from 'assets/svg/nav/menu_icons/incidents.svg';
import network from 'assets/svg/nav/menu_icons/network.svg';
import risk_management from 'assets/svg/nav/menu_icons/risk_management.svg';
import policies from 'assets/svg/nav/menu_icons/policies.svg';
import reports from 'assets/svg/nav/menu_icons/reports.svg';
import quarantine from 'assets/svg/nav/menu_icons/quarantine.svg';
import companies from 'assets/svg/nav/menu_icons/companies.svg';
import accounts from 'assets/svg/nav/menu_icons/accounts.svg';
import sandbox_analyzer from 'assets/svg/nav/menu_icons/sandbox_analyzer.svg';
import email_security from 'assets/svg/nav/menu_icons/email_security.svg';
import configuration from 'assets/svg/nav/menu_icons/configuration.svg';


interface Props {}

function Nav({} : Props): ReactElement {

  const sideMenuWrapperStyle: any = {
    width: '90px',
    height: '100%',
    backgroundColor: '#181F2C'
  }

  const btnWrapperStyle: any = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    cursor: 'pointer'
  }

  const pStyle: any = {
    fontFamily: 'Roboto-Regular, Roboto',
    color: 'white',
    fontSize: '12px',
    marginBottom: '0',
    wordSpacing: '90px',
    textAlign: 'center'
  }

  return (
    <div style={sideMenuWrapperStyle}>
      <img src={logo}
        alt=''
        style={
          {
            position: 'absolute',
            marginTop: '20px',
            marginLeft: '30px'
          }
        }/>
      <img alt=''
        style={
          {
            position: 'absolute',
            height: '52px',
            marginLeft: '82px',
            marginTop: '8px'

          }
        }
        src={arrow_right}/>


      <div style={
        {
          marginTop: '100px',
          width: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }
      }>
        {
        [
          {
            src: dashboard,
            text: 'Dashboard'
          },
          {
            src: incidents,
            text: 'Incidents'
          },
          {
            src: network,
            text: 'Network'
          },
          {
            src: risk_management,
            text: 'Risk Managemen'
          }, {
            src: policies,
            text: 'Policies'
          }, {
            src: reports,
            text: 'Reports'
          }, {
            src: quarantine,
            text: 'Quarantine'
          }, {
            src: companies,
            text: 'Companies'
          }, {
            src: accounts,
            text: 'Accounts'
          }, {
            src: sandbox_analyzer,
            text: 'Sandbox Analyzer'
          }, {
            src: email_security,
            text: 'Email Security'
          }, {
            src: configuration,
            text: 'Configuration'
          }
        ].map(i => <div key={
            i.text
          }
          onClick={() => console.info(i.text)}
          style={btnWrapperStyle}>
          <img alt={
              i.text
            }
            src={
              i.src
            }
            style={
              {height: '40px'}
            }/>
          <p style={pStyle}>
            {
            i.text
          }</p>
        </div>)
      } </div>
    </div>
  )
}

export default memo(Nav);
