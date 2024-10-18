import React, {useState} from 'react';
import { Card, CardContent, Typography, Divider, Button, TextField, InputAdornment, IconButton, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CardComponent from './card';
import image from '../assets/laptop.jpeg'; // Import the image
import AdvancedFilter from './advanced-filter';
import './parent-card.module.css';

const ParentCardComponent = () => {
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
          <Typography variant="h6" className='header-text'>
            Marketplace
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography 
              variant="subtitle1"  // Changed from h6 to subtitle1
              color="primary" 
              className="payment-details"
              marginRight="16px"

            >
              Payment Details
            </Typography>
            <Button variant="contained" color="primary" startIcon={<ShoppingCartIcon />}>
              Cart (0)
            </Button>
          </div>
        </div>
        <Divider sx={{ marginBottom: '16px' }} />
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: '24px' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  className="search-icon-button"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
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

export default ParentCardComponent;