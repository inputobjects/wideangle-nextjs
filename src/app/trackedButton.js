"use client";

export default function TrackedButton() {
  return (
    <button
      className="border-4 p-8 shadow-xl"
      onClick={() => {
        window.waa.dispatchEvent("button-click", { action: "button clicked" });
        console.info("Button clicked and tracked");
      }}
    >
      Click me to send tracking event
    </button>
  );
}
