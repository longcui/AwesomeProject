/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * test
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
    Image,
  View
} from 'react-native';


const FBSDK = require('react-native-fbsdk');
const {
    LoginButton,
    AccessToken,
    ShareDialog,
} = FBSDK;

var Login = React.createClass({
    render: function() {
        return (
            <View>
                <LoginButton
                    publishPermissions={["publish_actions"]}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                alert("login is cancelled.");
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        alert(data.accessToken.toString())
                                    }
                                )
                            }
                        }
                    }
                    onLogoutFinished={() => alert("logout.")}/>
            </View>
        );
    }
});

// Build up a shareable link.
const shareLinkContent = {
    contentType: 'link',
    contentUrl: "https://facebook.com",
    contentDescription: 'Wow, check out this great site!',
};

// ...
//
// // Share the link using the share dialog.
// shareLinkWithShareDialog() {
//     var tmp = this;
//     ShareDialog.canShow(this.state.shareLinkContent).then(
//         function(canShow) {
//             if (canShow) {
//                 return ShareDialog.show(tmp.state.shareLinkContent);
//             }
//         }
//     ).then(
//         function(result) {
//             if (result.isCancelled) {
//                 alert('Share cancelled');
//             } else {
//                 alert('Share success with postId: '
//                     + result.postId);
//             }
//         },
//         function(error) {
//             alert('Share fail with error: ' + error);
//         }
//     );
// }

AppRegistry.registerComponent('AwesomeProject', () => Login);
