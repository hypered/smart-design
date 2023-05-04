# Hypered design system playground

This repository is a playground to experiment with a design system for Hypered,
based on the work done by Mono for Smart. There is already the beginning of a
Hypered design system (e.g. at `hypered.design`), mainly based on Tachyons.
Using this repository brings a BEM+ITCSS approach instead.

This repository contains (contained) the design system website hosted at <a
href="https://design.smart.coop/">design.smart.coop</a>. This site describes
how to contribute to the design system from a design and development
perspective. A big part of the site is <a
href="https://design.smart.coop/components/index.html">the
component documentation</a> where you can find copy/pastable HTML and CSS for
common components. The Figma design files can be found on our [Figma community
profile](https://www.figma.com/@smartcoop).

This website uses Bedrock in the background, which is a static site generator
specialized in showing design systems. For instructions, view the README <a
href="https://github.com/usebedrock/bedrock">here</a>.

Bedrock's source code is actually par of the repository. This is something that
was planned to change (see
[#320](https://github.com/usebedrock/bedrock/issues/320).

This repository has the code changes proposed in some PRs to address that
situation:

- https://github.com/usebedrock/bedrock/pull/418
- https://github.com/usebedrock/bedrock/pull/404
- https://github.com/usebedrock/bedrock/pull/399
- https://github.com/usebedrock/bedrock/pull/419

That being said, Bedrock will probably not be a standalone tool (and its code
remains part of the repository).

## Getting started

    git clone git@github.com:hypered/smart-design.git
    git checkout ibm-plex
    cd design
    npm install
    npm start
    core/cli/bedrock

## Using Nix

Just like Docker, Nix is not necessary to develop or build the design system.
The instructions here are provided for your convenience.

The following commands show how to build the design system as a static site in
the `dist/` directory and serve it on port 5000:

```
$ nix-shell -p nodejs-14_x --run 'npm install'
$ nix-shell -p nodejs-14_x --run 'npm run-script build'
$ nix-shell -p busybox --run 'httpd -f -p 5000 -h dist'
```

With the development server, the browser will automatically refresh the current
page whenever its source changes. The development server can be run on port
3000 with the following commands:

```
$ nix-shell -p nodejs-14_x --run 'npm install'
$ nix-shell -p nodejs-14_x --run 'npm start'
```

## Pandoc

The repository contains a Pandoc template and an example Markdown file. The
Markdown can be converted to HTML using something like:

```
pandoc --standalone --template template.html display-test.md > output.html
```

The resulting file should render in the browser exactly as the `c-content`
[example
page](https://design.smart.coop/development/design-tests/display-test.html).


# CodeMirror

There is some experiment with CodeMirror in `editor.mjs`. It's not built using
Bedrock. Currently, it's built and copied into place manually:


```
$ node_modules/.bin/rollup editor.mjs \
  -f iife -o editor.js -p @rollup/plugin-node-resolve
$ cp editor.js content/js/
```
