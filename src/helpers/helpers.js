import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
export const sharePoster = imageSource => {
   FileSystem.downloadAsync(imageSource, FileSystem.documentDirectory + '.jpeg')
      .then(({ uri }) => {
         Sharing.shareAsync(uri);
      })
      .catch(error => {
         console.error(error);
      });
};
