import React from 'react';
import alertify from 'alertify.js';
import PropTypes from 'prop-types';
import { Controlled as CodeMirror } from 'react-codemirror2';

alertify.logPosition('top right');

const PlistParser = ({ plistXmlString, updatePlistXmlString }) => {
  return (
    <div>
      <CodeMirror
        value={plistXmlString}
        options={{
          mode: 'xml',
          theme: 'material',
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {
          updatePlistXmlString(value);
        }}
        onChange={(editor, data, value) => {}}
      />
    </div>
  );
};
PlistParser.propTypes = {
  plistXmlString: PropTypes.string.isRequired,
  updatePlistXmlString: PropTypes.func.isRequired,
};

export default PlistParser;
