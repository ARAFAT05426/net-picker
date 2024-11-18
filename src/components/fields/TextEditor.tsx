import { useRef } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ value, onChange }) => {
  const quillRef = useRef<ReactQuill | null>(null);

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline'],
      ['link', 'blockquote'],
      [{ 'align': [] }],
      [{ 'color': [] }],
    ],
  };

  const formats = [
    'header', 'font', 'bold', 'italic', 'underline', 'list', 'ordered', 'bullet',
    'link', 'align', 'color', 'blockquote', 'code-block'
  ];

  return (
    <ReactQuill
      ref={quillRef}
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
      theme="snow"
      placeholder="Write your blog content here..."
      style={{ height: '65vh' }}
      className="h-full text-sm rounded-md pb-10"
    />
  );
};

export default TextEditor;
