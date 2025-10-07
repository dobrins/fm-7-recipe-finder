import { useEffect, useId, useRef, useState } from "react";

type DropdownProps = {
  label: string;
  labelShort: string;
  options: number[];
  active: number | null; // controlled value
  onSelect: (value: number | null) => void;
};

export default function Dropdown({
  label,
  labelShort,
  options,
  active,
  onSelect,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const group = useId();

  const select = (v: number | null) => {
    onSelect(v);
    setIsOpen(false);
  };

  // close on outside click
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setIsOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div
      className="dropdown"
      ref={ref}>
      <button
        type="button"
        className="dropdown__btn"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((o) => !o)}>
        {active === null ? label : `${labelShort} ${active} minutes`}
        <div
          className={`dropdown__icon ${isOpen ? "dropdown__icon--open" : ""}`}
        />
      </button>

      {isOpen && (
        <ul
          className="dropdown__menu"
          role="listbox"
          aria-label={label}>
          {options.map((option) => (
            <li key={option}>
              <label
                htmlFor={`min-${option}`}
                className="dropdown__item">
                <input
                  type="radio"
                  id={`min-${option}`}
                  name={`m-${group}`}
                  checked={active === option}
                  onChange={() => select(option)}
                />
                {option} minutes
              </label>
            </li>
          ))}
          <li>
            <label
              className="dropdown__item"
              onClick={() => select(null)}>
              Clear
            </label>
          </li>
        </ul>
      )}
    </div>
  );
}
