
//Lib Material ui
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fab from '@material-ui/core/Fab';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NavigationIcon from '@material-ui/icons/Navigation';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import { saveId } from '../../redux/actions/actionResults';


const useStyles1 = makeStyles(theme => ({
  //Estilos para la paginacion de los datos
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5),
  },
  
}));


function TablePaginationActions(props) {
  //Muestra la paginacion de los datos a mostrar
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  function handleFirstPageButtonClick(event) {
    onChangePage(event, 0);
  }

  function handleBackButtonClick(event) {
    onChangePage(event, page - 1);
  }

  function handleNextButtonClick(event) {
    onChangePage(event, page + 1);
  }

  function handleLastPageButtonClick(event) {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  }

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="First Page"
      >
        {theme.direction === 'rtl' ? 
        <LastPageIcon /> 
        : 
        <FirstPageIcon />}
      </IconButton>
      <IconButton 
        onClick={handleBackButtonClick} 
        disabled={page === 0} 
        ria-label="Previous Page">
        {theme.direction === 'rtl' ? 
        <KeyboardArrowRight /> 
        : 
        <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Next Page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Last Page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}



const useStyles2 = makeStyles(theme => ({
  //Estilo para el contenido de la tabla
  root: {
    width: '100%',
  },
  table: {
    minWidth: 430,
    width: '100%',
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  detail: {
    flexBasis: '66.66%',
  },
  
  column: {
    flexBasis: '33.33%',
  },
  radioGroup: {
    margin: theme.spacing(1, 0),
  },
 
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));


//Elemento presentacional
export default function Page(props) {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [selectedValue, setSelectedValue] = React.useState('city');
 

  //Pasando los Objetos de la api a la tabla
  const rows = props.results
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
 



  function handleChange(event) {
    //Ordena la columna seleccionada en orden ascendente
    setSelectedValue(event.target.value);
    props.setSelectedOrder(event.target.value);
    props.orderResults()
  }

  function handleChangePage(event, newPage) {
    //muestra la siguiente pagina
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    //Carga la la pagina de la tabla
    setRowsPerPage(parseInt(event.target.value, 10));
  }

  return (
    <Container
    maxWidth='md'
    className={classes.root}>
      <div 
      className={classes.tableWrapper}>
        <Table
        width = '100%'
        className={classes.table}>
          
          <TableRow>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={
                  <Fab 
                    size="small"
                    color="default" 
                    aria-label="Add" 
                    className={classes.fab}
                      >
                      <NavigationIcon/>
                  </Fab>
                }
                aria-controls="panel1c-content"
                id="panel1c-header"
              >
                <div className={classes.column}>
                  <Typography 
                    className={classes.heading}
                >City       
                    </Typography>
                </div>
                <div className={classes.column}>
                  <Typography 
                    className={classes.heading}
                >Postal Code         
                    </Typography>
                </div>
                <div className={classes.heading}>
                  <Typography 
                    className={classes.heading}
                >Street           
                    </Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Ordenar Por</FormLabel>
                <RadioGroup
                  aria-label="order"
                  name="order"
                  className={classes.group}
                  value={selectedValue}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="city"
                    control={<Radio color="primary" />}
                    label="City"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="postalcode"
                    control={<Radio color="primary" />}
                    label="Postal Code"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="street"
                    control={<Radio color="primary" />}
                    label="Street"
                    labelPlacement="start"
                  />
                </RadioGroup>
              </FormControl>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            </TableRow>  

          { rows.length > 0?
          (
          <TableBody>

            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,id) =>
            (
              
              <TableRow key={id}>
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                  >
                    <div className={classes.column}>
                      <Typography 
                        className={classes.secondaryHeading}
                    >{row.address.city}        
                       </Typography>
                    </div>
                    <div className={classes.column}>
                      <Typography 
                        className={classes.secondaryHeading}
                    >{row.address.postalcode}        
                       </Typography>
                    </div>
                    <div className={classes.secondaryHeading}>
                      <Typography 
                        className={classes.heading}
                    >{row.address.street}        
                       </Typography>
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.details}>
                    <div
                      fullwhidt 
                      className={clsx(classes.detail, classes.helper)}>
                      <Typography variant="caption">
                        House number: {row.address.housenumber}
                        <br />
                        Type: {row.type}
                        <br />
                        Distance: {row.distance}
                      </Typography>
                    </div>
                    <div
                      fullwhidt 
                      className={clsx(classes.detail, classes.helper)}>
                      <Typography variant="caption">
                        Latitude: {row.address.geoLocation.lat}
                        <br />
                        Length: {row.address.geoLocation.lng}
                      </Typography>
                    </div>
                    <div
                      fullwhidt 
                      className={
                        clsx(classes.detail, classes.helper)}>
                        <Button 
                        value={(page*rowsPerPage)+id}
                        name={(page*rowsPerPage)+id}
                        onClick = {saveId}
                        variant="contained" 
                        color="secondary" 
                        className={classes.button}>
                        See Map
                        <LocationOnIcon className={classes.rightIcon} />
                      </Button>
                     
                          
                      
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 48 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
         )
        :
        ''
        }
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'Rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      
    </Container>
  );
}