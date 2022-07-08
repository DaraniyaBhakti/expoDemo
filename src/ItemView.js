import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const ItemView = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.leftView}></View>
                <View style={styles.rightView}>

                    <View style={styles.header}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.subName}>Science & Technology</Text>
                            <Text style={styles.std}>(Class 10)</Text>
                        </View>
                        <View>
                            <FeatherIcon name='info' size={22} color='#f7627b' style={{ alignItems: 'center' }} />
                        </View>
                    </View>


                    <Text style={styles.unit}>Unit-1 First Short Story Meeting</Text>
                    <View style={styles.scheduleView}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FeatherIcon name='video' size={22} color='black' />
                            <Text style={styles.scheduleText}>Live Class</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FeatherIcon name='clock' size={22} color='black' />
                            <Text style={styles.scheduleText}>9-10 Am</Text>
                        </View>

                        <TouchableOpacity>
                            <Text style={styles.joinBtn}>Join Now</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </View>
    )
}
export default ItemView;
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#f7627b',
        marginHorizontal: '3%',
        borderRadius: 5,
        backgroundColor: '#fdeae4',
        padding: '3%',
        marginVertical: 10
    },
    leftView: {
        width: 5,
        height: '80%',
        backgroundColor: '#f7627b',
        marginHorizontal: '2%',
        alignSelf: 'center',
        borderRadius: 2
    },
    rightView: {
        marginHorizontal: '2%',
        flex: 1,

    },
    header: {

        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        justifyContent: 'space-between'
    },
    subName: {
        fontSize: 18,
        fontWeight: '600'
    },
    std: {
        paddingHorizontal: '2%',
        fontSize: 16,
        fontWeight: '500'
    },
    unit: {
        fontSize: 16,
        fontWeight: '500',
        paddingVertical: 5
    },
    scheduleView: {
        flexDirection: 'row',
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    scheduleText: {
        fontSize: 16,
        fontWeight: '500',
        paddingHorizontal: 6
    },
    joinBtn: {
        overflow: 'hidden',
        backgroundColor: '#f7627b',
        color: 'white',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 12
    }


})