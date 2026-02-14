[![Deploy this VanJS site to Pages](https://github.com/joe-opensrc/catullus/actions/workflows/vanjs.yml/badge.svg?branch=main-pages)](https://github.com/joe-opensrc/catullus/actions/workflows/vanjs.yml) 

### A Small VanJS Project

https://joe-opensrc.github.io/catullus

#### Specifically:

  A test of VanJS features including DOM building + state \
  Uses a very simple json-ized version of the Gutenberg text: \
    Catulli Carmina by Gaius Valerius Catullus and Robinson Ellis \
    https://www.gutenberg.org/ebooks/23294 

#### Reason:

  Because it's a nice little test of the VanJS framework, and also \
  because I wanted to have Catulli Carmina formatted niceley. :)

Not sure about the licence, but if you're the copyright holder (of poetry text) \
and would like this removing, please just open a pull request or send an email.

### Pre-Build Environment Setup

```bash
# Create a python virtual env to install nodeenv
python3 -m venv --copies ~/pyvirts/nodeenv
source ~/pyvirts/nodeenv/bin/activate
pip install nodeenv
nodeenv --version

# Use nodeenv to create a virtual environment
# in which to install yarn

nodeenv -n 25.0.0 ~/novirts/vanjs
source ~/novirts/vanjs/bin/activate

# install corepack and use it to install yarn
# (it's package managers all the way down...)
npm install -g corepack
corepack enable yarn
yarn config set nodeLinker node-modules
yarn install
```

### Build

```bash
# finally run esbuild to build the website 
./node_modules/@esbuild/linux-x64/bin/esbuild --bundle --outfile="public/van.app.js" src/index.js
```

If you happen to leave the nodeLinker alone, \
you'll find the esbuild executable in a place similar to:

`.yarn/unplugged/@esbuild-linux-x64-npm-0.27.0-b9b301abea/node_modules/@esbuild/linux-x64/bin/`

So you may need to add that path to the PATH variable \
which might look something like: 

```bash
export PATH="$( realpath .yarn/unplugged/@esbuild-*/node_modules/@esbuild/linux-x64/bin ):${PATH}"
```

### Running the site

Any kind of webserver will do as it's "almost-static", i.e., client-side logic.
I've been running nginx as a webserver via docker, but you can easily go:

```bash
cd public/
python -m http.server -b 127.0.0.1 9001
Serving HTTP on 127.0.0.1 port 9001 (http://127.0.0.1:9001/) ...
```

And then point your browser at that address. \
As you'll have seen, there's also a workflow which pushes to: \
   https://joe-opensrc.github.io/catullus
