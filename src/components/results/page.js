
import React from 'react';

//Lib Material ui
import Typography from '@material-ui/core/Typography';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Grid from '@material-ui/core/Grid';

//Componentes
import MenuAppBar from '../appBar/MenuAppBar';
import Atms from './atms/index';
import SearchBar from './searchBar/index';

export default function Page(props) {

    return(
        <Grid
        container
        spacing={2}
        
        direction="row"
        justify="center"
        alignItems="center">
            <Grid item xs={12}>
                <MenuAppBar/>
                <Typography component="h1" variant="h5">
                    <SnackbarContent
                        style ={{
                            justifyContent: 'center',
                            fontSize:'0.8em'
                        }}
                        message="where do you want to start your search?"
                    />    
                </Typography>
            </Grid>
            
            <Grid item>
               <Grid container spacing={6}>
                    <Grid item xs={12} >
                        <SearchBar/>
                    </Grid>
                    
                    <Grid item xs={12} >
                        <Atms/>
                    </Grid>
               </Grid>
                      
            </Grid>
        </Grid>

    ) 
} 











