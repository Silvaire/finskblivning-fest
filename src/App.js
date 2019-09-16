import React, { useState } from 'react';
import classNames from 'classnames';
import { withStyles } from "@material-ui/core/styles";
import { Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import TextField from '@material-ui/core/TextField';
import logo from './assets/logo.jpg';
import { Typography, Checkbox, FormControlLabel, Button, Grid } from '@material-ui/core';

const SECTION_VERTICAL_PADDING = 80;

const styles = theme => ({
  root: {
    background: theme.palette.common.white,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  logoContainer: {
    height: 'calc(100vh - 152px)',
    alignSelf: 'center',
    lineHeight: 0,
    "@media (max-width: 700px)": {
      height: 'auto',
    }
  },
  logo: {
    maxWidth: '100%',
    maxHeight: '100%'
  },
  menu: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 40,
    background: theme.palette.primary.main,
    color: theme.palette.common.white
  },
  button: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    margin: theme.spacing(2),
    cursor: 'pointer',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    "@media (max-width: 700px)": {
      margin: theme.spacing(1),
    }
  },
  buttonWhite: {
    color: theme.palette.common.white,
    border: `solid 2px ${theme.palette.common.white}`,
    '&:hover': {
      color: theme.palette.secondary.main,
      border: `solid 2px ${theme.palette.secondary.main}`,
    }
  },
  buttonBlue: {
    color: theme.palette.primary.main,
    border: `solid 2px ${theme.palette.primary.main}`,
    '&:hover': {
      color: theme.palette.primary.light,
      border: `solid 2px ${theme.palette.primary.light}`,
    }
  },
  section: {
    flex: 1,
    padding: theme.spacing(2),
    paddingTop: SECTION_VERTICAL_PADDING,
    paddingBottom: SECTION_VERTICAL_PADDING,
    '&:nth-child(odd)': {
      background: theme.palette.common.white,
      color: theme.palette.primary.main,
    },
    '&:nth-child(even)': {
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    "@media (max-width: 700px)": {
      paddingTop: SECTION_VERTICAL_PADDING / 2,
      paddingBottom: SECTION_VERTICAL_PADDING / 2,
    }
  },
  sectionContent: {
    maxWidth: 900,
    margin: 'auto'
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingBottom: theme.spacing(2)
  },
  paragraph: {
    '&:not(:last-child)': {
      paddingBottom: theme.spacing(2)
    }
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoContainer: {
    textAlign: 'center',
    paddingBottom: 20,
  },
  infoItem: {
    fontSize: 25,
    fontWeight: 'bold',
    "@media (max-width: 700px)": {
      fontSize: 20,
    }
  },
  inputContainer: {
    width: '100%',
    paddingBottom: theme.spacing(2)
  },
  inputWhite: {
    color: theme.palette.common.white,
    borderBottom: `solid 1px ${theme.palette.common.white}`
  },
  inputLabelWhite: {
    color: `${theme.palette.common.white} !important`
  },
  checkboxContainer: {
  },
  submitContainer: {
    textAlign: 'right'
  }
});

function App({ classes }) {
  const [ isAvecChecked, updateAvecChecked ] = useState(false);
  return (
    <div className={classes.root} id="main">
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <img className={classes.logo} src={logo} alt="logo" />
        </div>
        <div className={classes.menu}>
          <div className={classNames(classes.button, classes.buttonWhite)} onClick={() => {
              scroller.scrollTo('swedishSection', {
                duration: 500,
                smooth: true,
                offset: -SECTION_VERTICAL_PADDING
              })
            }}>
              På svenska
          </div>
          <div className={classNames(classes.button, classes.buttonWhite)} onClick={() => {
            scroller.scrollTo('finnishSection', {
              duration: 800,
              smooth: true,
              offset: -SECTION_VERTICAL_PADDING
            })
          }}>
            Suomeksi
          </div>
          <div className={classNames(classes.button, classes.buttonWhite)} onClick={() => {
            scroller.scrollTo('englishSection', {
              duration: 800,
              smooth: true,
              offset: -SECTION_VERTICAL_PADDING
            })
          }}>
            In English
          </div>
          <div className={classNames(classes.button, classes.buttonWhite)} onClick={() => {
            scroller.scrollTo('rsvpSection', {
              duration: 800,
              smooth: true,
              offset: -SECTION_VERTICAL_PADDING
            })
          }}>
            RSVP
          </div>
        </div>
        <div className={classes.section}>
          <Element name="swedishSection" />
          <div className={classes.sectionContent}>
            <Typography variant="body1" className={classes.paragraph}>
              Dear friends,
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
              This year's Independence Day will be a special one for me, as it will be my first as a Finn. Indeed, for the few of you to whom I forgot to tell, I became an official part of this country almost one year ago (immediately followed by a cool letter from the army, but let's not dwell into that one :D ).
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
              Therefore, I would love for you all to join me at my Finskblivning Fest, on Friday 6th of December 2019! This will be a night to celebrate this great country, and in particular its amazing party culture, of course! 
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
              A lot more information will come in due time, but save the date and please RSVP below before Sunday 29th of September!
              Looking forward to see you there!
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
              - Silvain
            </Typography>
            <div className={classes.buttonContainer}>
              <div className={classes.button}>
                <div title="Add to Calendar" className="addeventatc">
                  Lägg till i kalendern
                  <span className="start">12/06/2019 17:00</span>
                  <span className="end">12/07/2019 00:00</span>
                  <span className="timezone">EEST</span>
                  <span className="title">Silvains Finskblivningsfest</span>
                </div>
              </div>
              <div className={classNames(classes.button, classes.buttonBlue)} onClick={() => {
                scroller.scrollTo('rsvpSection', {
                  duration: 800,
                  smooth: true,
                  offset: -SECTION_VERTICAL_PADDING
                })
              }}>
                RSVP
              </div>
            </div>
          </div>
        </div>
        <div className={classes.section}>
          <Element name="finnishSection" />
          <div className={classes.sectionContent}>
            <Typography variant="body1" className={classes.paragraph}>
              Tulossa pian...
            </Typography>
            <div className={classes.buttonContainer}>
              <div className={classes.button}>
                <div title="Add to Calendar" className="addeventatc">
                  Lisää kalenteriin
                  <span className="start">12/06/2019 17:00</span>
                  <span className="end">12/07/2019 00:00</span>
                  <span className="timezone">EEST</span>
                  <span className="title">Silvains Finskblivningsfest</span>
                </div>
              </div>
              <div className={classNames(classes.button, classes.buttonWhite)} onClick={() => {
                scroller.scrollTo('rsvpSection', {
                  duration: 800,
                  smooth: true,
                  offset: -SECTION_VERTICAL_PADDING
                })
              }}>
                RSVP
              </div>
            </div>
          </div>
        </div>
        <div className={classes.section}>
          <Element name="englishSection" />
          <div className={classes.sectionContent}>
            <Typography variant="body1" className={classes.paragraph}>
              Dear friends,
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
              This year's Independence Day will be a special one for me, as it will be my first as a Finn. Indeed, for the few of you to whom I forgot to tell, I became an official part of this country almost one year ago (immediately followed by a cool letter from the army, but let's not dwell into that one :D ).
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
              Therefore, I would love for you all to join me at my Finskblivning Fest, on Friday 6th of December 2019! This will be a night to celebrate this great country, and in particular its amazing party culture, of course!
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
              A lot more information will come in due time, but save the date and please RSVP below before Sunday 29th of September!
              Looking forward to see you there!
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
              - Silvain
            </Typography>
            <div className={classes.buttonContainer}>
              <div className={classes.button}>
                <div title="Add to Calendar" className="addeventatc">
                  Add to your Calendar
                  <span className="start">12/06/2019 17:00</span>
                  <span className="end">12/07/2019 00:00</span>
                  <span className="timezone">EEST</span>
                  <span className="title">Silvain's Finskblivningsfest</span>
                </div>
              </div>
              <div className={classNames(classes.button, classes.buttonBlue)} onClick={() => {
                    scroller.scrollTo('rsvpSection', {
                      duration: 800,
                      smooth: true,
                      offset: -SECTION_VERTICAL_PADDING
                    })
                  }}>
                    RSVP
              </div>
            </div>
          </div>
        </div>
        <div className={classes.section}>
          <Element name="rsvpSection" />
          <div className={classes.sectionContent}>
            <Typography variant="h5" className={classes.sectionTitle}>
              RSVP
            </Typography>
            <div className={classes.infoContainer}>
              <Typography variant="h5" className={classes.infoItem}>
                When - Friday, December 6th, 2019
              </Typography>
              <Typography variant="h5" className={classes.infoItem}>
                Where - To be Announced
              </Typography>
            </div>
            <form action="https://formspree.io/silvain.toromanoff+finskblivningsfest@gmail.com" method="POST">
              <Grid container>
                <Grid xs={12} item>
                  <TextField
                    name="name"
                    label="Name"
                    className={classes.inputContainer}
                    InputLabelProps={{
                      classes: {
                        root: classes.inputLabelWhite,
                        shrink: classes.inputLabelWhite
                      }
                    }}
                    InputProps={{
                      classes: {
                        root: classes.inputWhite
                      }
                    }}
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type="email"
                    name="_replyto"
                    label="Email"
                    className={classes.inputContainer}
                    InputLabelProps={{
                      classes: {
                        root: classes.inputLabelWhite,
                        shrink: classes.inputLabelWhite
                      }
                    }}
                    InputProps={{
                      classes: {
                        root: classes.inputWhite
                      }
                    }}
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    name="message"
                    label="Message (optional)"
                    multiline={true}
                    className={classes.inputContainer}
                    InputLabelProps={{
                      classes: {
                        root: classes.inputLabelWhite,
                        shrink: classes.inputLabelWhite
                      }
                    }}
                    InputProps={{
                      classes: {
                        root: classes.inputWhite
                      }
                    }}
                  />
                </Grid>
                <Grid xs={12} item>
                  <FormControlLabel
                    className={classes.checkboxContainer}
                    control={
                      <Checkbox
                        checked={isAvecChecked}
                        onClick={(evt) => {
                          updateAvecChecked(!isAvecChecked)
                        }}
                      />
                    }
                    label="I'm coming with an avec"
                  />
                  <TextField
                    name="avec"
                    value={isAvecChecked ? 'Yes' : 'No'}
                    type="hidden"
                  />
                </Grid>
                <Grid xs={12} item>
                  <div className={classes.submitContainer}>
                    <Button
                      type="submit"
                      variant="contained"
                    >
                      I'll be there!
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(App);
