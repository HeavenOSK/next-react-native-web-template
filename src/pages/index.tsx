import { Text, StyleSheet, View } from 'react-native'
import type { NextPage } from 'next'

const styles = StyleSheet.create({
  body: {
    height: 80,
    width: '100%',
    backgroundColor: 'blue',
  },
})
const Home: NextPage = () => {
  return (
    <View style={styles.body}>
      <Text>text</Text>
    </View>
  )
}

export default Home
