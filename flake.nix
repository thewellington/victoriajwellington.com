{
  description = "College portfolio (Jekyll + Ruby)";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          name = "victoria-portfolio";
          buildInputs = with pkgs; [
            ruby
            bundler
            # Fast native gems when needed
            libffi zlib openssl readline
          ];
          shellHook = ''
            export BUNDLE_GEMFILE="$PWD/Gemfile"
            echo "Gems (Bundler): bundle install"
            echo "Jekyll:          bundle exec jekyll serve   or   ./bin/jekyll serve"
          '';
        };
      });
}
