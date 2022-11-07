import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>

      <Typography variant="body1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet rerum
        molestias, sit saepe officiis nesciunt facilis omnis tempore libero
        quaerat quis enim! Quos, nemo cum.
      </Typography>
      <Typography variant="body2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
        consectetur impedit aperiam doloribus officia mollitia aliquid vero,
        dignissimos sequi dicta nostrum, natus temporibus quos praesentium.
      </Typography>
    </div>
  );
};

export default MuiTypography;
