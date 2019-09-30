import * as React from 'react';
import {Image, View} from 'react-native';

type Props = {
    style: object,
    source: string,
};

export default function TreeLogo(props: Props) {
    const {style} = props;
    return (
        <View>
            <Image
                style={[style]}
                source={require('../../images/treecount.png')}
            />
        </View>
    );
}
