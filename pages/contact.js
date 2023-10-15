import Head from "next/head";

export default function Contact({ data }) {
    return (
        <div>
            <Head>
                <meta name="keywords" content='meta data de la seugna pagina'></meta>
            </Head>
            <h1>Ruta 1</h1>
            <p>{data}</p>
        </div>
    );
}

export async function getServerSideProps() {
    const data = 'Datos de la ruta 1';
    return {
        props: { data },
    };
}