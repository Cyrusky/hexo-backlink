# Hexo-Backlink

A plugin to convert backlink in `.md` file to `in-site` link.

## Install

```bash
npm install hexo-backlink
```

## configuration

Add `backlink:true` in `_config.yml`:

## Know-issue

- Can not convert link include `tags`, it will ignore the tags. like:
  ```
  [[DemoMarkdownFile#Demo]] --<result equals>-> [[DemoMarkdownFile]]
  ```
