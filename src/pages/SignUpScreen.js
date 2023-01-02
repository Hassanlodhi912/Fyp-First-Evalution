import React, { useState } from 'react'
import {
  StyleSheet, Text, TextInput,
  TouchableOpacity, View, Alert,
  SafeAreaView, ScrollView, StatusBar
} from 'react-native'
import { titles, colors, btn1, hr80 } from '../global/Style';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { signupUser } from '../config/firebase';

const SignUpScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    // name: "nabeel rizwan",
    // phoneNumber: "03362319053",
    // email: "nabeel@gmail.com",
    // password: "123456",
    // repassword: "123456"
  })

  const [emailfocus, setEmailfocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  const [phonefocus, setPhonefocus] = useState(false);
  const [namefocus, setNamefocus] = useState(false);

  const [showpassword, setShowpassword] = useState(false);
  const [showcpassword, setShowcpassword] = useState(false);
  const [cpasswordfocus, setcPasswordfocus] = useState(false);

  //taking form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  // console.log(email);

  const [customError, setCustomError] = useState('');
  const [successmsg, setSuccessmsg] = useState(null);

  const handleChangeText = (key, value) => {
    setFormData({ ...formData, [key]: value })
  }

  const handlePress = async () => {

    if (!formData.name) {
      return alert("Please enter your name")
    }
    if (!formData.phoneNumber.length) {
      return alert("Please enter your phone number eg. 03362319054")
    }
    if (!formData.email) {
      return alert("Please enter your email eg. example@gmail.com")
    }
    if (formData.password.length < 6) {
      return alert("Your password must be at least 6 characters long")
    }
    if (formData.password !== formData.repassword) {
      return alert("Your passwords do not match")
    }

    const result = await signupUser(formData)

    if (result.error) {
      Alert.alert(
        "Error",
        result.message,
        [
          { text: "OK" }
        ]
      )
    }
    else {
      Alert.alert(
        "Success",
        result.message,
        [
          { text: "OK" }
        ]
      )
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView >
        <ScrollView showsVerticalScrollIndicator={false}>
          {successmsg == null ?
            <View style={styles.container}>
              <Text style={styles.head1}>Sign Up</Text>
              {customError !== '' && <Text style={styles.errormsg}>{customError}</Text>}
              <View style={styles.inputout}>
                <AntDesign name="user" size={24} color={namefocus === true ? colors.text1 : colors.text2} />
                <TextInput style={styles.input} placeholder="Full Name" onFocus={() => {
                  setEmailfocus(false)
                  setPasswordfocus(false)
                  setShowpassword(false)
                  setNamefocus(true)
                  setPhonefocus(false)
                  setCustomError('')
                }}
                  onChangeText={text => handleChangeText('name', text)}
                  value={formData.name}
                />
              </View>


              <View style={styles.inputout}>
                <Entypo name="email" size={24} color={emailfocus === true ? colors.text1 : colors.text2} />
                <TextInput style={styles.input} placeholder="Email" onFocus={() => {
                  setEmailfocus(true)
                  setPasswordfocus(false)
                  setShowpassword(false)
                  setNamefocus(false)
                  setPhonefocus(false)
                  setCustomError('')
                }}
                  onChangeText={text => handleChangeText('email', text)}
                  value={formData.email}
                />
              </View>
              {/*  */}

              <View style={styles.inputout}>
                <Feather name="smartphone" size={24} color={phonefocus === true ? colors.text1 : colors.text2} />
                <TextInput style={styles.input} placeholder="Phone Number" onFocus={() => {
                  setEmailfocus(false)
                  setPasswordfocus(false)
                  setShowpassword(false)
                  setNamefocus(false)
                  setPhonefocus(true)
                  setCustomError('')
                }}
                  onChangeText={text => handleChangeText('phoneNumber', text)}
                  value={formData.phoneNumber}
                />
              </View>

              {/* password start */}
              <View style={styles.inputout}>
                <MaterialCommunityIcons name="lock-outline" size={24} color={passwordfocus == true ? colors.text1 : colors.text2} />
                <TextInput style={styles.input} placeholder="Password" onFocus={() => {
                  setEmailfocus(false)
                  setPasswordfocus(true)
                  setShowpassword(false)
                  setNamefocus(false)
                  setPhonefocus(false)
                  setCustomError('')
                }}
                  secureTextEntry={showpassword === false ? true : false}
                  onChangeText={text => handleChangeText('password', text)}
                  value={formData.password}
                />

                <Octicons name={showpassword == false ? "eye-closed" : "eye"} size={24} color="black" onPress={() => setShowpassword(!showpassword)} />
              </View>
              {/*  */}
              <View style={styles.inputout}>
                <MaterialCommunityIcons name="lock-outline" size={24} color={cpasswordfocus == true ? colors.text1 : colors.text2} />
                <TextInput style={styles.input} placeholder="Confirm Password" onFocus={() => {
                  setEmailfocus(false)
                  setPasswordfocus(false)
                  setShowpassword(true)
                  setNamefocus(false)
                  setPhonefocus(false)
                  setCustomError('')

                }}
                  secureTextEntry={showcpassword === false ? true : false}
                  onChangeText={text => handleChangeText('repassword', text)}
                  value={formData.repassword}
                />

                <Octicons name={showcpassword == false ? "eye-closed" : "eye"} size={24} color="black" onPress={() => setShowcpassword(!showcpassword)} />
              </View>
              {/* password end */}

              <Text style={styles.address}>Please enter your address</Text>
              <View style={styles.inputout} >
                <TextInput  placeholder="Enter your Address" onChangeText={(text) => setAddress(text)}
                  onPress={() => {
                    setEmailfocus(false)
                    setPasswordfocus(false)
                    setShowpassword(false)
                    setNamefocus(false)
                    setPhonefocus(false)
                    setCustomError('')
                  }}
                />
              </View>

              <TouchableOpacity style={btn1} onPress={handlePress} >
                <Text style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: "bold" }}>Sign up</Text>
              </TouchableOpacity>

              {/* <Text style={styles.forgot}>Forgot Password?</Text> */}
              <Text style={styles.or}>OR</Text>
              <Text style={styles.gftxt}>Sign In With </Text>

              <View style={styles.gf}>
                <TouchableOpacity>
                  <View style={styles.gficon}>
                    <AntDesign name="google" size={24} color="#EA4335" />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={styles.gficon}>
                    <FontAwesome5 name="facebook-f" size={24} color="#4267B2" /></View>
                </TouchableOpacity>
              </View>
              <View style={hr80}></View>
              <Text >Already have an account?
                <Text style={styles.signup} onPress={() => navigation.navigate('login')}> Sign In</Text>
              </Text>
            </View>
            :
            <View style={styles.container1}>
              <Text style={styles.successmessage}>{successmsg}</Text>
              <TouchableOpacity style={btn1} onPress={() => navigation.navigate('login')}>
                <Text style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: "bold" }}>Sign In</Text>
              </TouchableOpacity>

              <TouchableOpacity style={btn1} onPress={() => setSuccessmsg(null)}>
                <Text style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: "bold" }}>Go Back</Text>
              </TouchableOpacity>
            </View>

          }
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    // marginTop: 8,
  },
  container1: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  head1: {
    fontSize: titles.title1,
    color: colors.text1,
    textAlign: 'center',
    marginVertical: 10,
  },
  inputout: {
    flexDirection: 'row',
    width: '90%',
    marginVertical: 10,
    backgroundColor: colors.col1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    // alignSelf: 'center',
    elevation: 20,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: '80%',
  },
  forgot: {
    color: colors.text2,
    marginTop: 20,
    marginBottom: 10,
  },
  or: {
    color: colors.text1,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  gftxt: {
    color: colors.text2,
    marginBottom: 10,
    fontSize: 25,
  },
  gf: {
    flexDirection: 'row'
  },
  gficon: {
    backgroundColor: 'white',
    width: 50,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 20,
  },
  signup: {
    color: colors.text1,
  },
  address: {
    fontSize: 18,
    color: colors.text2,
    textAlign: 'center',
    marginTop: 20,
  },
  errormsg: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  successmessage: {
    color: 'green',
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },

})

export default SignUpScreen
