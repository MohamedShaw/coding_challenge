import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

        height: 120,
        margin: 5,
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 10,
        padding: 10,
    },
    title: {
        fontSize: 18,
        lineHeight: 30,
    },
    text_link: {
        fontSize: 14,
        lineHeight: 30,
    },
    imageContainer: {
        width: 115,
        height: 105,
        borderRadius: 10,
    },
    textContainer: { flex: 1, alignSelf: 'stretch', marginHorizontal: 10 },
});
