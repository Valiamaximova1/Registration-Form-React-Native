import React, { Component } from 'react';
import { Pressable, Keyboard, StyleSheet, Text,TextInput, View } from 'react-native';
// import PhoneInput from "react-native-phone-number-input";
// import PhoneNumberInput from 'react-native-phone-number-input';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { createIconSet } from 'react-native-vector-icons/lib/create-icon-set';

// import FontAwesome, {SolidIcons,RegularIcons,BrandIcons,parseIconFromClassName} from 'react-native-fontawesome';
// import TextInput from 'react-native-textinput-with-icons'

export default class RegistrationForm extends Component {

  emailInputRef = React.createRef();
  passwordInputRef = React.createRef();
  contPasswordInputRef = React.createRef();
  codeInputRef = React.createRef();
  phoneInputRef = React.createRef();
  scrollViewRef = React.createRef();



  constructor(props) {
    super(props);
    this.state = {
        email: '',
        phone: '',
        password: '',
        confPassword: '',
        code: '',
        showEmailError: false,
        showPhoneError: false,
        showPasswordError: false,
        showConfPasswordError: false,
        showCodeError: false,
        isFormComplete: false
    };
    this.submitPressed = this.submitPressed.bind(this);
  }

  inputs = () => {
    return [
      this.emailInputRef,
      this.phoneInputRef,
      this.passwordInputRef,
      this.confPasswordInputRef,
      this.codeInputRef
    ];
  };

//   editNextInput = () => {
//     console.log("editNextInput")
//     const activeIndex = this.getActiveInputIndex();
//     if (activeIndex === -1) {
//         return;
//     }

//     const nextIndex = activeIndex + 1;
//     if (nextIndex < this.inputs().length && this.inputs()[nextIndex].current != null) {
//         this.setFocus(this.inputs()[nextIndex], true);
//     } else {
//         this.finishEditing();
//     }
//   }

//   onInputFocus = () => {
//     this.setState({
//         activeIndex: this.getActiveInputIndex(),
//     });
//   }

//   onChangeInputHandler = (name, value) => {
//     this.setState({
//         [name]: value,
//     });
//   }

//   getActiveInputIndex = () => {
//     const activeIndex = this.inputs().findIndex((input) => {
//         if (input.current == null) {
//             return false;
//         }
//         console.log("input: ", input);
//         return input.current.isFocused();
//     });
//     console.log("activeIndex: ", activeIndex);
//     return activeIndex;
//   }

//   finishEditing = () => {
//     const activeIndex = this.getActiveInputIndex();
//     if (activeIndex === -1) {
//         return;
//     }
//     this.setFocus(this.inputs()[activeIndex], false);
//   }

  setFocus(textInputRef, shouldFocus) {
    if (shouldFocus) {
        setTimeout(() => {
            textInputRef.current.focus();
        }, 100);
    } else {
        textInputRef.current.blur();
    }
  }
   
  funcT = () =>{
    if(this.state.email === null && this.state.password === null && this.state.confPassword === null 
        && this.state.phone === null){
            this.setState({ isFormComplete: true })
    }else{
        this.setState({ isFormComplete: false })
    }
  }


  submitPressed() {
    console.log("submitPressed this.state: ", this.state);
    this.setState({
        showEmailError: this.state.email.length < 4,
        showPasswordError: this.state.password.length < 4,
        showFirstnameError: this.state.firstname.length < 4,
        showLastnameError: this.state.lastname.length < 4,
        showOccupationError: this.state.occupation.length < 4,
        showAddressError: this.state.address.length < 4,
        showZipError: this.state.zip.length < 4,
        showPhoneError: this.state.phone.length < 4,
    });
    Keyboard.dismiss();
  }

