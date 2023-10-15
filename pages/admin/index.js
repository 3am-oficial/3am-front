import React from 'react';

const Admin = () => {

    return (
        <div>
            Soy el admin ya loggado
        </div>
    );
};

export default Admin;

export async function getServerSideProps(context) {
    const token = context.req.headers.token;

    if (!token) {
        return {
            redirect: {
                destination: '/admin/login',
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
}
