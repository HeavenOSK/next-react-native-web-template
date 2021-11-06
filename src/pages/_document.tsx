import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import { AppRegistry } from 'react-native'

// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`

export default class Document extends NextDocument {
  static async getInitialProps({ renderPage }: any) {
    AppRegistry.registerComponent('Main', () => Main)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: react-native-web method
    const { getStyleElement } = AppRegistry.getApplication('Main')
    const page = renderPage()
    const styles = [
      <style
        key="RNNormalizeCSS"
        dangerouslySetInnerHTML={{ __html: normalizeNextElements }}
      />,
      getStyleElement(),
    ]
    return { ...page, styles: React.Children.toArray(styles) }
  }

  render() {
    return (
      <Html style={{ height: '100%' }}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body style={{ height: '100%', overflow: 'hidden' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
