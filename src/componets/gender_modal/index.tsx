import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

const GenderModal = ({ visible, onClose, onSelectDate }) => {
    const handleGenderSelect = (text: string) => {
        onSelectDate(text);
        onClose();
    };

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                    <Text style={{ fontSize: 20, marginBottom: 10 }}>Select a Date</Text>
                    <TouchableOpacity onPress={() => handleGenderSelect('Male')} style={{ marginBottom: 10 }}>
                        <Text style={{ fontSize: 18 }}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleGenderSelect('Female')} style={{ marginBottom: 10 }}>
                        <Text style={{ fontSize: 18 }}>Female</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleGenderSelect('others')}>
                        <Text style={{ fontSize: 18 }}>Other</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClose} style={{ marginTop: 20 }}>
                        <Text style={{ color: 'blue', fontSize: 18 }}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default GenderModal;
