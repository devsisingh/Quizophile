import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Modal from '@mui/material/Modal';
import * as React from 'react';
import Box from '@mui/material/Box';
import Buttons from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Result.css";
import jsPDF from "jspdf";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Result = ({ name, score }) => {
  const history = useHistory();

  useEffect(() => {
    if (!name) {
      history.push("/");
    }
  }, [name, history]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const generatePDF = () => {
    const doc = new jsPDF("p", "pt");
    doc.text(20,20, `Test Results: ${name} : ${score*10}`);
    doc.save("certificate.pdf");
  };

  return (
    <div className="result">
      {
        score>6 && 
        (
      <Buttons onClick={handleOpen} variant="contained"
        color="success"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}>View Certificate</Buttons>
        )}

<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      {name}
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      {score*10} 
    </Typography>
    <Buttons onClick={generatePDF} variant="contained"
        color="success"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}>Download Certificate
        </Buttons>
  </Box>
  
</Modal>

      {/* <a href={pdf} target="_blank" rel="noreferrer">
        <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
      >
        Download Certificate
      </Button></a> */}
      <span style={{color:'white', fontSize:70}}>Final Score : {score*10}/100</span>
      {
        score>6 && 
        (
          <p style={{color:'green', fontSize:30, fontWeight:'bold'}}>Congratulations!! You earned a certificate for scoring more than 60%</p>
        )
      }
      {
        score<=6 && 
        (
          <p style={{color:'red', fontSize:30, fontWeight:'bold'}}>Sorry!! You couldn't earn a certificate. Try again to score atleast 70%.</p>
        )
      }

      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;
