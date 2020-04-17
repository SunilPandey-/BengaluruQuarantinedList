import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity,TextInput } from 'react-native';
import getData from '../api/mockBengaluru.json';

let navigation;
let colors = ["#994F14",
    "#EB9CA8",
    "#7C878E",
    "#00a3e0",
    "#4CC1A1"];

    const SearchButton = ({searchKnowledge,searchText}) =>(
        <View style={[style.searchView]}>
        <TextInput
          placeholder={'Search'}
          style={style.textInput}
          placeholderTextColor={'rgb(104, 104, 109)'}
          onChangeText={ value => searchKnowledge(value) }
          autoCapitalize={'none'}
          autoCorrect={false}
          value={searchText}
        />
        {/* <Icon name="ios-search" style={style.sortingImage} size={30}/> */}
      </View>
      )
class Home extends Component {
    constructor(props) {
        super(props);
        navigation = props.navigation;
        this.state = {
            data: [],
            searchText:''
        };

    }

    getQuarantinedData() {
        return getData;
    }
    componentDidMount() {
        let data1 = this.getQuarantinedData();
        data1['Sheet1'].sort(function (a, b) {
            if (a.StreetVillage < b.StreetVillage) { return -1; }
            if (a.StreetVillage > b.StreetVillage) { return 1; }
            return 0;
        })
        this.setState({ data: data1['Sheet1'],searchedData: data1['Sheet1'] }, () => {
            // console.log('val', this.state.data)
        });
    }
    onSelect(index, item) {

        navigation.navigate(
            {
                routeName: 'QuarantineDetails',
                params: {
                    data: item,
                }
            })

    }
    renderItem = (item, index, ) => {
        return (
            <View style={[style.itemContainer, { backgroundColor: colors[index % colors.length] }]}>
                <TouchableOpacity onPress={() => this.onSelect(index, item)} activeOpacity={1}>
                    <View style={style.item}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={[{ marginBottom: 3, marginRight: 10 }]}>{item.StreetVillage}</Text>
                        </View>
                    </View>
                </TouchableOpacity>


            </View>
        )
    }
    searchKnowledge = (value, event) => {
        let filterObject;
        let filterObject1;
        const searchArrayT = this.state.data;
        this.setState({ searchText: value });
        if (value.length > 1 && value !== '') {
          filterObject = searchArrayT.filter((obj) => {
            return (
                obj.StreetVillage && obj.StreetVillage.toLowerCase().includes(value)
            );
          });
        }else{
            filterObject1 = this.getQuarantinedData();
            filterObject  = filterObject1['Sheet1'].sort(function (a, b) {
            if (a.StreetVillage < b.StreetVillage) { return -1; }
            if (a.StreetVillage > b.StreetVillage) { return 1; }
            return 0;
        })
        }
        this.setState({ searchedData: filterObject });
      };
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'rgb(180, 250, 255)' }}>

                <Text style={{
                    flex: 0.1,
                    marginLeft: '8%',
                    fontWeight: 'bold',
                    top: '8%',
                    fontSize: 18,
                    color: 'rgb(2, 81, 110)'
                    // width: 200,
                }}>
                    Bengaluru Quarantined People List
                    </Text>
                <Text style={{
                    flex: 0.1,
                    marginLeft: '10%',
                    // fontWeight: 'bold',
                    top: '2%',
                    // fontSize: 18,
                    color: 'rgb(2, 81, 110)'
                    // width: 200,
                }}>
                    (Scroll to View More.Click to view Details)
                    </Text>
                    <SearchButton searchKnowledge={this.searchKnowledge} searchText={this.state.searchText}/>
                <View style={{ flex: 0.8 }}>
                    <FlatList
                        data={this.state.searchedData}
                        extraData={[this.state.data,]}
                        keyExtractor={(item, index) => index}
                        renderItem={(item, index) => this.renderItem(item.item, item.index)}
                        scrollEnabled={true}
                    />
                </View>
            </View>
        );
    }
}

const style = {
    paymentDue: {
        flex: 0.4,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput:{
        height: 46,
        borderColor: '#C6C5C5',
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: 'white',
        width:200,
        padding: 10,
        // ...FontFamily.openRegular,
        // fontSize: FontSize.xsmall,
        // color: Colors.tomatoGreyFont,
      },
      sortingImage: {
        width: 25, 
        height: 25, 
        marginLeft: 150,
        marginTop: -35,
        fontSize: 25,
        textAlign: 'center',
        color:'rgb(142, 142, 147)'
      },
    searchView: {
        flex: 0.1,
        alignItems: 'center',
      },
    howWouldULike: {
        flex: 0.2,
        margin: 20,
        marginTop: 10,
    },
    paymentExpander: {
        flex: 0.2,
        margin: 20,
        marginTop: 10,
        border: 2,
        borderColor: 'rgb(255,255,255)'
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: 1,
    },
    itemContainer: {
        // backgroundColor: 'rgba(0,0,0,0.4)',
        padding: 20,
        margin: 20,
        border: 1,
        borderColor: 'transparent'

    },

}

export default Home;
