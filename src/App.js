import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <h1>materail-ui</h1>
        <div>
          <RaisedButton label="Default" style={{ margin: 12 }} />
          <RaisedButton label="Primary" style={{ margin: 12 }} primary />
          <RaisedButton label="Secondary" style={{ margin: 12 }} secondary />
          <RaisedButton label="Disabled" style={{ margin: 12 }} disabled />
          <br />
          <br />
          <RaisedButton label="Full width" fullWidth />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
