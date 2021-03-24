import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core'

import MessageItem from './MessageItem'
import { messagesRef } from '../firebase'

const useStyles = makeStyles((theme) => ({
  root: {
    gridRow: 1,
    overflow: 'auto',
    width: '100%'
  },
}));

const MessageList = () => {
  const [messages, setMessages] = useState([])
  const classes = useStyles()

  useEffect(() => {
    messagesRef
      .orderByKey()
      .limitToLast(16)
      .on('value', (snapshot) => {
      const messages = snapshot.val()
      if (messages === null) return
      const entries = Object.entries(messages)
      const newMessages = entries.map(entry => {
        const [key, nameAndText] = entry
        return { key, ...nameAndText }
      })
      // console.log('🎾検証🎾', newMessages);
      setMessages(newMessages)
    })
  }, [])

  const length = messages.length

  return (
    <List className={classes.root}>
      {messages.map(({key, name, text}, i) => {
        const isLastItem = length === i+1
        return <MessageItem
          key={key}
          name={name}
          text={text}
          isLastItem={isLastItem}
        />
      })}
    </List>
  )
}

export default MessageList