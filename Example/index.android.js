/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var PushNotification = require('react-native-vunun-notification');



class Example extends Component {

    componentDidMount() {
        PushNotification.configure({

            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function (token) {
                console.log('TOKEN:', token);
            },

            // (required) Called when a remote or local notification is opened or received
            onNotification: function (notification) {
                console.log('NOTIFICATION:', notification);
                alert("NOTIFICATION");
            },

            // ANDROID ONLY: (optional) GCM Sender ID.
            senderID: "YOUR GCM SENDER ID",

            // IOS ONLY (optional): default: all - Permissions to register.
            permissions: {
                alert: true,
                badge: true,
                sound: true
            },

            // Should the initial notification be popped automatically
            // default: true
            popInitialNotification: true,

            /**
             * IOS ONLY: (optional) default: true
             * - Specified if permissions will requested or not,
             * - if not, you must call PushNotificationsHandler.requestPermissions() later
             */
            requestPermissions: true,
        });


        setTimeout(() => {
            PushNotification.localNotification({
                id: 0,
                title: "My Notification Title",
                ticker: "My Notification Ticker",
                autoCancel: true,
                largeIcon: "ic_launcher",
                smallIcon: "ic_notification",
                bigText: "My big text that will be shown when notification is expanded",
                subText: "This is a subText",
                number: 10,
                color: "red",
                message: "My Notification Message"
        });

            PushNotification.setApplicationIconBadgeNumber(10);
            PushNotification.getApplicationIconBadgeNumber((number)=>{alert(number)});

        }, 2000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('Example', () => Example);