  validate = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false || text === null) {
      console.log("Email is Not Correct");
      this.setState({ email: text })
      this.setState({
        showEmailError: true
      })
      
    }
    else {
      this.setState({ email: text })
      this.setState({
        showEmailError: false
      })
    if(this.state.email === null && this.state.password === null && this.state.confPassword === null 
        && this.state.phone === null && this.state.password ===  this.state.confPassword ){
            this.setState({ isFormComplete: true })
    }else{
        this.setState({ isFormComplete: false })
    }
    }
    console.log(this.state.isFormComplete);
  }

  validatePassword = (text) => {
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (reg.test(text) === false || text === null) {
      this.setState({ password: text })
      this.setState({
        showPasswordError: true
      })
      
    }
    else {
      this.setState({ password: text })
      this.setState({
        showPasswordError: false
      })

    }
    if(this.state.email === null && this.state.password === null && this.state.confPassword === null 
        && this.state.phone === null && this.state.password ===  this.state.confPassword ){
            this.setState({ isFormComplete: true })
    }else{
        this.setState({ isFormComplete: false })
    }
    console.log(this.state.isFormComplete);
  }
  

  validateConfPassword = (text) => {
    if (!(text === this.state.password)) {
      this.setState({ confPassword: text })
      this.setState({
        showConfPasswordError: true
      })
    }
    else {
      this.setState({ confPassword: text })
      this.setState({
        showConfPasswordError: false
      })
      
    }
    if(this.state.email === null && this.state.password === null && this.state.confPassword === null 
        && this.state.phone === null && this.state.password ===  this.state.confPassword ){
            this.setState({ isFormComplete: false })
    }else{
        this.setState({ isFormComplete: true })
    }
    console.log(this.state.isFormComplete);
  }

  handleSubmit = () => {

 }

  
  render() {
    return (
        
            <View style={styles.container}>
                <Text style={styles.header}>Account Information</Text>

                <View style={styles.inputTextWrapper}>
                {/* <Icon name="lock" size={20} color="#999" style={{ marginRight: 10 }} /> */}
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#D3D3D3" 
                        style={styles.textInput}
                        // returnKeyType="next"
                        // onSubmitEditing={this.editNextInput}
                        // onFocus={this.onInputFocus}
                        onChangeText={(text) => this.validate(text)}
                        value={this.state.email}
                        // onChangeText={this.onChangeInputHandler}
                        // ref={this.emailInputRef}
                        // value={requiredField}
                    />
                    {this.state.showEmailError &&
                        <Text style={styles.errorText}>Please enter valid email address.</Text>
                    }
                </View>

                <View style={styles.inputTextWrapper}>
                {/* <Icon name="phone" size={20} color="#999" style={{ marginRight: 10 }} /> */}
        
                    <TextInput
                        placeholder="Phone"
                        placeholderTextColor="#D3D3D3" 
                        style={styles.textInput}
                        returnKeyType="done"
                        onSubmitEditing={this.editNextInput}
                        // onFocus={this.onInputFocus}
                        onChangeText={this.onChangeInputHandler}
                        ref={this.phoneInputRef}
                        // value={requiredField}
                    />
                    {this.state.showPhoneError &&
                        <Text style={styles.errorText}>Please enter your phone number.</Text>
                    }
                </View>
                {/* <View style={styles.inputTextWrapper}>
                <PhoneNumberInput
            ref={this.phoneInputRef}
            defaultCode="DM"
            layout="first"
            onChangeText={this.onChangeInputHandler}
            // onChangeFormattedText={(text) => {
            //   setFormattedValue(text);
            // }}
            // withDarkTheme
            // withShadow
            // autoFocus
          />
          </View> */}
                 <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#D3D3D3" 
                        style={styles.textInput}
                        secureTextEntry={true}
                        returnKeyType="next"
                        onSubmitEditing={this.editNextInput}
                        // onFocus={this.onInputFocus}
                        onChangeText={(text) => this.validatePassword(text)}
                        ref={this.passwordInputRef}
                        // value={requiredField}
                    />
                    {this.state.showPasswordError &&
                        <Text style={styles.errorText}>Password must contain at least 8 characters: 1 uppercase letter, 1 lowercase letter, 1 special character and 1 case-sensitive character.</Text>
                    }
                    {this.state.showPasswordError === false &&
                        <Text style={styles.password}>Password must contain at least 8 characters: 1 uppercase letter, 1 lowercase letter, 1 special character and 1 case-sensitive character.</Text>
                    }
                </View>

                
                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Confirm Password"
                        placeholderTextColor="#D3D3D3" 
                        style={styles.textInput}
                        secureTextEntry={true}
                        returnKeyType="next"
                        onSubmitEditing={this.editNextInput}
                        // onFocus={this.onInputFocus}
                        onChangeText={(text) => this.validateConfPassword(text)}
                        ref={this.confPasswordInputRef}
                        // value={requiredField}
                    />
                    {this.state.showConfPasswordError &&
                        <Text style={styles.errorText}>Please enter a password.</Text>
                    }
                </View>


                
               
               

               

                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Referral code (optional)"
                        placeholderTextColor="#D3D3D3"
                        style={styles.textInput}
                        onSubmitEditing={this.editNextInput}
                        // onFocus={this.onInputFocus}
                        onChangeText={this.onChangeInputHandler}
                        ref={this.codeInputRef}
                        // value={optionalField}
                    />
                    {this.state.showCodeError &&
                        <Text style={styles.errorText}>Please enter your code.</Text>
                    }
                </View>

               


                
                <View style={styles.btn}>
                    {this.state.isFormComplete && (
                  <Pressable style={styles.btnContainer} >
                    {/* onPress={this.submitPressed} */}
                    <Text style={styles.btnTxt}>Next</Text>
                </Pressable>
                )}
                </View>
                
            </View>
                
      );
  }
}

const styles = StyleSheet.create({
    container: {
        
    //   marginBottom: "200px",
      paddingBottom: 100
    //   flex: 1,
    //   paddingBottom: 100,
    },
    header: {
      fontSize: 16,
      fontWeight: 490,
      padding: 30,
      marginRight: 80,
      marginLeft: 80,
      textAlign: "center",
    },
    password:{
        fontSize: "12px",
        color: "#696969",
        marginLeft: "10px",
        marginRight: "10px",
        marginTop: "5px"
    },
    inputTextWrapper: {
      marginBottom: 24,
    },
    textInput: {
      height: 40,
      borderStyle: 'solid',
      borderWidth: '1.5px',
      borderColor: '#D3D3D3',
      borderRadius: '5px',
      marginLeft: "10px",
      marginRight: "10px"
    },
    errorText: {
      color: 'red',
      fontSize: "10px",
      marginLeft: "10px",
      marginRight: "10px",
      marginTop: "5px"
    },
    btn:{
        marginTop: '200px',
        marginLeft: "10px",
        marginRight: "10px"
    },
    btnContainer: {
      backgroundColor: "#23A251",
      padding: "15px",
      borderRadius:"20px"
    
    },
    btnTxt:{
        color: "white",
        fontSize: 14,
        fontWeight: 490,
        textAlign: 'center'
    }
  });


 














