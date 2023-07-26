import { CircularProgress } from "@mui/material";

export function Loading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        background: "hsl(0, 0%, 8%)",
        paddingBottom: "100px"
      }}
    >
      <h3 style={{color:"#fff"}}>...CARGANDO</h3>
      <CircularProgress sx={{color: "#fff"}} size={100} />
    </div>
  );
}
