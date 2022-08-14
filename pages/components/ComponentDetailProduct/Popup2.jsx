import * as React from "react";
import { DialogMain } from "./PopupContact";

export default function AlertDialogSlide2() {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setOpen(() => true);
    }, 3000);
  }, []);
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <DialogMain open={open} handleClose={handleClose} />
    </div>
  );
}
