import React from 'react';
import PageTitle from './components/PageTitle';
import List from './components/List'
import ListTitle from './components/ListTitle';
import ListEntry from './components/ListEntry';
import ListFooter from './components/ListFooter';
import ListItems from './components/ListItems';
import listState from './containers/listState';

function App() {
  const { list, addList, removeItem, crossItem, onChange, submitHandler} = listState();
  return (
      <div>
      <PageTitle/>
      <List>
        <ListTitle/>
        <ListEntry addEntry={listItem => addList(listItem)} />
        <ListItems items={list} removeItem={removeItem} crossItem={crossItem} onChange={onChange} submitHandler={submitHandler} />
        <ListFooter/>
      </List>
      </div>  
  );
}

export default App;
