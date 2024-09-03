import { BgScreen } from "../BgScreen";

export const Modal = ({ action, show, setShow }) => {
  return (
    <BgScreen>
      <dialog
        open={show}
        className="fixed p-4 rounded-xl top-1/2 -translate-y-1/2  bg-Rose-50 text-Rose-900"
      >
        <div className="w-full text-2xl font-red-hat font-medium text-center">
          Are you sure?
        </div>
        <div className="flex justify-between w-full mt-3 text-Rose-900 font-medium">
          <button
            className="p-1 rounded-lg opacity-50 hover:bg-gray-200 hover:opacity-75 transition-all duration-100 ease-in-out"
            onClick={() => {
              action();
              setShow(false);
            }}
          >
            Clear Cart
          </button>
          <button
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
