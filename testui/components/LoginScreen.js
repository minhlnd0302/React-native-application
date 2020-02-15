import React, { Component } from 'react'
import { View,Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import InputTextField from './InputTextField'

export default class LoginScreen extends Component {
    render() {
        return (
            <ScrollView style={styless.container} >
                <View>
                    <View style={{marginTop:60,alignItems:'center',justifyContent:'center'}}>
                        <Image source={require('../Images/logoMTP.jpg')}
                                style={{width:100,height:100}}
                        ></Image>
                        <Text style={[styless.text,{fontWeight:'800',fontSize:30,margin:10,fontStyle:'italic'}]}>-- MTP --</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:40,justifyContent:'center'}} >
                        <TouchableOpacity>
                            <View style={styless.socialButton} >
                                <Image source={require('../Images/logoFacebook.png')}
                                        style={styless.socialLogo}
                                ></Image>
                                <Text style={styless.text} >Facebook</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styless.socialButton} >
                                <Image source={require('../Images/logoGoogle.png')}
                                        style={styless.socialLogo}
                                ></Image>
                                <Text style={styless.text}>Google</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                   
                    <Text style={[styless.text,{color:'#ABB4DB', fontSize:15, textAlign:'center', marginVertical:20}]} >or</Text>

                    <InputTextField title="Email" ></InputTextField>
                    <InputTextField 
                        style={{marginTop:32 }} 
                        title="PassWord" 
                        isSecure={true}>

                    </InputTextField>


                    <Text style={[styless.text,styless.link,{textAlign:'right'}]} >Forgot PassWord</Text>

                    <TouchableOpacity style={styless.submitContainer} >
                        <Text style={[styless.text,{color:'#fff',fontWeight:'600',fontSize:16}]} >Login</Text>
                    </TouchableOpacity>
                    
                    <Text style={[styless.text,{fontSize:14, color:'ABB4BD', textAlign:'center', marginTop:24}]} >
                        Don't have an account? <Text style={[styless.text,styless.link]} >Register Now</Text>
                    </Text>
                     
                </View>
            </ScrollView>
            
        )
    }
}

const styless = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingHorizontal:30
    },
    text:{
        fontFamily:'Avenir Next',
        color:'#1D2029'
    },
    socialButton:{
        flexDirection:'row',
        marginHorizontal:12,
        paddingVertical:12,
        paddingHorizontal:30,
        borderWidth:StyleSheet.hairlineWidth,    // Đóng khung
        borderColor :'rgba(171,180,189,0.65)',
        borderRadius:4,
        backgroundColor:'#fff',
        //shadowColor:'rgba(171,180,189,0.35',
        shadowOffset:{width:0,height:10},
        shadowOpacity:1,
        shadowRadius:20,
        elevation:5,
    },
    socialLogo:{
        width:16,
        height:16,
        marginRight:8
    },
    link:{
        //color:'#FF1654',
        color:'darkgreen',
        fontSize:14,
        fontWeight:'500'
    },
    submitContainer:{
        //backgroundColor:'#FF1654',
        backgroundColor:'darkcyan',
        fontSize:16,
        borderRadius:4,
        paddingVertical:12,
        marginTop:32,
        justifyContent:'center',
        alignItems:'center',
        //shadowOffset:{width:0,height:9},
        //shadowOpacity:1,
        shadowRadius:20,

    }
})

