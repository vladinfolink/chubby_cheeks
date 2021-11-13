import React, {useState, ReactElement} from 'react';
import Nav from 'views/nav/side_menu';
import Main from 'views/content/Main';

export default function Home(): ReactElement {

  const [state, setState] = useState({
    
  });

  return (
    <div style={
      {
        display: 'flex',
        flex: '2',
        height: '100%',
      }
    }>
      <Nav/> {/* <Nav /> */}
      

      <div style={
        {marginLeft: '40px'}
      }>
        Page Title
      </div>

      <Main />
    </div>
  )
}
