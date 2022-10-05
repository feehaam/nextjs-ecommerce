import Document, {Html, NextScript, Main, Head} from "next/document";

export default class MyDocument extends Document{
    render(){
        return (
            <Html>
                <Head>
                    <meta charset="UTF-8" />
                    <meta name="description" content="Project #2: React and Next.js ecommercial website." />
                    <meta name="programmer" content="Sz Yr Feeham" />
                </Head>
                <body>
                    <Main />
                </body>
                <NextScript />
            </Html>
        )
    }
}