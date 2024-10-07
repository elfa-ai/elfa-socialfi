import React from "react";

type SnackbarProps = { text: string; type: "danger" };

const Snackbar = ({ text, type = "danger" }: SnackbarProps) => {
  return text ? (
    <div className="snackbar-wrapper">
      <div className={`alert alert-${type}`} role="alert">
        {text}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Snackbar;

// .snackbar-wrapper {
//   bottom: 2vh;
//   z-index: 1299999;
//   left: 50%;
//   transform: translateX(-50%);
//   position: fixed;
//   .alert {
//     transition: 2s;
//     &.alert-success {
//       color: var(--success-color);
//       border: 2px solid var(--success-color);
//     }
//     &.alert-danger {
//       color: var(--danger-color);
//       border: 2px solid var(--danger-color);
//     }
//   }
// }
