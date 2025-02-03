import * as React from "react";
import logo from '../assets/logo.png';
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Box, Checkbox, colors } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import SellIcon from '@mui/icons-material/Sell';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="header">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            gap: "10px",
          }}
        >
          <Box>
            <IconButton>
              {" "}
              <ArrowLeftIcon  sx={{color:'#121A5E',fontSize:'28px'}}/> <Typography fontWeight={'bold'} color="#121A5E">EXIT</Typography>
            </IconButton>
          </Box>

          <Box>
            <DisabledByDefaultIcon  sx={{color:'#DC3545',fontSize:'32px',borderRadius:'70px'}}/>
          </Box>
          <Box  sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            gap: "10px",
          }}>
             <Tooltip title="Layout Name">
            <Box sx={{       
            display: "flex",
            alignItems: "center",
            textAlign: "center",           
          }}
          
          >
            <Box className='layout_name'>
          <SellIcon sx={{fontSize:'14px',color:'#121A5E'}}/>
          <Typography variant="span" sx={{fontSize:'14px',padding:'0px 5px',color:'#121A5E',cursor:'pointer'}}>"Untitled 2025-02-01 12:43:21"</Typography>
          </Box>
          </Box>
          </Tooltip>
          <Tooltip title="Layout Duration">
          <Box  sx={{       
            display: "flex",
            alignItems: "center",
            textAlign: "center",           
          }}>
             
         <AccessTimeIcon sx={{fontSize:'15px',color:'#121A5E'}}/>
         
         <Typography variant="span" sx={{fontSize:'14px',padding:'0px 5px',color:'#121A5E',cursor:'pointer'}}> 00:00 </Typography>
          </Box>
          </Tooltip>
          <Tooltip title="Layout dimensions">
          <Box sx={{       
            display: "flex",
            alignItems: "center",
            textAlign: "center",           
          }}>
          <OpenWithIcon sx={{fontSize:'15px',color:'#121A5E'}}/>
          <Typography variant="span" sx={{fontSize:'14px',padding:'0px 5px',color:'#121A5E',cursor:'pointer'}}> 1920x1080 </Typography>
          </Box>
          </Tooltip>
          </Box>
       
        </Box>
        <Box className='logo'>
          <img src={logo} alt="logo" />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "flex-end",
            gap: "10px",
          }}
        >
          <Box  sx={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}>
          <Box className='accordian'>

      <Accordion className="accordian_summary">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="accordian_summary2"
        >
          <Typography component="span" sx={{fontSize:'14px',padding:'5px 5px',color:'gray',cursor:'pointer'}}> Untitled 2025-02-01 12:43:21</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className='select_input'><input type="text" /></Box>
          <Box sx={{display:'flex',gap:'5px',textAlign:'start!important'}}><Checkbox  size="small" sx={{p:'0px!important'}} /> <Typography class='select_list'>My Layouts</Typography></Box>
          <Box className='select_list'>Default Layout</Box>
          <Box class='select_list'>Untitled 2025-02-01 12:43:21</Box>
          <Box class='select_list'>Untitled 2025-02-02 12:43:22</Box>
          <Box class='select_list'>Untitled 2025-02-03 12:43:29</Box>
        </AccordionDetails>
      </Accordion>
    </Box>
    </Box>
          <Tooltip title="Options">
          <IconButton sx={{ minWidth: 20 }}>
            <MenuIcon sx={{color:'#121A5E'}}/>
          </IconButton>
          </Tooltip>
          <IconButton sx={{ minWidth: 20 }}>
            <NotificationsIcon  sx={{color:'#121A5E'}}/>
          </IconButton>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}></Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Avatar /> My Applications

          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Edit Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Preferences
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Reshow welcome
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
           About
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Header;
