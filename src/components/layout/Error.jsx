import { Alert, AlertTitle } from "@mui/material";

export function Error() {
  return (
    <Alert
      severity="error"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        bottom: "100px",
      }}
    >
      <AlertTitle
        sx={{ fontSize: "40px", position: "relative", bottom: "15px" }}
      >
        Error
      </AlertTitle>
      <p style={{ fontSize: "20px", position: "relative", bottom: "30px" }}>
        A ocurrido un error — <strong>Intentelo de nuevo mas tarde</strong>
      </p>
    </Alert>
  );
}
