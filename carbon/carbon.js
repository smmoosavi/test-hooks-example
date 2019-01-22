const shell = require('shelljs');

function carbonFile(file) {
  const code = `carbon/codes/${file}`;
  const img = `carbon/pics/${file}`;
  const cmd = `yarn carbon-now ${code} -t ${img} -h --config carbon/local-config.json -p simple`;

  shell.exec(cmd);
}

const name = process.argv[2];
if (name === undefined) {
  console.log('carbon [file-name]/--all');
} else if (name === '--all') {
  shell.ls('carbon/codes').forEach(file => {
    carbonFile(file);
  });
} else {
  carbonFile(name);
}
