import React from 'react';

import { ContentContainer } from 'components/container';
import Header from 'components/header';
import { MainButtonLink } from 'components/button';

const NotFound: React.FC<{}> = () => (
  <>
    <Header />
    <ContentContainer>
      <h1>The Page you are looking for is not found</h1>
      <MainButtonLink to='/'>Go Home</MainButtonLink>
    </ContentContainer>
  </>
);

export default NotFound;
