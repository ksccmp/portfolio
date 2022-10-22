import React from 'react';

import { GetServerSideProps } from 'next';

interface Error {
    statusCode: number;
}

const Error: React.FC<Error> = ({ statusCode }) => {
    return (
        <div>
            에러 발생 시 나오는 페이지 <br /> {statusCode}
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
    const statusCode = res.statusCode;

    return {
        props: {
            statusCode,
        },
    };
};

export default Error;
