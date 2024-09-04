import { BgScreen } from "../BgScreen";

export const Modal = ({ action, show, setShow }) => {
  const onOpen = (e) => {
    e.preventFocus = true;
  };
  return (
    <BgScreen>
      <dialog
        role="alert"
        aria-live="assertive"
        aria-describedby="modal-alert"
        open={show}
        autoFocus={show}
        className="fixed p-4 rounded-xl top-1/2 -translate-y-1/2 bg-Rose-50 text-Rose-900"
      >
        <div
          className="w-full text-2xl font-red-hat font-medium text-center"
          id="modal-alert"
        >
          Are you sure?
        </div>
        <div className="flex justify-between w-full mt-3 text-Rose-900 font-medium">
          <button
            type="button"
            className="p-1 rounded-lg opacity-50 hover:bg-gray-200 hover:opacity-75 transition-all duration-100 ease-in-out"
            onClick={() => {
              action();
              setShow(false);
            }}
          >
            Clear Cart
          </button>
          <button
            type="button"
            className="p-1 rounded-lg text-red hover:bg-gray-200 transition-all duration-100 ease-in-out"
            onClick={() => {
              setShow(false);
            }}
          >
            Cancel
          </button>
        </div>
      </dialog>
    </BgScreen>
  );
};
