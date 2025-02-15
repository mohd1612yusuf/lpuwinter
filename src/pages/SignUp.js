import React from "react";
import { Card, CardContent, TextField, Button, Typography } from "@mui/material";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="p-6 w-96 shadow-lg">
        <CardContent>
          <Typography variant="h5" className="font-bold mb-4">Sign Up</Typography>
          <TextField fullWidth label="Email" className="mb-4" />
          <TextField fullWidth label="Password" type="password" className="mb-4" />
          <TextField fullWidth label="Confirm Password" type="password" className="mb-4" />
          <Button fullWidth variant="contained" color="primary">Sign Up</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
