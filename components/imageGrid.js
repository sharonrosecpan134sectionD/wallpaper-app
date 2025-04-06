import React from 'react'
import { MasonryFlashList } from "@shopify/flash-list";
import { StyleSheet, Text, View } from 'react-native'
import ImageCard from './imageCard';
import { getColumnCount, wp } from '../helpers/common';

const ImageGrid = ({images}) => {

    const columns = getColumnCount();
    // console.log("ImageGrid images:", images);
    
    return (
      <View style = {styles.container}>
        
        <MasonryFlashList
            data={images}
            numColumns={2}
            initialNumToRender= {10}
            contentContainerStyle={styles.listContainerStyle}
            renderItem={({ item, index, columns }) => <ImageCard item={item} columns={columns} index={index}/>}
            estimatedItemSize={200}
        />
      </View>
    )

  
}

const styles = StyleSheet.create({
    container: {
        minHeight: 3, 
        width: wp(100),
    },
    listContainerStyle: {
        paddingHorizontal: wp(4)
    }

})

export default ImageGrid
