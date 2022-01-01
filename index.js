const log = require("hexo-log")({ debug: false, slient: false });
const fs = require("hexo-fs");
const path = require("path");
const base_dir = path.join(process.cwd(), "source", "_posts");

const fileList = fs
  .listDirSync(base_dir, {
    ignorePattern: /node_modules/,
  })
  .filter((each) => each && /\.md$/.test(each))
  .map((each) => {
    let array = (each + "").split(path.sep);
    return {
      fileNameExt: array.length === 0 ? "" : array[array.length - 1],
      filePath: each,
      articleName: each.replace(/\.md$/, ""),
    };
  });

/**
 * md returns true
 * @param {*} data
 */
function ignore(data) {
  var source = data.source;
  var ext = source.substring(source.lastIndexOf(".")).toLowerCase();
  return ["md"].indexOf(ext) > -1;
}

function action(data) {
  let { content } = data;
  let result = content.match(/\[\[.*?\]\]/g);
  if (result && result.length > 0) {
    result.forEach((linkName) => {
      // {% post_link Ubuntu/ubuntu-enable-root 'Ubuntu Linux上启用root账户' %}
      let [realName, showName] = (linkName + "")
        .replace("[[", "")
        .replace("]]", "")
        .split("|");
      let anchor = null;
      [realName, anchor] = realName.split("#");
      let realNameExt = realName + ".md";
      let file = fileList.find((file) => file.fileNameExt === realNameExt);
      if (file) {
        // If the target article was found. then replace the backlink with 'post_link'
        content = content.replace(
          linkName,
          // `<a href="${file.articleName}${
          //   anchor ? "#" + anchor : ""
          // }" name="${realName}" id="huiqu">${showName || realName}</a>`
          `{% post_link ${file.articleName} '${showName || realName}' %}`
        );
      }
    });
  }
  data.content = content;
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
