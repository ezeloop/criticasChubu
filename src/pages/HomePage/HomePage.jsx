import React from 'react';
import Tooltip from '../../components/Tooltip'
import Tasks from "../../components/Tasks/Tasks";
import { Typography } from '@material-ui/core';
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer.js";
import Icon from "@material-ui/core/Icon";
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import Mood from "@material-ui/icons/Mood";
import RateReviewIcon from '@material-ui/icons/RateReview';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import Danger from '../../components/Typography/Danger';
import CustomTabs from "../../components/CustomTabs/CustomTabs";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from '../../assets/jss/nextjs-material-dashboard/views/dashboardStyle'; 
import stylesScss from './HomePage.module.scss'
import { bugs, website, server } from "../../variables/general"; 



const HomePage = () => {

    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <div className={stylesScss.container_home}> 
            <Typography variant='h1' align='center' color='primary'>Bienvenido</Typography>
            <Typography variant='subtitle1' align='center' color='primary'>Bienvenido al foro de críticas más personalizado! Aquí podrás mantener tus críticas en las carpetas que desees, y compartir tu opinion a quien quieras, vía Whatsapp, Twitter o desde nuestra plataforma pública!</Typography>
            <div>
                <GridContainer 
                >
                    <GridItem xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader color="warning" stats icon>
                                <CardIcon color="warning">
                                    <FolderOpenIcon/>
                                </CardIcon>
                                <p className={classes.cardCategory}>Cantidad de Carpetas</p>
                                {/* /aca depende el plan que tenga, va a poder tener carpetas ilimitadas, o limitadas */}
                                <h3 className={classes.cardTitle}>
                                    5/10 
                                </h3>
                            </CardHeader>
                            <CardFooter stats>
                                <div className={classes.stats}>
                                    <Danger>
                                        <Warning />
                                    </Danger>
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        Aumentar mi capacidad de carpetas
                </a>
                                </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader color="dark" stats icon>
                                <CardIcon color="dark">
                                    <RateReviewIcon />
                                </CardIcon>
                                <p className={classes.cardCategory}>Cantidad de críticas</p>
                                <h3 className={classes.cardTitle}>20</h3>
                            </CardHeader>
                            <CardFooter stats>
                                <div className={classes.stats}>
                                <AccessTime /> 
                ultima crítica: $a tal hora
              </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader color="danger" stats icon>
                                <CardIcon color="danger">
                                    <Mood/>
                                </CardIcon>
                                <p className={classes.cardCategory}>Tu nota promedio en criticas</p>
                                <h3 className={classes.cardTitle}>7</h3>
                            </CardHeader>
                            <CardFooter stats>
                                <div className={classes.stats}>
                                    <LocalOffer />
                Tracked from Github
              </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader color="rose" stats icon>
                                <CardIcon color="rose">
                                    <ThumbUpAltIcon />
                                </CardIcon>
                                <p className={classes.cardCategory}>Likes</p>
                                <h3 className={classes.cardTitle}>+245</h3>
                            </CardHeader>
                            <CardFooter stats>
                                <div className={classes.stats}>
                                    <Update />
                Just Updated
              </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>

                {/* <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card chart>
                            <CardHeader color="success">
                            
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardTitle}>Daily Sales</h4>
                                <p className={classes.cardCategory}>
                                    <span className={classes.successText}>
                                        <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
                            </CardBody>
                            <CardFooter chart>
                                <div className={classes.stats}>
                                    <AccessTime /> updated 4 minutes ago
              </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card chart>
                            <CardHeader color="warning">
                            
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                                <p className={classes.cardCategory}>Last Campaign Performance</p>
                            </CardBody>
                            <CardFooter chart>
                                <div className={classes.stats}>
                                    <AccessTime /> campaign sent 2 days ago
              </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card chart>
                            <CardHeader color="dark">
                                
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardTitle}>Completed Tasks</h4>
                                <p className={classes.cardCategory}>Last Campaign Performance</p>
                            </CardBody>
                            <CardFooter chart>
                                <div className={classes.stats}>
                                    <AccessTime /> campaign sent 2 days ago
              </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                        <CustomTabs
                            title="Tasks:"
                            headerColor="dark"
                            tabs={[
                                {
                                    tabName: "Bugs",
                                    tabIcon: BugReport,
                                    tabContent: (
                                        <Tasks
                                            checkedIndexes={[0, 3]}
                                            tasksIndexes={[0, 1, 2, 3]}
                                            tasks={bugs}
                                        />
                                    ),
                                },
                                {
                                    tabName: "Website",
                                    tabIcon: Code,
                                    tabContent: (
                                        <Tasks
                                            checkedIndexes={[0]}
                                            tasksIndexes={[0, 1]}
                                            tasks={website}
                                        />
                                    ),
                                },
                                {
                                    tabName: "Server",
                                    tabIcon: Cloud,
                                    tabContent: (
                                        <Tasks
                                            checkedIndexes={[1]}
                                            tasksIndexes={[0, 1, 2]}
                                            tasks={server}
                                        />
                                    ),
                                },
                            ]}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <Card>
                            <CardHeader color="warning">
                                <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
                                <p className={classes.cardCategoryWhite}>
                                    New employees on 15th September, 2016
              </p>
                            </CardHeader>
                            <CardBody>
                        
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer> */}
            </div>
        </div>
    );
}

export default HomePage;