import { exposeLib } from 'hel-lib-proxy';

/*
|--------------------------------------------------------------------------
|
| 对应 package.json/name
|
|--------------------------------------------------------------------------
*/
var LIB_NAME = 'comps-react-antd';

var lib = exposeLib(LIB_NAME);
var comps = lib;
var TestExport = lib.TestExport;

export { TestExport, comps, lib as default, lib };
