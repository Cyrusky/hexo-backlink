# Hexo-Backlink

![License](https://img.shields.io/badge/license-MIT-yellow)
![Language](https://img.shields.io/badge/language-TypeScript-brightgreen)
![NPM Downloads](https://img.shields.io/npm/dt/hexo-backlink)
![NPM Version](https://img.shields.io/npm/v/hexo-backlink)

![GitHub issue custom search in repo](https://img.shields.io/github/issues-search/Cyrusky/hexo-backlink?query=is%3Aissue%20is%3Aopen&label=Open%20Issue(s))
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-pr/Cyrusky/hexo-backlink?label=Open%20Issue(s))

A plugin to convert backlink in `.md` file to `in-site` link.

## Install

```bash
npm install hexo-backlink
```

## configuration

Add `backlink:true` in `_config.yml`:

Check the settings in Obsidian as follow:

> "Settings" -> "Files & Links" -> "New link format" , setting as "Relative path to file"  
> "Settings" -> "Files & Links" -> "Use [[Wiki links]]" , keeping it ON

## Know-issue

- Can not convert link include `tags`, it will ignore the tags. like:

  ```
  [[DemoMarkdownFile#Demo]] --<result equals>-> [[DemoMarkdownFile]]
  ```

## TODO

- [] Update the documents and make sure you can start from zero.
- [] Change the project to typescript.
- [] Try to do some integritions.
