import * as React from 'react';
import { useRef } from "react";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const progressLevel = [
  'Low',
  'Normal',
  'High',
];

const ITEM_HEIGHT = 48;



export default function DropDownMenu({ chooseMessage }) {
  const [progress, setProgress] = React.useState(null);
  const open = Boolean(progress);
  const handleClick = (event) => {
    setProgress(event.currentTarget);
  };
  const handleClose = () => {
    setProgress(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <ArrowDropDownIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={progress}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {progressLevel.map((option,index) => (
          <MenuItem 
          key={option} 
          selected={option === 'Pyxis'} 
          onClick={() => chooseMessage(index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
