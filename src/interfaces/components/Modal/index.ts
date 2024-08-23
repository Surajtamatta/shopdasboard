export interface ModalProps {
  children: React.ReactNode;
  title?: string;
  footer?: React.ReactNode | null;
  centered?: boolean;
  onOk?: () => void;
  width?: string | number;
  onCancel?:()=>void
  closable?:boolean
}
