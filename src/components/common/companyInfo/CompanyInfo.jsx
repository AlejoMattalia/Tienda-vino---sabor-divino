import "./CompanyInfo.css";
import { Grid } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CommentIcon from "@mui/icons-material/Comment";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { Link } from "react-router-dom";


export function CompanyInfo() {

  //Diseño y visualizar datos de la empresa
  const handleButtonExit = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 2000);
  };

  return (
    <Grid className="grid-container" container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 8 }}>
      <Grid className="grid-item" item xs={12} sm={6} md={3}>
        <LocalBarIcon className="icon-grid" style={{fontSize: "50px"}}/>
        <p>Vinos Extrangeros y <br/>Nacionales</p>
      </Grid>

      <Grid className="grid-item" item xs={12} sm={6} md={3}>
        <LocalShippingIcon className="icon-grid" style={{fontSize: "50px", position: "relative", bottom: "10px"}}/>
        <p>Envíos a todo el país</p>
      </Grid>

      <Grid className="grid-item" item xs={12} sm={6} md={3}>
        <CommentIcon className="icon-grid commentIcon" style={{fontSize: "50px"}}/>
        <div>
          <p>Opiniones de clientes</p>
          <Link to="/comments" onClick={handleButtonExit}>Lee sus comentarios</Link>
        </div>
      </Grid>

      <Grid className="grid-item" item xs={12} sm={6} md={3}>
        <ProductionQuantityLimitsIcon className="icon-grid productionIcon" style={{fontSize: "50px", position: "relative", top: "8px"}}/>
        <div>
          <p style={{position: "relative", top: "8px"}}>Compra Protegida</p>
          <p style={{fontSize: "10px", position: "relative", top: "-1px", left: "5px", color: "#B8860B"}}>Embalaje anti roturas y <br/> stock garantizado</p>
        </div>
      </Grid>
    </Grid>
  );
}
