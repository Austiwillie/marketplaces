import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const CardComponent = ({ title, content, image, additionalText1, additionalText2, children, width, height, redText, greenText }) => {
  return (
    <Card style={{ width: width || '300px', height: height || 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        {image && <img src={image} alt={title} style={{ width: '50%', marginBottom: '16px' }} />}
        <div style={{ textAlign: 'left', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'red', textDecoration: 'line-through' }}>
            {redText}
          </Typography>
        </div>
        <div style={{ textAlign: 'left', width: '100%', marginTop: '16px' }}>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginTop: '8px' }}>
            {additionalText1}
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Typography variant="body2" color="text.secondary">
              {additionalText2}
            </Typography>
            <Typography variant="body2" sx={{ color: 'green' }}>
              {greenText}
            </Typography>
          </div>
        </div>
        <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center', width: '100%' }}>
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default CardComponent;