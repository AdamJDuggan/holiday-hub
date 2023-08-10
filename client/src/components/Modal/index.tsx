// React
import { useRef, useState } from "react";
// 3rd party
import classnames from "classnames";
// Components
import Button from "../Button";

interface Props {
  title: string;
  message: string;
  onCancel: {
    label: string;
    onClick(): any;
  };
  onConfirm: {
    label: string;
    onClick(): any;
  };
  className: string;
}

export default function Modal(props: Props) {
  const classes = classnames(
    props.className,
    "py-4 px-6 rounded shadow-xl min-w-[300px] max-w-[600px] space-y-8"
  );

  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    dialogRef?.current?.showModal();
  };

  const closeModal = () => {
    dialogRef?.current?.close();
  };

  const [pending, setPending] = useState(false);

  const onSubmit = async () => {
    setPending(true);
    await props.onConfirm.onClick().then(() => closeModal());
    setPending(false);
  };

  const ModalComponent = () => (
    <dialog id="test" className={classes} ref={dialogRef}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <div className="flex space-x-3 justify-end">
        <Button
          label={props.onCancel.label}
          kind="secondary"
          className="inline"
          onClick={closeModal}
        />
        <Button 
          label={props.onConfirm.label}
          onClick={onSubmit}
          kind="primary"
          pending={pending}
        />
      </div>
    </dialog>
  );

  return { ModalComponent, openModal, closeModal };
}
