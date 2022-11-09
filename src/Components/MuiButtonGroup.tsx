import { ButtonGroup, Button } from "@mui/material";
import { Stack } from "@mui/system";

const MuiButtonGroup = () => {
  return (
    <Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="outlined"
          size="small"
          aria-label="mui-button-group"
          color="success"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButtonGroup;
