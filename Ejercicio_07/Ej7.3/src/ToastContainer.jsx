import ToastItem from "./ToastItem";

export default function ToastContainer({ errors, onClose }) {
  return (
    <div>
      {errors.map(error => (
        <ToastItem
          key={error.id}
          error={error}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
