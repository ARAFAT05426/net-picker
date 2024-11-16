declare module 'react-quill' {
  import { Component } from 'react';

  interface ReactQuillProps {
    value: string;
    onChange: (value: string) => void;
    style?: CSSProperties;
    placeholder:string;
    className?: string;
    formats?: string[];
    modules?: unknown;
    theme?: string;
  }

  class ReactQuill extends Component<ReactQuillProps> {}
  export default ReactQuill;
}
