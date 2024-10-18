import React, {useState} from 'react';
import { Card, CardContent, Typography, Divider, Button, TextField, InputAdornment, IconButton, MenuItem, Select, FormControl, InputLabel } from '@mui/material'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './company-management.css';
import laptopImage from "../../assets/Asset_Image.png";
import image from "../../assets/laptop.jpeg";
import AdvancedFilter from '../advanced-filter';
import CardComponent from '../card';


const CompanyManagement = () => { 
    const [sortValue, setSortValue] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const handleSortChange = (event) => {
      setSortValue(event.target.value);
    };
  
    const handleOpenPopup = () => {
      setIsPopupOpen(true);
    };
  
    const handleClosePopup = () => {
      setIsPopupOpen(false);
    };


  return (
    <Card className="card-container">
    <CardContent>
      <div className="header">
      Konka Digital Solutions
      </div >
    
      <Divider sx={{ marginBottom: '16px' }} />
      <div className="content-container">
      <img src={laptopImage} alt="Sample" className="left-image2" />
        <div className="text-container">


        <div class="container">
<div class="column">
  <p class="left-aligned">Company Name: Konka Digital Solutions</p>
  <p class="left-aligned">Assets Currently for Sale: 23</p>
  <p class="left-aligned">Contact Person: Flash Mogudu</p>
</div>
<div class="column">
  <p class="left-aligned">Industry: IT Technology</p>
  <p class="left-aligned">Total Assets Sold: 54</p>

</div>
</div>







</div>

      </div>
      <div className="title-container">
      Assets for Sale
</div>
<Divider className="custom-divider" />

<div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left', marginRight: '16px' }}>
          1 - 9 Products of 354 listed for sale
        </Typography>
        <FormControl sx={{ minWidth: 120, marginLeft: 'auto', marginRight: '16px' }}>
  <InputLabel id="demo-simple-select-label" >Sort by</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={sortValue}
    label="Sort by"
    onChange={handleSortChange}
  >
      <MenuItem value="newest">Newest</MenuItem>
      <MenuItem value="oldest">Oldest</MenuItem>
  </Select>
</FormControl>
<Button onClick={handleOpenPopup}>Advanced Filter</Button>
<AdvancedFilter isOpen={isPopupOpen} onClose={handleClosePopup}>
          <Typography variant="h6" sx={{ textAlign: 'left', color: 'yellow' }}>
            Advanced Filter
          </Typography>
          <Divider sx={{ borderColor: 'green', marginBottom: '16px' }} />
          <Typography variant="body2" sx={{ textAlign: 'left', marginBottom: '8px' }}>
    Please fill in the details:
  </Typography>
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
            
    <TextField
      label="First Input"
      variant="outlined"
      sx={{ flex: 1 }}
    />
    <TextField
      label="Second Input"
      variant="outlined"
      sx={{ flex: 1 }}
    />
  </div>
          {}
        </AdvancedFilter>
      </div>
      <CardComponent 
          title="R12000" 
          content="Macbook Pro 2018" 
          redText="R19000"
          image={image} 
          additionalText1 = "Laptop"
  additionalText2 = "Free Delivery"
  greenText = "20% off"
        >

<Button variant="contained"  sx={{ marginTop: '16px', width: '260px', color: 'primary' }}>
Add to Cart
</Button>
        </CardComponent>
    </CardContent>
  </Card>
  );
};

export default CompanyManagement;