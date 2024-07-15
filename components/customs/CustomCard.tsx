"use client"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[900] }} aria-label="recipe">
            W
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="MUI components collection"
        subheader="July 16, 2024"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://res.cloudinary.com/practicaldev/image/fetch/s--0GLg37Wj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x99qusomdtlnzm8zizen.png"
        alt="Material UI"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nam consequatur corrupti dolorem soluta doloribus exercitationem eius deleniti tempore obcaecati quam, vitae at explicabo laboriosam voluptas! Quis maxime quasi reiciendis!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur deleniti aspernatur deserunt dolores, consectetur voluptas, ut recusandae quibusdam velit repudiandae accusamus similique voluptatum ullam totam nulla sequi eius! Cum, suscipit!
            Atque repellat maiores consequatur dolore vitae voluptate nisi unde quas illum dolor, minima eius eaque ab? Quod eius ratione voluptatem, saepe labore laudantium eaque harum voluptatibus nam qui hic nobis.
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas beatae quidem ipsam suscipit nemo, sapiente et corporis dolores quasi consequuntur accusantium cumque quod voluptatem saepe non rerum harum! Blanditiis, inventore?
            Dolore eveniet harum blanditiis laudantium distinctio necessitatibus facilis, in omnis rem sequi tenetur perferendis labore voluptas temporibus assumenda corrupti fuga suscipit nostrum doloribus. Vel iusto saepe esse architecto earum ea.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
