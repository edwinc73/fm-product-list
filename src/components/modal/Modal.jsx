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
            className="py-1 rounded-lg"
            onClick={() => {
              action();
              setShow(false);
            }}
          >
            Clear Cart
          </button>
          <button
            className="py-1 rounded-lg "
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
