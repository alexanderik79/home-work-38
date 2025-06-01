
import './Input.css';

export default function Input({ placeholder, onChange }) {
  return (
    <input
      className="custom-input"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
