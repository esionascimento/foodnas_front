import { Box, Card, Container, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Card>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box>
          <Typography variant="h6" gutterBottom>
            Feito por Esio Rodrigues da Silva Nascimento
          </Typography>
          <Typography variant="body1">2022</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export { Footer };
