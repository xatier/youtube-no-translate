# 🚫 YouTube no translate 🚫

Chrome extension for recovering original video titles and descriptions.

## Installation

1. Clone the repo to wherever-you-like
2. Navigate to `chrome://extensions` on Chromium.
3. Load unpacked

## Technical details

- replace the video title with `<meta name="title" content="real title">`.
- replace the video description with `ytplayer.config` from page's JS code.

## Development

- Use `prettier --tab-width 4 -w *.{js,json}` to format files.
