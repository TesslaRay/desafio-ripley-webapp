import React, { useState } from "react";
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import Divider from "@material-ui/core/Divider";
import { Container } from "@material-ui/core";

import InputBase from "@material-ui/core/InputBase";

import { ActivityIndicator } from "../../components/activityindicator.component";
import { AddError } from "../../components/adderror.component";

import { useDispatch, useSelector } from "react-redux";
import { addCounter } from "../../redux/actions/add-counter.actions";

import useStyles from "./createitem.style";

const CreateItem = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const productsReducer = useSelector((state) => state.productsReducer);

  const [brand, setBrand] = useState();
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();

  let product = {
    brand: brand,
    image: image,
    name: name,
    description: description,
    price: price,
  };

  const onChangeBrand = (event) => {
    setBrand(event.target.value);
  };

  const onChangeImage = (event) => {
    setImage(event.target.value);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const saveItem = (product) => {
    dispatch(addCounter(product));
  };

  return (
    <div className={classes.dimmer}>
      <br></br>
      <Container className={classes.root}>
        <div className={classes.header}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
            component={Link}
            to="/main"
          >
            <AddCircleIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Agregar producto
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.saveButton}
            onClick={() => saveItem(product)}
            component={Link}
            to="/main"
          >
            Agregar
          </Button>
        </div>
        <Divider className={classes.separator} />
        <div className={classes.body}>
          <Typography variant="h6">Marca</Typography>
          <div className={classes.search}>
            <InputBase
              fullWidth={true}
              placeholder="HP"
              classes={{
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={onChangeBrand}
            />
          </div>

          <Typography variant="h6">Imagen</Typography>
          <div className={classes.search}>
            <InputBase
              fullWidth={true}
              placeholder="URL"
              classes={{
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={onChangeImage}
            />
          </div>

          <Typography variant="h6">Nombre</Typography>
          <div className={classes.search}>
            <InputBase
              fullWidth={true}
              placeholder="Bicicleta"
              classes={{
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={onChangeName}
            />
          </div>

          <Typography variant="h6">Descripción</Typography>
          <div className={classes.search}>
            <InputBase
              fullWidth={true}
              placeholder="........."
              classes={{
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={onChangeDescription}
            />
          </div>

          <Typography variant="h6">Precio</Typography>
          <div className={classes.search}>
            <InputBase
              fullWidth={true}
              placeholder="29900"
              classes={{
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={onChangePrice}
            />
          </div>

          <Typography className={classes.subtitle}>
            Vee los &nbsp;
            <Link to="/example">
              <u>ejemplos.</u>
            </Link>
          </Typography>
        </div>

        {/* Loading */}
        {/* {productsReducer.loadingAddCounter === true ? (
          <div className={classes.loader}>
            <ActivityIndicator />
          </div>
        ) : (
          <p></p>
        )} */}
        {/* Error */}
        {/* {productsReducer.errorAddCounter !== "" && <AddError />} */}
      </Container>
    </div>
  );
};

export default CreateItem;
