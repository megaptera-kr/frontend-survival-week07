type RouteBtnProps = {
  children: React.ReactNode;
  onClick: () => void;
}

function RouteBtn({ children, onClick }: RouteBtnProps) {
  return (
    <button type="button" onClick={() => onClick()}>
      {children}
    </button>
  );
}

export default RouteBtn;
