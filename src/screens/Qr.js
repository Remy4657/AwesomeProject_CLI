import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Alert,
  Button,
  Linking,
} from 'react-native';
import {
  Camera,
  useCameraDevices,
  useCodeScanner,
  getCameraDevice,
} from 'react-native-vision-camera';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

const Qr = props => {
  const [hasPermission, setHasPermission] = useState(true);
  const [isScanning, setIsScanning] = useState(false); // ban đầu không quét
  const [scannerEnabled, setScannerEnabled] = useState(false); // điều khiển khi nào cho phép bật camera
  const devices = useCameraDevices();
  const device = getCameraDevice(devices, 'back');

  useEffect(() => {
    const getPermissions = async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      console.log(cameraPermission);
      setHasPermission(cameraPermission === 'granted');
    };

    getPermissions();
  }, []);
  useFocusEffect(
    useCallback(() => {
      // Mỗi khi vào lại tab QR
      setScannerEnabled(false);
      setIsScanning(false);
    }, []),
  );

  const codeScanner = useCodeScanner({
    codeTypes: ['ean-13', 'qr'],
    onCodeScanned: codes => {
      for (const code of codes) {
        const value = code.value;
        if (!value) return;

        setIsScanning(false); // tạm dừng quét sau khi quét được

        const isUrl = /^https?:\/\/.+/.test(value);

        Alert.alert(isUrl ? 'Scanned URL' : 'Scanned Code', value, [
          isUrl
            ? {
                text: 'Open URL',
                onPress: () => {
                  Linking.openURL(value);
                  setIsScanning(true);
                },
              }
            : {
                text: 'OK',
                onPress: () => setIsScanning(true),
              },
        ]);
      }
    },
  });

  if (device == null) return <Text>Loading camera...</Text>;
  if (!hasPermission) return <Text>No camera permission</Text>;

  return (
    <SafeAreaView style={styles.container}>
      {!scannerEnabled && (
        <Button
          title="Start Scanning"
          onPress={() => {
            setScannerEnabled(true);
            setIsScanning(true);
          }}
        />
      )}

      {scannerEnabled && (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          frameProcessorFps={2}
          codeScanner={isScanning ? codeScanner : undefined}
        />
      )}

      {scannerEnabled && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Point the camera at a code</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Qr;
