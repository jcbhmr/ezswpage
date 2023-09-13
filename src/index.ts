function replaceWithBlankPage() {
  document.close();
  document.writeln("<!DOCTYPE html>");
  document.close();
  stop();
}

if (!navigator.serviceWorker) {
  replaceWithBlankPage();
  throw new DOMException(
    "navigator.serviceWorker not available",
    "NotSupportedError"
  );
}

if (navigator.serviceWorker.controller?.state !== "activated") {
  replaceWithBlankPage();
  navigator.serviceWorker.ready.then(() => location.reload());
}
