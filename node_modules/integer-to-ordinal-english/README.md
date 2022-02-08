# Integer to Cardinal Ordinal

English ordinals from any integer

## Install

```
npm install --save integer-to-ordinal-english
```

## Usage

Import the package

```node
const ordinal = require("integer-to-ordinal-english");
```

Pass in either an integer.

```node
ordinal(127521);
// => "One Hundred and Twenty-Seven Thousand, Five Hundred and Twenty-First"
```

Or a cardinal number (like the output from [Integer to Cardinal](https://github.com/number-reference/integer-to-cardinal-english)).

```node
ordinal("One Hundred and Twenty-Seven Thousand, Five Hundred and Twenty-One");
// => "One Hundred and Twenty-Seven Thousand, Five Hundred and Twenty-First"
```

## Limitations

Vocabulary is currently limited to

    999,999,999,999,999

That is, the library does not currently support one quadrillion or higher.

Higher numbers are easily supported.  If you need it, please don't be shy and
open up a pull request!


## Motivation & Related Work

[Number Reference](http://www.number-reference.com) is an online encyclopedia
of calculations that relies heavily on this and related packages.

## License

Nice and Brief: [BSD-3-Clause](./LICENSE)
