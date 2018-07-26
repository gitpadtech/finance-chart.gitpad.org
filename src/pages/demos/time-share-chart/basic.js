import React from 'react';
import DefaultLayout from '../../../components/layouts/DefaultLayout';
import MarkdownDocs from '../../../components/MarkdownDocs';
import doc from '../../../docs/pages/demo/time-share-chart/time-share-chart.md';
import BasicComponent from '../../../docs/pages/demo/time-share-chart/basic';

export default (props) => (
  <DefaultLayout>
    <MarkdownDocs
      markdown={doc}
      demos={{
        'pages/demo/time-share-chart/basic.js': {
          js: BasicComponent,
          raw: preval`
  module.exports = require('fs')
    .readFileSync(require.resolve('../../../docs/pages/demo/time-share-chart/basic.js'), 'utf8')
        `}
      }}
      {...props}
    />
  </DefaultLayout>
);
