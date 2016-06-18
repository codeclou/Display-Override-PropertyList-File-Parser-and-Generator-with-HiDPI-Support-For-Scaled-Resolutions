const plistConstants = {
  plistXmlHeader: `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">`,
  plistXmlFooter: '</plist>',
  plistXmlString: `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>DisplayProductName</key>
  <string>DELL U2515H</string>
  <key>DisplayProductID</key>
  <integer>53358</integer>
  <key>DisplayVendorID</key>
  <integer>4268</integer>
  <key>scale-resolutions</key>
  <array>
    <data>AAAKAAAABaAAAAABACAAAA==</data>
    <data>AAAFAAAAAtAAAAABACAAAA==</data>
    <data>AAAPAAAACHAAAAABACAAAA==</data>
    <data>AAAHgAAABDgAAAABACAAAA==</data>
    <data>AAAMgAAABwgAAAABACAAAA==</data>
    <data>AAAGQAAAA4QAAAABACAAAA==</data>
    <data>AAAKAgAABaAAAAABACAAAA==</data>
    <data>AAAKrAAABgAAAAABACAAAA==</data>
    <data>AAAFVgAAAwAAAAABACAAAA==</data>
  </array>
</dict>
</plist>`,
  defaultResolutionForAddNew: {
    base64String: 'AAAFAAAAAtAAAAAB',
    decoded: {
      decimalStringSpaced: '1280 720 1',
      hexStringSpaced: '00000500 000002d0 00000001 00200000',
    },
    decimal: {
      width: '1280',
      height: '720',
      hidpi: true,
    },
  },
};

export default plistConstants;
