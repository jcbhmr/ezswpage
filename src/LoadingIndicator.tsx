// @jsxImportSource jsx-dom
// https://cssloaders.github.io/

let appended = false;
function LoadingIndicator({ children }: any) {
  if (!appended) {
    if (!document.head) {
      document.documentElement.prepend(<head />);
    }

    const css = `
      .loader {
        width: 48px;
        height: 48px;
        border: 5px solid #FFF;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
      }

      @keyframes rotation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `;
    document.head.append(<style>{css}</style>);
    appended = true;
  }

  return (
    <div>
      <div>
        <span class="loader"></span>
      </div>
      {children}
    </div>
  );
}

export default LoadingSpinner;
