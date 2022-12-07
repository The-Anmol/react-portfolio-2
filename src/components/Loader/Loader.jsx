export default function Loader({ fullScreen }) {
  return (
    <div
      className={`${
        fullScreen ? "h-screen w-screen  " : " "
      } flex flex-col items-center justify-center `}
    >
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
