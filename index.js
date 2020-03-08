require('malta').checkExec('tsc');
// this is somehow a special case cause jsdoc is meant to be used only as console tool
// then:
// - we cannot test with require
// - we do not need to require, it's (hopefully) installed
// - we need to lauch it as a new process
// 
// var deps = ['jsdoc'];
// deps && deps.length && require('malta2').checkDeps(deps);


// 
// http://usejsdoc.org/

var path = require('path'),
	fs = require('fs'),
	child_process = require('child_process');

function malta_typescript(o, options) {

	const self = this,
		start = new Date(),
        pluginName = path.basename(path.dirname(__filename)),
        oldname = o.name;

    let msg;

	return (solve, reject) => {
		try {
			const ls = child_process.spawn('tsc', [o.name]);
			ls.on('exit', () => {
				o.name = o.name.replace(/\.ts$/, '.js');
				o.content = fs.readFileSync(o.name) + "";
				msg = 'plugin ' + pluginName.white() + ' wrote ' + o.name;
				fs.unlink(oldname, () => {});
				solve(o);
				self.notifyAndUnlock(start, msg);
			});
		} catch (err) {
            reject(`Plugin ${pluginName} compilation error:\n${err}`);
			self.doErr(err, o, pluginName);
		}
	};
}
malta_typescript.ext = 'ts';
module.exports = malta_typescript;