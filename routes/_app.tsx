import { define } from "../utils.ts";

export default define.page(function App({ Component }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="The Hay Wire is a project in-development to capture the stories of the people of Hay-on-Wye, a small town on the border between England and Wales."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <title>The Hay Wire</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});
