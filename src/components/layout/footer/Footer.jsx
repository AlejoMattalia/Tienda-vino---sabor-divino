import { MDBBtn, MDBContainer, MDBFooter} from "mdb-react-ui-kit";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

export function Footer() {
  return (

    // Footer
    <MDBFooter className="text-center" color="white" style={{background: "hsl(0, 0%, 5%)"}}>
      <MDBContainer className="pt-3">
        <section className="mb-4">
         
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <div href="" style={{ position: "relative", top: "8px"}}>
              <InstagramIcon style={{width: "18px", height: "18px"}}/>
            </div>
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <div href="" style={{ position: "relative", top: "8px"}}>
              <GoogleIcon style={{width: "18px", height: "18px"}}/>
            </div>
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <div href="" style={{ position: "relative", top: "8px"}}>
              <LinkedInIcon style={{width: "18px", height: "18px"}}/>
            </div>
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <div href="" style={{ position: "relative", top: "8px"}}>
              <GitHubIcon style={{width: "18px", height: "18px"}}/>
            </div>
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <div href="" style={{ position: "relative", top: "8px"}}>
              <MailIcon style={{width: "18px", height: "18px"}}/>
            </div>
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "hsl(0, 0%, 6%)" }}
      >
        © 2023 Copyright: Alejo Mattalia
      </div>
    </MDBFooter>
  );
}
