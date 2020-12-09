import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',

        height: 200,
    },
    textContainter: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        alignItems: 'center',

    },
    text: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: 'bold',
        color: "red"

    },
    tagContainer: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        paddingHorizontal: 7,
        justifyContent: 'space-between',
        height: 75,
        marginTop: 10


    },
    circle: {
        paddingHorizontal: 20,
        height: 40,
        borderRadius: 25,
        borderColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,

    }
});
