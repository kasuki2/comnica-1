export default function Logo() {
  return (
    <div style={{width: "30px", height: "30px" }} >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{stroke: "var(--green-3)"}}
      >
        <path
          d="
        M 50,10
        A 40,40 0 1,1 50,90
        A 40,40 0 1,1 50,10
        M 50,30
        A 20,20 0 1,0 50,70
        A 20,20 0 1,0 50,30
    "
          fill="none"
          
          stroke-width="10"
        />
      </svg>
    </div>
  );
}
