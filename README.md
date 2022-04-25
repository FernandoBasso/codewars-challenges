# Codewars Solutions

My code wars solutions in a few different languages.

**NOTE**: The [Gitlab repo](https://gitlab.com/programming-studies/codewars-challenges) is the main, official one. The [Github repo](https://github.com/FernandoBasso/codewars-challenges) is just a mirror. For issues, questions or anything else, use the [Gitlab repo](https://gitlab.com/programming-studies/codewars-challenges).

## TypeScript and Deno

I use [Deno](https://deno.land) to test and run the TypeScript solutions.

Unless otherwise noted, assume all deno-related commands

### Running Tests With Deno

Change to the root directory of where these Codewars solutions have been cloned, e.g:

```text
$ cd ./typescript/
$ deno test --import-map ./import-map.json --unstable ./
$ deno test --import-map ./import-map.json ./lib/
$ deno test --import-map ./import-map.json ./7kyu/ ./6kyu/
```

The run all tests, or specific tests:

```text
$ deno test --unstable 6kyu
$ deno test --unstable 6kyu/friend-foe
$ deno test --unstable 6kyu/friend-foe/friend-foe.spec
```

Check extra options with `deno test  --help | less`.

### Types

Deno does type-checking by default for a few commands, like `run` and `test`. There is also a `check` command. Tests do type-checking by default, which means if you run tests, you are also type-checking your code. While prototyping and ideas for implementations, sometimes it we may wish to not type-check stuff:

```text
$ deno test \
    --no-check \
    --watch \
    --quiet \
    --import-map ./import-map.json \
    ./7kyu/foo/foo.test.ts
```



### Unstable APIs

We are making use of `"deno.unstable": true` in the project configuration and the use of the `--unstable` command line flag for running the tests because we are sometimes using unstable APIs, like [Nested Testing API](https://deno.com/blog/v1.15#nested-testing-api) from Deno v1.15.

```text
$ sed '' .vim/coc-settings.json
{
  "deno.enable": true,
  "deno.lint": true,
  "deno.unstable": true,
  "deno.importMap": "./import-map.json",
  "tsserver.enable": false
}
```

## JavaScript

TIP: Run `nvm use && npm install` inside the root directory of once.

Run tests for all challenges:

```text
$ npm run test
```

To run the unit tests for a given challenge, run something like this:

```text
$ npm run test path/to/<some-problem>.spec.js
```

To run in watch and verbose mode, add `-- --watch --verbose` to the commands above. Ex:

```text
$ npm run test 7kyu/who-is-online/js/online.spec.js -- --watch --verbose
```

