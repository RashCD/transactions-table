import { withStyles } from '@material-ui/core/styles';
import MaterialButton from '@material-ui/core/Button';
import MaterialTypography from '@material-ui/core/Typography';
import MaterialPaper from '@material-ui/core/Paper';
import MaterialBox from '@material-ui/core/Box';
import MaterialContainer from '@material-ui/core/Container';
import MaterialIconButton from '@material-ui/core/IconButton';
import MaterialIconGrid from '@material-ui/core/Grid';

export const Container = ({ sx, children, ...props }) => {
  const ContainerExt = withStyles({ root: sx })(MaterialContainer);
  return <ContainerExt {...props}>{children}</ContainerExt>;
};

export const Grid = ({ sx, children, ...props }) => {
  const GridExt = withStyles({ root: sx })(MaterialIconGrid);
  return <GridExt {...props}>{children}</GridExt>;
};

export const Box = ({ sx, children, ...props }) => {
  const BoxExt = withStyles({ root: sx })(MaterialBox);
  return <BoxExt {...props}>{children}</BoxExt>;
};

export const Button = ({ sx, children, ...props }) => {
  const ButtonExt = withStyles({ root: sx })(MaterialButton);
  return <ButtonExt {...props}>{children}</ButtonExt>;
};

export const Typography = ({ sx, children, ...props }) => {
  console.log({ sx, children, ...props });
  const TypographyExt = withStyles({ root: sx })(MaterialTypography);
  return <TypographyExt {...props}>{children}</TypographyExt>;
};

export const Paper = ({ sx, children, ...props }) => {
  const PaperExt = withStyles({ root: sx })(MaterialPaper);
  return <PaperExt {...props}>{children}</PaperExt>;
};

export const IconButton = ({ sx, children, ...props }) => {
  const IconButtonExt = withStyles({ root: sx })(MaterialIconButton);
  console.log(IconButtonExt);
  return <IconButtonExt {...props}>{children}</IconButtonExt>;
};
