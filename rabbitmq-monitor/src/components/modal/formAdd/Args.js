/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import ExplainIcon from "./ExplainIcon";

const Args = ({ args, setArgs }) => {

  const ref = useRef();

  useEffect(() => {
    const handleTabKeyDown = (e) => {
      if(e.key === 'Tab' && !e.shiftKey) {
        e.preventDefault();
        const start = ref.current.selectionStart;
        const end = ref.current.selectionEnd;
        const value = ref.current.value;
        setArgs(value.substring(0, start) + '\t' + value.substring(end));
        ref.current.selectionStart = start + 1;
        ref.current.selectionEnd = start + 1;
      }
    }
      ref.current.addEventListener('keydown', handleTabKeyDown);
  }, []);
  return (
    <div className="form-add-row">
      <label className="form-add-label">Arguments <ExplainIcon title='Input type JSON' /></label>
      <textarea className='form-add-textarea' ref={ref} rows={3} value={args} onChange={e => setArgs(e.target.value)}></textarea>
    </div>
  );
}

export default Args;