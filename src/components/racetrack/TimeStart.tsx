const TimeStart = ({timer, raceTimer}) => {
  return (
    <div className="flex justify-between  mb-8">
      <div className="">
        <h1 style={{ fontSize: '19.2px' }} className=" font-medium ">
          {timer > 0
            ? 'The race is about to start!'
            : timer === 0 && raceTimer > 0
            ? 'Go'
            : raceTimer === 0
            ? 'The race has ended'
            : ''}
        </h1>
      </div>
      <div className="">
        {timer > 0 ? (
          <p>{`${timer} seconds left`}</p>
        ) : (
          <p>
            {timer === 0
              ? `${Math.floor(raceTimer / 60)}:${raceTimer % 60} left`
              : ''}
          </p>
        )}
      </div>
    </div>
  );
};

export default TimeStart;
