import { useSignal } from "@preact/signals";

interface AlertProps {
  message: string;
}

export default function Alert({ message }: AlertProps) {
  const visibility = useSignal(true);

  if (!visibility.value) return null;

  return (
    <div
      role="alert"
      class="alert absolute right-0 top-0 z-20 max-w-screen bg-base-300 text-base-content m-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="stroke-info h-6 w-6 shrink-0"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        >
        </path>
      </svg>
      <span>{message}</span>
      <button
        type="button"
        onClick={() => visibility.value = false}
        class="btn btn-circle"
      >
        X
      </button>
    </div>
  );
}
