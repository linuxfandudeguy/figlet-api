# Figlet API

## Overview

The Figlet API allows you to generate ASCII art from text using different fonts. You can specify the font and the text you want to convert into ASCII art.

## API Endpoints

### Generate ASCII Art

- **URL**: `https://figletapi.vercel.app/`
- **Path**: `/api/figlet/:font`
- **Method**: GET
- **URL Parameters**:
  - `font` (path parameter): The font used for ASCII art generation.
- **Query Parameters**:
  - `text` (required): The text to convert into ASCII art.
- **Success Response**:
  - **Code**: 200
  - **Content**: ASCII art as plain text.
- **Error Responses**:
  - **Code**: 400
    - **Content**: Error: Query parameter "text" is required.
  - **Code**: 500
    - **Content**: Error generating ASCII art.

### List Available Fonts

- **Path**: `/api/fonts`
- **Method**: GET
- **Success Response**:
  - **Code**: 200
  - **Content**: A list of available fonts.

## Examples

To generate ASCII art, use a `curl` command like this:

`curl "https://figletapi.vercel.app/api/figlet/Slant?text=Hello%20World"`

To list available fonts, use:

`curl "https://figletapi.vercel.app/api/fonts"`

## Development

To run the API locally:

1. Clone the repository:

   ```git clone https://github.com/linuxfandudeguy/figlet-api.git```

2. Change to the project directory:

   ```cd figlet-api```

3. Install dependencies:

   ```npm install```

4. Start the server:

   ```npm start```


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
