import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

const CalendarModal = ({ visible, onClose, onSelectDate }) => {
    const handleDateSelect = (date: string) => {
        onSelectDate(date);
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
                    <TouchableOpacity onPress={() => handleDateSelect('2024-05-01')} style={{ marginBottom: 10 }}>
                        <Text style={{ fontSize: 18 }}>May 1, 2024</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDateSelect('2024-05-02')} style={{ marginBottom: 10 }}>
                        <Text style={{ fontSize: 18 }}>May 2, 2024</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDateSelect('2024-05-03')}>
                        <Text style={{ fontSize: 18 }}>May 3, 2024</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClose} style={{ marginTop: 20 }}>
                        <Text style={{ color: 'blue', fontSize: 18 }}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default CalendarModal;
