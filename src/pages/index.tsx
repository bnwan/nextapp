import * as React from 'react';
import glamorous from 'glamorous';

import { Header } from '../components';

const PageWrapper = glamorous.div({
  margin: 30,
  border: '1px dashed silver',
  height: 500
});

interface IHomePageProps {}

export default class extends React.Component<IHomePageProps, {}> {
  render() {
    return (
      <PageWrapper>
        <Header title='Web Docs' />
      </PageWrapper>
    );
  }
}
