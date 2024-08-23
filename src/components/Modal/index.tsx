import React, { useContext } from "react";
import { Modal } from "antd";
import { ShowModal } from "@/contexts/Modal";
import { ModalChildren } from "@/styles/Modal";
import { ModalProps } from "@/interfaces/components/Modal";

const StyledModal = ({
  children,
  title,
  centered,
  width,
}: ModalProps) => {
  const { isModalOpen, setModalOpen } = useContext(ShowModal);

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <Modal
      title={title}
      centered={centered}
      open={isModalOpen}
      onCancel={handleCancel}
      width={width}
      footer={null}
    >
      <ModalChildren>{children}</ModalChildren>
    </Modal>
  );
};

export default StyledModal;
