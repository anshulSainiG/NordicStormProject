import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

type BaseButtonProps = {
    width: number;
    height: number;
    backgroundColor: string;
    borderRadius: number;
    label: string;
    buttonDisable?: boolean;
    color: string;
    pressHandler: () => void;
    bottom: number
};

const BaseButton = (props: BaseButtonProps) => {
    const buttonColor = props.buttonDisable ? "gray" : props.backgroundColor;

    return (
        <TouchableOpacity
            style={{
                width: props.width,
                height: props.height,
                backgroundColor: buttonColor,
                borderRadius: props.borderRadius,
                alignItems: "center",
                justifyContent: "center",
                bottom: props.bottom

            }}
            disabled={props.buttonDisable}
            onPress={props.pressHandler}
        >
            <Text style={{ color: props.color, fontSize: 16, fontWeight: "600", fontFamily: "Space Grotesk" }}>
                {props.label}
            </Text>
        </TouchableOpacity>
    );
};

export default BaseButton;
