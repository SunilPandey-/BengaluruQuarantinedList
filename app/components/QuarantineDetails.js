import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

let navigation;

class QuarantineDetails extends Component {
    constructor(props) {
        super(props);
        navigation = props.navigation;
        this.state = {
            // data: [],
            data: navigation.getParam('data'),
        };

    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'rgb(180, 250, 255)' }}>
                    <Text style={{flex: 0.1, marginTop: '8%',fontWeight: 'bold', marginLeft: '40%', marginBottom: 0}}>{'Detail'}</Text>
            <View style={{flex: 0.9}}>
                <View style={[{ flexDirection: 'column' }]}>
                    <View style={[styles.rowFlex,{margin: '5%', marginTop: 1}]}>
                        <Text style={styles.title}>{'Street: '}</Text>
                        <Text style={styles.subTitle}>{this.state.data.StreetVillage}</Text>
                    </View>
                    <View style={[styles.rowFlex,{margin: '5%'}]}>
                        <Text style={styles.title}>{'HouseNo: '}</Text>
                        <Text style={styles.subTitle}>{this.state.data.HouseNoNum}</Text>
                    </View>
                    <View style={[styles.rowFlex,{margin: '5%'}]}>
                        <Text style={styles.title}>{'Quarantined End Date: '}</Text>
                        <Text style={styles.subTitle}>{this.state.data.DateuntilQuarantinedathome}</Text>
                    </View>
                    <View style={[styles.rowFlex,{margin: '5%'}]}>
                        <Text style={styles.title}>{'Country Visited: '}</Text>
                        <Text style={styles.subTitle}>{this.state.data.PortofOriginofjourney}</Text>
                    </View>
                    <View style={[styles.rowFlex,{margin: '5%'}]}>
                        <Text style={styles.title}>{'Tehsil: '}</Text>
                        <Text style={styles.subTitle}>{this.state.data.Tehsil}</Text>
                    </View>
                </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({


    subTitle: {
        color: 'gray',
        // fontSize: 15,
    },
    title: {
        //   ...fontFamily.semiBold,
        color: 'rgb(6, 59, 94)',
        fontSize: 15,
        fontWeight: 'bold',
        paddingVertical: 5,
        // marginBottom: 3,
    },
    borderTop: {
        borderTopWidth: 1,
        borderTopColor: 'rgba(236,237,237,.8)'
    },
    rowFlex: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

});

export default QuarantineDetails;
