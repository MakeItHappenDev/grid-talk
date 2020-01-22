import Document, { Html, Head, Main, NextScript } from 'next/document'
import HTML2React from 'html-to-react'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <Body/>
      </Html>
    )
  }
}

const Body = () => {
  return (
    <Test />
  )
}

class Test extends Main {
  render(){
    const {html} = this.context._documentProps
    const parser = new HTML2React.Parser()
    const Page = parser.parse(html)
    return (
      <body>
        {Page}
        <NextScript/>
      </body>
    )
  }
}

export default MyDocument

