import Modal from "./Modal";

import ModalHeader from "./ModalHeader";

import ModalBody from "./ModalBody";

import ModalFooter from "./ModalFooter";

import Button from "../button/Button";

const ConfirmModal = ({

    isOpen,

    onClose,

    onConfirm,

    title,

    description,

    loading = false,

}) => {

    return (

        <Modal

            isOpen={isOpen}

            onClose={onClose}

            size="sm"

        >

            <ModalHeader

                title={title}

                onClose={onClose}

            />

            <ModalBody>

                <p className="text-slate-600">

                    {description}

                </p>

            </ModalBody>

            <ModalFooter>

                <Button

                    variant="outline"

                    onClick={onClose}

                >

                    Cancel

                </Button>

                <Button

                    variant="danger"

                    loading={loading}

                    onClick={onConfirm}

                >

                    Confirm

                </Button>

            </ModalFooter>

        </Modal>

    );

};

export default ConfirmModal;