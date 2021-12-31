const log = require("hexo-log")({ debug: false, slient: false });
const fs = require("hexo-fs");
const path = require("path");
const base_dir = path.join(process.cwd(), "source", "_posts");

const file_list = fs
  .listDirSync(base_dir, {
    ignorePattern: /node_modules/,
  })
  .filter((each) => each && /\.md$/.test(each))
  .map((each) => {
    return {
      fileName: each.split(path.sep).at(-1),
      filePath: each,
    };
  });

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
  console.log(result);
  if (result) {
    log.info(data.source);
    log.info(JSON.stringify(result, " ", 2));
  }
  return data;
}

hexo.extend.filter.register(
  "before_post_render",
  (data) => {
    if (!ignore(data)) {
      action(data);
    }
  },
  0
);
