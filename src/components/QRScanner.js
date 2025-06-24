// // QRScanner.js
// import React, { useEffect, useState } from 'react';
// import { Text, View, StyleSheet, Alert } from 'react-native';
// import { Camera, useCameraDevices } from 'react-native-vision-camera';
// import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';

// export default function QRScanner() {
//   const [hasPermission, setHasPermission] = useState(false);
//   const devices = useCameraDevices();
//   const device = devices.back;

//   const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE]);

//   useEffect(() => {
//     (async () => {
//       const status = await Camera.requestCameraPermission();
//       setHasPermission(status === 'authorized');
//     })();
//   }, []);

//   useEffect(() => {
//     if (barcodes.length > 0) {
//       const qr = barcodes[0];
//       if (qr.rawValue) {
//         Alert.alert('QR Scanned', qr.rawValue);
//         // Có thể điều hướng hoặc xử lý ở đây
//       }
//     }
//   }, [barcodes]);

//   if (device == null || !hasPermission) {
//     return <Text style={styles.text}>Đang tải camera...</Text>;
//   }

//   return (
//     <Camera
//       style={StyleSheet.absoluteFill}
//       device={device}
//       isActive={true}
//       frameProcessor={frameProcessor}
//       frameProcessorFps={5}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   text: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// });
