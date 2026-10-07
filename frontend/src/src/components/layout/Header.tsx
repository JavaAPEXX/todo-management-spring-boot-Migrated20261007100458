import React from 'react';
import { Helmet } from 'react-helmet';

const Header: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Todo Management</title>
        <link
          href="webjars/bootstrap/3.3.6"
          rel="stylesheet"
        />
      </Helmet>
    </>
  );
};

export default Header;