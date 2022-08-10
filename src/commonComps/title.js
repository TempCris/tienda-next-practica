export default function Title({ children }) {
  return (
    <div className="Home">
      <h1>
        {children}
        <style jsx>
          {`
            h1 {
              margin: 0;
              font-size: 3rem;
              text-align: center;
            }
          `}
        </style>
      </h1>
    </div>
  );
}
