import { ButtonPropsVariantOverrides } from '@mui/material/Button';
import { TypographyPropsVariantOverrides } from '@mui/material/Typography';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    HeaderButton: true;
    MenuButton:true;
    ActionButton:true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    TitleTypography: true;
    HeaderTypography:true,
  }
}
declare module '@mui/material/Toolbar' {
  interface ToolbarPropsVariantOverrides {
    HeaderToolBar: true;
  }
}