"use client"

import React from 'react';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useTheme } from '@emotion/react';

interface MUIButtonProps {
  label: string;
  href: string;
  variant:'HeaderButton' | 'MenuButton',
  sx?:Object
}

const MUIButton: React.FC<MUIButtonProps> = ({ label, href,variant,sx }) => {
  const router = useRouter();
  const theme = useTheme()
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push(href);
  };

  return (
    <Button sx={sx}  style={{width:'100%'}} variant={variant} onClick={handleClick}>
      {label}
    </Button>
  );
};

export default MUIButton;
