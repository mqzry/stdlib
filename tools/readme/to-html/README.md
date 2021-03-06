# Convert

> Convert a package README to HTML.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var convert = require( '@stdlib/tools/readme/to-html' );
```

#### convert( filepath, \[options,] clbk )

Converts a package Markdown README file to HTML.

```javascript
var file = '/foo/bar/README.md';

convert( file, clbk );

function clbk( error, html ) {
    if ( error ) {
        throw error;
    }
    console.log( html );
}
```

The function accepts the following `options`:

-   **out**: output file path.
-   **fragment**: `boolean` indicating whether to output an HTML fragment. If `true`, all other options beside `out` are ignored.  Default: `false`.
-   **tests**: tests URL.
-   **benchmarks**: benchmarks URL.
-   **source**: source URL.
-   **title**: HTML title.
-   **head**: content to insert into HTML head.
-   **prepend**: content to prepend to HTML body (after navigation).
-   **append**: content to append to HTML body.

To specify an output file path, set the `out` option.

```javascript
var file = '/foo/bar/README.md';

var opts = {
    'out': '/foo/bar/test.html'
};

convert( file, opts, clbk );

function clbk( error ) {
    if ( error ) {
        throw error;
    }
}
```

To generate **only** an HTML fragment (i.e., equivalent of directly converting a Markdown file to HTML), set the `fragment` option to `true`.

```javascript
var file = '/foo/bar/README.md';

var opts = {
    'fragment': true
};

convert( file, opts, clbk );

function clbk( error, html ) {
    if ( error ) {
        throw error;
    }
    console.log( html );
}
```

To understand how other `options` affect HTML output, see the HTML template in `./static`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
var resolve = require( 'path' ).resolve;
var convert = require( '@stdlib/tools/readme/to-html' );

var fpath = resolve( __dirname, '..', 'README.md' );
var opts = {
    'title': 'Beep',
    'source': 'https://github.com/stdlib-js/stdlib/develop/tools/readme/to-html/lib/index.js',
    'append': '<script  type="text/javascript">console.log("Beep!");</script>'
};

convert( fpath, opts, onFinish );

function onFinish( error, html ) {
    if ( error ) {
        throw error;
    }
    console.log( html );
}
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: readme-to-html [options] file

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --fragment            Output an HTML fragment.
         --tests url           Tests URL.
         --benchmarks url      Benchmarks URL.
         --source url          Source URL.
         --title title         HTML title.
         --head html           Content to insert into HTML head.
         --prepend html        Content to prepend to HTML body.
         --append html         Content to append to HTML body.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If provided the `--fragment` command-line option, all other command-line options affecting HTML output are **ignored**.

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ readme-to-html ./README.md
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
