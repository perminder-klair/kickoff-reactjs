import React from 'react';
import Helmet from 'react-helmet';

import { Wrapper } from '../../elements';
import ContactForm from '../../forms/ContactForm';

export default function () {
    return (
        <Wrapper>
            <Helmet title="Contact us" />
            <h3 className="ui top attached header">
                Contact us
            </h3>
            <div className="ui attached segment">
                <ContactForm onSubmit={values => console.log(values)} />
            </div>
        </Wrapper>
    );
}
