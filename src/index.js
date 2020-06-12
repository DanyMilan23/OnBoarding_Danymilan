import React from 'react';
import Onboarding from './Views/Onboarding';

const index = ({data,funciondone}) => {
    return (
        <>
            <Onboarding data={data} done={funciondone} />
        </>
    );
}

export default index;