import React, { useState } from 'react'
import { TextField } from '@material-ui/core'

import { pushMessage } from '../firebase'

const MessageField = ({inputEl, name, setText, text}) => {
  const [isComposed, setIsComposed] = useState(false)
  return (
    <TextField
      autoFocus
      fullWidth={true}
      inputRef={inputEl}
      onChange={(e) => {
        setText(e.target.value)
      }}
      onKeyDown={(e) => {
        if(isComposed) return

        const text = e.target.value
        if (text === '') return

        if(e.key === 'Enter') {
          console.log('⛅️検証⛅️SENDED', text);
          e.preventDefault( )
          pushMessage({ name, text })
          setText('')
        }
      }}
      onCompositionStart={() => {setIsComposed(true)}}
      onCompositionEnd={() => {setIsComposed(false)}}
      value={text}
    />
  )
}

export default MessageField