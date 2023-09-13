# Wait until service worker

## Usage

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My awesome app</title>
    <script src="https://unpkg.com/ezswpage@1"></script>
    <script>
      navigator.serviceWorker.register("sw.js");
    </script>
  </head>
  <body>
    <p>This won't be shown until the service worker controls this page</p>
  </body>
</html>
```

### How it works

```js
function stopEverything() {
  document.close();
  stop();
}
```

☝ That function is called if the service worker isn't ready yet. It completely
stops the HTML parser in its tracks (preventing any content after the `<script>`
tag from being processed).

Any content you put **before** the ezswpage script tag will still execute before
it has a chance to halt the HTML parser. You can use this to do tricks like:

```html
<meta name="color-scheme" content="dark" />
<script>
  navigator.serviceWorker.register("sw.js");
</script>
<script src="https://unpkg.com/ezswpage@1"></script>
```

```html
<!doctype html>
<meta charset="UTF-8" />
<script>
  navigator.serviceWorker.register("sw.js");
</script>
<script src="https://unpkg.com/ezswpage@1"></script>
```

```html
<!doctype html>
<meta charset="UTF-8" />
<p>Some content that will be shown immediately</p>
<script>
  navigator.serviceWorker.register("sw.js");
</script>
<script src="https://unpkg.com/ezswpage@1"></script>

<p>Only shown when the service worker controls the page</p>
```
