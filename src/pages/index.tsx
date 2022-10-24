import type {NextPage} from 'next';
import Head from 'next/head';

const Index: NextPage = () => {
    return (
        <div className={"flex flex-col h-screen w-full items-center justify-center"}>
            <Head>
                <title>heaton</title>
                <meta name="description" content="heaton"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <h1 className={"font-bold text-5xl"}>
                heaton
            </h1>
        </div>
    );
}

export default Index;
