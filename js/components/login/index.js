import React, { Component } from "react";
import {Image, TouchableOpacity, AsyncStorage} from "react-native";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux'
import {
  Container,
  Content,
  Item,
  Input,
  Button,
    Form,
  View,
  Text
} from "native-base";
import * as authActions from "../../actions/auth";
import {getStorage, setStorage} from "../../actions/customActions"
import styles from "./styles";
import SplashScreen from "react-native-smart-splash-screen";

const background = require("../../../images/shadow.png");

class Login extends Component {
  static propTypes = {
      // setUser: React.PropTypes.func
  };
  constructor(props) {
    super(props);
  }

    handleClick = () => {
        this.props.loginWithEmailPassword('ajay.dutta94@gmail.com', '1234567890')
    };

    componentWillMount() {
        getStorage('jwt_token').then((value) => {
            if (value) {
                this.props.navigation.navigate('Home')
            }
        })
    }

    componentDidMount() {
        SplashScreen.close({
            animationType: SplashScreen.animationType.scale,
            duration: 850,
            delay: 500,
        });
    }

  render() {
      if (this.props.jwt_token) {
          setStorage('jwt_token', this.props.jwt_token).then((value) => {
              this.props.navigation.navigate('Home')
          })
      }
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            <Image source={background} style={styles.shadow}>
              <View style={styles.bg}>
                  <Form>
                      <Item>
                          <Input placeholder="Username"/>
                      </Item>
                      <Item last>
                          <Input placeholder="Password"/>
                      </Item>
                      <Button block onPress={this.handleClick}>
                          <Text>Sign In</Text>
                      </Button>

                  </Form>
              </View>
            </Image>
          </Content>
        </View>
      </Container>
    );
  }
}

function mapStateToProps(state) {
    return {
        jwt_token: state.auth.jwt_token
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({...authActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
