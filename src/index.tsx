// @jsxImportSource jsx-dom

function replaceWithBlankPage() {
  document.close();
  document.writeln("<!DOCTYPE html>");
  document.close();
  stop();
}

async function innerMain() {}

function showLoader() {
  document.close();
  stop();

  document.body.append(<Loader />);
}

function showError(error: any) {
  document.close();
  stop();

  const dialog = (
    <dialog>
      <form method="dialog">
        <pre>{error}</pre>
        <footer>
          <button type="button" id="reload">
            Reload
          </button>
          <button>Close</button>
        </footer>
      </form>
    </dialog>
  );
  const reload = dialog.querySelector("#reload") as HTMLButtonElement;
  reload.addEventListener("click", (event) => {
    location.reload();
  });

  if (!document.body) {
    document.documentElement.append(<body />);
  }
  document.body.append(dialog);

  dialog.showModal();
}

async function main() {
  try {
    if (!navigator.serviceWorker) {
      throw new DOMException(
        "navigator.serviceWorker not available",
        "NotSupportedError"
      );
    }

    if (navigator.serviceWorker.controller?.state !== "activated") {
      document.close();
      stop();
      await navigator.serviceWorker.ready;
      location.reload();
      await new Promise(() => {});
    }

    if (p) {
      stopEverything();
      const loadingIndicator = (
        <LoadingIndicator>Registring service worker...</LoadingIndicator>
      );
      document.body.append(loadingIndicator);
      await p;
    }
  } catch (error) {
    stopEverything();
    document.body.append(<FatalErrorDialog />);
  }
}
main();
