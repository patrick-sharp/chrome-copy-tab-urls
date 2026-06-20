#! /usr/bin/env sh

rsvg-convert -w 16 -h 16 icon.svg -o icon16.png
rsvg-convert -w 32 -h 32 icon.svg -o icon.png
rsvg-convert -w 48 -h 48 icon.svg -o icon48.png
rsvg-convert -w 128 -h 128 icon.svg -o icon128.png

# generate the icon to be used for the google web store listing
rsvg-convert --width=96 --height=96 --page-width=128 --page-height=128 --top=16 --left=16 icon.svg -o icon_for_store.png
