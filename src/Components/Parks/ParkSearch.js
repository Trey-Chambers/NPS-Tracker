export const ParkSearch = ({ setterFunction }) => {
  //setterFunction is the key value
  return (
    <div>
      <input
        onChange={(changeEvent) => {
          setterFunction(changeEvent.target.value);
        }}
        type="text"
        placeholder="Enter search Terms"
      />
    </div>
  );
};
