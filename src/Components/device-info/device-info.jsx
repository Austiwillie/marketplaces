import React, {useState} from 'react';
import { Card, CardContent, Typography, Divider, Tabs, Tab, Box,  List, ListItem, ListItemText} from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './device-info.css';
import laptopImage from "../../assets/laptop.jpeg";
import PaperIcon from '@mui/icons-material/Description';
import GroupIcon from '@mui/icons-material/Group';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const DeviceInfo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, 
    arrows: false,
    appendDots: dots => (
      <div>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="custom-dot"></div>
    )
  };

  const images = [
    laptopImage, // Use the imported image
    'https://via.placeholder.com/600x400?text=Image+2',
    'https://via.placeholder.com/600x400?text=Image+3',
  ];

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className="card-container">
      <CardContent>
        <div className="header">
          <Typography variant="h6" className='header-text'>
            Marketplace
          </Typography>
        </div>
        <Divider sx={{ marginBottom: '16px' }} />
        <div className="content-container">
          <div className="slider-container">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} className="slider-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="text-container">
  <div className="product-description">
    Apple Macbook Pro 2018, 13 inch with Retina Display, M2 Chip
  </div>
  <div className="price-container">
    <div className="current-price">
      R 6 499.99
    </div>
    <div className="original-price">
      R8 499.99
    </div>
  </div>
  <div className="owner-info">
    Owner: <span className="owner-name">konka Digital Solutions</span>
  </div>
  <div className="category-container">
    <div className="title">
      Category: <span>Laptop</span>
    </div>
    <div className="title">
    Condition: <span>Used - Fairly</span>
    </div>
  </div>
  
  <div className="title">
  Maintenance: <span>Yes</span>
  
  </div>

  <div className="title">
  Insured: <span>Yes</span>
  
  </div>
  
  <div className="title-container">
  <div className='view-history'>
  Asset History: <span>Yes</span>
  </div>
  <div className='history'>
        <SearchOutlinedIcon />
        <span>View History</span>
      </div>
 
 
  
</div>
jhg
<div className="button-container">
  <button className="black-button">Add to cart</button>
  <button className="black-button">Chat to seller</button>
</div>
</div>
   
        </div>
        <Box sx={{ width: '100%', marginTop: '20px', padding: '0 20px' }}>
  <Tabs
 value={value}
 onChange={handleChange}
 sx={{  
   display: 'flex', 
   border: 'none',
   borderRadius: '4px',
   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
   width: "100%",  // Set width to 100% of the viewport width
   margin: 0,       // Remove any default margin
    padding: 0  
    
    }}
  >
    <Tab  icon={<PaperIcon />} 
      iconPosition="start" label="Description" sx={{ flex: 1, textAlign: 'left' }} />
    <Tab l icon={<GroupIcon />} 
            iconPosition="start" 
            label="Specifications"  sx={{ flex: 1, textAlign: 'center' }} />
    <Tab icon={<LocalShippingIcon />} 
            iconPosition="start" 
            label="Delivery / Collection Notes"  sx={{ flex: 1, textAlign: 'right' }} />
  </Tabs>
  <TabPanel value={value} index={0}>
          <Typography variant="body1">
            Display:
          </Typography>
          <List sx={{ padding: 0, margin: 0 }}>
            <ListItem sx={{ padding: '0', margin: 0 }}>
              <Typography variant="body1" component="li">
              Retina display
              </Typography>
            </ListItem>
            <ListItem sx={{ padding: '0', margin: 0 }}>
              13.3-inch (diagonal)
            </ListItem>
            <ListItem sx={{ padding: '0', margin: 0 }}>
              LED-backlit display with IPS technology;
            
            </ListItem>
            <ListItem sx={{ padding: '0', margin: 0 }}>
            2560-by-1600 native resolution at 227 pixels per inch with support for millions of colors
            </ListItem>
            <ListItem sx={{ padding: '0', margin: 0 }}>
              
              Wide color (P3)True Tone technology
            
            </ListItem>
            <Typography variant="body1" sx={{ padding: '0', marginTop: 5 }} >
            Chip:
          </Typography>
          <ListItem sx={{ padding: '0', margin: 0 }}>
              <Typography variant="body1" component="li">
              Apple M2 chip
              </Typography>
            </ListItem>
            <ListItem sx={{ padding: '0', margin: 0 }}>
            8-core CPU with 4 performance cores and 4 efficiency cores
            </ListItem>
            <ListItem sx={{ padding: '0', margin: 0 }}>
            10-core GPU
            
            </ListItem>
            <ListItem sx={{ padding: '0', margin: 0 }}>
            16-core Neural Engine
            </ListItem>
            <ListItem sx={{ padding: '0', margin: 0 }}>
              
            100GB/s memory bandwidth
            
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div className="specifications-tab">
  <div className="specification-row">
    <div>Product Name: <span>Apple Macbook Pro 2018</span></div>
    <div>Category: <span>Laptop</span></div>
  </div>
  <div className="specification-row">
    <div>PARN Number: <span>afb91236ygnb</span></div>
    <div>Serial Number: <span>91973617263193</span></div>
  </div>
  <div className="specification-row">
    <div>Warranty Expiry Date: <span> 31/12/2025 </span></div>
    <div>Warrantee Date: <span> 22/08/2023</span></div>
  </div>
</div>

        </TabPanel>
        <TabPanel value={value} index={2}>
        This device will be delivered via PostNet upon successful purchase
        </TabPanel>
</Box>
      </CardContent>
    </Card>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

export default DeviceInfo;