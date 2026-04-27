# Victoria J. Wellington — portfolio (Jekyll)

This site is built with **Jekyll** and **Ruby**. Gem dependencies are managed with **Bundler** (see `Gemfile` and `Gemfile.lock`).

## Prerequisites

- [Nix](https://nixos.org/) with flakes enabled (this repo includes `flake.nix` and `flake.lock`).
- From the project directory, use the dev shell so you get a current Ruby and Bundler that match the lockfile.

## Start the local site (development server)

```bash
cd /path/to/victoriajwellington.com
nix develop
bundle install
bundle exec jekyll serve
```

Or use the wrapper (it always runs `bundle exec`):

```bash
./bin/jekyll serve
```

Then open the URL Jekyll prints (default is **http://127.0.0.1:4000**).

If port **4000** is already in use, pass another port (for example **4001** or anything free on your machine):

```bash
bundle exec jekyll serve --port 4001
```

```bash
./bin/jekyll serve --port 4001
```

You can combine with `--host` as needed, e.g. `bundle exec jekyll serve --port 4001 --host 0.0.0.0`. Always use the host and port shown in the terminal output.

To listen on all interfaces (e.g. another device on the LAN):

```bash
bundle exec jekyll serve --host 0.0.0.0
```

## One-time build (static output)

```bash
nix develop
bundle install
bundle exec jekyll build
```

The generated site is written to `_site/`.

## After pulling changes

If `Gemfile` or `Gemfile.lock` changed, run `bundle install` again before `jekyll serve` or `jekyll build`.
