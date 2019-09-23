import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import { AppState } from './redux/reducers';
import { templateActions } from './redux/actions';

const mapStateToProps = (state: AppState) => {
  return {
    template: state.template,
  };
};

const App: React.FC<any> = ({ runActions, template }) => {
  return (
    <div className="App">
      <div>
        <strong>Text: </strong>{template.text}
      </div>
      <div>
        <strong>API response: </strong>{template.apiText}
      </div>
      <button onClick={() => runActions('https://jsonplaceholder.typicode.com/todos/1', 'changed')}>Change text</button>
    </div>
  );
}

export default connect(mapStateToProps, {
  runActions: templateActions.runActions,
})(App);
