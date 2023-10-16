import React from "react";
import { Grid, Card, CardContent, MenuItem, InputLabel, Select, CardActions, Button, CardHeader, FormControl } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { app } from "../firebaseConfig";
import { getDatabase, ref, push } from "firebase/database";
import axios from "axios"; // Import axios
import { Formik, Form, Field } from "formik";
import { createTheme, ThemeProvider } from "@mui/material";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
const theme = createTheme({
    palette: {
        primary: {
            main: "#ffffff", // Set your desired text color (white in this case)
        },
        background: {
            default: "#000000", // Set your desired background color (black in this case)
        },
    },
});
const useStyle = makeStyles((theme) => ({
    //   padding: {
    //     padding: theme.spacing(3)
    //   },
    //   button: {
    //     margin: theme.spacing(1)
    //   }
    textField: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'transparent', // Remove the border color
            },
        },
        '& .MuiInputLabel-root': {
            color: "white", // Set the label color to white
        },
        '& .MuiInputBase-input': {
            color: "white", // Set the text color to white
        },
    },
}));

//Data
const initialValues = {
    firstName: "",
    lastName: "",
    occupation: "",
    city: "",
    country: "",
    email: "",
    password: "",
    website: "", // Add the website field to initialValues
    message: ""  // Add the message field to initialValues
};

const options = [
    { label: "Computer Programmer", value: "Computer_programmer" },
    { label: "Web Developer", value: "web_developer" },
    { label: "User Experience Designer", value: "user_experience_designer" },
    { label: "Systems Analyst", value: "systems_analyst" },
    { label: "Quality Assurance Tester", value: "quality_assurance_tester" }
];

//password validation
const lowercaseRegEx = /(?=.*[a-z])/;
const uppercaseRegEx = /(?=.*[A-Z])/;
const numericRegEx = /(?=.*[0-9])/;
const lengthRegEx = /(?=.{6,})/;

//validation schema
let validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string(),
    email: Yup.string().email("Invalid email").required("Required"),
    website: Yup.string(), // Add validation for the website field
    message: Yup.string().required("Required")  // Add validation for the message field
});
const UserForm = () => {
    const classes = useStyle();

    const onSubmit = async (values, { resetForm }) => {
        // Assuming "form_data" is the appropriate key for your database structure.
        const database = getDatabase(app);
        const formDataRef = ref(database, "form_data");
        push(formDataRef, values);
      
        // Send email using Mailgun API
        const mailgunApiKey = "2a4eab0f5375a6fbb02e8cac0a3832fc-4e034d9e-816dcbd6"; // Replace with your Mailgun API key
        const mailgunDomain = "sandbox0df0533597654396ad2d196b393ad0ff.mailgun.org"; // Replace with your Mailgun domain
        const senderName = "One Crypto Ventures";
        const senderEmail = "pragyapriyam1@gmail.com";
        const recipientEmail = "pratyushshivam7@gmail.com"; // Replace with the recipient's email address
      
        try {
          const response = await axios.post(
            `http://localhost:5000/send-email`, // Replace with your backend URL
            {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              website: values.website,
              message: values.message,
            },
            {
              headers: {
                "Authorization": `Basic ${btoa(`api:${mailgunApiKey}`)}`,
              },
            }
          );
      
          console.log("Email sent successfully!", response);
        } catch (error) {
          console.error("Error sending email:", error);
        }
      
        // Reset the form after successful submission
        resetForm();
      };
      
      
      

    return (
        // <ThemeProvider theme={theme}>
        <Grid className="data-tesssst" style={{ background: "black", color: "white" }} container justify="center" spacing={1}>
            <Grid style={{ background: "black", color: "white" }} item md={6}>
                <Card style={{ background: "black", color: "white" }} className={classes.padding}>
                    <CardHeader style={{ background: "black", color: "white" }} title="CONTACT US"></CardHeader>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        style={{ background: "black", color: "white" }}
                        onSubmit={onSubmit}
                    >
                        {({ dirty, isValid, values, handleChange, handleBlur }) => {
                            return (
                                <Form style={{ background: "black", color: "white" }}>
                                    <CardContent style={{ background: "black", color: "white" }}>
                                        <Grid style={{ background: "black", color: "white" }} item container spacing={1} justify="center">

                                        <Grid item xs={12} sm={6} md={6}>
  <p style={{ marginBottom: '5px', textAlign:"left" }}>First Name*</p>
  <Field
    variant="outlined"
    fullWidth
    name="firstName"
    component={TextField}
    
  />
</Grid>
                                            <Grid item xs={12} sm={6} md={6}>
                                            <p style={{ marginBottom: '5px', textAlign:"left" }}>Last Name (Optional)</p>
                                                <Field
                                                    variant="outlined"
                                                    fullWidth
                                                    name="lastName"
                                                    // value={values.city}
                                                    component={TextField}
                                                  
                                                    className={classes.textField} // Apply custom styles
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6}>
                                            <p style={{ marginBottom: '5px', textAlign:"left" }}>Email*</p>
                                                <Field
                                                    variant="outlined"
                                                    fullWidth
                                                    name="email"
                                                    // value={values.city}
                                                    component={TextField}
                                                   
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6}>
                                            <p style={{ marginBottom: '5px', textAlign:"left" }}>Website URL (Optional)</p>
                                                <Field
                                                    variant="outlined"
                                                    fullWidth
                                                    name="website"
                                                    // value={values.city}
                                                    component={TextField}
                                               
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6}>
                                            <p style={{ marginBottom: '5px', textAlign:"left" }}>Your Message*</p>
                                                <Field
                                                    variant="outlined"
                                                    fullWidth
                                                    name="message"
                                                    // value={values.city}
                                                    component={TextField}
                                                  
                                                />
                                            </Grid>

                                        </Grid>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            style={{ background: "black", color: "white", border: "1px solid white", margin: "auto", textAlign: "center" }}
                                            disabled={!dirty || !isValid}
                                            variant="contained"
                                            color="primary"
                                            type="Submit"
                                            className={classes.button + " but-dest"}
                                        >
                                            SUBMIT
                                        </Button>
                                    </CardActions>
                                </Form>
                            );
                        }}
                    </Formik>
                </Card>
            </Grid>
        </Grid>
        // </ThemeProvider>
    );
};

export default UserForm;
