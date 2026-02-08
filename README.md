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
