declare module 'react-quill' {
  import { Component } from 'react';

  interface ReactQuillProps {
    value: string;
    onChange: (value: string) => void;
    style?: React.CSSProperties;
    placeholder?: string;
    className?: string;
    formats?: string[];
    modules?: object;
    theme?: string;
  }

  class ReactQuill extends Component<ReactQuillProps> { }
  export default ReactQuill;
}
