[![Deploy this VanJS site to Pages](https://github.com/joe-opensrc/catullus/actions/workflows/vanjs.yml/badge.svg?branch=main-pages)](https://github.com/joe-opensrc/catullus/actions/workflows/vanjs.yml) 

### A Small VanJS Project

Specifically:

  A test of VanJS features including DOM building + state \
  Uses a very simple json-ized version of the Gutenberg text: \
    Catulli Carmina by Gaius Valerius Catullus and Robinson Ellis \
    https://www.gutenberg.org/ebooks/23294 

Reason:

  Because it's a nice little test of the VanJS framework, and also \
  because I wanted to have Catulli Carmina formatted niceley. :)

Not sure about the licence, but if you're the copyright holder (of poetry text) \
and would like this removing, please just open a pull request or send an email.

### Building

requires node v25.0.0, install dev dependencies, and then:

```bash
esbuild --bundle --outfile="public/van.app.js" src/index.js
```

You may need to add the yarn provided esbuild executable to your path, \
which might look something like: 

```bash
export PATH="$( realpath .yarn/unplugged/@esbuild-*/node_modules/@esbuild/linux-x64/bin ):${PATH}"
```

### Running

Any kind of webserver will do as it's "almost-static", i.e., client-side logic.
I've been running nginx as a webserver via docker, but you can easily go:

```bash
cd public/
python -m http.server -b 127.0.0.1 9001
Serving HTTP on 127.0.0.1 port 9001 (http://127.0.0.1:9001/) ...
```

And then point your browser.



