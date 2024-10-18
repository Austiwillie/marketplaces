




import React, {useState} from 'react';
import { Card, CardContent, Typography, Divider, Tabs, Tab, Box,  Button, ListItem, ListItemText} from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './view-asset-history.css';
import laptopImage from "../../assets/laptop.jpeg";
import PaperIcon from '@mui/icons-material/Description';
import GroupIcon from '@mui/icons-material/Group';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const ViewAssetHistory = () => {
  



  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className="card-container">
      <CardContent>
        <div className="header">
        Apple Macbook Pro 2018, 13 inch with Retina Display, M2 Chip
        </div >
      
        <Divider sx={{ marginBottom: '16px' }} />
        <div className="content-container">
        <img src={laptopImage} alt="Sample" className="left-image" />
          <div className="text-container">
 

          <div class="container">
  <div class="column">
    <p class="left-aligned">Asset Name: Apple Macbook Pro 2018</p>
    <p class="left-aligned">PARN Number: afb91236ygnb</p>
    <p class="left-aligned">Warranty Expiry Date: 31/12/2026</p>
  </div>
  <div class="column">
    <p class="left-aligned">Category: Laptop</p>
    <p class="left-aligned">Serial Number: 91973617263193</p>
    <p class="left-aligned">Warrantee Date: 22/08/2024</p>
  </div>
</div>



  
  <div className="title-container">
 
  <div className='history'>
       
        Description: 32GB DDR4 RAM, 5TB SSD, 12GHz Core i9 Processor, Backlight LED.... See more
      </div>
 
 
  
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
      iconPosition="start" label="Asset Maintenance History" sx={{ flex: 1, textAlign: 'left' }} />
    <Tab l icon={<GroupIcon />} 
            iconPosition="start" 
            label="Insurance"  sx={{ flex: 1, textAlign: 'center' }} />
    
  </Tabs>
  <TabPanel value={value} index={0}>
  <div className="header-with-button">
                <Typography variant="h6" align="left">
                Asset History 
                </Typography>
              
              </div>
              <Divider className="custom-divider" />
              <div className="text-row">
                <Typography variant="body1" align="left">
                Company Name: Konka Digital Solutions
                </Typography>
              
              </div>
              <Typography variant="body1" align="left">
              Date of Repair: 28 August 2023
              </Typography>
              <Typography variant="body1" align="left">
              Technishen Name: Dickson Willie
              </Typography>
              <Typography variant="body1" align="left" sx={{ color: '#6F7071', marginTop:"10px" }}>
  Resolution Notes
</Typography>
              <Typography variant="body1" >
              TB HDD was replaced with a 2TB SSD. We also added 32GB DDR5 RAM. We cleaned the cooling system and added thermal paste
to ensure that resolve the overheating issue ......See More
              </Typography>
              <Divider className="custom-divider" />
              
             
              <div className="text-row">
                <Typography variant="body1" align="left">
                Company Name: Konka Digital Solutions
                </Typography>
              
              </div>
              <Typography variant="body1" align="left">
              Date of Repair: 28 August 2023
              </Typography>
              <Typography variant="body1" align="left">
              Technishen Name: Dickson Willie
              </Typography>
              <Typography variant="body1" align="left" sx={{ color: '#6F7071', marginTop:"10px" }}>
  Resolution Notes
</Typography>
              <Typography variant="body1" >
              TB HDD was replaced with a 2TB SSD. We also added 32GB DDR5 RAM. We cleaned the cooling system and added thermal paste
to ensure that resolve the overheating issue ......See More
              </Typography>
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

export default ViewAssetHistory;