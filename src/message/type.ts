export type MessageType = 'info';

export interface MessageItemProps {
  text: string;
  type: MessageType;
}

export interface Notice extends MessageItemProps {
  key: string;
}
