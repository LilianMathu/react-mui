import { useState } from "react";
import {
  Box,
  TextField,
  Stack,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const MuiTextfield = () => {
  const [visible, setVisible] = useState(false);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const handleClick = () => {
    setVisible(!visible);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  console.log(values);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Stack direction="row" spacing={2}>
        <TextField
          label="First Name"
          name="firstName"
          variant="filled"
          size="small"
          required
          value={values.firstName}
          onChange={handleChange}
          error={!values.firstName}
          helperText={!values.firstName ? "Required" : ""}
        />
        <TextField
          label="Middle Name"
          variant="filled"
          helperText="This is a disabled field"
          size="small"
          disabled
        />
        <TextField label="Last Name" variant="filled" size="small" required />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Date of birth"
          size="small"
          color="secondary"
          variant="outlined" //default
          helperText="Enter the year you were born"
        />

        <TextField
          label="Read-only field"
          InputProps={{ readOnly: true }}
          helperText="This is a read only field"
          variant="standard"
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Password"
          size="small"
          type={visible ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClick}>
                  {visible ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Confirm Password"
          size="small"
          type={visible ? "text" : "password"}
          error
          id="outlined-error-helper-text"
          helperText="Password does not match."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClick}>
                  {visible ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="Weight"
          size="small"
          helperText="Weight in kgs"
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">kgs </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Rate per hour"
          size="small"
          InputProps={{
            endAdornment: <InputAdornment position="start">$ </InputAdornment>,
          }}
        />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{ shrink: true }}
        />

        <TextField id="outlined-search" label="Search field" type="search" />
      </Stack>
    </Box>
  );
};

export default MuiTextfield;
