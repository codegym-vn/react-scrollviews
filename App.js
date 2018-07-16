import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, ScrollView
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            names: [
                {'name': 'Tuấn Anh', 'id': 1},
                {'name': 'Hoàng Linh', 'id': 2},
                {'name': 'Khánh Linh', 'id': 3},
                {'name': 'Trang Phạm', 'id': 4},
                {'name': 'Lưu Tuyết', 'id': 5},
                {'name': 'Tuấn Hùng', 'id': 6},
                {'name': 'Hữu Dũng', 'id': 7},
                {'name': 'Tiến Dũng', 'id': 8},
                {'name': 'Phan Vũ', 'id': 9},
                {'name': 'Phúc Hoàn', 'id': 10},
                {'name': 'Bảo Trâm', 'id': 11},
                {'name': 'Hồng Nhung', 'id': 12}
            ]
        }
    }

    render() {
        return (
            <View>
                <ScrollView>
                    {
                        this.state.names.map((name, index) => (
                            <View key={name.id} style = {styles.item}>
                                <Text>{name.name}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
});
