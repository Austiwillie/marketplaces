import React, {useState} from 'react';
import { Card, CardContent, Typography, Divider,Tabs, Tab, Box,  List, ListItem,Button } from '@mui/material';
import './device-asset-info.css';
import laptopImage from '../../assets/laptop.jpeg'; // Import your image
import PaperIcon from '@mui/icons-material/Description';
import GroupIcon from '@mui/icons-material/Group';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const DeviceAssetInfo = () => {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Card className="outer-card">
      <CardContent>
        <div className="header">
          <Typography variant="h6" className="header-text">
            Marketplace
          </Typography>
        </div>
        <div className="content-wrapper">
          <img src={laptopImage} alt="Sample" className="left-image" />
          <Card className="inner-card">
            <div className="inner-card-header">
              <Typography variant="h6" className="header-text">
                Laptop - Dell Latitude E40
              </Typography>
            </div>
            <CardContent>
              <div className="text-row">
                <Typography variant="body1" className="text-left">
                  Asset name
                </Typography>
                <Typography variant="body1" className="text-right">
                  Dell Latitude E40
                </Typography>
              </div>
              <Divider className="custom-divider" />
              <div className="text-row">
                <Typography variant="body1" className="text-left">
                  Category
                </Typography>
                <Typography variant="body1" className="text-right">
                  Laptop
                </Typography>
              </div>
              <Divider className="custom-divider" />
              <div className="text-row">
                <Typography variant="body1" className="text-left">
                  Condition
                </Typography>
                <Typography variant="body1" className="text-right">
                  Used - Good
                </Typography>
              </div>
              <Divider className="custom-divider" />
              <div className="text-row">
                <Typography variant="body1" className="text-left">
                  Price
                  
                </Typography>
                <Typography variant="body1" className="text-right">
                  Konka Digital Solutions
                </Typography>
              </div>
              <Divider className="custom-divider" />
              <div className="text-row">
                <Typography variant="body1" className="text-left">
                  Maintenance
                </Typography>
                <Typography variant="body1" className="text-right">
                  Yes
                </Typography>
              </div>
              <Divider className="custom-divider" />
              <div className="text-row">
                <Typography variant="body1" className="text-left">
                  Insured
                </Typography>
                <Typography variant="body1" className="text-right">
                  Yes
                </Typography>
              </div>
            </CardContent>
          </Card>
          <div className="description-container">
          <Typography variant="body1" className="description-label">
            Description:
          </Typography>
          <textarea className="description-textarea" rows="4" cols="50" placeholder="Enter description here..."></textarea>
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
    <Tab icon={<LocalShippingIcon />} 
            iconPosition="start" 
            label="Stolen - File a report"  sx={{ flex: 1, textAlign: 'right' }} />
  </Tabs>
  <TabPanel value={value} index={0}>
  <div className="header-with-button">
                <Typography variant="h6" align="left">
                Repairs 
                </Typography>
                <Button variant="contained" sx={{ backgroundColor: 'green', textTransform: 'none' }}>
                  Add Repair +
                </Button>
              </div>
              <Divider className="custom-divider" />
              <div className="text-row">
                <Typography variant="body1" align="left">
                  Company Name: The Black Ones (Pty) Ltd
                </Typography>
                <Typography variant="body1" align="right" sx={{ textDecoration: 'underline' }}>
                Edit Repair
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
        <TabPanel value={value} index={2}>
        This device will be delivered via PostNet upon successful purchase
        </TabPanel>
</Box>
        </div>
     
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

export default DeviceAssetInfo;