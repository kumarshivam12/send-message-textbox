import React, { useState } from 'react';
import { Grid, Input, Button, InputLabel, FormControl, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { toast } from 'react-toastify';

import { postMessage } from './utils/api';

const Homepage = () => {
  const [message, setMessage] = useState('');
  const handleTextChange = (event) => {
    setMessage(event?.target?.value);
  };

  const handleSubmit = () => {
    // TODO : Change  info message if you want to
    postMessage({ message }).then((resp) => toast.info('Message sent successfully !'));
  };

  return (
    <Box conatiner='form' onSubmit={handleSubmit}>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        direction='column'
        rowSpacing={3}
        style={{ minHeight: '70vh' }}>
        <Grid item>
          <FormControl
            sx={{
              m: 1,
              minWidth: 500
            }}>
            <InputLabel>Message</InputLabel>
            <Input value={message} type='text' multiline rows={4} onChange={handleTextChange} />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <Button
              type='submit'
              variant='contained'
              color='secondary'
              onClick={handleSubmit}
              disabled={!message}>
              Send <SendIcon style={{ marginLeft: '0.5rem' }} />
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Homepage;
