const LostIcon = ({ navigation }) => {
  return (
    <button onClick={() => navigation("/addlostpet")}>
      <svg
        width="150"
        height="150"
        viewBox="0 0 276 238"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M150.5 150H125.5V87.5H150.5M150.5 200H125.5V175H150.5M0.5 237.5H275.5L138 0L0.5 237.5Z"
          fill="#FD678D"
        />
      </svg>
      Lost Pet
    </button>
  );
};

export default LostIcon;
