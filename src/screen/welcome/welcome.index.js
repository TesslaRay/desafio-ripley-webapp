import React from "react";
import { Link } from "react-router-dom";

import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Logo } from "../../images/logo-test.svg";

import { Box, Button, Typography } from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";

import useStyles from "./welcome.style";

const Welcome = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <ListIcon className={classes.logo} />
      <p className={classes.title}>Mini Catálogo</p>
      <p className={classes.subtitle}>
        En caso de que la búsqueda sea un palíndromo retorna el productos con el
        descuento (20%) ya aplicado al precio, esta búsqueda aplica para
        identificadores (Id de Producto), marcas y descripciones de productos
      </p>
      <Box mt={8} className={classes.bottom}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          component={Link}
          to="/main"
        >
          <Typography className={classes.textButton}>
            Ir a la catálogo
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Welcome;
