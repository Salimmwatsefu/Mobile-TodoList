import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = (props) => {
    return (

        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
            </View>

        <Text style={styles.itemText}>
            {props.text}
        </Text>

        <View style={styles.circular}></View>
        </View>

    )

}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 20,
        alignItems: 'center'
        
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: 'wrap',
      },
    itemText: {
        color: 'black',
        fontSize: 15,
        
        },
    square: {
        width: 24,
        height: 24,
        backgroundColor: 'teal',
        opacity: 0.4,
        borderRadius: 5,
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: 'teal',
        borderWidth: 2,
        borderRadius: 5
    }

})

export default Task
