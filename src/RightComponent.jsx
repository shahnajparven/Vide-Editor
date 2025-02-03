import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, Typography } from "@mui/material";
import { SketchPicker } from "react-color";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CloseIcon from '@mui/icons-material/Close';
import UploadIcon from '@mui/icons-material/Upload';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";


function RightComponent({color,hexColor,showPicker,showSketchPicker,handleColorChange}) {

const [activeDiv, setActiveDiv] = useState(1); 

  const handleCollapseClick = (divNumber) => {
    setActiveDiv(divNumber); 
  };


  return (
    <>

      <Box className="right_side">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
               borderBottom:'1px solid #121A5E'  ,   
            marginBottom: "20px",
          }}
        >
          <Box
     
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "bold",
              color: "#121A5E",
              padding:'2px',
            cursor:'pointer'
            }}
            style={{borderBottom: activeDiv === 1 ? '4px solid #121A5E' : 'none'}}
            onClick={() => handleCollapseClick(1)}
          >
            General
          </Box>
          <Box   onClick={() => handleCollapseClick(2)} sx={{ width: "100%", textAlign: "center", color: "#121A5E",  cursor:'pointer'}} style={{borderBottom: activeDiv === 2 ? '4px solid #121A5E' : 'none'}}>
            <SendIcon fontSize="20px" />
          </Box>
        </Box>
                      
        <Box  style={{ display: activeDiv === 1 ? 'block' : 'none'}}>
        <Box>
          <Typography
            sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
          >
            {" "}
            Background Color
          </Typography>
          <Box  sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "10px",
            border: "1px solid #ccc",
          }}>
          <Box onClick={showSketchPicker}
            style={{ width: "40px", height: "40px", backgroundColor: color }}
          >
          </Box>
          <Box>
            <Typography sx={{fontSize:'14px',textAlign:"center"}}>{hexColor}</Typography>
          </Box>
          </Box>
          {showPicker && (
          <SketchPicker
            color={color}
            onChangeComplete={handleColorChange} // Trigger when the color is fully selected
          />
          )}
 
        </Box>

        <Box marginTop={1}>
        <Typography
            sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
          >
            {" "}
            Background Image
          </Typography>
          <Box sx={{border:'1px solid #ccc',textAlign:'center',p:'15px 50px'}}>
            <ReportProblemIcon/>
          <Typography fontSize={'14px'}> No Image set, add from Toolbox or Upload!</Typography>
          </Box>
          <button className="upload_button"><UploadIcon fontSize="30px"/>  <Typography variant="span" fontSize={'14px'}> Upload</Typography></button>
           <button  className="remove_button"><CloseIcon  fontSize="30px"/><Typography variant="span" fontSize={'14px'}> Remove </Typography></button>
        </Box>
        <Box marginTop={2}>
        <Typography
            sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
          >
            {" "}
            Resolution
          </Typography>
          {/* <Box className='right_part_input'><input type="text"/></Box> */}

          <Box className='accordian'>

      <Accordion className="accordian_summary">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="accordian_summary2"
        >
          <Typography component="span" sx={{fontSize:'14px',padding:'5px 5px',color:'gray',cursor:'pointer'}}> 4k cinema</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion_details">
         
          <Box className='select_list'>Untitled 2025-02-01 12:43:21</Box>
          <Box className='select_list'>Untitled 2025-02-02 12:43:22</Box>
          <Box className='select_list'>Untitled 2025-02-03 12:43:29</Box>
        </AccordionDetails>
      </Accordion>
    </Box>
        </Box>
        <Box marginTop={2}>
        <Typography
            sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
          >
            {" "}
            Layer
          </Typography>
        <Box className='right_part_input'><input type="number" value={0}/></Box>
        </Box>

        <Box sx={{display:'flex',gap:'5px',textAlign:'start!important',margin:'10px 0px'}}><Checkbox  size="small" sx={{p:'0px!important'}} /> 
        <Typography fontSize={'14px'} fontWeight={'bold'}>Automatically apply Transitions?
        </Typography>
        </Box>
        </Box>
   
          <Box style={{ display: activeDiv === 2 ? 'block' : 'none'}}>

          <Box marginTop={2}>
        <Typography
            sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
          >
            {" "}
            Layout Actions
          </Typography>
        <Box padding={2} border={'1px dashed #121A5E'} textAlign='center'>No actions to show</Box>
        </Box>

        <Box marginTop={2}>
        <Typography
            sx={{ fontSize: "14px", padding: "5px", fontWeight: "bold" }}
          >
            {" "}
            Other Actions
          </Typography>
        <Box padding={2} border={'1px dashed #121A5E'} textAlign='center'>No actions to show</Box>
        </Box>
          </Box>
    
      </Box>
    </>
  );
}

export default RightComponent;
