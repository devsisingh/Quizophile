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
    doc.rect(20, 20, doc.internal.pageSize.width - 40, doc.internal.pageSize.height - 40, 'S');
    doc.rect(30, 30, doc.internal.pageSize.width - 60, doc.internal.pageSize.height - 60, 'S');
    doc.setFontSize(30);

    doc.setFillColor(221,221,221);
doc.rect(30, 30, 535, 780, 'F');

doc.setFillColor(36,58,115);
doc.rect(0, 0, 20, 840, 'F');
doc.setFillColor(36,58,115);
doc.rect(575, 0, 20, 840, 'F');
doc.setFillColor(36,58,115);
doc.rect(0, 0, 585, 20, 'F');
doc.setFillColor(36,58,115);
doc.rect(0, 823, 600, 20, 'F');

doc.setFillColor(243,36,36);
doc.rect(20, 20, 10, 800, 'F');
doc.setFillColor(243,36,36);
doc.rect(565, 20, 10, 800, 'F'); //3
doc.setFillColor(243,36,36);
doc.rect(20, 20, 550, 10, 'F'); //2
doc.setFillColor(243,36,36);
doc.rect(20, 813, 555, 10, 'F'); //4

 
doc.setFillColor(55,27,88);
doc.rect(150, 120, 300, 40, 'F');
doc.setTextColor(247, 126, 33);
doc.text(160,150, 'Quizophile Certificate');
doc.setTextColor(0, 0, 0);
doc.setFontSize(17);
doc.text(100,250, `NAME: ${name}`);
    doc.text(100,290, `SCORE: ${score*10}/100`);
    doc.text(100,330, `${name} has successfully cleared the quiz test from the`);
    doc.text(100,370, `platform QUIZOPHILE built by TEAM Dijkstra.`);
    doc.setTextColor(247, 126, 33);
    doc.text(160,430, `Greetings to you and keep learning!!`);

    doc.setTextColor(0, 0, 0);
    doc.text(70,500,  `Tripda Goel`);
    doc.text(250,500, `Simran jeet Kaur`);
    doc.text(450,500, `Devsi Singh`);
    doc.text(45,530, `(Team Coordinator)`);
    doc.text(240,530, `(Team Coordinator)`);
    doc.text(440,530, `(Team Leader)`);

    doc.save("certificate.pdf");
  };

  return (
    <div className="result">
      <Buttons onClick={handleOpen} variant="contained"
        color="success"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}>View Scorecard</Buttons>

<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      NAME : {name}
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      SCORE OBTAINED : {score*10}/100
    </Typography>
    {score>6 && 
        (
    <Buttons onClick={generatePDF} variant="contained"
        color="success"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}>Download Certificate
        </Buttons>)}
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
