import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import MessageList from './MessageList'
import MessageInputField from './MessageInputField'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '1fr auto',
    margin: '10px'
  },
}));

const Main = ({ name }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MessageList></MessageList>
      <MessageInputField name={name}></MessageInputField>
    </div>
  )
}

export default Main