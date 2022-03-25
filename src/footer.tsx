import React from 'react'
import { Grid,Box,Container,Typography} from '@material-ui/core'
import { Link } from 'react-router-dom'
import img1 from './gplay.png'
import img2 from './apple.png'
import img3 from './logo.png'
export const New = () => {
  return (
    <div id="neww">    
       <Container maxWidth="xl">
      
        <Grid item container spacing={4}>
          <Grid item xs={12} sm={6} md={3} >
          <Box  p={5}>   
          <img src={img3} style={{height:"15vh",width:"45vh"}} alt="logo image"/>

          </Box>

          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box pt={3} >


          <h1 style={{color:"purple"}}>Anywhere,<br/> anytime banking.</h1>
          </Box>
          <Box mt={2}>


          <h4>Get the ally mobile app.<br/>Select your Device</h4>
          </Box>
          
          <Box>

<img src={img2} style={{height:"15vh",width:"45vh"}} alt="apple store image"/>
</Box>
          <Box>

<img src={img1} style={{height:"15vh",width:"45vh"}} alt="apple store image"/>
</Box> 
          </Grid>
          <Grid item xs={12} sm={6} md={6}>

<Box m={1} p={3}>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          <Box style={{float:"right"}}>
          <a style={{margin:"3vh"}}href="#">Securties</a>
          <a style={{margin:"3vh"}} href="#">Privacy</a>
          <a style={{margin:"3vh"}} href="#">Legal</a>
          </Box> <Box style={{float:"left"}}>
            <b>Copyright by XYZ @ 2022</b>
          </Box>
        </Box>
          </Grid>
          {/* <Grid item xs={12} sm={6} md={3}>
          <h1>hhhhhhhhhello</h1>
          </Grid> */}

         
        </Grid>
      </Container>
    </div>
  )
}
