#! /usr/bin/env nix-shell
#! nix-shell -p sass -i bash

# This script is independent of Bedrock. It generates a main.css file from the
# SCSS sources. I guess I could leave out the --precision flag, but this way
# this matches what Bedrock does. There are some differences, but I guess this
# is related to the versions of the tool or library.

# I need some additional scripts so I make sure that Bedrock is not a hard
# requirement to build the design system. (Just in case Bedrock would stop
# evolving or whatever.)

# I guess I also have to generate prototype.css and
# styleguide-customization.css.

# Maybe also the .map file. Maybe also minified versions.

sass --precision 5 content/scss/main.scss > main.css
