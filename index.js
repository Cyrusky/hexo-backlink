const log = require("hexo-log")({ debug: false, slient: false });
const fs = require("hexo-fs");

const base_dir = process.cwd();

const file_list = fs
  .listDirSync(base_dir, {
    ignorePattern: /node_modules/,
  })
  .filter((each) => each && /\.md$/.test(each));
console.log([...file_list]);
console.log(file_list.map((each) => each.split(/\\/)));
/**
 * md文件返回 true
 * @param {*} data
 */
function ignore(data) {
  var source = data.source;
  var ext = source.substring(source.lastIndexOf(".")).toLowerCase();
  return ["md"].indexOf(ext) > -1;
}

function action(data) {
  const { content } = data;
  let result = /\[\[.*?\]\]/.exec(content);
  if (result) {
    log.info(data.source);
    log.info(JSON.stringify(result, " ", 2));
  }
  return data;
}

hexo.extend.filter.register(
  "before_post_render",
  (data) => {
    debugger;
    if (!ignore(data)) {
      action(data);
    }
  },
  0
);
