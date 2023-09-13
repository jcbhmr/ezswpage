const originalRegister = navigator.serviceWorker.register;
navigator.serviceWorker.register = function (
  this: ServiceWorkerContainer,
  scriptURL_: string | URL,
  options?: RegistrationOptions
) {
  const scriptURL = `${scriptURL_}`;

  const registrationP = originalRegister.call(this, scriptURL, options);

  if (
    this.controller?.scriptURL !== scriptURL ||
    this.controller?.state !== "activated"
  ) {
    document.close();
    stop();
    this.addEventListener("controllerchange", (event) => {
      location.reload();
    });
  }

  return registrationP;
};
